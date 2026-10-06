function escapeHTML(str) {
    if (!str) return '';
    return str.toString().replace(/[&<>'"]/g, tag => 
        ({'&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'}[tag] || tag)
    );
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

let todosPokemon = [];
let todosMoves = []; 
let todasAbilities = [];
let pokemonAtualParaMoves = []; 

let isShiny = false;
let currentPokemonNormalUrl = '';
let currentPokemonShinyUrl = '';

const moveCache = {};
const abilityCache = {};
const cacheRelacoesTipos = {};

let timesSalvos = [[], [], [], [], [], []];
try {
    const mem = localStorage.getItem('dexke_times');
    if(mem) timesSalvos = JSON.parse(mem);
} catch (e) {
    localStorage.removeItem('dexke_times');
}

let timeAtualIndex = 0;
let modoSelecaoTimeSlot = null; 

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
            const pTypes = mapTipos[p.name] ? mapTipos[p.name].filter(Boolean) : []; 
            return { 
                name: escapeHTML(p.name), 
                id: parseInt(parts[parts.length - 2]),
                types: pTypes 
            };
        });
        
        todosMoves = (await resMoves.json()).results.map(m => ({ name: escapeHTML(m.name) }));
        todasAbilities = (await resAbil.json()).results.map(a => ({ name: escapeHTML(a.name) }));
        
        document.getElementById('loading-global').style.display = 'none';
        const abaDex = document.getElementById('aba-dexke');
        abaDex.classList.remove('hidden');
        abaDex.classList.add('active'); 

        filtrarLista();
        filtrarMovesGlobal();
        filtrarAbilitiesGlobal();
        renderizarTime();

    } catch (e) { 
        document.getElementById('loading-global').innerHTML = "❌ Erro de conexão com a PokéAPI. Tente recarregar a página.";
    }
}

function mudarAba(event, abaId) {
    document.querySelectorAll('.aba-content').forEach(el => {
        el.classList.remove('active');
        el.classList.add('hidden');
    });
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    
    const abaAlvo = document.getElementById(`aba-${abaId}`);
    abaAlvo.classList.remove('hidden');
    abaAlvo.classList.add('active');
    
    if(event && event.target) event.target.classList.add('active');
    if(abaId === 'typechart') gerarTabelaDeTiposGlobal();
}

function iniciarSelecaoTime(indexSlot) {
    modoSelecaoTimeSlot = indexSlot;
    mudarAba(null, 'dexke'); 
    document.getElementById('selecao-time-banner').style.display = 'flex'; 
}

function cancelarSelecaoTime() {
    modoSelecaoTimeSlot = null;
    document.getElementById('selecao-time-banner').style.display = 'none';
    mudarAba(null, 'teams');
}

function filtrarLista() {
    const termo = escapeHTML(document.getElementById('searchInput').value.toLowerCase());
    const gen = document.getElementById('genFilter').value;
    const tipoFiltro = document.getElementById('typeFilter').value;
    const list = document.getElementById('pokemon-list');
    
    const limites = {
        'all': [1, 1025], 'rby': [1, 151], 'frlg': [1, 151], 'lgpe': [1, 151],
        'gsc': [152, 251], 'hgss': [152, 251], 'rse': [252, 386], 'oras': [252, 386],
        'dppt': [387, 493], 'bdsp': [387, 493], 'bw': [494, 649], 'xy': [650, 721], 
        'za': [650, 721], 'sm': [722, 809], 'swsh': [810, 898], 'la': [899, 905], 'sv': [906, 1025]
    };

    const [min, max] = limites[gen];
    
    const filtrados = todosPokemon.filter(p => {
        const atendeGen = p.id >= min && p.id <= max;
        const atendeBusca = p.name.includes(termo) || p.id == termo;
        const atendeTipo = tipoFiltro === 'all' || p.types.includes(tipoFiltro);
        return atendeGen && atendeBusca && atendeTipo;
    });
    
    list.innerHTML = filtrados.map(p => {
        const badgesHtml = p.types.map(t => `<span class="list-type-badge" style="background-color: ${coresTipos[t]}">${t}</span>`).join('');
        return `
        <div class="list-item" onclick="tratarCliquePokemon(${p.id})">
            <div class="list-img-box"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png" loading="lazy"></div>
            <div class="list-info">
                <span class="list-name">${p.name.replace(/-/g, ' ')}</span>
                <span style="font-size:12px; color:#777">#${p.id.toString().padStart(3, '0')}</span>
                <div class="list-types">${badgesHtml}</div>
            </div>
        </div>
        `;
    }).join('');
}

function filtrarMovesGlobal() {
    const termo = escapeHTML(document.getElementById('searchMoveInput').value.toLowerCase().trim().replace(/ /g, '-'));
    const filtrados = todosMoves.filter(m => m.name.includes(termo)).slice(0, 100);
    
    document.getElementById('moves-list').innerHTML = filtrados.map(m => `
        <div class="list-item" onclick="abrirDetalheMove('${m.name}')" style="justify-content: space-between;">
            <span class="list-name">${m.name.replace(/-/g, ' ')}</span>
            <span id="badge-glb-${m.name}" class="class-badge" style="background:#ddd; color:#fff;">...</span>
        </div>
    `).join('');

    filtrados.forEach(async m => {
        if(!moveCache[m.name]) {
            try { moveCache[m.name] = await (await fetch(`https://pokeapi.co/api/v2/move/${m.name}`)).json(); } 
            catch(e) { return; }
        }
        const badge = document.getElementById(`badge-glb-${m.name}`);
        if(badge) {
            const cls = moveCache[m.name].damage_class.name;
            badge.textContent = getIconeClasse(cls);
            badge.className = `class-badge class-${cls}`;
        }
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
        cancelarSelecaoTime(); 
        renderizarTime();
    } else {
        abrirDetalhes(id);
    }
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
        totalStats += s.base_stat;
        return `<div class="stat-row"><span style="text-transform: capitalize;">${escapeHTML(s.stat.name).replace(/-/g, ' ')}</span><strong>${s.base_stat}</strong></div>`;
    }).join('');
    document.getElementById('detail-total-stats').textContent = totalStats;

    calcularDano(p.types);
    buscarEvolucoes(p.species.url);
}

function toggleShiny() {
    isShiny = !isShiny;
    document.getElementById('detail-img').src = isShiny ? currentPokemonShinyUrl : currentPokemonNormalUrl;
    document.getElementById('shiny-toggle').style.color = isShiny ? '#f1c40f' : '#ccc';
}

function getIconeClasse(classe) {
    if(classe === 'physical') return '⚔️ FIS';
    if(classe === 'special') return '🔮 ESP';
    return '🛡 STA';
}

async function carregarMovesDoPokemon() {
    const container = document.getElementById('detail-moves-list');
    container.innerHTML = "<i>Carregando dados precisos...</i>";
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
    if (levelMoves.length > 0) finalHtml += '<div class="move-section-title">Aprende por Nível</div>' + levelMoves.map(m => m.html).join('');
    if (machineMoves.length > 0) finalHtml += '<div class="move-section-title">Aprende por Máquina</div>' + machineMoves.join('');
    container.innerHTML = finalHtml || "Nenhum golpe encontrado.";
}

async function abrirDetalheMove(nome) {
    document.getElementById('move-modal').classList.remove('hidden');
    if(!moveCache[nome]) moveCache[nome] = await (await fetch(`https://pokeapi.co/api/v2/move/${nome}`)).json();
    const move = moveCache[nome];
    
    document.getElementById('gm-name').textContent = move.name.replace(/-/g, ' ');
    document.getElementById('gm-type').textContent = move.type.name;
    document.getElementById('gm-type').style.backgroundColor = coresTipos[move.type.name];
    document.getElementById('gm-power').textContent = move.power || '--';
    document.getElementById('gm-accuracy').textContent = move.accuracy ? move.accuracy + '%' : '--';
    document.getElementById('gm-pp').textContent = move.pp;
    document.getElementById('gm-class').textContent = getIconeClasse(move.damage_class.name);
    document.getElementById('gm-class').className = `class-badge class-${move.damage_class.name}`;
    
    const entry = move.flavor_text_entries.find(e => e.language.name === 'en');
    document.getElementById('gm-desc').textContent = entry ? entry.flavor_text.replace(/\n|\f/g, ' ') : 'Sem descrição.';
}

async function abrirDetalheAbility(nome) {
    document.getElementById('ability-modal').classList.remove('hidden');
    document.getElementById('ab-name').textContent = nome.replace(/-/g, ' ');
    document.getElementById('ab-desc').textContent = "Carregando...";
    if(!abilityCache[nome]) abilityCache[nome] = await (await fetch(`https://pokeapi.co/api/v2/ability/${nome}`)).json();
    const entry = abilityCache[nome].flavor_text_entries.find(e => e.language.name === 'en');
    document.getElementById('ab-desc').textContent = entry ? entry.flavor_text.replace(/\n|\f/g, ' ') : 'Sem descrição.';
}

function fecharModal(modalId) { document.getElementById(modalId).classList.add('hidden'); }

async function calcularDano(tiposPokemon) {
    const container = document.getElementById('detail-damage');
    container.innerHTML = "Calculando...";
    let multiplicadores = {};
    Object.keys(coresTipos).forEach(t => multiplicadores[t] = 1); 

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
    container.innerHTML = html || "<p>Recebe dano normal de tudo.</p>";
}

async function buscarEvolucoes(url) {
    const container = document.getElementById('detail-evolutions');
    try {
        const spcData = await (await fetch(url)).json();
        const evoData = await (await fetch(spcData.evolution_chain.url)).json();
        let cadeia = [], atual = evoData.chain;
        while (atual) {
            cadeia.push({ name: escapeHTML(atual.species.name), id: atual.species.url.split('/')[6] });
            atual = atual.evolves_to[0]; 
        }
        container.innerHTML = cadeia.map((c, i) => `
            <div class="evo-item" onclick="fecharModal('pokemon-modal'); abrirDetalhes(${c.id})">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${c.id}.png">
                <div>${c.name}</div>
            </div>
            ${i < cadeia.length - 1 ? '<div class="evo-arrow">➜</div>' : ''}
        `).join('');
    } catch (e) { container.innerHTML = "Linha evolutiva indisponível."; }
}

function mudarTimeSelecionado() {
    timeAtualIndex = parseInt(document.getElementById('team-selector').value);
    renderizarTime();
}

function removerDoTime(indexLocal) {
    timesSalvos[timeAtualIndex][indexLocal] = null; 
    localStorage.setItem('dexke_times', JSON.stringify(timesSalvos));
    renderizarTime();
}

async function renderizarTime() {
    const time = timesSalvos[timeAtualIndex];
    while(time.length < 6) time.push(null);
    let htmlSlots = '';
    for(let i=0; i<6; i++) {
        if(time[i]) {
            htmlSlots += `<div class="team-slot" onclick="tratarCliquePokemon(${time[i].id})"><div class="team-slot-remove" onclick="event.stopPropagation(); removerDoTime(${i})">X</div><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${time[i].id}.png"><div class="team-slot-name">${escapeHTML(time[i].name).replace(/-/g, ' ')}</div></div>`;
        } else {
            htmlSlots += `<div class="team-slot" style="background:transparent; border: 2px dashed #999;" onclick="iniciarSelecaoTime(${i})"><span style="color:#999; font-size:32px;">+</span></div>`;
        }
    }
    document.getElementById('team-slots').innerHTML = htmlSlots;
    gerarTabelaFraquezas(time.filter(p => p !== null));
}

async function gerarTabelaFraquezas(timeValido) {
    const container = document.getElementById('team-analysis-table');
    if (timeValido.length === 0) return container.innerHTML = "<p style='color:#777; font-size: 14px;'>Adicione Pokémon para ver a análise cruzada.</p>";
    container.innerHTML = "<i>Gerando tabela de análise...</i>";
    
    let tabela = '<table class="type-table"><tr><th style="background:#444">Atq \\ Def</th>';
    timeValido.forEach(p => tabela += `<th>${escapeHTML(p.name).substring(0,4)}.</th>`);
    tabela += '</tr>';

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
    
    tabela += '<tr><th style="background:#444; color:white; font-size: 10px;">DEFESA ➔<br><br>ATAQUE ⬇</th>';
    todosOsTipos.forEach(t => {
        tabela += `<th style="background-color:${coresTipos[t]}; height: 90px; vertical-align: bottom;">
                       <div style="writing-mode: vertical-rl; transform: rotate(180deg); margin: auto; padding-top: 5px; color: white; text-shadow: 1px 1px 1px #000; letter-spacing: 1px; font-size: 11px;">
                           ${t.toUpperCase()}
                       </div>
                   </th>`;
    });
    tabela += '</tr>';

    for (let tipoAtq of todosOsTipos) {
        tabela += `<tr>
            <td style="background-color:${coresTipos[tipoAtq]}; text-align: center; padding: 4px; border: 1px solid #ddd;">
                <span style="color:white; font-weight:bold; text-transform:uppercase; text-shadow: 1px 1px 1px #000; font-size: 11px; letter-spacing: 1px;">
                    ${escapeHTML(tipoAtq)}
                </span>
            </td>`;
        
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
