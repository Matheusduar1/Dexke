// ============================================================================
// DEXKE FEATURES MODULE (Hybrid Local Data, Dark Mode, UX, Comparador, Set Editor & 6v6)
// ============================================================================

// --- 1. EXTENSÃO DO DICIONÁRIO i18n ---
(function registrarTraducoesExtras() {
    const extras = {
        pt_BR: {
            filter_megas: "🧬 Mega Evoluções",
            filter_regional: "🌍 Formas Regionais",
            filter_ub_paradox: "🔮 Ultra Beasts & Paradoxos",
            sort_id_asc: "🔢 Nº (Menor ➔ Maior)",
            sort_id_desc: "🔢 Nº (Maior ➔ Menor)",
            sort_name_asc: "🔤 Nome (A ➔ Z)",
            sort_name_desc: "🔤 Nome (Z ➔ A)",
            sort_bst_desc: "📊 Maior Total de Stats (BST)",
            sort_bst_asc: "📊 Menor Total de Stats (BST)",
            btn_compare: "⚖️ Comparar",
            btn_compare_short: "⚖️ Comparar",
            all_classes: "Todas as Classes",
            class_physical_opt: "⚔️ Físico (Physical)",
            class_special_opt: "🔮 Especial (Special)",
            class_status_opt: "🛡️ Status",
            sort_power_desc: "💥 Maior Poder",
            sort_acc_desc: "🎯 Maior Precisão",
            all_item_cats: "Todas as Categorias",
            item_cat_comp: "⚔️ Competitivos & Batalha",
            item_cat_balls: "🔴 Poké Balls",
            item_cat_evo: "💎 Evolução & Formas Especiais",
            item_cat_megaz: "🧬 Mega Stones & Cristais Z",
            item_cat_berries: "🍒 Berries (Bagas)",
            item_cat_tms: "💿 Máquinas (TM / TR)",
            dual_ability_label: "Habilidade Defensiva:",
            dual_ability_none: "Nenhuma (Padrão)",
            dual_matching_title: "Pokémon com esta Tipagem",
            dual_matching_none: "Nenhum Pokémon encontrado exatamente com esta combinação de tipos.",
            chart_hover_hint: "Passe o mouse sobre uma célula para destacar o cruzamento Ataque × Defesa.",
            team_off_coverage: "Cobertura Ofensiva do Time",
            team_off_desc: "Baseada nos golpes de dano configurados no Set de cada Pokémon (ou nos tipos STAB caso sem golpes definidos).",
            team_off_empty: "Adicione Pokémon ao time para ver a cobertura ofensiva contra os 18 tipos.",
            team_off_uncovered: "Tipos sem resposta Super Efetiva (2x):",
            battle_mode_1v1: "⚔️ Duelo 1v1 Personalizado",
            battle_mode_6v6: "🏆 Batalha de Equipes (Times Salvos / 6v6)",
            battle_your_team: "Sua Equipe:",
            battle_cpu_team: "Equipe da Máquina (CPU):",
            battle_random_team: "🎲 Equipe Aleatória (6 Pokémon)",
            cmp_title: "⚖️ Comparador de Pokémon",
            cmp_poke_1: "Pokémon 1:",
            cmp_poke_2: "Pokémon 2:",
            cmp_height: "Altura",
            cmp_weight: "Peso",
            cmp_abilities: "Habilidades",
            cmp_stats: "Comparativo de Base Stats",
            cmp_weaknesses: "Fraquezas (2x / 4x)",
            cmp_immunities: "Imunidades (0x)",
            set_tera_label: "Tera Type:",
            set_evs_ivs_label: "EVs (0-252, Máx 510) / IVs (0-31):",
            set_save_btn: "💾 Salvar Set",
            set_ev_limit_warn: "A soma dos EVs não pode ultrapassar 510! Os valores excedentes foram ajustados.",
            species_capture: "Taxa de Captura:",
            species_gender: "Gênero:",
            species_genderless: "Sem Gênero",
            species_happiness: "Felicidade Base:",
            species_eggs: "Grupos de Ovo:",
            battle_switch_title: "Trocar Pokémon:",
            battle_forced_switch: "⚠️ Seu Pokémon foi derrotado! Escolha o próximo Pokémon para entrar em campo:",
            battle_team_empty_warn: "A equipe selecionada está vazia! Adicione Pokémon na aba Times ou escolha Equipe Aleatória."
        },
        en_US: {
            filter_megas: "🧬 Mega Evolutions",
            filter_regional: "🌍 Regional Forms",
            filter_ub_paradox: "🔮 Ultra Beasts & Paradox",
            sort_id_asc: "🔢 No. (Low ➔ High)",
            sort_id_desc: "🔢 No. (High ➔ Low)",
            sort_name_asc: "🔤 Name (A ➔ Z)",
            sort_name_desc: "🔤 Name (Z ➔ A)",
            sort_bst_desc: "📊 Highest Base Stat Total (BST)",
            sort_bst_asc: "📊 Lowest Base Stat Total (BST)",
            btn_compare: "⚖️ Compare",
            btn_compare_short: "⚖️ Compare",
            all_classes: "All Classes",
            class_physical_opt: "⚔️ Physical",
            class_special_opt: "🔮 Special",
            class_status_opt: "🛡️ Status",
            sort_power_desc: "💥 Highest Power",
            sort_acc_desc: "🎯 Highest Accuracy",
            all_item_cats: "All Categories",
            item_cat_comp: "⚔️ Competitive & Battle",
            item_cat_balls: "🔴 Poké Balls",
            item_cat_evo: "💎 Evolution & Special Forms",
            item_cat_megaz: "🧬 Mega Stones & Z-Crystals",
            item_cat_berries: "🍒 Berries",
            item_cat_tms: "💿 Machines (TM / TR)",
            dual_ability_label: "Defensive Ability:",
            dual_ability_none: "None (Default)",
            dual_matching_title: "Pokémon with this Typing",
            dual_matching_none: "No Pokémon found with this exact type combination.",
            chart_hover_hint: "Hover over a cell to highlight the Attack × Defense matchup.",
            team_off_coverage: "Team Offensive Coverage",
            team_off_desc: "Based on damaging moves configured in each Pokémon's Set (or STAB types if no moves are set).",
            team_off_empty: "Add Pokémon to your team to view offensive coverage across all 18 types.",
            team_off_uncovered: "Types without Super Effective (2x) coverage:",
            battle_mode_1v1: "⚔️ Custom 1v1 Duel",
            battle_mode_6v6: "🏆 Team Battle (Saved Teams / 6v6)",
            battle_your_team: "Your Team:",
            battle_cpu_team: "CPU Team:",
            battle_random_team: "🎲 Random Team (6 Pokémon)",
            cmp_title: "⚖️ Pokémon Comparator",
            cmp_poke_1: "Pokémon 1:",
            cmp_poke_2: "Pokémon 2:",
            cmp_height: "Height",
            cmp_weight: "Weight",
            cmp_abilities: "Abilities",
            cmp_stats: "Base Stats Comparison",
            cmp_weaknesses: "Weaknesses (2x / 4x)",
            cmp_immunities: "Immunities (0x)",
            set_tera_label: "Tera Type:",
            set_evs_ivs_label: "EVs (0-252, Max 510) / IVs (0-31):",
            set_save_btn: "💾 Save Set",
            set_ev_limit_warn: "Total EVs cannot exceed 510! Excess values were clamped.",
            species_capture: "Catch Rate:",
            species_gender: "Gender:",
            species_genderless: "Genderless",
            species_happiness: "Base Friendship:",
            species_eggs: "Egg Groups:",
            battle_switch_title: "Switch Pokémon:",
            battle_forced_switch: "⚠️ Your Pokémon fainted! Choose the next Pokémon to send out:",
            battle_team_empty_warn: "The selected team is empty! Add Pokémon in the Teams tab or select Random Team."
        },
        es_ES: {
            filter_megas: "🧬 Megaevoluciones",
            filter_regional: "🌍 Formas Regionales",
            filter_ub_paradox: "🔮 Ultraentes y Paradoja",
            sort_id_asc: "🔢 N.º (Menor ➔ Mayor)",
            sort_id_desc: "🔢 N.º (Mayor ➔ Menor)",
            sort_name_asc: "🔤 Nombre (A ➔ Z)",
            sort_name_desc: "🔤 Nombre (Z ➔ A)",
            sort_bst_desc: "📊 Mayor Total de Stats (BST)",
            sort_bst_asc: "📊 Menor Total de Stats (BST)",
            btn_compare: "⚖️ Comparar",
            btn_compare_short: "⚖️ Comparar",
            all_classes: "Todas las Clases",
            class_physical_opt: "⚔️ Físico (Physical)",
            class_special_opt: "🔮 Especial (Special)",
            class_status_opt: "🛡️ Estado (Status)",
            sort_power_desc: "💥 Mayor Poder",
            sort_acc_desc: "🎯 Mayor Precisión",
            all_item_cats: "Todas las Categorías",
            item_cat_comp: "⚔️ Competitivos y Combate",
            item_cat_balls: "🔴 Poké Balls",
            item_cat_evo: "💎 Evolución y Formas Especiales",
            item_cat_megaz: "🧬 Megapiedras y Cristales Z",
            item_cat_berries: "🍒 Bayas",
            item_cat_tms: "💿 Máquinas (MT / DT)",
            dual_ability_label: "Habilidad Defensiva:",
            dual_ability_none: "Ninguna (Por defecto)",
            dual_matching_title: "Pokémon con esta Combinación",
            dual_matching_none: "No se encontraron Pokémon con exactamente esta combinación de tipos.",
            chart_hover_hint: "Pasa el cursor sobre una celda para resaltar el cruce Ataque × Defensa.",
            team_off_coverage: "Cobertura Ofensiva del Equipo",
            team_off_desc: "Basada en los movimientos ofensivos configurados en el Set de cada Pokémon (o tipos STAB por defecto).",
            team_off_empty: "Añade Pokémon al equipo para ver la cobertura ofensiva contra los 18 tipos.",
            team_off_uncovered: "Tipos sin respuesta Super Eficaz (2x):",
            battle_mode_1v1: "⚔️ Duelo 1v1 Personalizado",
            battle_mode_6v6: "🏆 Batalla de Equipos (Equipos / 6v6)",
            battle_your_team: "Tu Equipo:",
            battle_cpu_team: "Equipo de la CPU:",
            battle_random_team: "🎲 Equipo Aleatorio (6 Pokémon)",
            cmp_title: "⚖️ Comparador de Pokémon",
            cmp_poke_1: "Pokémon 1:",
            cmp_poke_2: "Pokémon 2:",
            cmp_height: "Altura",
            cmp_weight: "Peso",
            cmp_abilities: "Habilidades",
            cmp_stats: "Comparación de Stats Base",
            cmp_weaknesses: "Debilidades (2x / 4x)",
            cmp_immunities: "Inmunidades (0x)",
            set_tera_label: "Tera Tipo:",
            set_evs_ivs_label: "EVs (0-252, Máx 510) / IVs (0-31):",
            set_save_btn: "💾 Guardar Set",
            set_ev_limit_warn: "¡La suma de EVs no puede superar 510! Los valores excedentes fueron ajustados.",
            species_capture: "Ratio de Captura:",
            species_gender: "Género:",
            species_genderless: "Sin Género",
            species_happiness: "Amistad Base:",
            species_eggs: "Grupos Huevo:",
            battle_switch_title: "Cambiar Pokémon:",
            battle_forced_switch: "⚠️ ¡Tu Pokémon cayó debilitado! Elige el siguiente Pokémon:",
            battle_team_empty_warn: "¡El equipo seleccionado está vacío! Añade Pokémon en Equipos o elige Equipo Aleatorio."
        }
    };

    if (typeof dicionario !== 'undefined') {
        Object.keys(extras).forEach(lang => {
            if (dicionario[lang]) Object.assign(dicionario[lang], extras[lang]);
        });
    }
})();

// --- 2. ESTADO GLOBAL COMPLEMENTAR E INICIALIZAÇÃO ---
window.bstMap = window.bstMap || {};
window.moveMetaMap = window.moveMetaMap || {};
const pokeFullCache = {};
let abaAtivaAntesModal = 'dexke';

const expandedBattleItems = [
    { id: 'leftovers', name: 'Leftovers (Restos - Cura 1/16 por turno)' },
    { id: 'life-orb', name: 'Life Orb (+30% Dano, -10% HP)' },
    { id: 'choice-band', name: 'Choice Band (+50% Attack Físico)' },
    { id: 'choice-specs', name: 'Choice Specs (+50% Special Attack)' },
    { id: 'choice-scarf', name: 'Choice Scarf (+50% Speed)' },
    { id: 'focus-sash', name: 'Focus Sash (Sobrevive com 1 HP se cheio)' },
    { id: 'assault-vest', name: 'Assault Vest (+50% Special Defense)' },
    { id: 'expert-belt', name: 'Expert Belt (+20% em Super Efetivo)' },
    { id: 'rocky-helmet', name: 'Rocky Helmet (Dano de recuo físico)' },
    { id: 'sitrus-berry', name: 'Sitrus Berry (Cura 25% abaixo da metade)' },
    { id: 'heavy-duty-boots', name: 'Heavy-Duty Boots (Imune a Hazards)' },
    { id: 'booster-energy', name: 'Booster Energy (+30% maior stat Paradoxo)' },
    { id: 'eviolite', name: 'Eviolite (+50% Def/SpD em não-evoluídos)' },
    { id: 'black-sludge', name: 'Black Sludge (Cura 1/16 se Poison)' },
    { id: 'flame-orb', name: 'Flame Orb (Ativa Burn — combo Guts)' },
    { id: 'clear-amulet', name: 'Clear Amulet (Bloqueia queda de stats)' },
    { id: 'covert-cloak', name: 'Covert Cloak (Bloqueia efeitos secundários)' },
    { id: 'loaded-dice', name: 'Loaded Dice (Favorece golpes multi-hit)' }
];

function inicializarExtras() {
    carregarTemaSalvo();
    try {
        const langSalvo = localStorage.getItem('dexke_lang');
        if (langSalvo && dicionario[langSalvo] && langSalvo !== idiomaAtual) {
            mudarIdioma(langSalvo, false);
        }
    } catch (e) {}

    configurarUXModais();
    aplicarRotaHash();
    window.addEventListener('hashchange', aplicarRotaHash);
}

function aoMudarIdiomaExtras() {
    const cmpModal = document.getElementById('compare-modal');
    if (cmpModal && !cmpModal.classList.contains('hidden')) {
        atualizarComparador();
    }
    const teamsAba = document.getElementById('aba-teams');
    if (teamsAba && teamsAba.classList.contains('active')) {
        gerarCoberturaOfensivaTime(timesSalvos[timeAtualIndex].filter(p => p !== null));
    }
}

// --- 3. MODO ESCURO (DARK MODE) ---
function carregarTemaSalvo() {
    let tema = 'light';
    try { tema = localStorage.getItem('dexke_theme') || 'light'; } catch (e) {}
    aplicarTema(tema);
}

function alternarTema() {
    const isDark = !document.body.classList.contains('dark-mode');
    const novo = isDark ? 'dark' : 'light';
    aplicarTema(novo);
    try { localStorage.setItem('dexke_theme', novo); } catch (e) {}
}

function aplicarTema(tema) {
    const isDark = tema === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = isDark ? '☀️' : '🌙';
}

// --- 4. METADADOS LOCAIS (BST E MOVES) ---
// Carregados diretamente via data/core.json e data/moves.json em iniciarApp() (app.js).

// --- 5. UX DE MODAIS (ESC, CLIQUE FORA E SETAS) ---
function configurarUXModais() {
    const modaisIds = ['pokemon-modal', 'move-modal', 'ability-modal', 'item-modal', 'compare-modal', 'team-set-modal'];
    modaisIds.forEach(id => {
        const modal = document.getElementById(id);
        if (!modal) return;
        modal.addEventListener('click', (e) => {
            if (e.target === modal) fecharModal(id);
        });
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            for (let i = modaisIds.length - 1; i >= 0; i--) {
                const m = document.getElementById(modaisIds[i]);
                if (m && !m.classList.contains('hidden')) {
                    e.preventDefault();
                    fecharModal(modaisIds[i]);
                    return;
                }
            }
            const sidebar = document.getElementById('sidebar');
            if (sidebar && sidebar.classList.contains('open')) {
                e.preventDefault();
                toggleSidebar();
            }
            return;
        }

        if (e.target && ['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) return;
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;

        // Não navega se modal superior (Comparador ou Set Editor) estiver aberto
        if (!document.getElementById('compare-modal')?.classList.contains('hidden')) return;
        if (!document.getElementById('team-set-modal')?.classList.contains('hidden')) return;

        const dir = e.key === 'ArrowRight' ? 1 : -1;
        if (!document.getElementById('item-modal')?.classList.contains('hidden')) {
            e.preventDefault(); navegarModal('item', dir, null);
        } else if (!document.getElementById('ability-modal')?.classList.contains('hidden')) {
            e.preventDefault(); navegarModal('ability', dir, null);
        } else if (!document.getElementById('move-modal')?.classList.contains('hidden')) {
            e.preventDefault(); navegarModal('move', dir, null);
        } else if (!document.getElementById('pokemon-modal')?.classList.contains('hidden')) {
            e.preventDefault(); navegarModal('pokemon', dir, null);
        }
    });
}

// --- 6. ROTEAMENTO POR HASH NA URL ---
function sincronizarHashAba(abaId) {
    abaAtivaAntesModal = abaId;
    const targetHash = '#' + abaId;
    if (window.location.hash !== targetHash) {
        try { history.replaceState(null, '', targetHash); } catch (e) {}
    }
}

function sincronizarHashPokemon(pokeName) {
    const targetHash = '#dex/' + pokeName;
    if (window.location.hash !== targetHash) {
        try { history.replaceState(null, '', targetHash); } catch (e) {}
    }
}

function aoFecharModalPokemon() {
    const targetHash = '#' + (abaAtivaAntesModal || 'dexke');
    if (window.location.hash.startsWith('#dex/')) {
        try { history.replaceState(null, '', targetHash); } catch (e) {}
    }
}

function aplicarRotaHash() {
    const raw = (window.location.hash || '').replace(/^#/, '');
    if (!raw) return;
    if (raw.startsWith('dex/')) {
        const pokeName = decodeURIComponent(raw.slice(4));
        if (pokeName && todosPokemon.some(p => p.name === pokeName || p.id == pokeName)) {
            if (!document.getElementById('aba-dexke')?.classList.contains('active')) {
                mudarAba(null, 'dexke');
            }
            abrirDetalhes(pokeName);
        }
        return;
    }
    const validTabs = ['dexke', 'minhadex', 'moves', 'abilities', 'items', 'natures', 'typechart', 'teams', 'battle', 'gba'];
    if (validTabs.includes(raw) && !document.getElementById(`aba-${raw}`)?.classList.contains('active')) {
        mudarAba(null, raw);
    }
}

// --- 7. CROSSHAIR INTERATIVO NA TABELA GLOBAL 18x18 ---
function configurarCrosshairTabelaTipos() {
    const container = document.getElementById('global-type-chart');
    const readout = document.getElementById('chart-hover-readout');
    if (!container) return;
    const table = container.querySelector('table');
    if (!table) return;

    const limparDestaques = () => {
        table.querySelectorAll('.chart-row-hl').forEach(el => el.classList.remove('chart-row-hl'));
        table.querySelectorAll('.chart-col-hl').forEach(el => el.classList.remove('chart-col-hl'));
        table.querySelectorAll('.chart-cell-hl').forEach(el => el.classList.remove('chart-cell-hl'));
        if (readout) readout.textContent = t('chart_hover_hint');
    };

    table.addEventListener('mouseover', (e) => {
        const td = e.target.closest('td[data-row][data-col]');
        if (!td) return;
        const r = td.getAttribute('data-row');
        const c = td.getAttribute('data-col');
        const atq = td.getAttribute('data-atq');
        const def = td.getAttribute('data-def');
        const mult = parseFloat(td.getAttribute('data-mult'));

        table.querySelectorAll('.chart-row-hl').forEach(el => el.classList.remove('chart-row-hl'));
        table.querySelectorAll('.chart-col-hl').forEach(el => el.classList.remove('chart-col-hl'));
        table.querySelectorAll('.chart-cell-hl').forEach(el => el.classList.remove('chart-cell-hl'));

        const tr = table.querySelector(`tr[data-row="${r}"]`);
        const thCol = table.querySelector(`th[data-col="${c}"]`);
        if (tr) tr.classList.add('chart-row-hl');
        if (thCol) thCol.classList.add('chart-col-hl');
        td.classList.add('chart-cell-hl');

        if (readout && atq && def) {
            readout.innerHTML = `⚔️ <strong>${escapeHTML(getTipoNome(atq))}</strong> ➔ 🛡️ <strong>${escapeHTML(getTipoNome(def))}</strong>: <span style="color:var(--primary);">${formatarMultiplicador(mult)}x</span>`;
        }
    });

    table.addEventListener('mouseleave', limparDestaques);
}

// --- 8. COMPARADOR DE POKÉMON LADO A LADO ---
async function getPokeFullData(idOuNome) {
    const cached = pokeFullCache[idOuNome];
    if (cached && cached._withMoves) return cached;
    const data = await montarPokemonCompletoLocal(idOuNome, true);
    data._withMoves = true;
    pokeFullCache[data.name] = data;
    pokeFullCache[data.id] = data;
    return data;
}

function popularSelectsComparador() {
    const s1 = document.getElementById('cmp-select-1');
    const s2 = document.getElementById('cmp-select-2');
    if (!s1 || !s2) return;
    if (s1.options.length === 0 && Array.isArray(todosPokemon) && todosPokemon.length > 0) {
        const opts = todosPokemon.map(p => `<option value="${p.name}">${p.name.replace(/-/g, ' ')}</option>`).join('');
        s1.innerHTML = opts;
        s2.innerHTML = opts;
        s1.value = 'charizard';
        s2.value = 'garchomp';
    }
}

function abrirComparador() {
    popularSelectsComparador();
    document.getElementById('compare-modal').classList.remove('hidden');
    atualizarComparador();
}

function iniciarComparacao(pokeName) {
    popularSelectsComparador();
    const s1 = document.getElementById('cmp-select-1');
    if (s1 && pokeName) s1.value = pokeName;
    document.getElementById('compare-modal').classList.remove('hidden');
    atualizarComparador();
}

function trocarPokemonsComparador() {
    const s1 = document.getElementById('cmp-select-1');
    const s2 = document.getElementById('cmp-select-2');
    if (!s1 || !s2) return;
    const tmp = s1.value;
    s1.value = s2.value;
    s2.value = tmp;
    atualizarComparador();
}

async function atualizarComparador() {
    const s1 = document.getElementById('cmp-select-1');
    const s2 = document.getElementById('cmp-select-2');
    const body = document.getElementById('compare-body');
    if (!s1 || !s2 || !body || !s1.value || !s2.value) return;

    const n1 = s1.value, n2 = s2.value;
    body.innerHTML = `<p style="grid-column:1/-1; text-align:center;"><i>${t('js_calc')}</i></p>`;

    try {
        const [p1, p2] = await Promise.all([getPokeFullData(n1), getPokeFullData(n2)]);
        if (s1.value !== n1 || s2.value !== n2) return;

        const calcularFraqImun = async (tipos) => {
            const nomes = tipos.map(tp => tp.type.name);
            const fraq = [], imun = [];
            for (const atk of Object.keys(coresTipos)) {
                const mult = await calcularMultiplicadorExato(atk, nomes);
                if (mult > 1) fraq.push({ tipo: atk, mult });
                else if (mult === 0) imun.push({ tipo: atk, mult });
            }
            return { fraq, imun };
        };

        const [def1, def2] = await Promise.all([calcularFraqImun(p1.types), calcularFraqImun(p2.types)]);

        const bst1 = p1.stats.reduce((a, b) => a + b.base_stat, 0);
        const bst2 = p2.stats.reduce((a, b) => a + b.base_stat, 0);

        const renderCard = (p, outro, bst, outroBst, defInfo) => {
            const art = (p.sprites.other && p.sprites.other['official-artwork'] && p.sprites.other['official-artwork'].front_default) || p.sprites.front_default;
            const nomeFmt = escapeHTML(p.name).replace(/-/g, ' ');
            const typesHtml = p.types.map(tp => `<span class="type-badge" style="background-color:${coresTipos[tp.type.name]}; font-size:11px; padding:3px 7px;">${escapeHTML(getTipoNome(tp.type.name))}</span>`).join('');
            const abilHtml = p.abilities.map(a => `<span class="item-cat-badge" style="font-size:10px; padding:2px 6px; margin:2px;">${escapeHTML(a.ability.name).replace(/-/g, ' ')}</span>`).join('');

            const statsHtml = p.stats.map((s, idx) => {
                const outroVal = outro.stats[idx] ? outro.stats[idx].base_stat : 0;
                const winCls = s.base_stat > outroVal ? 'cmp-stat-win' : '';
                const pct = Math.min(100, Math.round((s.base_stat / 200) * 100));
                const sLabel = escapeHTML(s.stat.name).replace('special-', 'Sp. ').replace(/-/g, ' ');
                return `<div class="stat-bar-row" style="grid-template-columns: 82px 34px 1fr;">
                    <span class="stat-bar-label">${sLabel}</span>
                    <strong class="${winCls}">${s.base_stat}</strong>
                    <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${pct}%; background-color:${s.base_stat >= outroVal ? '#22c55e' : '#94a3b8'};"></div></div>
                </div>`;
            }).join('');

            const fraqBadges = defInfo.fraq.length
                ? defInfo.fraq.map(f => `<span class="list-type-badge" style="background-color:${coresTipos[f.tipo]};">${escapeHTML(getTipoNome(f.tipo))} ${formatarMultiplicador(f.mult)}x</span>`).join('')
                : `<span>${escapeHTML(t('dual_none'))}</span>`;
            const imunBadges = defInfo.imun.length
                ? defInfo.imun.map(f => `<span class="list-type-badge" style="background-color:${coresTipos[f.tipo]};">${escapeHTML(getTipoNome(f.tipo))} 0x</span>`).join('')
                : `<span>${escapeHTML(t('dual_none'))}</span>`;

            return `<article class="cmp-card">
                <header class="cmp-header">
                    <img src="${art}" alt="${nomeFmt}">
                    <h3 style="text-transform:capitalize; border:none; margin:4px 0;">${nomeFmt} <small>#${p.id}</small></h3>
                    <div class="types" style="margin-top:4px;">${typesHtml}</div>
                </header>
                <p style="font-size:12px;"><strong>${escapeHTML(t('cmp_height'))}:</strong> ${(p.height / 10).toFixed(1)}m · <strong>${escapeHTML(t('cmp_weight'))}:</strong> ${(p.weight / 10).toFixed(1)}kg</p>
                <div style="margin:6px 0; font-size:12px;"><strong>${escapeHTML(t('cmp_abilities'))}:</strong><div style="margin-top:3px;">${abilHtml}</div></div>
                <div style="margin-top:8px;">
                    <strong style="font-size:12px;">${escapeHTML(t('cmp_stats'))}:</strong>
                    <div style="margin-top:5px;">${statsHtml}</div>
                    <p style="font-size:13px; margin-top:4px;"><strong>BST:</strong> <span class="${bst > outroBst ? 'cmp-stat-win' : ''}">${bst}</span></p>
                </div>
                <div style="margin-top:8px; font-size:12px;">
                    <strong>${escapeHTML(t('cmp_weaknesses'))}:</strong>
                    <div class="list-types" style="margin-top:4px;">${fraqBadges}</div>
                </div>
                <div style="margin-top:6px; font-size:12px;">
                    <strong>${escapeHTML(t('cmp_immunities'))}:</strong>
                    <div class="list-types" style="margin-top:4px;">${imunBadges}</div>
                </div>
            </article>`;
        };

        body.innerHTML = renderCard(p1, p2, bst1, bst2, def1) + renderCard(p2, p1, bst2, bst1, def2);
    } catch (e) {
        body.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:#c0392b;">Erro ao carregar dados para comparação.</p>`;
    }
}

// --- 9. TEAM SET EDITOR, SHOWDOWN REAL IO & COBERTURA OFENSIVA ---
let editorSetSlotIndex = null;
let editorSetPokeData = null;
const STAT_ORDER = ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'];
const SHOWDOWN_STAT_MAP = { hp: 'HP', attack: 'Atk', defense: 'Def', 'special-attack': 'SpA', 'special-defense': 'SpD', speed: 'Spe' };
const SHOWDOWN_STAT_REV = { HP: 'hp', Atk: 'attack', Def: 'defense', SpA: 'special-attack', SpD: 'special-defense', Spe: 'speed' };

async function abrirEditorSetTime(slotIndex) {
    const slot = timesSalvos[timeAtualIndex][slotIndex];
    if (!slot) return;
    editorSetSlotIndex = slotIndex;

    const modal = document.getElementById('team-set-modal');
    modal.classList.remove('hidden');
    document.getElementById('set-poke-title').textContent = `${slot.name.replace(/-/g, ' ')} — Set`;

    const p = await getPokeFullData(slot.name);
    editorSetPokeData = p;

    const abilSel = document.getElementById('set-ability');
    abilSel.innerHTML = p.abilities.map(a => `<option value="${a.ability.name}">${a.ability.name.replace(/-/g, ' ')}</option>`).join('');
    if (slot.ability && p.abilities.some(a => a.ability.name === slot.ability)) abilSel.value = slot.ability;

    const itemSel = document.getElementById('set-item');
    itemSel.innerHTML = `<option value="">-- Nenhum --</option>` + expandedBattleItems.map(i => `<option value="${i.id}">${i.name}</option>`).join('');
    if (slot.item) itemSel.value = slot.item;

    const natSel = document.getElementById('set-nature');
    natSel.innerHTML = naturesData.map(n => `<option value="${n.name}">${n.name} ${n.up ? '(+' + n.up.replace('special-', 'sp.') + ' / -' + n.down.replace('special-', 'sp.') + ')' : '(Neutro)'}</option>`).join('');
    natSel.value = slot.nature || 'Hardy';

    const teraSel = document.getElementById('set-tera');
    teraSel.innerHTML = Object.keys(coresTipos).map(tp => `<option value="${tp}">${getTipoNome(tp)} (${tp.toUpperCase()})</option>`).join('');
    teraSel.value = slot.teraType || (slot.types && slot.types[0]) || 'normal';

    const evsSalvos = slot.evs || { hp: 84, attack: 84, defense: 84, 'special-attack': 84, 'special-defense': 84, speed: 84 };
    const ivsSalvos = slot.ivs || { hp: 31, attack: 31, defense: 31, 'special-attack': 31, 'special-defense': 31, speed: 31 };

    const grid = document.getElementById('set-evs-ivs');
    grid.innerHTML = p.stats.map(s => {
        const sn = s.stat.name;
        const ev = typeof evsSalvos[sn] === 'number' ? evsSalvos[sn] : 0;
        const iv = typeof ivsSalvos[sn] === 'number' ? ivsSalvos[sn] : 31;
        return `<div class="iv-row">
            <span style="text-transform:capitalize; width:100px;">${sn.replace('special-', 'Sp. ')} (${s.base_stat})</span>
            <div class="iv-ev-inputs">
                <small>EV</small><input type="number" id="set-ev-${sn}" min="0" max="252" value="${ev}" onchange="atualizarPreviewSetTime()">
                <small>IV</small><input type="number" id="set-iv-${sn}" min="0" max="31" value="${iv}" onchange="atualizarPreviewSetTime()">
            </div>
            <strong id="set-final-${sn}" style="width:42px; text-align:right;">0</strong>
        </div>`;
    }).join('') + `<div style="font-size:11px; text-align:right; margin-top:4px;">EVs Total: <strong id="set-ev-total">0</strong> / 510</div>`;

    atualizarPreviewSetTime();

    const listaMoves = p.moves.map(m => m.move.name);
    const moveOpts = `<option value="">-- Nenhum --</option>` + listaMoves.map(m => `<option value="${m}">${m.replace(/-/g, ' ')}</option>`).join('');
    const movesSalvos = Array.isArray(slot.moves) ? slot.moves : [];
    for (let i = 0; i < 4; i++) {
        const sel = document.getElementById(`set-move-${i}`);
        sel.innerHTML = moveOpts;
        if (movesSalvos[i] && listaMoves.includes(movesSalvos[i])) {
            sel.value = movesSalvos[i];
        } else if (movesSalvos.length === 0 && listaMoves[i]) {
            sel.value = listaMoves[i];
        }
    }
}

function atualizarPreviewSetTime() {
    if (!editorSetPokeData) return;
    const nat = document.getElementById('set-nature').value;
    let totalEvs = 0;
    editorSetPokeData.stats.forEach(s => {
        const sn = s.stat.name;
        const ev = Math.max(0, Math.min(252, parseInt(document.getElementById(`set-ev-${sn}`).value) || 0));
        const iv = Math.max(0, Math.min(31, parseInt(document.getElementById(`set-iv-${sn}`).value) || 0));
        totalEvs += ev;
        document.getElementById(`set-final-${sn}`).textContent = calcularStatFinalComEV(sn, s.base_stat, iv, ev, nat);
    });
    const totEl = document.getElementById('set-ev-total');
    if (totEl) {
        totEl.textContent = totalEvs;
        totEl.style.color = totalEvs > 510 ? '#e74c3c' : '';
    }
}

function salvarSetTime() {
    if (editorSetSlotIndex === null || !editorSetPokeData) return;
    const slot = timesSalvos[timeAtualIndex][editorSetSlotIndex];
    if (!slot) return;

    const evs = {}, ivs = {};
    let somaEvs = 0;
    let ajustado = false;

    STAT_ORDER.forEach(sn => {
        let ev = Math.max(0, Math.min(252, parseInt(document.getElementById(`set-ev-${sn}`).value) || 0));
        if (somaEvs + ev > 510) {
            ev = Math.max(0, 510 - somaEvs);
            ajustado = true;
        }
        somaEvs += ev;
        evs[sn] = ev;
        ivs[sn] = Math.max(0, Math.min(31, parseInt(document.getElementById(`set-iv-${sn}`).value) || 0));
    });

    if (ajustado) alert(t('set_ev_limit_warn'));

    const moves = [];
    for (let i = 0; i < 4; i++) {
        const mv = document.getElementById(`set-move-${i}`).value;
        if (mv) moves.push(mv);
    }

    slot.ability = document.getElementById('set-ability').value;
    slot.item = document.getElementById('set-item').value;
    slot.nature = document.getElementById('set-nature').value;
    slot.teraType = document.getElementById('set-tera').value;
    slot.evs = evs;
    slot.ivs = ivs;
    slot.moves = moves;

    localStorage.setItem('dexke_times', JSON.stringify(timesSalvos));
    fecharModal('team-set-modal');
    renderizarTime();
}

function formatarNomeShowdown(slug) {
    return (slug || '').split('-').map(w => w ? w.charAt(0).toUpperCase() + w.slice(1) : '').join(' ');
}

function exportarShowdown() {
    const time = timesSalvos[timeAtualIndex].filter(p => p !== null);
    if (time.length === 0) return alert('O time atual está vazio!');

    const texto = time.map(p => {
        const nome = formatarNomeShowdown(p.name);
        const item = p.item ? ` @ ${formatarNomeShowdown(p.item)}` : '';
        const defaultAbil = (typeof todosPokemonByName !== 'undefined' && todosPokemonByName[p.name] && todosPokemonByName[p.name].abilities && todosPokemonByName[p.name].abilities[0]) || '';
        const abil = (p.ability || defaultAbil) ? formatarNomeShowdown(p.ability || defaultAbil) : 'Unknown';
        const tera = p.teraType ? formatarNomeShowdown(p.teraType) : formatarNomeShowdown((p.types && p.types[0]) || 'Normal');
        const nature = p.nature || 'Hardy';

        const evObj = p.evs || { hp: 84, attack: 84, defense: 84, 'special-attack': 84, 'special-defense': 84, speed: 84 };
        const evParts = STAT_ORDER.filter(s => (evObj[s] || 0) > 0).map(s => `${evObj[s]} ${SHOWDOWN_STAT_MAP[s]}`);

        const ivObj = p.ivs || {};
        const ivParts = STAT_ORDER.filter(s => typeof ivObj[s] === 'number' && ivObj[s] < 31).map(s => `${ivObj[s]} ${SHOWDOWN_STAT_MAP[s]}`);

        const movesList = (Array.isArray(p.moves) && p.moves.length > 0) ? p.moves : ['tackle'];
        const movesTxt = movesList.map(m => `- ${formatarNomeShowdown(m)}`).join('\n');

        const linhas = [`${nome}${item}`, `Ability: ${abil}`, `Tera Type: ${tera}`];
        if (evParts.length > 0) linhas.push(`EVs: ${evParts.join(' / ')}`);
        linhas.push(`${nature} Nature`);
        if (ivParts.length > 0) linhas.push(`IVs: ${ivParts.join(' / ')}`);
        linhas.push(movesTxt);
        return linhas.join('\n') + '\n';
    }).join('\n');

    document.getElementById('showdown-textarea').value = texto;
    document.getElementById('showdown-io-container').classList.remove('hidden');
}

async function processarImportacaoShowdown() {
    const texto = document.getElementById('showdown-textarea').value;
    const blocos = texto.trim().split(/\n\s*\n+/);
    const novoTime = [];

    for (const bloco of blocos) {
        if (!bloco.trim()) continue;
        const linhas = bloco.split('\n').map(l => l.trim()).filter(Boolean);
        if (linhas.length === 0) continue;

        const primeiraLinha = linhas[0];
        const partesTopo = primeiraLinha.split('@');
        let nomeBruto = partesTopo[0].trim().replace(/\s*\([MF]\)\s*$/i, '').trim();
        if (nomeBruto.includes('(') && nomeBruto.includes(')')) {
            const match = nomeBruto.match(/\(([^)]+)\)/);
            if (match) nomeBruto = match[1].trim();
        }
        nomeBruto = nomeBruto.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
        const pEncontrado = todosPokemon.find(pk => pk.name === nomeBruto) || todosPokemon.find(pk => pk.name.startsWith(nomeBruto));
        if (!pEncontrado) continue;

        const itemBruto = partesTopo[1] ? partesTopo[1].trim().toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '') : '';
        const slot = {
            id: pEncontrado.id,
            name: pEncontrado.name,
            types: pEncontrado.types,
            item: itemBruto || '',
            ability: '',
            nature: 'Hardy',
            teraType: (pEncontrado.types && pEncontrado.types[0]) || 'normal',
            evs: { hp: 0, attack: 0, defense: 0, 'special-attack': 0, 'special-defense': 0, speed: 0 },
            ivs: { hp: 31, attack: 31, defense: 31, 'special-attack': 31, 'special-defense': 31, speed: 31 },
            moves: []
        };

        for (let i = 1; i < linhas.length; i++) {
            const ln = linhas[i];
            if (ln.startsWith('Ability:')) {
                slot.ability = ln.slice(8).trim().toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
            } else if (ln.startsWith('Tera Type:')) {
                slot.teraType = ln.slice(10).trim().toLowerCase();
            } else if (ln.startsWith('EVs:')) {
                ln.slice(4).split('/').forEach(seg => {
                    const m = seg.trim().match(/^(\d+)\s+(HP|Atk|Def|SpA|SpD|Spe)$/i);
                    if (m) {
                        const key = Object.entries(SHOWDOWN_STAT_REV).find(([k]) => k.toLowerCase() === m[2].toLowerCase())?.[1];
                        if (key) slot.evs[key] = Math.min(252, parseInt(m[1]));
                    }
                });
            } else if (ln.startsWith('IVs:')) {
                ln.slice(4).split('/').forEach(seg => {
                    const m = seg.trim().match(/^(\d+)\s+(HP|Atk|Def|SpA|SpD|Spe)$/i);
                    if (m) {
                        const key = Object.entries(SHOWDOWN_STAT_REV).find(([k]) => k.toLowerCase() === m[2].toLowerCase())?.[1];
                        if (key) slot.ivs[key] = Math.min(31, parseInt(m[1]));
                    }
                });
            } else if (/^[A-Za-z]+\s+Nature$/i.test(ln)) {
                const natName = ln.split(/\s+/)[0];
                const natObj = naturesData.find(n => n.name.toLowerCase() === natName.toLowerCase());
                if (natObj) slot.nature = natObj.name;
            } else if (ln.startsWith('-')) {
                const mv = ln.replace(/^-\s*/, '').trim().toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
                if (mv && slot.moves.length < 4) slot.moves.push(mv);
            }
        }

        novoTime.push(slot);
        if (novoTime.length >= 6) break;
    }

    while (novoTime.length < 6) novoTime.push(null);
    timesSalvos[timeAtualIndex] = novoTime;
    localStorage.setItem('dexke_times', JSON.stringify(timesSalvos));
    document.getElementById('showdown-io-container').classList.add('hidden');
    renderizarTime();
}

async function gerarCoberturaOfensivaTime(timeValido) {
    const container = document.getElementById('team-offensive-coverage');
    if (!container) return;
    if (!timeValido || timeValido.length === 0) {
        container.innerHTML = `<p style="color:var(--text-muted, #777); font-size:13px;">${escapeHTML(t('team_off_empty'))}</p>`;
        return;
    }

    if (typeof garantirMovesCarregados === 'function') await garantirMovesCarregados();

    const tiposAtaqueTime = [];
    for (const p of timeValido) {
        const tiposSet = new Set();
        if (Array.isArray(p.moves) && p.moves.length > 0) {
            for (const mv of p.moves) {
                const meta = typeof getMoveMeta === 'function' ? getMoveMeta(mv) : null;
                if (meta && meta.cls !== 'status') tiposSet.add(meta.type);
            }
        }
        if (tiposSet.size === 0 && Array.isArray(p.types)) {
            p.types.forEach(tp => tiposSet.add(tp));
        }
        tiposAtaqueTime.push(Array.from(tiposSet));
    }

    const todosTipos = Object.keys(coresTipos);
    const semSuperEfetivo = [];
    const chipsHtml = [];

    for (const defTipo of todosTipos) {
        let qtdSE = 0;
        for (const tiposDoPoke of tiposAtaqueTime) {
            let bateSE = false;
            for (const atkTipo of tiposDoPoke) {
                const mult = await calcularMultiplicadorExato(atkTipo, [defTipo]);
                if (mult >= 2) { bateSE = true; break; }
            }
            if (bateSE) qtdSE++;
        }
        if (qtdSE === 0) semSuperEfetivo.push(defTipo);
        chipsHtml.push(`<div class="off-cov-chip ${qtdSE > 0 ? 'cov-good' : 'cov-warn'}">
            <span class="list-type-badge" style="background-color:${coresTipos[defTipo]}">${escapeHTML(getTipoNome(defTipo))}</span>
            <span>${qtdSE > 0 ? `✅ ${qtdSE}x SE` : '⚠️ 0 SE'}</span>
        </div>`);
    }

    const avisoHtml = semSuperEfetivo.length > 0
        ? `<p style="font-size:12px; color:#e74c3c; margin-bottom:8px;"><strong>${escapeHTML(t('team_off_uncovered'))}</strong> ${semSuperEfetivo.map(tp => escapeHTML(getTipoNome(tp))).join(', ')}</p>`
        : '';

    container.innerHTML = avisoHtml + `<div class="off-coverage-grid">${chipsHtml.join('')}</div>`;
}

// --- 10. SIMULADOR DE BATALHA 1v1 & 6v6 COMPLETO ---
const dadosBatalhaCache = { p1: null, p2: null };
let estadoBatalha = null;
let modoBatalhaAtual = '1v1';

function mudarModoBatalha(modo) {
    modoBatalhaAtual = modo === '6v6' ? '6v6' : '1v1';
    document.getElementById('btn-mode-1v1')?.classList.toggle('active', modoBatalhaAtual === '1v1');
    document.getElementById('btn-mode-6v6')?.classList.toggle('active', modoBatalhaAtual === '6v6');
    document.getElementById('battle-setup')?.classList.toggle('hidden', modoBatalhaAtual === '6v6');
    document.getElementById('battle-team-setup')?.classList.toggle('hidden', modoBatalhaAtual !== '6v6');
}

function inicializarSimulador1v1() {
    const p1Select = document.getElementById('p1-poke-select');
    const p2Select = document.getElementById('p2-poke-select');
    if (!p1Select || !p2Select) return;
    const pokeOptions = todosPokemon.map(p => `<option value="${p.name}">${p.name.replace(/-/g, ' ')}</option>`).join('');
    p1Select.innerHTML = pokeOptions;
    p2Select.innerHTML = pokeOptions;

    const itemOptions = expandedBattleItems.map(i => `<option value="${i.id}">${i.name}</option>`).join('');
    document.getElementById('p1-item').innerHTML = itemOptions;
    document.getElementById('p2-item').innerHTML = itemOptions;

    const natureOptions = naturesData.map(n => `<option value="${n.name}">${n.name} ${n.up ? '(+' + n.up.replace('special-', 'sp.') + ' / -' + n.down.replace('special-', 'sp.') + ')' : '(Neutro)'}</option>`).join('');
    document.getElementById('p1-nature').innerHTML = natureOptions;
    document.getElementById('p2-nature').innerHTML = natureOptions;

    p1Select.value = 'charizard';
    p2Select.value = 'ursaluna-bloodmoon';
    carregarConfigBatalha('p1');
    carregarConfigBatalha('p2');
}

async function carregarConfigBatalha(lado) {
    const nome = document.getElementById(`${lado}-poke-select`).value;
    const p = await getPokeFullData(nome);
    dadosBatalhaCache[lado] = p;

    document.getElementById(`${lado}-setup-img`).src = p.sprites.other['official-artwork'].front_default || p.sprites.front_default;
    document.getElementById(`${lado}-setup-types`).innerHTML = p.types.map(tp => `<span class="type-badge" style="background-color:${coresTipos[tp.type.name]}">${tp.type.name}</span>`).join('');
    document.getElementById(`${lado}-ability`).innerHTML = p.abilities.map(a => `<option value="${a.ability.name}">${a.ability.name.replace(/-/g, ' ')}</option>`).join('');

    const ivContainer = document.getElementById(`${lado}-ivs`);
    ivContainer.innerHTML = p.stats.map(s => `
        <div class="iv-row">
            <span style="text-transform:capitalize; width:100px;">${s.stat.name.replace('special-', 'Sp. ')} (${s.base_stat})</span>
            <div class="iv-ev-inputs">
                <small>EV</small><input type="number" id="${lado}-ev-${s.stat.name}" min="0" max="252" value="84" onchange="atualizarPreviewStats('${lado}')">
                <small>IV</small><input type="number" id="${lado}-iv-${s.stat.name}" min="0" max="31" value="31" onchange="atualizarPreviewStats('${lado}')">
            </div>
            <strong id="${lado}-final-${s.stat.name}" style="width:42px; text-align:right;">0</strong>
        </div>
    `).join('') + `<div style="font-size:11px; text-align:right; margin-top:4px;">EVs: <strong id="${lado}-ev-total">504</strong> / 510</div>`;

    atualizarPreviewStats(lado);

    const listaMoves = p.moves.map(m => m.move.name);
    const moveOptions = listaMoves.map(m => `<option value="${m}">${m.replace(/-/g, ' ')}</option>`).join('');
    for (let i = 0; i < 4; i++) {
        const sel = document.getElementById(`${lado}-move-${i}`);
        sel.innerHTML = moveOptions;
        if (listaMoves[i]) sel.value = listaMoves[i];
    }
}

function calcularStatFinalComEV(statName, base, iv, ev, natureName) {
    iv = Math.max(0, Math.min(31, parseInt(iv) || 0));
    ev = Math.max(0, Math.min(252, parseInt(ev) || 0));
    if (statName === 'hp') {
        if (base === 1) return 1;
        return Math.floor(((2 * base + iv + Math.floor(ev / 4)) * 100) / 100) + 110;
    }
    let val = Math.floor(((2 * base + iv + Math.floor(ev / 4)) * 100) / 100) + 5;
    const nat = naturesData.find(n => n.name === natureName);
    if (nat) {
        if (nat.up === statName) val = Math.floor(val * 1.1);
        if (nat.down === statName) val = Math.floor(val * 0.9);
    }
    return val;
}

function atualizarPreviewStats(lado) {
    const p = dadosBatalhaCache[lado];
    if (!p) return;
    const nat = document.getElementById(`${lado}-nature`).value;
    let totalEv = 0;
    p.stats.forEach(s => {
        const iv = document.getElementById(`${lado}-iv-${s.stat.name}`)?.value;
        const evEl = document.getElementById(`${lado}-ev-${s.stat.name}`);
        const ev = evEl ? Math.max(0, Math.min(252, parseInt(evEl.value) || 0)) : 84;
        totalEv += ev;
        const finalVal = calcularStatFinalComEV(s.stat.name, s.base_stat, iv, ev, nat);
        const outEl = document.getElementById(`${lado}-final-${s.stat.name}`);
        if (outEl) outEl.textContent = finalVal;
    });
    const totEl = document.getElementById(`${lado}-ev-total`);
    if (totEl) {
        totEl.textContent = totalEv;
        totEl.style.color = totalEv > 510 ? '#e74c3c' : '';
    }
}

async function randomizarCPU() {
    const randPoke = todosPokemon[Math.floor(Math.random() * todosPokemon.length)];
    document.getElementById('p2-poke-select').value = randPoke.name;
    document.getElementById('p2-item').value = expandedBattleItems[Math.floor(Math.random() * expandedBattleItems.length)].id;
    document.getElementById('p2-nature').value = naturesData[Math.floor(Math.random() * naturesData.length)].name;
    await carregarConfigBatalha('p2');
    const p = dadosBatalhaCache['p2'];
    if (p && p.moves.length > 0) {
        for (let i = 0; i < 4; i++) {
            const rm = p.moves[Math.floor(Math.random() * p.moves.length)].move.name;
            document.getElementById(`p2-move-${i}`).value = rm;
        }
    }
}

async function carregarMovesDados(nomes) {
    if (typeof garantirMovesCarregados === 'function') await garantirMovesCarregados();
    const lista = [];
    for (const mName of nomes) {
        if (!mName) continue;
        if (moveCache[mName]) lista.push(moveCache[mName]);
    }
    return lista;
}

async function criarCombatenteObj(pData, cfg) {
    const nat = cfg.nature || 'Hardy';
    const evs = cfg.evs || { hp: 84, attack: 84, defense: 84, 'special-attack': 84, 'special-defense': 84, speed: 84 };
    const ivs = cfg.ivs || { hp: 31, attack: 31, defense: 31, 'special-attack': 31, 'special-defense': 31, speed: 31 };
    const stats = {};
    pData.stats.forEach(s => {
        const sn = s.stat.name;
        stats[sn] = calcularStatFinalComEV(sn, s.base_stat, ivs[sn] ?? 31, evs[sn] ?? 0, nat);
    });

    const item = cfg.item || '';
    if (item === 'assault-vest') stats['special-defense'] = Math.floor(stats['special-defense'] * 1.5);
    if (item === 'choice-scarf') stats['speed'] = Math.floor(stats['speed'] * 1.5);
    if (item === 'eviolite') {
        stats['defense'] = Math.floor(stats['defense'] * 1.5);
        stats['special-defense'] = Math.floor(stats['special-defense'] * 1.5);
    }

    const movesData = await carregarMovesDados(cfg.moves || []);
    if (movesData.length === 0) {
        const fallback = pData.moves.slice(0, 4).map(m => m.move.name);
        movesData.push(...await carregarMovesDados(fallback));
    }

    return {
        name: pData.name.replace(/-/g, ' ').toUpperCase(),
        slug: pData.name,
        spriteFront: (pData.sprites.other?.showdown?.front_default) || pData.sprites.front_default || pData.sprites.other['official-artwork'].front_default,
        spriteBack: (pData.sprites.other?.showdown?.back_default) || pData.sprites.back_default || pData.sprites.front_default,
        types: pData.types.map(tp => tp.type.name),
        ability: cfg.ability || (pData.abilities[0]?.ability.name || ''),
        item: item,
        itemUsado: false,
        choiceLock: null,
        maxHp: stats.hp,
        hp: stats.hp,
        stats: stats,
        stages: { attack: 0, defense: 0, 'special-attack': 0, 'special-defense': 0, speed: 0 },
        moves: movesData,
        status: null,
        statusTurnos: 0
    };
}

async function montarCombatente(lado) {
    const p = dadosBatalhaCache[lado];
    const evs = {}, ivs = {};
    let somaEv = 0;
    p.stats.forEach(s => {
        const sn = s.stat.name;
        let ev = Math.max(0, Math.min(252, parseInt(document.getElementById(`${lado}-ev-${sn}`)?.value) || 0));
        if (somaEv + ev > 510) ev = Math.max(0, 510 - somaEv);
        somaEv += ev;
        evs[sn] = ev;
        ivs[sn] = Math.max(0, Math.min(31, parseInt(document.getElementById(`${lado}-iv-${sn}`)?.value) || 0));
    });
    const moves = [];
    for (let i = 0; i < 4; i++) {
        const mv = document.getElementById(`${lado}-move-${i}`)?.value;
        if (mv) moves.push(mv);
    }
    return criarCombatenteObj(p, {
        ability: document.getElementById(`${lado}-ability`).value,
        item: document.getElementById(`${lado}-item`).value,
        nature: document.getElementById(`${lado}-nature`).value,
        evs,
        ivs,
        moves
    });
}

async function montarTimeBatalha(fonteVal) {
    const party = [];
    if (fonteVal === 'random') {
        const pool = [...todosPokemon].sort(() => Math.random() - 0.5).slice(0, 6);
        for (const pk of pool) {
            const pData = await getPokeFullData(pk.name);
            const allMvs = pData.moves.map(m => m.move.name).sort(() => Math.random() - 0.5).slice(0, 4);
            party.push(await criarCombatenteObj(pData, {
                ability: pData.abilities[0]?.ability.name || '',
                item: expandedBattleItems[Math.floor(Math.random() * 10)].id,
                nature: naturesData[Math.floor(Math.random() * naturesData.length)].name,
                moves: allMvs
            }));
        }
        return party;
    }

    const idx = parseInt(fonteVal) || 0;
    const saved = (timesSalvos[idx] || []).filter(p => p !== null);
    if (saved.length === 0) return [];
    for (const slot of saved) {
        const pData = await getPokeFullData(slot.name);
        let mvs = Array.isArray(slot.moves) && slot.moves.length > 0 ? slot.moves : [];
        if (mvs.length === 0) {
            if (typeof garantirMovesCarregados === 'function') await garantirMovesCarregados();
            // Seleciona até 4 golpes variados priorizando os que já estão no moveMetaMap com poder
            const cand = pData.moves.map(m => m.move.name);
            cand.sort((a, b) => ((window.moveMetaMap[b]?.power || 0) - (window.moveMetaMap[a]?.power || 0)));
            mvs = cand.slice(0, 4);
        }
        party.push(await criarCombatenteObj(pData, {
            ability: slot.ability || (pData.abilities[0]?.ability.name || ''),
            item: slot.item || 'leftovers',
            nature: slot.nature || 'Hardy',
            evs: slot.evs,
            ivs: slot.ivs,
            moves: mvs
        }));
    }
    return party;
}

function aplicarHabilidadeEntrada(entrou, oponente) {
    if (!entrou || !oponente || entrou.hp <= 0 || oponente.hp <= 0) return;
    const ab = entrou.ability;
    if (ab === 'drizzle') { estadoBatalha.clima = 'rain'; estadoBatalha.turnosClima = 5; adicionarLogBatalha(`🌧️ ${entrou.name} ativou <strong>Drizzle</strong>! Começou a chover!`); }
    else if (ab === 'drought') { estadoBatalha.clima = 'sun'; estadoBatalha.turnosClima = 5; adicionarLogBatalha(`☀️ ${entrou.name} ativou <strong>Drought</strong>! O Sol ficou intenso!`); }
    else if (ab === 'sand-stream') { estadoBatalha.clima = 'sand'; estadoBatalha.turnosClima = 5; adicionarLogBatalha(`🌪️ ${entrou.name} ativou <strong>Sand Stream</strong>!`); }
    else if (ab === 'snow-warning') { estadoBatalha.clima = 'snow'; estadoBatalha.turnosClima = 5; adicionarLogBatalha(`❄️ ${entrou.name} ativou <strong>Snow Warning</strong>!`); }
    else if (ab === 'intimidate') {
        if (oponente.item === 'clear-amulet') {
            adicionarLogBatalha(`🛡️ Clear Amulet impediu o Intimidate em ${oponente.name}!`);
        } else {
            oponente.stages.attack = Math.max(-6, oponente.stages.attack - 1);
            adicionarLogBatalha(`😨 <strong>Intimidate</strong> de ${entrou.name} reduziu o Attack de ${oponente.name}!`);
        }
    }
}

async function iniciarBatalha1v1() {
    let p1Party = [], p2Party = [];
    if (modoBatalhaAtual === '6v6') {
        p1Party = await montarTimeBatalha(document.getElementById('battle-p1-team').value);
        if (p1Party.length === 0) return alert(t('battle_team_empty_warn'));
        p2Party = await montarTimeBatalha(document.getElementById('battle-p2-team').value);
        if (p2Party.length === 0) return alert(t('battle_team_empty_warn'));
    } else {
        p1Party = [await montarCombatente('p1')];
        p2Party = [await montarCombatente('p2')];
    }

    estadoBatalha = {
        p1Party, p2Party,
        p1Idx: 0, p2Idx: 0,
        get p1() { return this.p1Party[this.p1Idx]; },
        get p2() { return this.p2Party[this.p2Idx]; },
        turno: 1,
        encerrada: false,
        aguardandoTrocaP1: false,
        clima: 'none',
        turnosClima: 0
    };

    const arena = document.getElementById('battle-arena');
    arena.classList.remove('hidden');
    document.getElementById('battle-log').innerHTML = `<div>⚔️ <strong>Batalha iniciada: ${estadoBatalha.p1.name} vs ${estadoBatalha.p2.name}!</strong></div>`;

    aplicarHabilidadeEntrada(estadoBatalha.p1, estadoBatalha.p2);
    aplicarHabilidadeEntrada(estadoBatalha.p2, estadoBatalha.p1);
    atualizarUIBatalha();
    renderizarControlesBatalha();
    arena.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function renderizarControlesBatalha() {
    const ctrl = document.getElementById('battle-controls');
    const swCtrl = document.getElementById('battle-switch-controls');
    if (!estadoBatalha || !ctrl) return;

    const p1 = estadoBatalha.p1;
    if (estadoBatalha.encerrada) {
        ctrl.innerHTML = '';
        if (swCtrl) swCtrl.classList.add('hidden');
        return;
    }

    if (estadoBatalha.aguardandoTrocaP1) {
        ctrl.innerHTML = `<div style="grid-column:1/-1; padding:10px; font-weight:bold; color:var(--primary); text-align:center;">${escapeHTML(t('battle_forced_switch'))}</div>`;
    } else {
        ctrl.innerHTML = p1.moves.map((m, idx) => {
            const disabled = p1.choiceLock && p1.choiceLock !== m.name ? 'disabled style="opacity:0.45; background-color:' + coresTipos[m.type.name] + '"' : `style="background-color:${coresTipos[m.type.name]}"`;
            return `<button type="button" class="battle-move-btn" ${disabled} onclick="executarTurnoBatalha(${idx})">
                <span>${m.name.replace(/-/g, ' ')}</span>
                <small>${m.type.name.toUpperCase()} | Pwr: ${m.power || '--'} | Acc: ${m.accuracy || '--'} | ${getIconeClasse(m.damage_class.name)}</small>
            </button>`;
        }).join('');
    }

    if (swCtrl) {
        if (estadoBatalha.p1Party.length > 1) {
            swCtrl.classList.remove('hidden');
            swCtrl.innerHTML = `<strong style="width:100%; font-size:12px;">${escapeHTML(t('battle_switch_title'))}</strong>` + estadoBatalha.p1Party.map((pk, idx) => {
                const isAtivo = idx === estadoBatalha.p1Idx;
                const isKo = pk.hp <= 0;
                return `<button type="button" class="battle-switch-btn" ${isAtivo || isKo ? 'disabled' : ''} onclick="trocarPokemonBatalha(${idx})">
                    ${isKo ? '⚫' : (isAtivo ? '▶' : '🟢')} ${pk.name.toLowerCase()} (${pk.hp}/${pk.maxHp})
                </button>`;
            }).join('');
        } else {
            swCtrl.classList.add('hidden');
        }
    }
}

function atualizarUIBatalha() {
    if (!estadoBatalha) return;
    ['p1', 'p2'].forEach(lado => {
        const c = estadoBatalha[lado];
        const imgEl = document.getElementById(`arena-${lado}-img`);
        const nameEl = document.getElementById(`arena-${lado}-name`);
        if (nameEl) nameEl.textContent = c.name;
        if (imgEl) imgEl.src = lado === 'p1' ? c.spriteBack : c.spriteFront;

        const pct = Math.max(0, Math.round((c.hp / c.maxHp) * 100));
        const bar = document.getElementById(`arena-${lado}-hp-bar`);
        bar.style.width = pct + '%';
        bar.style.backgroundColor = pct > 50 ? '#2ecc71' : (pct > 20 ? '#f1c40f' : '#e74c3c');
        document.getElementById(`arena-${lado}-hp-text`).textContent = `${c.hp} / ${c.maxHp} (${pct}%)`;

        const stEl = document.getElementById(`arena-${lado}-status`);
        if (c.status) {
            stEl.style.display = 'inline-block';
            stEl.textContent = c.status.toUpperCase();
            const coresStatus = { brn: '#e74c3c', par: '#f1c40f', psn: '#9b59b6', slp: '#bdc3c7', frz: '#3498db' };
            stEl.style.backgroundColor = coresStatus[c.status] || '#555';
        } else {
            stEl.style.display = 'none';
        }

        const partyEl = document.getElementById(`arena-${lado}-party`);
        const party = estadoBatalha[`${lado}Party`];
        if (partyEl) {
            partyEl.innerHTML = party.length > 1
                ? party.map(pk => pk.hp <= 0 ? '⚫' : (pk.status ? '🟡' : '🟢')).join('')
                : '';
        }
    });

    const wEl = document.getElementById('arena-weather');
    if (estadoBatalha.clima !== 'none') {
        const nomesClima = { rain: '🌧️ Chovendo', sun: '☀️ Sol Intenso', sand: '🌪️ Tempestade de Areia', snow: '❄️ Nevando' };
        wEl.textContent = nomesClima[estadoBatalha.clima] || '';
    } else {
        wEl.textContent = '';
    }
}

function multEstagio(estagio) {
    const s = Math.max(-6, Math.min(6, estagio || 0));
    return s >= 0 ? (2 + s) / 2 : 2 / (2 - s);
}

function podeAtacar(c) {
    if (c.status === 'par' && Math.random() < 0.25) { adicionarLogBatalha(`⚡ ${c.name} está paralisado e não consegue se mover!`); return false; }
    if (c.status === 'slp') {
        if (c.statusTurnos <= 0) { c.status = null; adicionarLogBatalha(`😴 ${c.name} acordou!`); return true; }
        c.statusTurnos--; adicionarLogBatalha(`💤 ${c.name} está dormindo profundamente...`); return false;
    }
    if (c.status === 'frz') {
        if (Math.random() < 0.2) { c.status = null; adicionarLogBatalha(`🧊 ${c.name} se descongelou!`); return true; }
        adicionarLogBatalha(`❄️ ${c.name} está congelado!`); return false;
    }
    return true;
}

function adicionarLogBatalha(msg) {
    const log = document.getElementById('battle-log');
    if (!log) return;
    log.innerHTML += `<div>${msg}</div>`;
    log.scrollTop = log.scrollHeight;
}

function aplicarMudancaEstagio(alvo, stat, delta) {
    if (delta < 0 && alvo.item === 'clear-amulet') {
        adicionarLogBatalha(`🛡️ Clear Amulet impediu a queda de ${stat} de ${alvo.name}!`);
        return;
    }
    const prev = alvo.stages[stat] || 0;
    alvo.stages[stat] = Math.max(-6, Math.min(6, prev + delta));
    if (alvo.stages[stat] !== prev) {
        const dirTxt = delta > 0 ? `subiu (+${delta})` : `caiu (${delta})`;
        adicionarLogBatalha(`📊 ${stat.replace('special-', 'Sp. ')} de ${alvo.name} ${dirTxt}!`);
    }
}

async function calcularDanoAtaque(atacante, defensor, move) {
    if (['choice-band', 'choice-specs', 'choice-scarf'].includes(atacante.item) && !atacante.choiceLock) {
        atacante.choiceLock = move.name;
    }

    if (move.name.includes('sunny')) { estadoBatalha.clima = 'sun'; estadoBatalha.turnosClima = 5; return adicionarLogBatalha(`☀️ A luz do Sol ficou intensa!`); }
    if (move.name.includes('rain')) { estadoBatalha.clima = 'rain'; estadoBatalha.turnosClima = 5; return adicionarLogBatalha(`🌧️ Começou a chover!`); }
    if (move.name.includes('sandstorm')) { estadoBatalha.clima = 'sand'; estadoBatalha.turnosClima = 5; return adicionarLogBatalha(`🌪️ Uma tempestade de areia começou!`); }

    // Checagem de Precisão
    if (move.accuracy && Math.random() * 100 > move.accuracy) {
        return adicionarLogBatalha(`💨 ${atacante.name} usou <strong>${move.name.replace(/-/g, ' ')}</strong>, mas errou!`);
    }

    if (move.damage_class.name === 'status' || !move.power) {
        const mn = move.name;
        if (mn.includes('recover') || mn.includes('rest') || mn.includes('roost') || mn.includes('synthesis') || mn.includes('slack-off') || mn.includes('moonlight')) {
            const cura = Math.floor(atacante.maxHp * 0.5);
            atacante.hp = Math.min(atacante.maxHp, atacante.hp + cura);
            return adicionarLogBatalha(`💚 ${atacante.name} usou <strong>${mn}</strong> e recuperou ${cura} HP!`);
        }
        if (mn === 'swords-dance') aplicarMudancaEstagio(atacante, 'attack', 2);
        else if (mn === 'nasty-plot') aplicarMudancaEstagio(atacante, 'special-attack', 2);
        else if (mn === 'dragon-dance') { aplicarMudancaEstagio(atacante, 'attack', 1); aplicarMudancaEstagio(atacante, 'speed', 1); }
        else if (mn === 'calm-mind') { aplicarMudancaEstagio(atacante, 'special-attack', 1); aplicarMudancaEstagio(atacante, 'special-defense', 1); }
        else if (mn === 'bulk-up') { aplicarMudancaEstagio(atacante, 'attack', 1); aplicarMudancaEstagio(atacante, 'defense', 1); }
        else if (mn === 'agility' || mn === 'rock-polish') aplicarMudancaEstagio(atacante, 'speed', 2);
        else if (mn === 'iron-defense' || mn === 'acid-armor') aplicarMudancaEstagio(atacante, 'defense', 2);
        else if (mn === 'amnesia') aplicarMudancaEstagio(atacante, 'special-defense', 2);
        else if (mn === 'shell-smash') {
            aplicarMudancaEstagio(atacante, 'attack', 2); aplicarMudancaEstagio(atacante, 'special-attack', 2); aplicarMudancaEstagio(atacante, 'speed', 2);
            aplicarMudancaEstagio(atacante, 'defense', -1); aplicarMudancaEstagio(atacante, 'special-defense', -1);
        } else if (move.meta?.ailment?.name && move.meta.ailment.name !== 'none' && !defensor.status) {
            const ail = move.meta.ailment.name;
            if (ail === 'burn' && !defensor.types.includes('fire')) { defensor.status = 'brn'; adicionarLogBatalha(`🔥 ${defensor.name} foi queimado!`); }
            else if (ail === 'paralysis' && !defensor.types.includes('electric')) { defensor.status = 'par'; adicionarLogBatalha(`⚡ ${defensor.name} foi paralisado!`); }
            else if (ail === 'poison' && !defensor.types.includes('poison') && !defensor.types.includes('steel')) { defensor.status = 'psn'; adicionarLogBatalha(`☠️ ${defensor.name} foi envenenado!`); }
            else if (ail === 'sleep') { defensor.status = 'slp'; defensor.statusTurnos = Math.floor(Math.random() * 3) + 1; adicionarLogBatalha(`💤 ${defensor.name} adormeceu!`); }
            else adicionarLogBatalha(`✨ ${atacante.name} usou <strong>${mn}</strong>!`);
        } else {
            aplicarMudancaEstagio(atacante, 'attack', 1);
            aplicarMudancaEstagio(atacante, 'special-attack', 1);
        }
        return;
    }

    const isPhys = move.damage_class.name === 'physical';
    const isCrit = Math.random() < (1 / 24);

    let atkStatName = isPhys ? 'attack' : 'special-attack';
    let defStatName = isPhys ? 'defense' : 'special-defense';

    let atkStage = atacante.stages[atkStatName] || 0;
    let defStage = defensor.stages[defStatName] || 0;
    if (isCrit) {
        if (atkStage < 0) atkStage = 0;
        if (defStage > 0) defStage = 0;
    }

    let atk = Math.floor(atacante.stats[atkStatName] * multEstagio(atkStage));
    let def = Math.floor(defensor.stats[defStatName] * multEstagio(defStage));

    if (isPhys && atacante.item === 'choice-band') atk = Math.floor(atk * 1.5);
    if (!isPhys && atacante.item === 'choice-specs') atk = Math.floor(atk * 1.5);
    if (isPhys && ['huge-power', 'pure-power'].includes(atacante.ability)) atk = Math.floor(atk * 2);
    if (isPhys && atacante.ability === 'guts' && atacante.status) atk = Math.floor(atk * 1.5);
    if (atacante.status === 'brn' && isPhys && atacante.ability !== 'guts') atk = Math.floor(atk * 0.5);

    let baseDmg = Math.floor(Math.floor((42 * move.power * (atk / Math.max(1, def))) / 50) + 2);

    if (estadoBatalha.clima === 'sun') {
        if (move.type.name === 'fire') baseDmg = Math.floor(baseDmg * 1.5);
        if (move.type.name === 'water') baseDmg = Math.floor(baseDmg * 0.5);
    } else if (estadoBatalha.clima === 'rain') {
        if (move.type.name === 'water') baseDmg = Math.floor(baseDmg * 1.5);
        if (move.type.name === 'fire') baseDmg = Math.floor(baseDmg * 0.5);
    }

    if (atacante.types.includes(move.type.name)) baseDmg = Math.floor(baseDmg * 1.5);

    let mult = await calcularMultiplicadorExato(move.type.name, defensor.types);
    mult = aplicarHabilidadeDefensivaMultiplicador(move.type.name, mult, defensor.ability);
    baseDmg = Math.floor(baseDmg * mult);

    if (defensor.ability === 'multiscale' && defensor.hp === defensor.maxHp && mult > 0) {
        baseDmg = Math.floor(baseDmg * 0.5);
    }
    if (isCrit && mult > 0) baseDmg = Math.floor(baseDmg * 1.5);
    if (mult > 1 && atacante.item === 'expert-belt') baseDmg = Math.floor(baseDmg * 1.2);
    if (atacante.item === 'life-orb') baseDmg = Math.floor(baseDmg * 1.3);

    baseDmg = Math.max(1, Math.floor(baseDmg * (0.85 + Math.random() * 0.15)));
    if (mult === 0) baseDmg = 0;

    if (defensor.hp === defensor.maxHp && baseDmg >= defensor.hp && (defensor.item === 'focus-sash' || defensor.ability === 'sturdy') && !defensor.itemUsado) {
        baseDmg = defensor.hp - 1;
        if (defensor.item === 'focus-sash') {
            defensor.itemUsado = true;
            adicionarLogBatalha(`🎗️ <strong>Focus Sash</strong> impediu o nocaute de ${defensor.name}!`);
        } else {
            adicionarLogBatalha(`🪨 <strong>Sturdy</strong> manteve ${defensor.name} de pé com 1 HP!`);
        }
    }

    defensor.hp = Math.max(0, defensor.hp - baseDmg);
    const critTxt = isCrit && baseDmg > 0 ? ' <strong>(Crítico!)</strong>' : '';
    const msgEf = mult >= 2 ? ' (Super Efetivo! 🔥)' : (mult > 0 && mult < 1 ? ' (Pouco efetivo...)' : (mult === 0 ? ' (Não afetou!)' : ''));
    adicionarLogBatalha(`💥 ${atacante.name} usou <strong>${move.name.replace(/-/g, ' ')}</strong> causando <strong>${baseDmg}</strong> de dano!${critTxt}${msgEf}`);

    if (atacante.item === 'life-orb' && baseDmg > 0) {
        const recoil = Math.max(1, Math.floor(atacante.maxHp * 0.1));
        atacante.hp = Math.max(0, atacante.hp - recoil);
        adicionarLogBatalha(`🩸 ${atacante.name} perdeu ${recoil} HP pelo Life Orb.`);
    }

    if (isPhys && defensor.item === 'rocky-helmet' && baseDmg > 0) {
        const rh = Math.max(1, Math.floor(atacante.maxHp / 6));
        atacante.hp = Math.max(0, atacante.hp - rh);
        adicionarLogBatalha(`🪖 ${atacante.name} sofreu ${rh} de dano no Rocky Helmet de ${defensor.name}!`);
    }

    // Efeitos de recuo de stats do próprio golpe
    if (['close-combat', 'superpower'].includes(move.name)) {
        aplicarMudancaEstagio(atacante, 'defense', -1);
        aplicarMudancaEstagio(atacante, isPhys && move.name === 'close-combat' ? 'special-defense' : 'attack', -1);
    } else if (['overheat', 'draco-meteor', 'leaf-storm'].includes(move.name)) {
        aplicarMudancaEstagio(atacante, 'special-attack', -2);
    } else if (move.name === 'make-it-rain') {
        aplicarMudancaEstagio(atacante, 'special-attack', -1);
    }

    if (defensor.hp > 0 && defensor.item !== 'covert-cloak' && move.meta && move.meta.ailment && move.meta.ailment.name !== 'none' && !defensor.status) {
        const chance = move.meta.ailment_chance || 100;
        if (Math.random() * 100 <= chance) {
            const ail = move.meta.ailment.name;
            if (ail === 'burn' && !defensor.types.includes('fire')) { defensor.status = 'brn'; adicionarLogBatalha(`🔥 ${defensor.name} foi queimado!`); }
            else if (ail === 'paralysis' && !defensor.types.includes('electric')) { defensor.status = 'par'; adicionarLogBatalha(`⚡ ${defensor.name} foi paralisado!`); }
            else if (ail === 'poison' && !defensor.types.includes('poison') && !defensor.types.includes('steel')) { defensor.status = 'psn'; adicionarLogBatalha(`☠️ ${defensor.name} foi envenenado!`); }
            else if (ail === 'freeze' && !defensor.types.includes('ice')) { defensor.status = 'frz'; adicionarLogBatalha(`🧊 ${defensor.name} foi congelado!`); }
            else if (ail === 'sleep') { defensor.status = 'slp'; defensor.statusTurnos = Math.floor(Math.random() * 3) + 1; adicionarLogBatalha(`💤 ${defensor.name} adormeceu!`); }
        }
    }
}

async function aplicarFimDeTurnoEClima(c) {
    if (c.hp <= 0) return;
    if (c.status === 'brn') { c.hp = Math.max(0, c.hp - Math.floor(c.maxHp / 16)); adicionarLogBatalha(`🔥 ${c.name} sofreu dano da queimadura.`); }
    if (c.status === 'psn') { c.hp = Math.max(0, c.hp - Math.floor(c.maxHp / 8)); adicionarLogBatalha(`☠️ ${c.name} sofreu dano do veneno.`); }

    if (estadoBatalha.clima === 'sand' && !c.types.includes('rock') && !c.types.includes('ground') && !c.types.includes('steel')) {
        c.hp = Math.max(0, c.hp - Math.floor(c.maxHp / 16)); adicionarLogBatalha(`🌪️ ${c.name} foi atingido pela areia.`);
    }

    if (c.item === 'flame-orb' && !c.status && !c.types.includes('fire')) {
        c.status = 'brn';
        adicionarLogBatalha(`🔥 Flame Orb queimou ${c.name}!`);
    }

    if (c.item === 'leftovers' && c.hp < c.maxHp) {
        const heal = Math.max(1, Math.floor(c.maxHp / 16));
        c.hp = Math.min(c.maxHp, c.hp + heal);
        adicionarLogBatalha(`🍎 Leftovers restaurou ${heal} HP de ${c.name}.`);
    }

    if (c.item === 'black-sludge') {
        if (c.types.includes('poison') && c.hp < c.maxHp) {
            const heal = Math.max(1, Math.floor(c.maxHp / 16));
            c.hp = Math.min(c.maxHp, c.hp + heal);
            adicionarLogBatalha(`🧪 Black Sludge restaurou ${heal} HP de ${c.name}.`);
        } else if (!c.types.includes('poison')) {
            const dmg = Math.max(1, Math.floor(c.maxHp / 8));
            c.hp = Math.max(0, c.hp - dmg);
            adicionarLogBatalha(`☠️ Black Sludge feriu ${c.name}!`);
        }
    }

    if (c.item === 'sitrus-berry' && !c.itemUsado && c.hp <= c.maxHp / 2) {
        const heal = Math.floor(c.maxHp * 0.25);
        c.hp = Math.min(c.maxHp, c.hp + heal);
        c.itemUsado = true;
        adicionarLogBatalha(`🍒 Sitrus Berry restaurou ${heal} HP de ${c.name}!`);
    }
}

async function escolherMelhorMoveCPU() {
    const { p1, p2 } = estadoBatalha;
    let melhorMove = p2.moves[0];
    let maiorScore = -1;
    for (const m of p2.moves) {
        if (p2.choiceLock && p2.choiceLock !== m.name) continue;
        let mult = await calcularMultiplicadorExato(m.type.name, p1.types);
        mult = aplicarHabilidadeDefensivaMultiplicador(m.type.name, mult, p1.ability);
        const stab = p2.types.includes(m.type.name) ? 1.5 : 1;
        const score = (m.power || 35) * mult * stab;
        if (score > maiorScore) { maiorScore = score; melhorMove = m; }
    }
    return melhorMove;
}

async function trocarPokemonBatalha(novoIdx) {
    if (!estadoBatalha || estadoBatalha.encerrada) return;
    const alvo = estadoBatalha.p1Party[novoIdx];
    if (!alvo || alvo.hp <= 0 || novoIdx === estadoBatalha.p1Idx) return;

    const eraForcada = estadoBatalha.aguardandoTrocaP1;
    if (estadoBatalha.p1) {
        estadoBatalha.p1.choiceLock = null;
        estadoBatalha.p1.stages = { attack: 0, defense: 0, 'special-attack': 0, 'special-defense': 0, speed: 0 };
    }
    estadoBatalha.p1Idx = novoIdx;
    estadoBatalha.aguardandoTrocaP1 = false;
    adicionarLogBatalha(`🔄 Você enviou <strong>${alvo.name}</strong>!`);
    aplicarHabilidadeEntrada(alvo, estadoBatalha.p2);

    if (!eraForcada && estadoBatalha.p2.hp > 0) {
        const mvP2 = await escolherMelhorMoveCPU();
        if (podeAtacar(estadoBatalha.p2)) await calcularDanoAtaque(estadoBatalha.p2, estadoBatalha.p1, mvP2);
        await aplicarFimDeTurnoEClima(estadoBatalha.p1);
        await aplicarFimDeTurnoEClima(estadoBatalha.p2);
        estadoBatalha.turno++;
        verificarFimOuTrocas();
    } else {
        atualizarUIBatalha();
        renderizarControlesBatalha();
    }
}

function verificarFimOuTrocas() {
    const p1Vivo = estadoBatalha.p1Party.some(pk => pk.hp > 0);
    const p2Vivo = estadoBatalha.p2Party.some(pk => pk.hp > 0);

    if (!p1Vivo || !p2Vivo) {
        estadoBatalha.encerrada = true;
        const vencedor = p1Vivo ? 'Sua Equipe' : 'CPU';
        adicionarLogBatalha(`🏆 <strong>FIM DE BATALHA! Vencedor: ${vencedor}!</strong>`);
        atualizarUIBatalha();
        renderizarControlesBatalha();
        return;
    }

    if (estadoBatalha.p2.hp <= 0) {
        const proxCpu = estadoBatalha.p2Party.findIndex(pk => pk.hp > 0);
        if (proxCpu !== -1) {
            estadoBatalha.p2Idx = proxCpu;
            adicionarLogBatalha(`🔄 CPU enviou <strong>${estadoBatalha.p2.name}</strong>!`);
            aplicarHabilidadeEntrada(estadoBatalha.p2, estadoBatalha.p1);
        }
    }

    if (estadoBatalha.p1.hp <= 0) {
        estadoBatalha.aguardandoTrocaP1 = true;
    }

    atualizarUIBatalha();
    renderizarControlesBatalha();
}

async function executarTurnoBatalha(moveIdxJogador) {
    if (!estadoBatalha || estadoBatalha.encerrada || estadoBatalha.aguardandoTrocaP1) return;
    const { p1, p2 } = estadoBatalha;
    const moveP1 = p1.moves[moveIdxJogador];
    const melhorMoveP2 = await escolherMelhorMoveCPU();

    adicionarLogBatalha(`<hr style="border-color:#333; margin:6px 0;"><strong>--- Turno ${estadoBatalha.turno} ---</strong>`);

    let speedP1 = p1.stats.speed * multEstagio(p1.stages.speed);
    if (p1.status === 'par') speedP1 *= 0.5;
    let speedP2 = p2.stats.speed * multEstagio(p2.stages.speed);
    if (p2.status === 'par') speedP2 *= 0.5;

    const p1Primeiro = (moveP1.priority || 0) > (melhorMoveP2.priority || 0) ||
        ((moveP1.priority || 0) === (melhorMoveP2.priority || 0) && speedP1 >= speedP2);

    const ordem = p1Primeiro ? [[p1, p2, moveP1], [p2, p1, melhorMoveP2]] : [[p2, p1, melhorMoveP2], [p1, p2, moveP1]];

    for (const [atq, def, mv] of ordem) {
        if (atq.hp > 0 && def.hp > 0 && !estadoBatalha.encerrada) {
            if (podeAtacar(atq)) await calcularDanoAtaque(atq, def, mv);
            atualizarUIBatalha();
        }
    }

    if (p1.hp > 0) await aplicarFimDeTurnoEClima(p1);
    if (p2.hp > 0) await aplicarFimDeTurnoEClima(p2);

    if (estadoBatalha.clima !== 'none') {
        estadoBatalha.turnosClima--;
        if (estadoBatalha.turnosClima <= 0) {
            adicionarLogBatalha(`🌤️ O clima voltou ao normal.`);
            estadoBatalha.clima = 'none';
        }
    }

    estadoBatalha.turno++;
    verificarFimOuTrocas();
}
