#!/usr/bin/env python3
"""
Gera os arquivos JSON estáticos otimizados em data/ a partir da PokéAPI GraphQL v1beta2.
Uso:
    python scripts/build_data.py
Não requer dependências externas (usa apenas biblioteca padrão do Python 3).
"""

from __future__ import annotations

import gzip
import json
import re
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

GRAPHQL_URL = "https://graphql.pokeapi.co/v1beta2"
ROOT_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT_DIR / "data"

STAT_ORDER = [
    "hp",
    "attack",
    "defense",
    "special-attack",
    "special-defense",
    "speed",
]

STANDARD_TYPES = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
]


def gql(query: str, retries: int = 4) -> dict:
    payload = json.dumps({"query": query}).encode("utf-8")
    req = urllib.request.Request(
        GRAPHQL_URL,
        data=payload,
        headers={
            "Content-Type": "application/json",
            "User-Agent": "Dexke-Static-Builder/1.0",
        },
        method="POST",
    )
    last_err = None
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req, timeout=60) as resp:
                data = json.loads(resp.read().decode("utf-8"))
            if "errors" in data:
                raise RuntimeError(f"GraphQL error: {data['errors']}")
            return data["data"]
        except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError, RuntimeError) as err:
            last_err = err
            wait = 2 ** attempt
            print(f"  [retry {attempt + 1}/{retries}] {err} — aguardando {wait}s...")
            time.sleep(wait)
    raise RuntimeError(f"Falha ao consultar GraphQL após {retries} tentativas: {last_err}")


def clean_text(text: str | None) -> str:
    if not text:
        return ""
    cleaned = re.sub(r"[\n\f\r\x0c]+", " ", text)
    cleaned = re.sub(r"\s+", " ", cleaned)
    return cleaned.strip()


def pick_texts(entries: list[dict], field: str = "flavor_text") -> dict[str, str]:
    en_val = ""
    es_val = ""
    for e in entries or []:
        lang = e.get("language_id")
        txt = clean_text(e.get(field))
        if not txt:
            continue
        if lang == 9 and not en_val:
            en_val = txt
        elif lang == 7 and not es_val:
            es_val = txt
        if en_val and es_val:
            break
    out = {}
    if en_val:
        out["en"] = en_val
    if es_val:
        out["es"] = es_val
    return out


def fetch_types() -> dict[str, dict[str, list[str]]]:
    print("1/7 Baixando matriz de eficácia de tipos...")
    data = gql(
        """{
            typeefficacy(where: {damage_type_id: {_lte: 18}, target_type_id: {_lte: 18}}) {
                damage_factor
                type { name }
                TypeByTargetTypeId { name }
            }
        }"""
    )
    types_map: dict[str, dict[str, list[str]]] = {
        tp: {"d": [], "h": [], "n": []} for tp in STANDARD_TYPES
    }
    for row in data["typeefficacy"]:
        atk = row["type"]["name"]
        target = row["TypeByTargetTypeId"]["name"]
        factor = row["damage_factor"]
        if target not in types_map or atk not in types_map:
            continue
        if factor == 200:
            types_map[target]["d"].append(atk)
        elif factor == 50:
            types_map[target]["h"].append(atk)
        elif factor == 0:
            types_map[target]["n"].append(atk)

    assert "electric" in types_map["ground"]["n"], "Sanidade falhou: Ground deve ser imune a Electric"
    assert "ground" not in types_map["electric"]["n"], "Sanidade falhou: Electric não é imune a Ground"
    return types_map


def parse_json_field(val):
    if isinstance(val, str):
        try:
            return json.loads(val)
        except json.JSONDecodeError:
            return {}
    return val if isinstance(val, dict) else {}


def compute_media_flags(poke_row: dict) -> int:
    flags = 0
    sprites_list = poke_row.get("pokemonsprites") or []
    if sprites_list:
        sp = parse_json_field(sprites_list[0].get("sprites"))
        other = sp.get("other") or {}
        sd = other.get("showdown") or {}
        art = other.get("official-artwork") or {}
        if sd.get("front_default"):
            flags |= 1
        if sd.get("back_default"):
            flags |= 2
        if art.get("front_shiny"):
            flags |= 4
        if art.get("front_default"):
            flags |= 8
        if sd.get("front_shiny"):
            flags |= 64
    cries_list = poke_row.get("pokemoncries") or []
    if cries_list:
        cr = parse_json_field(cries_list[0].get("cries"))
        if cr.get("latest"):
            flags |= 16
        if cr.get("legacy"):
            flags |= 32
    return flags


def fetch_pokemon() -> list[dict]:
    print("2/7 Baixando Pokémon (catálogo, stats, tipos, habilidades, flags de mídia)...")
    all_rows = []
    offset = 0
    batch = 300
    while True:
        data = gql(
            f"""{{
                pokemon(limit: {batch}, offset: {offset}, order_by: {{id: asc}}) {{
                    id name height weight pokemon_species_id
                    pokemontypes(order_by: {{slot: asc}}) {{ slot type {{ name }} }}
                    pokemonstats(order_by: {{stat_id: asc}}) {{ base_stat stat {{ name }} }}
                    pokemonabilities(order_by: {{slot: asc}}) {{ ability {{ name }} }}
                    pokemonsprites {{ sprites }}
                    pokemoncries {{ cries }}
                }}
            }}"""
        )
        rows = data["pokemon"]
        if not rows:
            break
        all_rows.extend(rows)
        offset += len(rows)
        print(f"   Pokémon carregados: {len(all_rows)}")
        if len(rows) < batch:
            break

    compact = []
    for row in all_rows:
        stats_by_name = {
            st["stat"]["name"]: st["base_stat"]
            for st in (row.get("pokemonstats") or [])
            if st.get("stat")
        }
        stats_arr = [stats_by_name.get(sn, 0) for sn in STAT_ORDER]
        types_arr = [
            pt["type"]["name"]
            for pt in (row.get("pokemontypes") or [])
            if pt.get("type")
        ]
        abils_arr: list[str] = []
        for pa in row.get("pokemonabilities") or []:
            ab_name = pa["ability"]["name"] if pa.get("ability") else ""
            if ab_name and ab_name not in abils_arr:
                abils_arr.append(ab_name)

        compact.append(
            {
                "i": row["id"],
                "n": row["name"],
                "t": types_arr,
                "s": stats_arr,
                "h": row.get("height") or 0,
                "w": row.get("weight") or 0,
                "sp": row.get("pokemon_species_id") or row["id"],
                "a": abils_arr,
                "f": compute_media_flags(row),
            }
        )
    return compact


def fetch_moves() -> list[dict]:
    print("3/7 Baixando Moves (golpes, poder, precisão, meta e descrições)...")
    all_rows = []
    offset = 0
    batch = 500
    while True:
        data = gql(
            f"""{{
                move(limit: {batch}, offset: {offset}, order_by: {{id: asc}}) {{
                    id name power accuracy pp priority
                    type {{ name }}
                    movedamageclass {{ name }}
                    movemeta {{ ailment_chance movemetaailment {{ name }} }}
                    moveflavortexts(where: {{language_id: {{_in: [7, 9]}}}}, order_by: {{version_group_id: desc}}) {{
                        language_id flavor_text
                    }}
                }}
            }}"""
        )
        rows = data["move"]
        if not rows:
            break
        all_rows.extend(rows)
        offset += len(rows)
        print(f"   Moves carregados: {len(all_rows)}")
        if len(rows) < batch:
            break

    compact = []
    for row in all_rows:
        texts = pick_texts(row.get("moveflavortexts") or [], "flavor_text")
        meta = (row.get("movemeta") or [{}])[0] if row.get("movemeta") else {}
        ailment = (meta.get("movemetaailment") or {}).get("name") or "none"
        ail_chance = meta.get("ailment_chance") or 0

        entry = {
            "i": row["id"],
            "n": row["name"],
            "t": (row.get("type") or {}).get("name") or "normal",
            "c": (row.get("movedamageclass") or {}).get("name") or "status",
            "p": row.get("power") or 0,
            "a": row.get("accuracy") or 0,
            "pp": row.get("pp") or 0,
            "pr": row.get("priority") or 0,
        }
        if ailment != "none":
            entry["al"] = ailment
            if ail_chance:
                entry["ac"] = ail_chance
        if texts.get("en"):
            entry["en"] = texts["en"]
        if texts.get("es"):
            entry["es"] = texts["es"]
        compact.append(entry)
    return compact


def fetch_abilities() -> tuple[list[str], dict[str, dict[str, str]]]:
    print("4/7 Baixando Habilidades...")
    data = gql(
        """{
            ability(order_by: {id: asc}) {
                id name
                abilityflavortexts(where: {language_id: {_in: [7, 9]}}, order_by: {version_group_id: desc}) {
                    language_id flavor_text
                }
                abilityeffecttexts(where: {language_id: {_in: [7, 9]}}) {
                    language_id short_effect
                }
            }
        }"""
    )
    names: list[str] = []
    details: dict[str, dict[str, str]] = {}
    for row in data["ability"]:
        name = row["name"]
        names.append(name)
        flav = pick_texts(row.get("abilityflavortexts") or [], "flavor_text")
        eff = pick_texts(row.get("abilityeffecttexts") or [], "short_effect")
        en_txt = flav.get("en") or eff.get("en") or ""
        es_txt = flav.get("es") or eff.get("es") or ""
        rec = {}
        if en_txt:
            rec["en"] = en_txt
        if es_txt:
            rec["es"] = es_txt
        details[name] = rec
    print(f"   Habilidades carregadas: {len(names)}")
    return names, details


def fetch_items() -> tuple[list[str], dict[str, dict]]:
    print("5/7 Baixando Itens...")
    all_rows = []
    offset = 0
    batch = 1000
    while True:
        data = gql(
            f"""{{
                item(limit: {batch}, offset: {offset}, order_by: {{id: asc}}) {{
                    id name
                    itemcategory {{ name }}
                    itemflavortexts(where: {{language_id: {{_in: [7, 9]}},}}, order_by: {{version_group_id: desc}}) {{
                        language_id flavor_text
                    }}
                    itemeffecttexts(where: {{language_id: {{_in: [7, 9]}}}}) {{
                        language_id short_effect
                    }}
                    pokemonitems(distinct_on: [pokemon_id], limit: 8) {{
                        pokemon {{ name }}
                    }}
                }}
            }}"""
        )
        rows = data["item"]
        if not rows:
            break
        all_rows.extend(rows)
        offset += len(rows)
        print(f"   Itens carregados: {len(all_rows)}")
        if len(rows) < batch:
            break

    names: list[str] = []
    details: dict[str, dict] = {}
    for row in all_rows:
        name = row["name"]
        names.append(name)
        flav = pick_texts(row.get("itemflavortexts") or [], "flavor_text")
        eff = pick_texts(row.get("itemeffecttexts") or [], "short_effect")
        cat = (row.get("itemcategory") or {}).get("name") or ""
        held = [
            pi["pokemon"]["name"]
            for pi in (row.get("pokemonitems") or [])
            if pi.get("pokemon")
        ]
        en_txt = eff.get("en") or flav.get("en") or ""
        es_txt = flav.get("es") or eff.get("es") or ""
        rec: dict = {}
        if cat:
            rec["c"] = cat
        if en_txt:
            rec["en"] = en_txt
        if es_txt:
            rec["es"] = es_txt
        if held:
            rec["h"] = held
        details[name] = rec
    return names, details


def fetch_species_and_chains() -> dict:
    print("6/7 Baixando Espécies e Cadeias Evolutivas...")
    species_map: dict[str, dict] = {}
    offset = 0
    batch = 400
    while True:
        data = gql(
            f"""{{
                pokemonspecies(limit: {batch}, offset: {offset}, order_by: {{id: asc}}) {{
                    id name generation_id is_legendary is_mythical
                    capture_rate base_happiness gender_rate evolution_chain_id
                    pokemonspeciesnames(where: {{language_id: {{_in: [7, 9]}}}}) {{
                        language_id genus
                    }}
                    pokemonspeciesflavortexts(where: {{language_id: {{_in: [7, 9]}},}}, order_by: {{version_id: desc}}) {{
                        language_id flavor_text
                    }}
                    pokemonegggroups {{ egggroup {{ name }} }}
                    pokemons(order_by: {{id: asc}}) {{ id name is_default }}
                }}
            }}"""
        )
        rows = data["pokemonspecies"]
        if not rows:
            break
        for row in rows:
            genus = pick_texts(row.get("pokemonspeciesnames") or [], "genus")
            flav = pick_texts(row.get("pokemonspeciesflavortexts") or [], "flavor_text")
            eggs = [
                eg["egggroup"]["name"]
                for eg in (row.get("pokemonegggroups") or [])
                if eg.get("egggroup")
            ]
            varieties = [
                [pk["id"], pk["name"], 1 if pk.get("is_default") else 0]
                for pk in (row.get("pokemons") or [])
            ]
            species_map[str(row["id"])] = {
                "n": row["name"],
                "g": row.get("generation_id") or 1,
                "l": 1 if row.get("is_legendary") else 0,
                "m": 1 if row.get("is_mythical") else 0,
                "cr": row.get("capture_rate") if row.get("capture_rate") is not None else 0,
                "bh": row.get("base_happiness") if row.get("base_happiness") is not None else 0,
                "gr": row.get("gender_rate") if row.get("gender_rate") is not None else -1,
                "eg": eggs,
                "gn": genus,
                "fl": flav,
                "ec": row.get("evolution_chain_id"),
                "v": varieties,
            }
        offset += len(rows)
        print(f"   Espécies carregadas: {len(species_map)}")
        if len(rows) < batch:
            break

    chains_map: dict[str, list[dict]] = {}
    offset = 0
    batch = 300
    while True:
        data = gql(
            f"""{{
                evolutionchain(limit: {batch}, offset: {offset}, order_by: {{id: asc}}) {{
                    id
                    pokemonspecies(order_by: {{id: asc}}) {{
                        id name evolves_from_species_id
                        pokemonevolutions(limit: 1, order_by: {{id: asc}}) {{
                            min_level min_happiness
                            evolutiontrigger {{ name }}
                            item {{ name }}
                            ItemByHeldItemId {{ name }}
                            move {{ name }}
                        }}
                    }}
                }}
            }}"""
        )
        rows = data["evolutionchain"]
        if not rows:
            break
        for ch in rows:
            nodes = []
            for sp in ch.get("pokemonspecies") or []:
                evo_list = sp.get("pokemonevolutions") or []
                det = None
                if evo_list:
                    e0 = evo_list[0]
                    det = {}
                    if e0.get("evolutiontrigger"):
                        det["tr"] = e0["evolutiontrigger"]["name"]
                    if e0.get("min_level"):
                        det["lvl"] = e0["min_level"]
                    if e0.get("min_happiness"):
                        det["hap"] = e0["min_happiness"]
                    if e0.get("item"):
                        det["it"] = e0["item"]["name"]
                    if e0.get("ItemByHeldItemId"):
                        det["hit"] = e0["ItemByHeldItemId"]["name"]
                    if e0.get("move"):
                        det["mv"] = e0["move"]["name"]
                node = {
                    "id": sp["id"],
                    "n": sp["name"],
                    "from": sp.get("evolves_from_species_id"),
                }
                if det:
                    node["d"] = det
                nodes.append(node)
            chains_map[str(ch["id"])] = nodes
        offset += len(rows)
        print(f"   Cadeias carregadas: {len(chains_map)}")
        if len(rows) < batch:
            break

    return {"species": species_map, "chains": chains_map}


def fetch_learnsets(pokemon_ids: list[int], moves_list: list[dict]) -> dict:
    print("7/7 Baixando Learnsets (golpes por Pokémon) e Encontros Selvagens...")
    move_id_to_name = {str(m["i"]): m["n"] for m in moves_list}
    learnsets_by_poke: dict[str, list[list[int]]] = {}

    batch = 50
    for idx in range(0, len(pokemon_ids), batch):
        chunk = pokemon_ids[idx : idx + batch]
        ids_str = ",".join(str(x) for x in chunk)
        data = gql(
            f"""{{
                pokemonmove(
                    where: {{pokemon_id: {{_in: [{ids_str}]}}}},
                    distinct_on: [pokemon_id, move_id, move_learn_method_id],
                    order_by: [
                        {{pokemon_id: asc}},
                        {{move_id: asc}},
                        {{move_learn_method_id: asc}},
                        {{version_group_id: desc}}
                    ]
                ) {{
                    pokemon_id move_id move_learn_method_id level
                }}
            }}"""
        )
        for row in data["pokemonmove"]:
            pid = str(row["pokemon_id"])
            if pid not in learnsets_by_poke:
                learnsets_by_poke[pid] = []
            learnsets_by_poke[pid].append(
                [row["move_id"], row["move_learn_method_id"], row["level"] or 0]
            )
        if (idx // batch + 1) % 6 == 0 or idx + batch >= len(pokemon_ids):
            print(f"   Learnsets: {min(idx + batch, len(pokemon_ids))}/{len(pokemon_ids)} Pokémon")

    return {"m": move_id_to_name, "p": learnsets_by_poke}


def clean_area_name(raw: str) -> str:
    txt = re.sub(r"-area$", "", raw, flags=re.IGNORECASE).replace("-", " ")
    return " ".join(w[:1].upper() + w[1:] for w in txt.split(" ") if w)


def fetch_encounters(pokemon_ids: list[int]) -> dict[str, dict[str, list[str]]]:
    enc_by_poke: dict[str, dict[str, set[str]]] = {}
    batch = 100
    for idx in range(0, len(pokemon_ids), batch):
        chunk = pokemon_ids[idx : idx + batch]
        ids_str = ",".join(str(x) for x in chunk)
        data = gql(
            f"""{{
                encounter(
                    where: {{pokemon_id: {{_in: [{ids_str}]}}}},
                    distinct_on: [pokemon_id, version_id, location_area_id]
                ) {{
                    pokemon_id
                    version {{ name }}
                    locationarea {{ name }}
                }}
            }}"""
        )
        for row in data["encounter"]:
            pid = str(row["pokemon_id"])
            ver = (row.get("version") or {}).get("name")
            area = (row.get("locationarea") or {}).get("name")
            if not ver or not area:
                continue
            enc_by_poke.setdefault(pid, {}).setdefault(ver, set()).add(clean_area_name(area))
        if (idx // batch + 1) % 5 == 0 or idx + batch >= len(pokemon_ids):
            print(f"   Encontros: {min(idx + batch, len(pokemon_ids))}/{len(pokemon_ids)} Pokémon")

    out: dict[str, dict[str, list[str]]] = {}
    for pid, vers in enc_by_poke.items():
        out[pid] = {v: sorted(areas) for v, areas in vers.items()}
    return out


def write_json(path: Path, obj) -> tuple[int, int]:
    raw_bytes = json.dumps(obj, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
    path.write_bytes(raw_bytes)
    gz_bytes = gzip.compress(raw_bytes, compresslevel=9)
    return len(raw_bytes), len(gz_bytes)


def main() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    t0 = time.time()

    types_map = fetch_types()
    pokemon_list = fetch_pokemon()
    moves_list = fetch_moves()
    ability_names, abilities_map = fetch_abilities()
    item_names, items_map = fetch_items()
    species_bundle = fetch_species_and_chains()

    pokemon_ids = [p["i"] for p in pokemon_list]
    learnsets_bundle = fetch_learnsets(pokemon_ids, moves_list)
    encounters_map = fetch_encounters(pokemon_ids)

    core_bundle = {
        "generatedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "types": types_map,
        "pokemon": pokemon_list,
        "abilities": ability_names,
        "items": item_names,
    }

    outputs = [
        ("core.json", core_bundle),
        ("moves.json", {"list": moves_list}),
        ("abilities.json", abilities_map),
        ("items.json", items_map),
        ("species.json", species_bundle),
        ("learnsets.json", learnsets_bundle),
        ("encounters.json", encounters_map),
    ]

    print("\nResumo dos arquivos gerados em data/:")
    total_raw = 0
    total_gz = 0
    for fname, payload in outputs:
        raw_sz, gz_sz = write_json(DATA_DIR / fname, payload)
        total_raw += raw_sz
        total_gz += gz_sz
        print(f"  - {fname:16s} {raw_sz / 1024:8.1f} KB (gzip: {gz_sz / 1024:6.1f} KB)")

    elapsed = time.time() - t0
    print(f"Total: {total_raw / (1024 * 1024):.2f} MB (gzip: {total_gz / 1024:.1f} KB) em {elapsed:.1f}s")


if __name__ == "__main__":
    main()
