// --- SISTEMA DE IDIOMAS (i18n) ---
const dicionario = {
    pt_BR: {
        tab_dexke: "Dexke", tab_moves: "Moves", tab_abilities: "Habilidades", tab_types: "Tipos", tab_teams: "Times",
        loading: "🔄 Carregando dados da PokéAPI...", loading_sub: "Isso pode levar alguns segundos na primeira vez.",
        choosing_poke: "Escolhendo Pokémon para o Time...", cancel: "Cancelar",
        search_poke: "Buscar Pokémon...", search_move: "Buscar Move...", search_ability: "Buscar Habilidade...",
        all_regions: "Todas as Regiões", all_types: "Todos os Tipos",
        type_chart_title: "Tabela de Eficácia de Tipos",
        team_analysis: "Análise de Fraquezas do Time",
        footer_made: "Feito por Matheusduar1",
        basic_data: "Dados Básicos", height: "Altura:", weight: "Peso:", abilities: "Habilidades:",
        base_stats: "Base Stats", total: "Total:",
        weak_res: "Fraquezas e Resistências", evo_chain: "Linha Evolutiva",
        available_moves: "Moves Disponíveis", load_moves: "Carregar Lista de Moves",
        move_type: "Tipo:", move_power: "Poder:", move_acc: "Precisão:", move_class: "Classe:",
        team_1: "Time 1", team_2: "Time 2", team_3: "Time 3", team_4: "Time 4", team_5: "Time 5", team_6: "Time 6",
        js_load_moves: "<i>Carregando dados precisos...</i>",
        js_lvl_moves: "Aprende por Nível", js_tm_moves: "Aprende por Máquina", js_no_moves: "Nenhum golpe encontrado.",
        js_calc: "Calculando...", js_normal_dmg: "<p>Recebe dano normal de tudo.</p>",
        js_no_evo: "Linha evolutiva indisponível.",
        js_add_poke: "<p style='color:#777; font-size: 14px;'>Adicione Pokémon para ver a análise cruzada.</p>",
        js_gen_table: "<i>Gerando tabela de análise...</i>",
        js_atk_def: "Atq \\ Def", js_def_atk: "DEFESA ➔<br><br>ATAQUE ⬇",
        js_chart_desc: "Leia a linha do <strong style='color:var(--primary)'>ATAQUE</strong> na esquerda e cruze com a coluna da <strong style='color:var(--primary)'>DEFESA</strong> no topo.",
        js_no_desc: "Sem descrição disponível."
    },
    en_US: {
        tab_dexke: "Dexke", tab_moves: "Moves", tab_abilities: "Abilities", tab_types: "Type Chart", tab_teams: "Teams",
        loading: "🔄 Loading PokéAPI data...", loading_sub: "This may take a few seconds the first time.",
        choosing_poke: "Choosing Pokémon for the Team...", cancel: "Cancel",
        search_poke: "Search Pokémon...", search_move: "Search Move...", search_ability: "Search Ability...",
        all_regions: "All Regions", all_types: "All Types",
        type_chart_title: "Type Matchup Chart",
        team_analysis: "Team Weakness Analysis",
        footer_made: "Made by Matheusduar1",
        basic_data: "Basic Data", height: "Height:", weight: "Weight:", abilities: "Abilities:",
        base_stats: "Base Stats", total: "Total:",
        weak_res: "Weaknesses & Resistances", evo_chain: "Evolution Chain",
        available_moves: "Available Moves", load_moves: "Load Moves List",
        move_type: "Type:", move_power: "Power:", move_acc: "Accuracy:", move_class: "Class:",
        team_1: "Team 1", team_2: "Team 2", team_3: "Team 3", team_4: "Team 4", team_5: "Team 5", team_6: "Team 6",
        js_load_moves: "<i>Loading precise data...</i>",
        js_lvl_moves: "Learned by Level Up", js_tm_moves: "Learned by Machine (TM/HM)", js_no_moves: "No moves found.",
        js_calc: "Calculating...", js_normal_dmg: "<p>Takes normal damage from everything.</p>",
        js_no_evo: "Evolution chain unavailable.",
        js_add_poke: "<p style='color:#777; font-size: 14px;'>Add Pokémon to see the cross analysis.</p>",
        js_gen_table: "<i>Generating analysis table...</i>",
        js_atk_def: "Atk \\ Def", js_def_atk: "DEFENSE ➔<br><br>ATTACK ⬇",
        js_chart_desc: "Read the <strong style='color:var(--primary)'>ATTACK</strong> row on the left and cross with the <strong style='color:var(--primary)'>DEFENSE</strong> column on top.",
        js_no_desc: "No description available."
    },
    es_ES: {
        tab_dexke: "Dexke", tab_moves: "Movimientos", tab_abilities: "Habilidades", tab_types: "Tipos", tab_teams: "Equipos",
        loading: "🔄 Cargando datos de PokéAPI...", loading_sub: "Esto puede tomar unos segundos la primera vez.",
        choosing_poke: "Eligiendo Pokémon para el Equipo...", cancel: "Cancelar",
        search_poke: "Buscar Pokémon...", search_move: "Buscar Movimiento...", search_ability: "Buscar Habilidad...",
        all_regions: "Todas las Regiones", all_types: "Todos los Tipos",
        type_chart_title: "Tabla de Eficacia de Tipos",
        team_analysis: "Análisis de Debilidades del Equipo",
        footer_made: "Hecho por Matheusduar1",
        basic_data: "Datos Básicos", height: "Altura:", weight: "Peso:", abilities: "Habilidades:",
        base_stats: "Estadísticas Base", total: "Total:",
        weak_res: "Debilidades y Resistencias", evo_chain: "Cadena Evolutiva",
        available_moves: "Movimientos Disponibles", load_moves: "Cargar Lista de Movimientos",
        move_type: "Tipo:", move_power: "Poder:", move_acc: "Precisión:", move_class: "Clase:",
        team_1: "Equipo 1", team_2: "Equipo 2", team_3: "Equipo 3", team_4: "Equipo 4", team_5: "Equipo 5", team_6: "Equipo 6",
        js_load_moves: "<i>Cargando datos precisos...</i>",
        js_lvl_moves: "Aprende por Nivel", js_tm_moves: "Aprende por Máquina (MT/MO)", js_no_moves: "No se encontraron movimientos.",
        js_calc: "Calculando...", js_normal_dmg: "<p>Recibe daño normal de todo.</p>",
        js_no_evo: "Cadena evolutiva no disponible.",
        js_add_poke: "<p style='color:#777; font-size: 14px;'>Añade Pokémon para ver el análisis cruzado.</p>",
        js_gen_table: "<i>Generando tabla de análisis...</i>",
        js_atk_def: "Atq \\ Def", js_def_atk: "DEFENSA ➔<br><br>ATAQUE ⬇",
        js_chart_desc: "Lee la fila de <strong style='color:var(--primary)'>ATAQUE</strong> a la izquierda y cruza con la columna de <strong style='color:var(--primary)'>DEFENSA</strong> arriba.",
        js_no_desc: "Sin descripción disponible."
    }
};

let idiomaAtual = 'pt_BR';
function t(key) { return dicionario[idiomaAtual][key] || key; }

function mudarIdioma(lang) {
    idiomaAtual = lang;
    
    // Atualiza os textos fixos do HTML
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerHTML = dicionario[lang][el.getAttribute('data-i18n')];
    });

    // Atualiza os placeholders de input
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        el.placeholder = dicionario[lang][el.getAttribute('data-i18n-ph')];
    });

    // Atualiza as tabelas se estiverem abertas
    document.getElementById('desc-chart-global').innerHTML = t('js_chart_desc');
    renderizarTime(); 
    if(document.getElementById('aba-typechart').classList.contains('active')) {
        document.getElementById('global-type-chart').innerHTML = ''; // Força recriar
        gerarTabelaDeTiposGlobal();
    }
}

// --- FUNÇÕES CORE ---
function escapeHTML(str) {
    if (!str) return '';
    return str.toString().replace(/[&<>'"]/g, tag => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'}[tag] || tag));
}

function getCorEficacia(mult) {
    if (mult >= 4) return { bg: '#e74c3c', text: 'white' };    
    if (mult === 2) return { bg: '#F08030', text: 'white' };   
    if (mult === 1) return { bg: '#f7f7f7', text: 'black' };   
    if (mult === 0.5) return { bg: '#999999', text: 'white' }; 
    if (mult === 0.25) return { bg: '#d9d9d9', text: 'black' };
    if (mult === 0) return { bg: '#1a1a1a', text: 'white' };   
    return { bg: '#fff', text: 'black' };
}

function formatarMultiplicador(mult) {
    if (mult === 0.5) return '½';
    if (mult === 0.25) return '¼';
    return mult;
}

const coresTipos = {
    normal: '#A8A878', fighting: '#C03028', flying: '#A890F0', poison: '#A040A0', ground: '#E0C068', rock: '#B8A038',
    bug: '#A8B820', ghost: '#705898', steel: '#B8B8D0', fire: '#F08030', water: '#6890F0', grass: '#78C850', 
    electric: '#F8D030', psychic: '#F85888', ice: '#98D8D8', dragon: '#7038F8', dark: '#705848', fairy: '#EE99AC'
};

let todosPokemon = [], todosMoves = [], todasAbilities = [], pokemonAtualParaMoves = []; 
let isShiny = false, currentPokemonNormalUrl = '', currentPokemonShinyUrl = '';
const moveCache = {}, abilityCache = {}, cacheRelacoesTipos = {};

let timesSalvos = [[], [], [], [], [], []];
try { const mem = localStorage.getItem('dexke_times'); if(mem) timesSalvos = JSON.parse(mem); } 
catch (e) { localStorage.removeItem('dexke_times'); }

let timeAtualIndex = 0, modoSelecaoTimeSlot = null; 

async function iniciarApp() {
    try {
        const [resPoke, resMoves, resAbil] = await Promise.all([
            fetch('https://pokeapi.co/api/v2/pokemon?limit=1025'),
            fetch('https://pokeapi.co/api/v2/move?limit=1000'),
            fetch('https://pokeapi.co/api/v2/ability?limit=350')
        ]);

        const mapTipos = {};
        const promessasTipos = Object.keys(coresTipos).map(t => fetch(`https://pokeapi.co/api/v2/type/${t}`).then(r => r.json()));
        const dadosTipos = await Promise.all(promessasTipos);
        
        dadosTipos.forEach(tipoAPI => {
            tipoAPI.pokemon.forEach(p => {
                const nomePoke = p.pokemon.name;
                if(!mapTipos[nomePoke]) mapTipos[nomePoke] = [];
                mapTipos[nomePoke][p.slot - 1] = tipoAPI.name; 
            });
        });

        todosPokemon = (await resPoke.json()).results.map(p => {
            const parts = p.url.split('/');
            return { name: escapeHTML(p.name), id: parseInt(parts[parts.length - 2]), types: mapTipos[p.name] ? mapTipos[p.name].filter(Boolean) : [] };
        });
        
        todosMoves = (await resMoves.json()).results.map(m => ({ name: escapeHTML(m.name) }));
        todasAbilities = (await resAbil.json()).results.map(a => ({ name: escapeHTML(a.name) }));
        
        document.getElementById('loading-global').style.display = 'none';
        const abaDex = document.getElementById('aba-dexke');
        abaDex.classList.remove('hidden'); abaDex.classList.add('active'); 

        filtrarLista(); filtrarMovesGlobal(); filtrarAbilitiesGlobal(); renderizarTime();
    } catch (e) { document.getElementById('loading-global').innerHTML = "❌ Erro de conexão com a PokéAPI."; }
}

function mudarAba(event, abaId) {
    document.querySelectorAll('.aba-content').forEach(el => { el.classList.remove('active'); el.classList.add('hidden'); });
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    
    const abaAlvo = document.getElementById(`aba-${abaId}`);
    abaAlvo.classList.remove('hidden'); abaAlvo.classList.add('active');
    
    if(event && event.target) event.target.classList.add('active');
    if(abaId === 'typechart') { document.getElementById('global-type-chart').innerHTML = ''; gerarTabelaDeTiposGlobal(); }
}

function iniciarSelecaoTime(indexSlot) {
    modoSelecaoTimeSlot = indexSlot; mudarAba(null, 'dexke'); 
    document.getElementById('selecao-time-banner').style.display = 'flex'; 
}

function cancelarSelecaoTime() {
    modoSelecaoTimeSlot = null; document.getElementById('selecao-time-banner').style.display = 'none'; mudarAba(null, 'teams');
}

function filtrarLista() {
    const termo = escapeHTML(document.getElementById('searchInput').value.toLowerCase());
    const gen = document.getElementById('genFilter').value, tipoFiltro = document.getElementById('typeFilter').value;
    const limites = {
        'all': [1, 1025], 'rby': [1, 151], 'frlg': [1, 151], 'lgpe': [1, 151], 'gsc': [152, 251], 'hgss': [152, 251], 
        'rse': [252, 386], 'oras': [252, 386], 'dppt': [387, 493], 'bdsp': [387, 493], 'bw': [494, 649], 'xy': [650, 721], 
        'za': [650, 721], 'sm': [722, 809], 'swsh': [810, 898], 'la': [899, 905], 'sv': [906, 1025]
    };
    const [min, max] = limites[gen];
    
    document.getElementById('pokemon-list').innerHTML = todosPokemon.filter(p => p.id >= min && p.id <= max && (p.name.includes(termo) || p.id == termo) && (tipoFiltro === 'all' || p.types.includes(tipoFiltro))).map(p => `
        <div class="list-item" onclick="tratarCliquePokemon(${p.id})">
            <div class="list-img-box"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png" loading="lazy"></div>
            <div class="list-info"><span class="list-name">${p.name.replace(/-/g, ' ')}</span><span style="font-size:12px; color:#777">#${p.id.toString().padStart(3, '0')}</span>
            <div class="list-types">${p.types.map(t => `<span class="list-type-badge" style="background-color: ${coresTipos[t]}">${t}</span>`).join('')}</div></div>
        </div>`).join('');
}

function filtrarMovesGlobal() {
    const termo = escapeHTML(document.getElementById('searchMoveInput').value.toLowerCase().trim().replace(/ /g, '-'));
    const filtrados = todosMoves.filter(m => m.name.includes(termo)).slice(0, 100);
    document.getElementById('moves-list').innerHTML = filtrados.map(m => `<div class="list-item" onclick="abrirDetalheMove('${m.name}')" style="justify-content: space-between;"><span class="list-name">${m.name.replace(/-/g, ' ')}</span><span id="badge-glb-${m.name}" class="class-badge" style="background:#ddd; color:#fff;">...</span></div>`).join('');
    filtrados.forEach(async m => {
        if(!moveCache[m.name]) { try { moveCache[m.name] = await (await fetch(`https://pokeapi.co/api/v2/move/${m.name}`)).json(); } catch(e) { return; } }
        const badge = document.getElementById(`badge-glb-${m.name}`);
        if(badge) { const cls = moveCache[m.name].damage_class.name; badge.textContent = getIconeClasse(cls); badge.className = `class-badge class-${cls}`; }
    });
}

function filtrarAbilitiesGlobal() {
    const termo = escapeHTML(document.getElementById('searchAbilityInput').value.toLowerCase().trim().replace(/ /g, '-'));
    document.getElementById('abilities-list').innerHTML = todasAbilities.filter(a => a.name.includes(termo)).slice(0, 100).map(a => `<div class="list-item" onclick="abrirDetalheAbility('${a.name}')"><span class="list-name">${a.name.replace(/-/g, ' ')}</span></div>`).join('');
}

async function tratarCliquePokemon(id) {
    if (modoSelecaoTimeSlot !== null) {
        const p = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)).json();
        timesSalvos[timeAtualIndex][modoSelecaoTimeSlot] = { id: p.id, name: escapeHTML(p.name), types: p.types.map(t => escapeHTML(t.type.name)) };
        localStorage.setItem('dexke_times', JSON.stringify(timesSalvos));
        cancelarSelecaoTime(); renderizarTime();
    } else abrirDetalhes(id);
}

async function abrirDetalhes(id) {
    document.getElementById('pokemon-modal').classList.remove('hidden');
    document.getElementById('detail-moves-list').innerHTML = ''; 
    const p = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)).json();
    pokemonAtualParaMoves = p.moves; 

    isShiny = false;
    currentPokemonNormalUrl = p.sprites.other['official-artwork'].front_default || p.sprites.front_default;
    currentPokemonShinyUrl = p.sprites.other['official-artwork'].front_shiny || p.sprites.front_shiny || currentPokemonNormalUrl;
    
    document.getElementById('shiny-toggle').style.color = '#ccc';
    document.getElementById('detail-img').src = currentPokemonNormalUrl;
    
    document.getElementById('detail-name').textContent = escapeHTML(p.name).replace(/-/g, ' ');
    document.getElementById('detail-id').textContent = '#' + p.id.toString().padStart(3, '0');
    document.getElementById('detail-types').innerHTML = p.types.map(t => `<span class="type-badge" style="background-color: ${coresTipos[t.type.name]}">${escapeHTML(t.type.name)}</span>`).join('');
    document.getElementById('detail-height').textContent = (p.height / 10).toFixed(1);
    document.getElementById('detail-weight').textContent = (p.weight / 10).toFixed(1);
    document.getElementById('detail-abilities').innerHTML = p.abilities.map(a => `<span onclick="abrirDetalheAbility('${a.ability.name}')">${escapeHTML(a.ability.name).replace(/-/g, ' ')}</span>`).join(' | ');

    let totalStats = 0;
    document.getElementById('detail-stats').innerHTML = p.stats.map(s => {
        totalStats += s.base_stat; return `<div class="stat-row"><span style="text-transform: capitalize;">${escapeHTML(s.stat.name).replace(/-/g, ' ')}</span><strong>${s.base_stat}</strong></div>`;
    }).join('');
    document.getElementById('detail-total-stats').textContent = totalStats;

    calcularDano(p.types); buscarEvolucoes(p.species.url);
}

function toggleShiny() {
    isShiny = !isShiny;
    document.getElementById('detail-img').src = isShiny ? currentPokemonShinyUrl : currentPokemonNormalUrl;
    document.getElementById('shiny-toggle').style.color = isShiny ? '#f1c40f' : '#ccc';
}

function getIconeClasse(classe) { return classe === 'physical' ? '⚔️ FIS' : (classe === 'special' ? '🔮 ESP' : '🛡 STA'); }

async function carregarMovesDoPokemon() {
    const container = document.getElementById('detail-moves-list');
    container.innerHTML = t('js_load_moves');
    let levelMoves = [], machineMoves = [];

    for (let m of pokemonAtualParaMoves) {
        const detalhe = m.version_group_details[m.version_group_details.length - 1];
        if(!detalhe) continue;
        const metodo = detalhe.move_learn_method.name;
        if(metodo === 'level-up' || metodo === 'machine') {
            const nome = m.move.name;
            if(!moveCache[nome]) moveCache[nome] = await (await fetch(`https://pokeapi.co/api/v2/move/${nome}`)).json();
            const moveData = moveCache[nome];
            const htmlLinha = `<div class="move-row" onclick="abrirDetalheMove('${escapeHTML(nome)}')"><div><strong>${escapeHTML(nome).replace(/-/g, ' ')}</strong> <span class="class-badge class-${moveData.damage_class.name}" style="margin-left:5px;">${getIconeClasse(moveData.damage_class.name)}</span></div><span class="move-lvl">${metodo === 'level-up' ? 'Lvl ' + detalhe.level_learned_at : 'TM/HM'}</span></div>`;
            if (metodo === 'level-up') levelMoves.push({ lvl: detalhe.level_learned_at, html: htmlLinha });
            else machineMoves.push(htmlLinha);
        }
    }
    levelMoves.sort((a, b) => a.lvl - b.lvl);
    let finalHtml = '';
    if (levelMoves.length > 0) finalHtml += `<div class="move-section-title">${t('js_lvl_moves')}</div>` + levelMoves.map(m => m.html).join('');
    if (machineMoves.length > 0) finalHtml += `<div class="move-section-title">${t('js_tm_moves')}</div>` + machineMoves.join('');
    container.innerHTML = finalHtml || t('js_no_moves');
}

async function abrirDetalheMove(nome) {
    document.getElementById('move-modal').classList.remove('hidden');
    if(!moveCache[nome]) moveCache[nome] = await (await fetch(`https://pokeapi.co/api/v2/move/${nome}`)).json();
    const move = moveCache[nome];
    
    document.getElementById('gm-name').textContent = move.name.replace(/-/g, ' ');
    document.getElementById('gm-type').textContent = move.type.name; document.getElementById('gm-type').style.backgroundColor = coresTipos[move.type.name];
    document.getElementById('gm-power').textContent = move.power || '--'; document.getElementById('gm-accuracy').textContent = move.accuracy ? move.accuracy + '%' : '--';
    document.getElementById('gm-pp').textContent = move.pp; document.getElementById('gm-class').textContent = getIconeClasse(move.damage_class.name); document.getElementById('gm-class').className = `class-badge class-${move.damage_class.name}`;
    
    const engEntry = move.flavor_text_entries.find(e => e.language.name === 'en'); // PokeAPI is mostly english
    document.getElementById('gm-desc').textContent = engEntry ? engEntry.flavor_text.replace(/\n|\f/g, ' ') : t('js_no_desc');
}

async function abrirDetalheAbility(nome) {
    document.getElementById('ability-modal').classList.remove('hidden');
    document.getElementById('ab-name').textContent = nome.replace(/-/g, ' '); document.getElementById('ab-desc').innerHTML = t('js_load_moves');
    if(!abilityCache[nome]) abilityCache[nome] = await (await fetch(`https://pokeapi.co/api/v2/ability/${nome}`)).json();
    const engEntry = abilityCache[nome].flavor_text_entries.find(e => e.language.name === 'en');
    document.getElementById('ab-desc').textContent = engEntry ? engEntry.flavor_text.replace(/\n|\f/g, ' ') : t('js_no_desc');
}

function fecharModal(modalId) { document.getElementById(modalId).classList.add('hidden'); }

async function calcularDano(tiposPokemon) {
    const container = document.getElementById('detail-damage'); container.innerHTML = t('js_calc');
    let multiplicadores = {}; Object.keys(coresTipos).forEach(t => multiplicadores[t] = 1); 

    for (let t of tiposPokemon) {
        if (!cacheRelacoesTipos[t.type.name]) cacheRelacoesTipos[t.type.name] = (await (await fetch(t.type.url)).json()).damage_relations;
        const rel = cacheRelacoesTipos[t.type.name];
        rel.double_damage_from.forEach(x => multiplicadores[x.name] *= 2);
        rel.half_damage_from.forEach(x => multiplicadores[x.name] *= 0.5);
        rel.no_damage_from.forEach(x => multiplicadores[x.name] *= 0);
    }
    let html = '';
    for (let [tipo, mult] of Object.entries(multiplicadores)) {
        if (mult === 1) continue; 
        const estilo = getCorEficacia(mult);
        html += `<div class="dmg-item" style="background-color:${estilo.bg}; color:${estilo.text};"><span style="text-transform:capitalize">${escapeHTML(tipo)}</span> <span>${formatarMultiplicador(mult)}x</span></div>`;
    }
    container.innerHTML = html || t('js_normal_dmg');
}

async function buscarEvolucoes(url) {
    const container = document.getElementById('detail-evolutions');
    try {
        const spcData = await (await fetch(url)).json(); const evoData = await (await fetch(spcData.evolution_chain.url)).json();
        let cadeia = [], atual = evoData.chain;
        while (atual) { cadeia.push({ name: escapeHTML(atual.species.name), id: atual.species.url.split('/')[6] }); atual = atual.evolves_to[0]; }
        container.innerHTML = cadeia.map((c, i) => `
            <div class="evo-item" onclick="fecharModal('pokemon-modal'); abrirDetalhes(${c.id})"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${c.id}.png"><div>${c.name}</div></div>
            ${i < cadeia.length - 1 ? '<div class="evo-arrow">➜</div>' : ''}
        `).join('');
    } catch (e) { container.innerHTML = t('js_no_evo'); }
}

function mudarTimeSelecionado() { timeAtualIndex = parseInt(document.getElementById('team-selector').value); renderizarTime(); }
function removerDoTime(indexLocal) { timesSalvos[timeAtualIndex][indexLocal] = null; localStorage.setItem('dexke_times', JSON.stringify(timesSalvos)); renderizarTime(); }

async function renderizarTime() {
    const time = timesSalvos[timeAtualIndex]; while(time.length < 6) time.push(null);
    let htmlSlots = '';
    for(let i=0; i<6; i++) {
        if(time[i]) htmlSlots += `<div class="team-slot" onclick="tratarCliquePokemon(${time[i].id})"><div class="team-slot-remove" onclick="event.stopPropagation(); removerDoTime(${i})">X</div><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${time[i].id}.png"><div class="team-slot-name">${escapeHTML(time[i].name).replace(/-/g, ' ')}</div></div>`;
        else htmlSlots += `<div class="team-slot" style="background:transparent; border: 2px dashed #999;" onclick="iniciarSelecaoTime(${i})"><span style="color:#999; font-size:32px;">+</span></div>`;
    }
    document.getElementById('team-slots').innerHTML = htmlSlots;
    gerarTabelaFraquezas(time.filter(p => p !== null));
}

async function gerarTabelaFraquezas(timeValido) {
    const container = document.getElementById('team-analysis-table');
    if (timeValido.length === 0) return container.innerHTML = t('js_add_poke');
    container.innerHTML = t('js_gen_table');
    
    let tabela = `<table class="type-table"><tr><th style="background:#444">${t('js_atk_def')}</th>`;
    timeValido.forEach(p => tabela += `<th>${escapeHTML(p.name).substring(0,4)}.</th>`); tabela += '</tr>';

    for (let tipoAtq of Object.keys(coresTipos)) {
        tabela += `<tr><td style="background-color:${coresTipos[tipoAtq]}; color:white; font-weight:bold; text-transform:uppercase;">${tipoAtq.substring(0,3)}</td>`;
        for (let p of timeValido) {
            let mult = await calcularMultiplicadorExato(tipoAtq, p.types);
            const estilo = getCorEficacia(mult);
            tabela += `<td style="background-color:${estilo.bg}; color:${estilo.text}; font-weight: bold;">${formatarMultiplicador(mult)}x</td>`;
        }
        tabela += '</tr>';
    }
    container.innerHTML = tabela + '</table>';
}

async function gerarTabelaDeTiposGlobal() {
    const container = document.getElementById('global-type-chart');
    if (container.innerHTML.includes('<table')) return; 
    
    const todosOsTipos = Object.keys(coresTipos);
    let tabela = '<table class="type-table" style="width: 100%; max-width: 900px; margin: auto;">';
    
    tabela += `<tr><th style="background:#444; color:white; font-size: 10px;">${t('js_def_atk')}</th>`;
    todosOsTipos.forEach(t => {
        tabela += `<th style="background-color:${coresTipos[t]}; height: 90px; vertical-align: bottom;">
                       <div style="writing-mode: vertical-rl; transform: rotate(180deg); margin: auto; padding-top: 5px; color: white; text-shadow: 1px 1px 1px #000; letter-spacing: 1px; font-size: 11px;">${t.toUpperCase()}</div>
                   </th>`;
    });
    tabela += '</tr>';

    for (let tipoAtq of todosOsTipos) {
        tabela += `<tr><td style="background-color:${coresTipos[tipoAtq]}; text-align: center; padding: 4px; border: 1px solid #ddd;"><span style="color:white; font-weight:bold; text-transform:uppercase; text-shadow: 1px 1px 1px #000; font-size: 11px; letter-spacing: 1px;">${escapeHTML(tipoAtq)}</span></td>`;
        for (let tipoDef of todosOsTipos) {
            let mult = await calcularMultiplicadorExato(tipoAtq, [tipoDef]);
            const estilo = getCorEficacia(mult);
            tabela += `<td style="background-color:${estilo.bg}; color:${estilo.text}; font-weight: bold; font-size: 13px;">${formatarMultiplicador(mult)}</td>`;
        }
        tabela += '</tr>';
    }
    container.innerHTML = tabela + '</table>';
}

async function calcularMultiplicadorExato(tipoAtacante, tiposDefensor) {
    let mult = 1;
    for (let tipoDef of tiposDefensor) {
        if (!cacheRelacoesTipos[tipoDef]) cacheRelacoesTipos[tipoDef] = (await (await fetch(`https://pokeapi.co/api/v2/type/${tipoDef}`)).json()).damage_relations;
        const rel = cacheRelacoesTipos[tipoDef];
        if (rel.double_damage_from.find(t => t.name === tipoAtacante)) mult *= 2;
        if (rel.half_damage_from.find(t => t.name === tipoAtacante)) mult *= 0.5;
        if (rel.no_damage_from.find(t => t.name === tipoAtacante)) mult *= 0;
    }
    return mult;
}

iniciarApp();
