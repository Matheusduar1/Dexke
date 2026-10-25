// --- 1. SISTEMA DE IDIOMAS (i18n) E TRADUÇÃO DINÂMICA ---
const dicionario = {
    pt_BR: {
        tab_dexke: "Dex", tab_minhadex: "Minha Dex", tab_moves: "Moves", tab_abilities: "Habilidades", tab_items: "Itens", tab_natures: "Naturezas", tab_types: "Tipos", tab_teams: "Times", tab_battle: "⚔️ Batalha 1v1",
        tab_gba: "🎮 Emulador GBA / GBC", gba_title: "Emulador GBA / GBC", gba_desc: "Selecione o arquivo do seu jogo (.gba, .gbc, .gb ou .zip). A ROM é lida apenas no seu navegador e não é enviada para nenhum servidor.", gba_note: "O Dexke não inclui nem distribui ROMs. Use apenas jogos que você possui legalmente. A ROM fica salva só neste navegador e abre sozinha nas próximas vezes. Use \"Trocar ROM\" para mudar de jogo.", gba_reset: "Trocar ROM", gba_close: "Fechar emulador", gba_close_confirm: "Fechar o emulador? Salve o jogo dentro do próprio jogo antes: o progresso não salvo será perdido.", gba_console: "Console (só importa para arquivos .zip):",
        loading: "🔄 Carregando dados da PokéAPI...", loading_sub: "Isso pode levar alguns segundos na primeira vez.",
        choosing_poke: "Escolhendo Pokémon para o Time...", cancel: "Cancelar",
        search_poke: "Buscar Pokémon (Ex: Ursaluna, Bloodmoon)...", search_move: "Buscar Move...", search_ability: "Buscar Habilidade...", search_item: "Buscar Item...", search_nature: "Buscar Natureza...",
        all_regions: "Todas as Regiões & Especiais", all_types: "Todos os Tipos", type_chart_title: "Tabela de Eficácia de Tipos", team_analysis: "Análise de Fraquezas do Time",
        natures_title: "Tabela de Naturezas (+10% / -10%)",
        footer_made: "Feito por Matheusduar1",
        copyright: "Pokémon e todos os nomes e imagens relacionados são marcas registradas e propriedades exclusivas da Nintendo, Game Freak e The Pokémon Company. Dexke é um projeto não oficial, sem fins lucrativos, criado exclusivamente para fins educacionais e de estudo.",
        basic_data: "Dados Básicos", height: "Altura:", weight: "Peso:", abilities: "Habilidades:",
        base_stats: "Base Stats", total: "Total:", weak_res: "Fraquezas e Resistências", evo_chain: "Linha Evolutiva & Formas",
        available_moves: "Moves Disponíveis", load_moves: "Carregar Lista de Moves",
        move_type: "Tipo:", move_power: "Poder:", move_acc: "Precisão:", move_class: "Classe:",
        poke_with_ability: "Pokémon com esta Habilidade", poke_with_move: "Pokémon que aprendem este Move",
        team_1: "Time 1", team_2: "Time 2", team_3: "Time 3", team_4: "Time 4", team_5: "Time 5", team_6: "Time 6",
        your_pokemon: "Seu Pokémon (Lv. 100)", cpu_pokemon: "Pokémon da Máquina (Lv. 100)", random_cpu: "🎲 Aleatório",
        item_label: "Item:", nature_label: "Natureza:", ivs_label: "IVs (0 - 31) & Stats Finais:", moves_label: "Moves (Escolha 4):",
        start_battle: "⚔️ Iniciar Batalha 1v1!",
        js_load_moves: "<i>Carregando dados precisos...</i>", js_lvl_moves: "Aprende por Nível", js_tm_moves: "Aprende por Máquina", js_no_moves: "Nenhum golpe encontrado.",
        js_calc: "Calculando...", js_normal_dmg: "<p>Recebe dano normal de tudo.</p>", js_no_evo: "Linha evolutiva indisponível.",
        js_add_poke: "<p style='color:#777; font-size: 14px;'>Adicione Pokémon para ver a análise cruzada.</p>", js_gen_table: "<i>Gerando tabela de análise...</i>",
        js_atk_def: "Atq \\ Def", js_def_atk: "DEFESA ➔<br><br>ATAQUE ⬇",
        js_chart_desc: "Leia a linha do <strong style='color:var(--primary)'>ATAQUE</strong> na esquerda e cruze com a coluna da <strong style='color:var(--primary)'>DEFESA</strong> no topo.",
        js_no_desc: "Sem descrição disponível.", js_translating: "Traduzindo...",
        evo_lvl: "Nível", evo_trade: "Troca", evo_item: "Item:", evo_happy: "Felicidade", evo_special: "Forma Especial",
        minhadex_intro_title: "Bem-vindo à Minha Dex!",
        minhadex_intro_desc: "Nesta brincadeira, você é o mestre dos tipos! Olhe para a aparência de cada Pokémon e defina 1 ou 2 tipos que você acha que ele tem ou que combinariam muito melhor com ele.",
        minhadex_how_to_play: "📋 Resumo de Como Brincar:",
        minhadex_step1: "<strong>1. Escolha a Região:</strong> Escolha entre a Dex Completa ou uma região específica (Kanto, Johto, Hoenn, etc.).",
        minhadex_step2: "<strong>2. Veja os Pokémon em Ordem:</strong> Cada Pokémon aparecerá em ordem de número de Pokédex com sua arte oficial.",
        minhadex_step3: "<strong>3. Defina 1 ou 2 Tipos:</strong> Clique nos botões de tipos para definir o que você acha que ele é. Você pode desmarcar a qualquer momento clicando de novo.",
        minhadex_step4: "<strong>4. Catálogo Final:</strong> No fim (ou quando quiser finalizar), veja a lista completa com todas as suas escolhas e descubra se bateu com os tipos oficiais!",
        minhadex_region_label: "Selecione a Região ou Dex Completa:",
        minhadex_start_btn: "🚀 Começar Brincadeira!",
        minhadex_finish_btn: "🏁 Finalizar e Ver Resultados",
        minhadex_restart_confirm: "Tem certeza que deseja reiniciar? As escolhas desta rodada serão perdidas.",
        minhadex_progress_label: "Progresso:",
        minhadex_selected_types_label: "Tipos Escolhidos:",
        minhadex_none_selected: "Nenhum tipo selecionado (escolha 1 ou 2 abaixo)",
        minhadex_select_hint: "Selecione 1 ou 2 tipos para este Pokémon:",
        minhadex_click_to_remove: "Clique para remover este tipo",
        minhadex_prev_btn: "⬅ Anterior",
        minhadex_next_btn: "Confirmar e Próximo ➔",
        minhadex_skip_btn: "Pular ⏭️",
        minhadex_results_title: "🎉 Sua Pokédex Personalizada!",
        minhadex_results_desc: "Confira abaixo todos os Pokémon e os tipos que você definiu para cada um:",
        minhadex_stat_total: "Pokémon Definidos",
        minhadex_stat_matches: "Coincidiram com Oficiais",
        minhadex_stat_top_type: "Seu Tipo Favorito",
        minhadex_restart_game_btn: "Recomeçar Brincadeira",
        minhadex_copy_summary_btn: "📋 Copiar Resumo",
        minhadex_summary_copied: "✅ Resumo copiado para a área de transferência!",
        minhadex_search_ph: "Buscar Pokémon na sua Dex...",
        minhadex_filter_type_all: "Todos os Tipos Escolhidos",
        minhadex_your_types_label: "Seus tipos:",
        minhadex_official_types_label: "Oficiais:",
        minhadex_keep_official_btn: "Manter Originais",
        minhadex_keep_official_hint: "Copiar os tipos oficiais para sua seleção",
        minhadex_click_to_add_type: "Clique para selecionar este tipo",
        minhadex_match_exact: "🎯 Exato!",
        minhadex_match_partial: "✨ 1 em comum",
        minhadex_match_diff: "🎨 Versão Única"
    },
    en_US: {
        tab_dexke: "Dex", tab_minhadex: "My Dex", tab_moves: "Moves", tab_abilities: "Abilities", tab_items: "Items", tab_natures: "Natures", tab_types: "Type Chart", tab_teams: "Teams", tab_battle: "⚔️ 1v1 Battle",
        tab_gba: "🎮 GBA / GBC Emulator", gba_title: "GBA / GBC Emulator", gba_desc: "Select your game file (.gba, .gbc, .gb or .zip). The ROM is read only in your browser and is never uploaded to any server.", gba_note: "Dexke does not include or distribute ROMs. Only use games you legally own. The ROM is saved only in this browser and opens automatically next time. Use \"Change ROM\" to switch games.", gba_reset: "Change ROM", gba_close: "Close emulator", gba_close_confirm: "Close the emulator? Save inside the game first: unsaved progress will be lost.", gba_console: "Console (only matters for .zip files):",
        loading: "🔄 Loading PokéAPI data...", loading_sub: "This may take a few seconds the first time.",
        choosing_poke: "Choosing Pokémon for the Team...", cancel: "Cancel",
        search_poke: "Search Pokémon (e.g. Ursaluna, Bloodmoon)...", search_move: "Search Move...", search_ability: "Search Ability...", search_item: "Search Item...", search_nature: "Search Nature...",
        all_regions: "All Regions & Specials", all_types: "All Types", type_chart_title: "Type Matchup Chart", team_analysis: "Team Weakness Analysis",
        natures_title: "Natures Chart (+10% / -10%)",
        footer_made: "Made by Matheusduar1",
        copyright: "Pokémon and all respective names are trademark & copyright of Nintendo, Game Freak, and The Pokémon Company. Dexke is an unofficial, non-profit project created exclusively for educational purposes.",
        basic_data: "Basic Data", height: "Height:", weight: "Weight:", abilities: "Abilities:",
        base_stats: "Base Stats", total: "Total:", weak_res: "Weaknesses & Resistances", evo_chain: "Evolution Chain & Forms",
        available_moves: "Available Moves", load_moves: "Load Moves List",
        move_type: "Type:", move_power: "Power:", move_acc: "Accuracy:", move_class: "Class:",
        poke_with_ability: "Pokémon with this Ability", poke_with_move: "Pokémon that learn this Move",
        team_1: "Team 1", team_2: "Team 2", team_3: "Team 3", team_4: "Team 4", team_5: "Team 5", team_6: "Team 6",
        your_pokemon: "Your Pokémon (Lv. 100)", cpu_pokemon: "CPU Pokémon (Lv. 100)", random_cpu: "🎲 Random",
        item_label: "Item:", nature_label: "Nature:", ivs_label: "IVs (0 - 31) & Final Stats:", moves_label: "Moves (Pick 4):",
        start_battle: "⚔️ Start 1v1 Battle!",
        js_load_moves: "<i>Loading precise data...</i>", js_lvl_moves: "Learned by Level Up", js_tm_moves: "Learned by TM/HM", js_no_moves: "No moves found.",
        js_calc: "Calculating...", js_normal_dmg: "<p>Takes normal damage from everything.</p>", js_no_evo: "Evolution chain unavailable.",
        js_add_poke: "<p style='color:#777; font-size: 14px;'>Add Pokémon to see the cross analysis.</p>", js_gen_table: "<i>Generating analysis table...</i>",
        js_atk_def: "Atk \\ Def", js_def_atk: "DEFENSE ➔<br><br>ATTACK ⬇",
        js_chart_desc: "Read the <strong style='color:var(--primary)'>ATTACK</strong> row on the left and cross with the <strong style='color:var(--primary)'>DEFENSE</strong> column on top.",
        js_no_desc: "No description available.", js_translating: "Translating...",
        evo_lvl: "Level", evo_trade: "Trade", evo_item: "Item:", evo_happy: "Happiness", evo_special: "Special Form",
        minhadex_intro_title: "Welcome to My Dex!",
        minhadex_intro_desc: "In this fun quiz game, you decide the types! Look at each Pokémon and choose 1 or 2 types you think it has or should have.",
        minhadex_how_to_play: "📋 How to Play:",
        minhadex_step1: "<strong>1. Choose Region:</strong> Pick the Full Dex or a specific region (Kanto, Johto, Hoenn, etc.).",
        minhadex_step2: "<strong>2. See Pokémon in Order:</strong> Each Pokémon appears in Pokédex order with official artwork.",
        minhadex_step3: "<strong>3. Pick 1 or 2 Types:</strong> Tap the type badges to set what you think it is. Tap again to deselect.",
        minhadex_step4: "<strong>4. Final Catalog:</strong> At the end (or anytime you finish), see your custom Pokédex with all your choices and compare with official types!",
        minhadex_region_label: "Select Region or Full Dex:",
        minhadex_start_btn: "🚀 Start Game!",
        minhadex_finish_btn: "🏁 Finish & View Results",
        minhadex_restart_confirm: "Are you sure you want to restart? Current progress will be lost.",
        minhadex_progress_label: "Progress:",
        minhadex_selected_types_label: "Chosen Types:",
        minhadex_none_selected: "No type selected (pick 1 or 2 below)",
        minhadex_select_hint: "Select 1 or 2 types for this Pokémon:",
        minhadex_click_to_remove: "Click to remove this type",
        minhadex_prev_btn: "⬅ Previous",
        minhadex_next_btn: "Confirm & Next ➔",
        minhadex_skip_btn: "Skip ⏭️",
        minhadex_results_title: "🎉 Your Custom Pokédex!",
        minhadex_results_desc: "Here are all the Pokémon you categorized in your My Dex with the types you picked:",
        minhadex_stat_total: "Defined Pokémon",
        minhadex_stat_matches: "Matched Official Types",
        minhadex_stat_top_type: "Your Favorite Type",
        minhadex_restart_game_btn: "Play Again",
        minhadex_copy_summary_btn: "📋 Copy Summary",
        minhadex_summary_copied: "✅ Summary copied to clipboard!",
        minhadex_search_ph: "Search Pokémon in your Dex...",
        minhadex_filter_type_all: "All Chosen Types",
        minhadex_your_types_label: "Your types:",
        minhadex_official_types_label: "Official:",
        minhadex_keep_official_btn: "Keep Official",
        minhadex_keep_official_hint: "Copy official types to your selection",
        minhadex_click_to_add_type: "Click to select this type",
        minhadex_match_exact: "🎯 Exact!",
        minhadex_match_partial: "✨ 1 Match",
        minhadex_match_diff: "🎨 Unique Version"
    },
    es_ES: {
        tab_dexke: "Dex", tab_minhadex: "Mi Dex", tab_moves: "Movimientos", tab_abilities: "Habilidades", tab_items: "Objetos", tab_natures: "Naturalezas", tab_types: "Tipos", tab_teams: "Equipos", tab_battle: "⚔️ Batalla 1v1",
        tab_gba: "🎮 Emulador GBA / GBC", gba_title: "Emulador GBA / GBC", gba_desc: "Selecciona el archivo de tu juego (.gba, .gbc, .gb o .zip). La ROM se lee solo en tu navegador y no se envía a ningún servidor.", gba_note: "Dexke no incluye ni distribuye ROMs. Usa solo juegos que poseas legalmente. La ROM se guarda solo en este navegador y se abre sola la próxima vez. Usa \"Cambiar ROM\" para cambiar de juego.", gba_reset: "Cambiar ROM", gba_close: "Cerrar emulador", gba_close_confirm: "¿Cerrar el emulador? Guarda dentro del juego antes: el progreso no guardado se perderá.", gba_console: "Consola (solo importa para archivos .zip):",
        loading: "🔄 Cargando datos de PokéAPI...", loading_sub: "Esto puede tomar unos segundos.",
        choosing_poke: "Eligiendo Pokémon para el Equipo...", cancel: "Cancelar",
        search_poke: "Buscar Pokémon (Ej: Ursaluna, Bloodmoon)...", search_move: "Buscar Movimiento...", search_ability: "Buscar Habilidad...", search_item: "Buscar Objeto...", search_nature: "Buscar Naturaleza...",
        all_regions: "Todas las Regiones y Especiales", all_types: "Todos los Tipos", type_chart_title: "Tabla de Eficacia de Tipos", team_analysis: "Análisis de Debilidades",
        natures_title: "Tabla de Naturalezas (+10% / -10%)",
        footer_made: "Hecho por Matheusduar1",
        copyright: "Pokémon y todos los nombres e imágenes están registrados por Nintendo, Game Freak y The Pokémon Company. Dexke es un proyecto no oficial con fines educativos.",
        basic_data: "Datos Básicos", height: "Altura:", weight: "Peso:", abilities: "Habilidades:",
        base_stats: "Estadísticas Base", total: "Total:", weak_res: "Debilidades y Resistencias", evo_chain: "Cadena Evolutiva y Formas",
        available_moves: "Movimientos Disponibles", load_moves: "Cargar Lista",
        move_type: "Tipo:", move_power: "Poder:", move_acc: "Precisión:", move_class: "Clase:",
        poke_with_ability: "Pokémon con esta Habilidad", poke_with_move: "Pokémon que aprenden este Movimiento",
        team_1: "Equipo 1", team_2: "Equipo 2", team_3: "Equipo 3", team_4: "Equipo 4", team_5: "Equipo 5", team_6: "Equipo 6",
        your_pokemon: "Tu Pokémon (Nv. 100)", cpu_pokemon: "Pokémon de la CPU (Nv. 100)", random_cpu: "🎲 Aleatorio",
        item_label: "Objeto:", nature_label: "Naturaleza:", ivs_label: "IVs (0 - 31) y Stats Finales:", moves_label: "Movimientos (Elige 4):",
        start_battle: "⚔️ ¡Iniciar Batalla 1v1!",
        js_load_moves: "<i>Cargando datos precisos...</i>", js_lvl_moves: "Aprende por Nivel", js_tm_moves: "Aprende por Máquina (MT/MO)", js_no_moves: "No se encontraron movimientos.",
        js_calc: "Calculando...", js_normal_dmg: "<p>Recibe daño normal de todo.</p>", js_no_evo: "Cadena evolutiva no disponible.",
        js_add_poke: "<p style='color:#777; font-size: 14px;'>Añade Pokémon para ver el análisis.</p>", js_gen_table: "<i>Generando tabla de análisis...</i>",
        js_atk_def: "Atq \\ Def", js_def_atk: "DEFENSA ➔<br><br>ATAQUE ⬇",
        js_chart_desc: "Lee la fila de <strong style='color:var(--primary)'>ATAQUE</strong> a la izquierda y cruza con la columna de <strong style='color:var(--primary)'>DEFENSA</strong> arriba.",
        js_no_desc: "Sin descripción disponible.", js_translating: "Traduciendo...",
        evo_lvl: "Nivel", evo_trade: "Intercambio", evo_item: "Objeto:", evo_happy: "Felicidad", evo_special: "Forma Especial",
        minhadex_intro_title: "¡Bienvenido a Mi Dex!",
        minhadex_intro_desc: "¡En este juego eres el maestro de los tipos! Mira a cada Pokémon y asigna 1 o 2 tipos que creas que tiene o debería tener.",
        minhadex_how_to_play: "📋 Resumen de Cómo Jugar:",
        minhadex_step1: "<strong>1. Elige la Región:</strong> Selecciona la Dex Completa o una región específica (Kanto, Johto, Hoenn, etc.).",
        minhadex_step2: "<strong>2. Pokémon en Orden:</strong> Cada Pokémon aparecerá en orden de Pokédex con su arte oficial.",
        minhadex_step3: "<strong>3. Elige 1 o 2 Tipos:</strong> Toca los botones de tipos para definir lo que crees que es. Toca de nuevo para desmarcar.",
        minhadex_step4: "<strong>4. Catálogo Final:</strong> Al terminar (o cuando decidas finalizar), mira tu Pokédex personalizada y compara con los tipos oficiales.",
        minhadex_region_label: "Selecciona la Región o Dex Completa:",
        minhadex_start_btn: "🚀 ¡Empezar Juego!",
        minhadex_finish_btn: "🏁 Finalizar y Ver Resultados",
        minhadex_restart_confirm: "¿Seguro que quieres reiniciar? Se perderá el progreso de esta partida.",
        minhadex_progress_label: "Progreso:",
        minhadex_selected_types_label: "Tipos Elegidos:",
        minhadex_none_selected: "Ningún tipo seleccionado (elige 1 o 2 abajo)",
        minhadex_select_hint: "Elige 1 o 2 tipos para este Pokémon:",
        minhadex_click_to_remove: "Haz clic para quitar este tipo",
        minhadex_prev_btn: "⬅ Anterior",
        minhadex_next_btn: "Confirmar y Siguiente ➔",
        minhadex_skip_btn: "Saltar ⏭️",
        minhadex_results_title: "🎉 ¡Tu Pokédex Personalizada!",
        minhadex_results_desc: "Aquí están todos los Pokémon que catalogaste en tu Mi Dex con los tipos que elegiste:",
        minhadex_stat_total: "Pokémon Definidos",
        minhadex_stat_matches: "Coincidieron con Oficiales",
        minhadex_stat_top_type: "Tu Tipo Favorito",
        minhadex_restart_game_btn: "Volver a Jugar",
        minhadex_copy_summary_btn: "📋 Copiar Resumen",
        minhadex_summary_copied: "✅ ¡Resumen copiado al portapapeles!",
        minhadex_search_ph: "Buscar Pokémon en tu Dex...",
        minhadex_filter_type_all: "Todos los Tipos Elegidos",
        minhadex_your_types_label: "Tus tipos:",
        minhadex_official_types_label: "Oficiales:",
        minhadex_keep_official_btn: "Mantener Originales",
        minhadex_keep_official_hint: "Copiar los tipos oficiales a tu selección",
        minhadex_click_to_add_type: "Haz clic para seleccionar este tipo",
        minhadex_match_exact: "🎯 ¡Exacto!",
        minhadex_match_partial: "✨ 1 en común",
        minhadex_match_diff: "🎨 Versión Única"
    }
};

let idiomaAtual = 'pt_BR';
function t(key) { return dicionario[idiomaAtual][key] || key; }

function mudarIdioma(lang) {
    idiomaAtual = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = dicionario[lang][el.getAttribute('data-i18n')]; });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = dicionario[lang][el.getAttribute('data-i18n-ph')]; });
    document.getElementById('desc-chart-global').innerHTML = t('js_chart_desc');
    renderizarTime();
    renderizarNatures();
    if(document.getElementById('aba-minhadex') && document.getElementById('aba-minhadex').classList.contains('active')) {
        renderizarTelaMinhaDex();
    }
    if(document.getElementById('aba-typechart').classList.contains('active')) {
        document.getElementById('global-type-chart').innerHTML = ''; gerarTabelaDeTiposGlobal();
    }
}

async function traduzirTextoDinamico(textoIngles) {
    if (!textoIngles || idiomaAtual === 'en_US') return textoIngles;
    const target = idiomaAtual === 'es_ES' ? 'es' : 'pt-br';
    try {
        const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(textoIngles)}&langpair=en|${target}`);
        const data = await res.json();
        if(data && data.responseData && data.responseData.translatedText) return data.responseData.translatedText;
    } catch (e) { console.warn("Erro ao traduzir"); }
    return textoIngles;
}

function escapeHTML(str) { if (!str) return ''; return str.toString().replace(/[&<>'"]/g, tag => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'}[tag] || tag)); }

function getCorEficacia(mult) {
    if (mult >= 4) return { bg: '#e74c3c', text: 'white' };    
    if (mult === 2) return { bg: '#F08030', text: 'white' };   
    if (mult === 1) return { bg: '#f7f7f7', text: 'black' };   
    if (mult === 0.5) return { bg: '#999999', text: 'white' }; 
    if (mult === 0.25) return { bg: '#d9d9d9', text: 'black' };
    if (mult === 0) return { bg: '#1a1a1a', text: 'white' };   
    return { bg: '#fff', text: 'black' };
}
function formatarMultiplicador(mult) { return mult === 0.5 ? '½' : (mult === 0.25 ? '¼' : mult); }

const coresTipos = { normal: '#A8A878', fighting: '#C03028', flying: '#A890F0', poison: '#A040A0', ground: '#E0C068', rock: '#B8A038', bug: '#A8B820', ghost: '#705898', steel: '#B8B8D0', fire: '#F08030', water: '#6890F0', grass: '#78C850', electric: '#F8D030', psychic: '#F85888', ice: '#98D8D8', dragon: '#7038F8', dark: '#705848', fairy: '#EE99AC' };

const naturesData = [
    { name: 'Hardy', up: null, down: null },
    { name: 'Lonely', up: 'attack', down: 'defense' },
    { name: 'Brave', up: 'attack', down: 'speed' },
    { name: 'Adamant', up: 'attack', down: 'special-attack' },
    { name: 'Naughty', up: 'attack', down: 'special-defense' },
    { name: 'Bold', up: 'defense', down: 'attack' },
    { name: 'Docile', up: null, down: null },
    { name: 'Relaxed', up: 'defense', down: 'speed' },
    { name: 'Impish', up: 'defense', down: 'special-attack' },
    { name: 'Lax', up: 'defense', down: 'special-defense' },
    { name: 'Timid', up: 'speed', down: 'attack' },
    { name: 'Hasty', up: 'speed', down: 'defense' },
    { name: 'Serious', up: null, down: null },
    { name: 'Jolly', up: 'speed', down: 'special-attack' },
    { name: 'Naive', up: 'speed', down: 'special-defense' },
    { name: 'Modest', up: 'special-attack', down: 'attack' },
    { name: 'Mild', up: 'special-attack', down: 'defense' },
    { name: 'Quiet', up: 'special-attack', down: 'speed' },
    { name: 'Bashful', up: null, down: null },
    { name: 'Rash', up: 'special-attack', down: 'special-defense' },
    { name: 'Calm', up: 'special-defense', down: 'attack' },
    { name: 'Gentle', up: 'special-defense', down: 'defense' },
    { name: 'Sassy', up: 'special-defense', down: 'speed' },
    { name: 'Careful', up: 'special-defense', down: 'special-attack' },
    { name: 'Quirky', up: null, down: null }
];

const battleItems = [
    { id: 'leftovers', name: 'Leftovers (Restos - Cura 1/16 por turno)' },
    { id: 'life-orb', name: 'Life Orb (+30% Dano, -10% HP)' },
    { id: 'choice-band', name: 'Choice Band (+50% Attack Físico)' },
    { id: 'choice-specs', name: 'Choice Specs (+50% Special Attack)' },
    { id: 'choice-scarf', name: 'Choice Scarf (+50% Speed)' },
    { id: 'focus-sash', name: 'Focus Sash (Sobrevive com 1 HP se cheio)' },
    { id: 'assault-vest', name: 'Assault Vest (+50% Special Defense)' },
    { id: 'expert-belt', name: 'Expert Belt (+20% em Super Efetivo)' },
    { id: 'rocky-helmet', name: 'Rocky Helmet (Dano de recuo físico)' },
    { id: 'sitrus-berry', name: 'Sitrus Berry (Cura 25% abaixo da metade)' }
];

let todosPokemon = [], todosMoves = [], todasAbilities = [], todosItems = [], pokemonAtualParaMoves = [];
let listaFiltradaPokemon = [], listaFiltradaMoves = [], listaFiltradaAbilities = [], listaFiltradaItems = [];
let atualModalPokemon = '', atualModalMove = '', atualModalAbility = '', atualModalItem = '';

// Variáveis Globais de Visualização e Áudio
let isShiny = false, is3D = false;
let currentPokemonNormalUrl = '', currentPokemonShinyUrl = '';
let currentPokemon3DNormalUrl = '', currentPokemon3DShinyUrl = '';
let currentCryUrl = '';

const moveCache = {}, abilityCache = {}, itemCache = {}, cacheRelacoesTipos = {};
let timesSalvos = [[], [], [], [], [], []];
try { const mem = localStorage.getItem('dexke_times'); if(mem) timesSalvos = JSON.parse(mem); } catch (e) { localStorage.removeItem('dexke_times'); }

let timeAtualIndex = 0, modoSelecaoTimeSlot = null;

// --- FUNÇÕES DE ÁUDIO E 3D ---
function tocarGrito() {
    if (currentCryUrl) {
        const audio = new Audio(currentCryUrl);
        audio.volume = 0.4;
        audio.play().catch(e => console.log("Erro ao tocar áudio", e));
    }
}

function toggle3D() {
    if (!currentPokemon3DNormalUrl) return;
    is3D = !is3D;
    const btn3D = document.getElementById('model3d-toggle');
    if (btn3D) {
        btn3D.style.background = is3D ? 'var(--primary)' : '#333';
        btn3D.style.boxShadow = is3D ? '0 0 8px var(--primary)' : 'none';
    }
    atualizarImagemModal();
}

function toggleShiny() {
    isShiny = !isShiny;
    const shinyEl = document.getElementById('shiny-toggle');
    if(shinyEl) shinyEl.style.color = isShiny ? '#f1c40f' : '#ccc';
    atualizarImagemModal();
}

function atualizarImagemModal() {
    const imgEl = document.getElementById('detail-img');
    if(!imgEl) return;

    // Resetar para auto para evitar que os sprites 3D/GIFs sejam esticados
    imgEl.style.width = 'auto';
    imgEl.style.height = 'auto';
    imgEl.style.objectFit = 'contain';

    if (is3D && currentPokemon3DNormalUrl) {
        imgEl.src = isShiny ? (currentPokemon3DShinyUrl || currentPokemon3DNormalUrl) : currentPokemon3DNormalUrl;
        imgEl.style.maxWidth = '100px';
        imgEl.style.maxHeight = '100px';
    } else {
        imgEl.src = isShiny ? currentPokemonShinyUrl : currentPokemonNormalUrl;
        imgEl.style.maxWidth = '140px';
        imgEl.style.maxHeight = '140px';
    }
}

// --- 2. CONTROLE DE SIDEBAR E SCROLL DO CABEÇALHO ---
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('hidden');
}

let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 90) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    lastScrollY = currentScrollY;
});

// --- 3. INICIALIZAÇÃO ---
async function iniciarApp() {
    try {
        const [resPoke, resMoves, resAbil, resItems] = await Promise.all([
            fetch('https://pokeapi.co/api/v2/pokemon?limit=1350'),
            fetch('https://pokeapi.co/api/v2/move?limit=1000'),
            fetch('https://pokeapi.co/api/v2/ability?limit=370'),
            fetch('https://pokeapi.co/api/v2/item?limit=450')
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
        todosItems = (await resItems.json()).results.map(i => ({ name: escapeHTML(i.name) }));
        
        document.getElementById('loading-global').style.display = 'none';
        const abaDex = document.getElementById('aba-dexke');
        abaDex.classList.remove('hidden'); abaDex.classList.add('active');

        filtrarLista();
        filtrarMovesGlobal();
        filtrarAbilitiesGlobal();
        filtrarItemsGlobal();
        renderizarNatures();
        renderizarTime();
        inicializarMinhaDex();
        inicializarSimulador1v1();
        configurarSwipeModais();
    } catch (e) {
        document.getElementById('loading-global').innerHTML = "❌ Erro de conexão com a PokéAPI.";
    }
}

function mudarAba(event, abaId) {
    document.querySelectorAll('.aba-content').forEach(el => { el.classList.remove('active'); el.classList.add('hidden'); });
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    const abaAlvo = document.getElementById(`aba-${abaId}`);
    abaAlvo.classList.remove('hidden'); abaAlvo.classList.add('active');
    if(event && event.target) event.target.classList.add('active');
    if(abaId === 'typechart') { document.getElementById('global-type-chart').innerHTML = ''; gerarTabelaDeTiposGlobal(); }
    if(abaId === 'minhadex') { renderizarTelaMinhaDex(); }
    
    if(abaId === 'gba') { gbaDock('inline'); gbaAoAbrirAba(); } else gbaDock('float');
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.add('hidden');
}

function iniciarSelecaoTime(indexSlot) { modoSelecaoTimeSlot = indexSlot; mudarAba(null, 'dexke'); document.getElementById('selecao-time-banner').style.display = 'flex'; }
function cancelarSelecaoTime() { modoSelecaoTimeSlot = null; document.getElementById('selecao-time-banner').style.display = 'none'; mudarAba(null, 'teams'); }

// --- 4. LISTAS E FILTROS ---
function filtrarLista() {
    const termo = escapeHTML(document.getElementById('searchInput').value.toLowerCase());
    const gen = document.getElementById('genFilter').value, tipoFiltro = document.getElementById('typeFilter').value;
    const limites = {
        'all': [1, 20000], 'rby': [1, 151], 'frlg': [1, 151], 'lgpe': [1, 151], 'gsc': [152, 251], 'hgss': [152, 251], 
        'rse': [252, 386], 'oras': [252, 386], 'dppt': [387, 493], 'bdsp': [387, 493], 'bw': [494, 649], 'xy': [650, 721], 
        'za': [650, 721], 'sm': [722, 809], 'swsh': [810, 898], 'la': [899, 905], 'sv': [906, 1025], 'special': [10001, 20000]
    };
    const [min, max] = limites[gen];
    
    listaFiltradaPokemon = todosPokemon.filter(p => p.id >= min && p.id <= max && (p.name.includes(termo) || p.id == termo) && (tipoFiltro === 'all' || p.types.includes(tipoFiltro)));
    
    document.getElementById('pokemon-list').innerHTML = listaFiltradaPokemon.map(p => {
        const numDisplay = p.id > 10000 ? '★ ESP' : '#' + p.id.toString().padStart(3, '0');
        return `
        <div class="list-item" onclick="tratarCliquePokemon('${p.name}')">
            <div class="list-img-box"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png" loading="lazy" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'"></div>
            <div class="list-info"><span class="list-name">${p.name.replace(/-/g, ' ')}</span><span style="font-size:12px; color:#777">${numDisplay}</span>
            <div class="list-types">${p.types.map(t => `<span class="list-type-badge" style="background-color: ${coresTipos[t]}">${t}</span>`).join('')}</div></div>
        </div>`;
    }).join('');
}

function filtrarMovesGlobal() {
    const termo = escapeHTML(document.getElementById('searchMoveInput').value.toLowerCase().trim().replace(/ /g, '-'));
    listaFiltradaMoves = todosMoves.filter(m => m.name.includes(termo)).slice(0, 100);
    document.getElementById('moves-list').innerHTML = listaFiltradaMoves.map(m => `<div class="list-item" onclick="abrirDetalheMove('${m.name}')" style="justify-content: space-between;"><span class="list-name">${m.name.replace(/-/g, ' ')}</span><span id="badge-glb-${m.name}" class="class-badge" style="background:#ddd; color:#fff;">...</span></div>`).join('');
    listaFiltradaMoves.forEach(async m => {
        if(!moveCache[m.name]) { try { moveCache[m.name] = await (await fetch(`https://pokeapi.co/api/v2/move/${m.name}`)).json(); } catch(e) { return; } }
        const badge = document.getElementById(`badge-glb-${m.name}`);
        if(badge) { const cls = moveCache[m.name].damage_class.name; badge.textContent = getIconeClasse(cls); badge.className = `class-badge class-${cls}`; }
    });
}

function filtrarAbilitiesGlobal() {
    const termo = escapeHTML(document.getElementById('searchAbilityInput').value.toLowerCase().trim().replace(/ /g, '-'));
    listaFiltradaAbilities = todasAbilities.filter(a => a.name.includes(termo)).slice(0, 100);
    document.getElementById('abilities-list').innerHTML = listaFiltradaAbilities.map(a => `<div class="list-item" onclick="abrirDetalheAbility('${a.name}')"><span class="list-name">${a.name.replace(/-/g, ' ')}</span></div>`).join('');
}

function filtrarItemsGlobal() {
    const termo = escapeHTML(document.getElementById('searchItemInput').value.toLowerCase().trim().replace(/ /g, '-'));
    listaFiltradaItems = todosItems.filter(i => i.name.includes(termo)).slice(0, 100);
    document.getElementById('items-list').innerHTML = listaFiltradaItems.map(i => `
        <div class="list-item" onclick="abrirDetalheItem('${i.name}')">
            <div class="list-img-box" style="width:40px; height:40px;"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${i.name}.png" loading="lazy" onerror="this.style.display='none'"></div>
            <span class="list-name">${i.name.replace(/-/g, ' ')}</span>
        </div>`).join('');
}

function renderizarNatures() {
    const inputEl = document.getElementById('searchNatureInput');
    const termo = inputEl ? inputEl.value.toLowerCase().trim() : '';
    const filtradas = naturesData.filter(n => n.name.toLowerCase().includes(termo));
    document.getElementById('natures-list').innerHTML = filtradas.map(n => `
        <div class="list-item" style="flex-direction:column; align-items:flex-start; gap:5px;">
            <span class="list-name" style="color:var(--primary);">${n.name}</span>
            <div style="font-size:12px; display:flex; gap:10px;">
                <span style="color:#27ae60; font-weight:bold;">▲ +10%: ${n.up ? n.up.replace('-', ' ').toUpperCase() : 'Neutro'}</span>
                <span style="color:#c0392b; font-weight:bold;">▼ -10%: ${n.down ? n.down.replace('-', ' ').toUpperCase() : 'Neutro'}</span>
            </div>
        </div>
    `).join('');
}

async function tratarCliquePokemon(idOuNome) {
    if (modoSelecaoTimeSlot !== null) {
        const p = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${idOuNome}`)).json();
        timesSalvos[timeAtualIndex][modoSelecaoTimeSlot] = { id: p.id, name: escapeHTML(p.name), types: p.types.map(t => escapeHTML(t.type.name)) };
        localStorage.setItem('dexke_times', JSON.stringify(timesSalvos));
        cancelarSelecaoTime(); renderizarTime();
    } else abrirDetalhes(idOuNome);
}

// --- 5. ANIMAÇÃO DE BARALHO DE CARTAS E GESTOS MOBILE (SWIPE) ---
function animarTransicaoCarta(touchElId, direcao, startOffsetX = 0) {
    const modalContent = document.getElementById(touchElId);
    if (!modalContent) return;
    const modalParent = modalContent.parentElement;

    modalParent.querySelectorAll('.modal-card-clone').forEach(c => c.remove());
    modalContent.classList.remove('card-reveal-under', 'card-enter-left');
    modalContent.style.transform = '';
    modalContent.style.transition = '';

    const rect = modalContent.getBoundingClientRect();
    const clone = modalContent.cloneNode(true);

    clone.removeAttribute('id');
    clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
    clone.classList.add('modal-card-clone');

    clone.style.position = 'fixed';
    clone.style.top = rect.top + 'px';
    clone.style.left = rect.left + 'px';
    clone.style.width = rect.width + 'px';
    clone.style.height = rect.height + 'px';
    clone.style.transform = '';
    clone.style.transition = '';

    modalParent.appendChild(clone);
    clone.scrollTop = modalContent.scrollTop;

    if (direcao === 1) {
        clone.style.zIndex = '260';
        modalContent.style.zIndex = '210';
        clone.style.setProperty('--drag-x', `${startOffsetX}px`);
        clone.style.setProperty('--drag-rot', `${(startOffsetX * 0.04).toFixed(2)}deg`);
        clone.classList.add('card-exit-left');
        modalContent.classList.add('card-reveal-under');
    } else {
        clone.style.zIndex = '210';
        modalContent.style.zIndex = '260';
        clone.classList.add('card-stay-under');
        modalContent.classList.add('card-enter-left');
    }

    setTimeout(() => {
        clone.remove();
        modalContent.classList.remove('card-reveal-under', 'card-enter-left');
        modalContent.style.zIndex = '';
    }, 360);
}

function navegarModal(tipo, direcao, btnEl, startOffsetX = 0) {
    if (btnEl) {
        btnEl.classList.add('clicked-orange');
        setTimeout(() => btnEl.classList.remove('clicked-orange'), 220);
    }

    const mapTouchIds = {
        pokemon: 'poke-modal-touch',
        move: 'move-modal-touch',
        ability: 'ability-modal-touch',
        item: 'item-modal-touch'
    };

    animarTransicaoCarta(mapTouchIds[tipo], direcao, startOffsetX);

    if (tipo === 'pokemon' && listaFiltradaPokemon.length > 0) {
        let idx = listaFiltradaPokemon.findIndex(p => p.name === atualModalPokemon);
        if (idx === -1) idx = 0;
        let novoIdx = (idx + direcao + listaFiltradaPokemon.length) % listaFiltradaPokemon.length;
        abrirDetalhes(listaFiltradaPokemon[novoIdx].name);
    } else if (tipo === 'move' && listaFiltradaMoves.length > 0) {
        let idx = listaFiltradaMoves.findIndex(m => m.name === atualModalMove);
        let novoIdx = (idx + direcao + listaFiltradaMoves.length) % listaFiltradaMoves.length;
        abrirDetalheMove(listaFiltradaMoves[novoIdx].name);
    } else if (tipo === 'ability' && listaFiltradaAbilities.length > 0) {
        let idx = listaFiltradaAbilities.findIndex(a => a.name === atualModalAbility);
        let novoIdx = (idx + direcao + listaFiltradaAbilities.length) % listaFiltradaAbilities.length;
        abrirDetalheAbility(listaFiltradaAbilities[novoIdx].name);
    } else if (tipo === 'item' && listaFiltradaItems.length > 0) {
        let idx = listaFiltradaItems.findIndex(i => i.name === atualModalItem);
        let novoIdx = (idx + direcao + listaFiltradaItems.length) % listaFiltradaItems.length;
        abrirDetalheItem(listaFiltradaItems[novoIdx].name);
    }
}

function configurarSwipeModais() {
    const mapSwipe = [
        { id: 'poke-modal-touch', tipo: 'pokemon' },
        { id: 'move-modal-touch', tipo: 'move' },
        { id: 'ability-modal-touch', tipo: 'ability' },
        { id: 'item-modal-touch', tipo: 'item' }
    ];
    mapSwipe.forEach(cfg => {
        const el = document.getElementById(cfg.id);
        let startX = 0, startY = 0, currentDx = 0, isDraggingCard = false;

        el.addEventListener('touchstart', e => {
            startX = e.changedTouches[0].screenX;
            startY = e.changedTouches[0].screenY;
            currentDx = 0;
            isDraggingCard = false;
            el.style.transition = 'none';
        }, { passive: true });

        el.addEventListener('touchmove', e => {
            const dx = e.changedTouches[0].screenX - startX;
            const dy = e.changedTouches[0].screenY - startY;

            if (!isDraggingCard && Math.abs(dx) > 15 && Math.abs(dx) > Math.abs(dy) * 1.3) {
                isDraggingCard = true;
            }

            if (isDraggingCard) {
                currentDx = dx;
                if (dx < 0) {
                    el.style.transform = `translateX(${dx}px) rotate(${(dx * 0.04).toFixed(2)}deg)`;
                } else {
                    el.style.transform = `scale(${Math.max(0.93, 1 - dx / 1200)})`;
                }
            }
        }, { passive: true });

        el.addEventListener('touchend', e => {
            const dx = e.changedTouches[0].screenX - startX;
            const dy = e.changedTouches[0].screenY - startY;

            el.style.transition = '';
            el.style.transform = '';

            if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.3) {
                if (dx < 0) {
                    navegarModal(cfg.tipo, 1, null, currentDx);
                } else {
                    navegarModal(cfg.tipo, -1, null, 0);
                }
            }
            isDraggingCard = false;
        }, { passive: true });
    });
}

// --- 6. MODAL DO POKÉMON, EVOLUÇÕES E FORMAS ESPECIAIS ---
async function abrirDetalhes(idOuNome) {
    document.getElementById('pokemon-modal').classList.remove('hidden');
    document.getElementById('detail-moves-list').innerHTML = ''; 

    const cachedPoke = todosPokemon.find(pk => pk.name === idOuNome || pk.id == idOuNome);
    if (cachedPoke) {
        atualModalPokemon = cachedPoke.name;
        document.getElementById('detail-name').textContent = cachedPoke.name.replace(/-/g, ' ');
        document.getElementById('detail-id').textContent = '#' + cachedPoke.id.toString().padStart(3, '0');
        document.getElementById('detail-img').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${cachedPoke.id}.png`;
        document.getElementById('detail-types').innerHTML = cachedPoke.types.map(t => `<span class="type-badge" style="background-color: ${coresTipos[t]}">${escapeHTML(t)}</span>`).join('');
    }
    
    const p = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${idOuNome}`)).json();
    const spc = await (await fetch(p.species.url)).json();
    atualModalPokemon = p.name;
    pokemonAtualParaMoves = p.moves;

    isShiny = false;
    is3D = false;

    // Sprites Oficiais e 3D/Showdown Nativos
    currentPokemonNormalUrl = p.sprites.other['official-artwork'].front_default || p.sprites.front_default;
    currentPokemonShinyUrl = p.sprites.other['official-artwork'].front_shiny || p.sprites.front_shiny || currentPokemonNormalUrl;
    currentPokemon3DNormalUrl = (p.sprites.other && p.sprites.other.showdown && p.sprites.other.showdown.front_default) ? p.sprites.other.showdown.front_default : '';
    currentPokemon3DShinyUrl = (p.sprites.other && p.sprites.other.showdown && p.sprites.other.showdown.front_shiny) ? p.sprites.other.showdown.front_shiny : '';

    // Configuração do botão 3D
    const btn3D = document.getElementById('model3d-toggle');
    if (btn3D) {
        btn3D.style.background = '#333';
        btn3D.style.boxShadow = 'none';
        if (currentPokemon3DNormalUrl) {
            btn3D.style.opacity = '1'; btn3D.style.cursor = 'pointer';
        } else {
            btn3D.style.opacity = '0.3'; btn3D.style.cursor = 'not-allowed';
        }
    }

    // Configuração do Áudio (Cries)
    currentCryUrl = p.cries && p.cries.latest ? p.cries.latest : (p.cries && p.cries.legacy ? p.cries.legacy : '');
    const cryBtn = document.getElementById('cry-btn');
    if (cryBtn) {
        if (currentCryUrl) {
            cryBtn.style.filter = 'none'; cryBtn.style.opacity = '1'; cryBtn.style.cursor = 'pointer';
        } else {
            cryBtn.style.filter = 'grayscale(100%)'; cryBtn.style.opacity = '0.4'; cryBtn.style.cursor = 'not-allowed';
        }
    }

    document.getElementById('shiny-toggle').style.color = '#ccc';
    atualizarImagemModal();
    
    document.getElementById('detail-name').textContent = escapeHTML(p.name).replace(/-/g, ' ');
    document.getElementById('detail-id').textContent = '#' + spc.id.toString().padStart(3, '0');
    document.getElementById('detail-gen').textContent = spc.generation.name.toUpperCase().replace('GENERATION-', 'GEN ');
    document.getElementById('detail-types').innerHTML = p.types.map(t => `<span class="type-badge" style="background-color: ${coresTipos[t.type.name]}">${escapeHTML(t.type.name)}</span>`).join('');
    document.getElementById('detail-height').textContent = (p.height / 10).toFixed(1);
    document.getElementById('detail-weight').textContent = (p.weight / 10).toFixed(1);
    
    document.getElementById('detail-abilities').innerHTML = p.abilities.map(a => 
        `<button class="ability-box-btn" onclick="abrirDetalheAbility('${a.ability.name}')">${escapeHTML(a.ability.name).replace(/-/g, ' ')}</button>`
    ).join('');

    let togglesHtml = '';
    if(spc.varieties && spc.varieties.length > 1) {
        togglesHtml += `<button class="form-btn form-base" onclick="abrirDetalhes('${spc.name}')">Base</button>`;
        spc.varieties.forEach(v => {
            const vName = v.pokemon.name;
            if(vName === spc.name) return;
            if(vName.includes('-mega-x')) togglesHtml += `<button class="form-btn form-mega-x" onclick="abrirDetalhes('${vName}')">X</button>`;
            else if(vName.includes('-mega-y')) togglesHtml += `<button class="form-btn form-mega-y" onclick="abrirDetalhes('${vName}')">Y</button>`;
            else if(vName.includes('-mega-z')) togglesHtml += `<button class="form-btn form-mega-z" onclick="abrirDetalhes('${vName}')">Z</button>`;
            else if(vName.includes('-mega')) togglesHtml += `<button class="form-btn form-mega-x" style="background:#555;" onclick="abrirDetalhes('${vName}')">M</button>`;
            else if(vName.includes('-gmax')) togglesHtml += `<button class="form-btn form-dmax" onclick="abrirDetalhes('${vName}')">DMax</button>`;
            else if(vName.includes('-alola')) togglesHtml += `<button class="form-btn form-alola" onclick="abrirDetalhes('${vName}')">A</button>`;
            else if(vName.includes('-hisui')) togglesHtml += `<button class="form-btn form-hisui" onclick="abrirDetalhes('${vName}')">H</button>`;
            else if(vName.includes('-bloodmoon')) togglesHtml += `<button class="form-btn form-special" onclick="abrirDetalhes('${vName}')">🌕 Bloodmoon</button>`;
            else {
                const sufixo = vName.replace(spc.name + '-', '').toUpperCase().substring(0, 6);
                togglesHtml += `<button class="form-btn form-special" onclick="abrirDetalhes('${vName}')">${sufixo}</button>`;
            }
        });
    }
    document.getElementById('form-toggles').innerHTML = togglesHtml;

    let totalStats = 0;
    document.getElementById('detail-stats').innerHTML = p.stats.map(s => {
        totalStats += s.base_stat; return `<div class="stat-row"><span style="text-transform: capitalize;">${escapeHTML(s.stat.name).replace(/-/g, ' ')}</span><strong>${s.base_stat}</strong></div>`;
    }).join('');
    document.getElementById('detail-total-stats').textContent = totalStats;

    calcularDano(p.types);
    buscarEvolucoes(p.species.url);
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

// --- 7. MODAIS DE MOVES, HABILIDADES E ITENS ---
function renderizarMiniCardsPokemon(listaPokes, containerId) {
    const container = document.getElementById(containerId);
    if (!listaPokes || listaPokes.length === 0) {
        container.innerHTML = "<p style='font-size:12px; color:#777;'>Nenhum Pokémon encontrado.</p>";
        return;
    }
    container.innerHTML = listaPokes.slice(0, 120).map(item => {
        const pokeObj = item.pokemon || item;
        const urlParts = pokeObj.url.split('/');
        const id = urlParts[urlParts.length - 2];
        const nome = escapeHTML(pokeObj.name);
        return `
            <div class="mini-poke-card" onclick="fecharModal('move-modal'); fecharModal('ability-modal'); abrirDetalhes('${nome}')">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" loading="lazy" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'">
                <div>${nome.replace(/-/g, ' ')}</div>
            </div>
        `;
    }).join('');
}

async function abrirDetalheMove(nome) {
    atualModalMove = nome;
    document.getElementById('move-modal').classList.remove('hidden');
    document.getElementById('gm-name').textContent = nome.replace(/-/g, ' ');

    if(!moveCache[nome]) moveCache[nome] = await (await fetch(`https://pokeapi.co/api/v2/move/${nome}`)).json();
    const move = moveCache[nome];
    
    document.getElementById('gm-name').textContent = move.name.replace(/-/g, ' ');
    document.getElementById('gm-type').textContent = move.type.name; document.getElementById('gm-type').style.backgroundColor = coresTipos[move.type.name];
    document.getElementById('gm-power').textContent = move.power || '--'; document.getElementById('gm-accuracy').textContent = move.accuracy ? move.accuracy + '%' : '--';
    document.getElementById('gm-pp').textContent = move.pp; document.getElementById('gm-class').textContent = getIconeClasse(move.damage_class.name); document.getElementById('gm-class').className = `class-badge class-${move.damage_class.name}`;
    
    renderizarMiniCardsPokemon(move.learned_by_pokemon, 'gm-pokemons');

    document.getElementById('gm-desc').innerHTML = `<i>${t('js_translating')}</i>`;
    const engEntry = move.flavor_text_entries.find(e => e.language.name === 'en');
    let textoBase = engEntry ? engEntry.flavor_text.replace(/\n|\f/g, ' ') : t('js_no_desc');
    document.getElementById('gm-desc').textContent = await traduzirTextoDinamico(textoBase);
}

async function abrirDetalheAbility(nome) {
    atualModalAbility = nome;
    document.getElementById('ability-modal').classList.remove('hidden');
    document.getElementById('ab-name').textContent = nome.replace(/-/g, ' '); 
    document.getElementById('ab-desc').innerHTML = `<i>${t('js_translating')}</i>`;
    document.getElementById('ab-pokemons').innerHTML = '...';
    
    if(!abilityCache[nome]) abilityCache[nome] = await (await fetch(`https://pokeapi.co/api/v2/ability/${nome}`)).json();
    const abData = abilityCache[nome];

    renderizarMiniCardsPokemon(abData.pokemon, 'ab-pokemons');

    const engEntry = abData.flavor_text_entries.find(e => e.language.name === 'en');
    let textoBase = engEntry ? engEntry.flavor_text.replace(/\n|\f/g, ' ') : t('js_no_desc');
    document.getElementById('ab-desc').textContent = await traduzirTextoDinamico(textoBase);
}

async function abrirDetalheItem(nome) {
    atualModalItem = nome;
    document.getElementById('item-modal').classList.remove('hidden');
    document.getElementById('it-name').textContent = nome.replace(/-/g, ' ');
    document.getElementById('it-img').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${nome}.png`;
    document.getElementById('it-desc').innerHTML = `<i>${t('js_translating')}</i>`;

    if(!itemCache[nome]) itemCache[nome] = await (await fetch(`https://pokeapi.co/api/v2/item/${nome}`)).json();
    const itData = itemCache[nome];
    const engEntry = itData.flavor_text_entries.find(e => e.language.name === 'en');
    let textoBase = engEntry ? engEntry.text.replace(/\n|\f/g, ' ') : t('js_no_desc');
    document.getElementById('it-desc').textContent = await traduzirTextoDinamico(textoBase);
}

function fecharModal(modalId) { document.getElementById(modalId).classList.add('hidden'); }

// --- 8. CÁLCULO DE DANO E ÁRVORE DE EVOLUÇÃO COMPLETA ---
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

function parseEvolutionMethod(details, speciesName) {
    if (speciesName === 'ursaluna') return 'Peat Block (Lua Cheia)';
    if (!details || details.length === 0) return '';
    const d = details[0];
    const trigger = d.trigger.name;
    if (trigger === 'level-up') {
        if (d.min_level) return `${t('evo_lvl')} ${d.min_level}`;
        if (d.known_move) return `Move: ${d.known_move.name.replace(/-/g, ' ')}`;
        if (d.min_happiness) return t('evo_happy');
        return t('evo_lvl');
    }
    if (trigger === 'trade') return d.held_item ? `${t('evo_trade')} (${d.held_item.name.replace(/-/g, ' ')})` : t('evo_trade');
    if (trigger === 'use-item' && d.item) return `${t('evo_item')} ${escapeHTML(d.item.name).replace(/-/g, ' ')}`;
    return trigger.replace(/-/g, ' ');
}

async function buscarEvolucoes(url) {
    const container = document.getElementById('detail-evolutions');
    try {
        const spcData = await (await fetch(url)).json();
        const evoData = await (await fetch(spcData.evolution_chain.url)).json();
        let cadeia = [];

        function percorrerArvore(node) {
            const spName = escapeHTML(node.species.name);
            const spId = node.species.url.split('/')[6];
            const method = parseEvolutionMethod(node.evolution_details, spName);
            cadeia.push({ name: spName, id: spId, method: method });
            if (node.evolves_to && node.evolves_to.length > 0) {
                node.evolves_to.forEach(filho => percorrerArvore(filho));
            }
        }
        percorrerArvore(evoData.chain);

        for (let item of [...cadeia]) {
            const stSpc = await (await fetch(`https://pokeapi.co/api/v2/pokemon-species/${item.id}`)).json();
            if (stSpc.varieties && stSpc.varieties.length > 1) {
                stSpc.varieties.forEach(v => {
                    if (!v.is_default && !v.pokemon.name.includes('-totem') && !v.pokemon.name.includes('-cap')) {
                        const vId = v.pokemon.url.split('/')[6];
                        let metodoEsp = t('evo_special');
                        if (v.pokemon.name.includes('bloodmoon')) metodoEsp = 'Especial (Kitakami / Lua Carmesim)';
                        else if (v.pokemon.name.includes('-hisui')) metodoEsp = 'Evolução em Hisui';
                        else if (v.pokemon.name.includes('-alola')) metodoEsp = 'Evolução em Alola';
                        else if (v.pokemon.name.includes('-galar')) metodoEsp = 'Evolução em Galar';
                        else if (v.pokemon.name.includes('-mega')) metodoEsp = 'Mega Stone';
                        cadeia.push({ name: escapeHTML(v.pokemon.name), id: vId, method: metodoEsp });
                    }
                });
            }
        }

        container.innerHTML = cadeia.map((c, i) => `
            <div style="display:flex; flex-direction:column; align-items:center;">
                <div class="evo-item" onclick="fecharModal('pokemon-modal'); abrirDetalhes('${c.name}')">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${c.id}.png" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'">
                    <div>${c.name.replace(/-/g, ' ')}</div>
                </div>
                ${i > 0 && c.method ? `<div class="evo-method">${c.method}</div>` : ''}
            </div>
            ${i < cadeia.length - 1 ? '<div class="evo-arrow">➜</div>' : ''}
        `).join('');
    } catch (e) { container.innerHTML = t('js_no_evo'); }
}

// --- 9. TEAM BUILDER, TABELAS DE TIPOS E SHOWDOWN IO ---
function mudarTimeSelecionado() { timeAtualIndex = parseInt(document.getElementById('team-selector').value); renderizarTime(); }
function removerDoTime(indexLocal) { timesSalvos[timeAtualIndex][indexLocal] = null; localStorage.setItem('dexke_times', JSON.stringify(timesSalvos)); renderizarTime(); }

function abrirImportarShowdown() {
    document.getElementById('showdown-textarea').value = '';
    document.getElementById('showdown-io-container').classList.remove('hidden');
}

function exportarShowdown() {
    const time = timesSalvos[timeAtualIndex].filter(p => p !== null);
    if (time.length === 0) return alert("O time atual está vazio!");
    
    const texto = time.map(p => {
        let nomeMaiusculo = p.name.charAt(0).toUpperCase() + p.name.slice(1);
        return `${nomeMaiusculo} @ Leftovers\nAbility: Unknown\nEVs: 252 HP / 252 Atk / 4 Spe\nHardy Nature\n- Tackle\n`;
    }).join('\n');
    
    document.getElementById('showdown-textarea').value = texto;
    document.getElementById('showdown-io-container').classList.remove('hidden');
}

async function processarImportacaoShowdown() {
    const texto = document.getElementById('showdown-textarea').value;
    const blocos = texto.split(/\n\n+/); 
    let novoTime = [];
    
    for (let bloco of blocos) {
        if (!bloco.trim()) continue;
        let primeiraLinha = bloco.split('\n')[0].trim();
        let nomeBruto = primeiraLinha.split('@')[0].trim();
        
        if (nomeBruto.includes('(') && nomeBruto.includes(')')) {
            const match = nomeBruto.match(/\((.*?)\)/);
            if (match) nomeBruto = match[1];
        }
        
        nomeBruto = nomeBruto.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
        let pEncontrado = todosPokemon.find(pk => pk.name === nomeBruto || pk.name.startsWith(nomeBruto));
        
        if (pEncontrado) {
            novoTime.push({ id: pEncontrado.id, name: pEncontrado.name, types: pEncontrado.types });
        }
        if (novoTime.length >= 6) break;
    }
    
    while(novoTime.length < 6) novoTime.push(null);
    timesSalvos[timeAtualIndex] = novoTime;
    localStorage.setItem('dexke_times', JSON.stringify(timesSalvos));
    document.getElementById('showdown-io-container').classList.add('hidden');
    renderizarTime(); 
}

async function renderizarTime() {
    const time = timesSalvos[timeAtualIndex]; while(time.length < 6) time.push(null);
    let htmlSlots = '';
    for(let i=0; i<6; i++) {
        if(time[i]) htmlSlots += `<div class="team-slot" onclick="tratarCliquePokemon('${time[i].name}')"><div class="team-slot-remove" onclick="event.stopPropagation(); removerDoTime(${i})">X</div><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${time[i].id}.png"><div class="team-slot-name">${escapeHTML(time[i].name).replace(/-/g, ' ')}</div></div>`;
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

// --- 10. SIMULADOR DE BATALHA 1v1 E MOTOR DE STATUS/CLIMA ---
const dadosBatalhaCache = { p1: null, p2: null };
let estadoBatalha = null;

function inicializarSimulador1v1() {
    const p1Select = document.getElementById('p1-poke-select');
    const p2Select = document.getElementById('p2-poke-select');
    const pokeOptions = todosPokemon.map(p => `<option value="${p.name}">${p.name.replace(/-/g, ' ')}</option>`).join('');
    p1Select.innerHTML = pokeOptions;
    p2Select.innerHTML = pokeOptions;

    const itemOptions = battleItems.map(i => `<option value="${i.id}">${i.name}</option>`).join('');
    document.getElementById('p1-item').innerHTML = itemOptions;
    document.getElementById('p2-item').innerHTML = itemOptions;

    const natureOptions = naturesData.map(n => `<option value="${n.name}">${n.name} ${n.up ? '(+'+n.up.replace('special-','sp.')+' / -'+n.down.replace('special-','sp.')+')' : '(Neutro)'}</option>`).join('');
    document.getElementById('p1-nature').innerHTML = natureOptions;
    document.getElementById('p2-nature').innerHTML = natureOptions;

    p1Select.value = 'charizard';
    p2Select.value = 'ursaluna-bloodmoon';
    carregarConfigBatalha('p1');
    carregarConfigBatalha('p2');
}

async function carregarConfigBatalha(lado) {
    const nome = document.getElementById(`${lado}-poke-select`).value;
    const p = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)).json();
    dadosBatalhaCache[lado] = p;

    document.getElementById(`${lado}-setup-img`).src = p.sprites.other['official-artwork'].front_default || p.sprites.front_default;
    document.getElementById(`${lado}-setup-types`).innerHTML = p.types.map(t => `<span class="type-badge" style="background-color:${coresTipos[t.type.name]}">${t.type.name}</span>`).join('');
    document.getElementById(`${lado}-ability`).innerHTML = p.abilities.map(a => `<option value="${a.ability.name}">${a.ability.name.replace(/-/g, ' ')}</option>`).join('');

    const ivContainer = document.getElementById(`${lado}-ivs`);
    ivContainer.innerHTML = p.stats.map(s => `
        <div class="iv-row">
            <span style="text-transform:capitalize; width:110px;">${s.stat.name.replace('special-', 'Sp. ')} (${s.base_stat})</span>
            <input type="number" id="${lado}-iv-${s.stat.name}" min="0" max="31" value="31" onchange="atualizarPreviewStats('${lado}')">
            <strong id="${lado}-final-${s.stat.name}" style="width:45px; text-align:right;">0</strong>
        </div>
    `).join('');

    atualizarPreviewStats(lado);

    const listaMoves = p.moves.map(m => m.move.name);
    const moveOptions = listaMoves.map(m => `<option value="${m}">${m.replace(/-/g, ' ')}</option>`).join('');
    for(let i=0; i<4; i++) {
        const sel = document.getElementById(`${lado}-move-${i}`);
        sel.innerHTML = moveOptions;
        if(listaMoves[i]) sel.value = listaMoves[i];
    }
}

function calcularStatFinal(statName, base, iv, natureName) {
    iv = Math.max(0, Math.min(31, parseInt(iv) || 0));
    const evPadrao = 84;
    if (statName === 'hp') {
        if (base === 1) return 1;
        return Math.floor(((2 * base + iv + Math.floor(evPadrao / 4)) * 100) / 100) + 110;
    }
    let val = Math.floor(((2 * base + iv + Math.floor(evPadrao / 4)) * 100) / 100) + 5;
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
    p.stats.forEach(s => {
        const iv = document.getElementById(`${lado}-iv-${s.stat.name}`).value;
        const finalVal = calcularStatFinal(s.stat.name, s.base_stat, iv, nat);
        document.getElementById(`${lado}-final-${s.stat.name}`).textContent = finalVal;
    });
}

async function randomizarCPU() {
    const randPoke = todosPokemon[Math.floor(Math.random() * todosPokemon.length)];
    document.getElementById('p2-poke-select').value = randPoke.name;
    document.getElementById('p2-item').value = battleItems[Math.floor(Math.random() * battleItems.length)].id;
    document.getElementById('p2-nature').value = naturesData[Math.floor(Math.random() * naturesData.length)].name;
    await carregarConfigBatalha('p2');
    const p = dadosBatalhaCache['p2'];
    if (p && p.moves.length > 0) {
        for(let i=0; i<4; i++) {
            const rm = p.moves[Math.floor(Math.random() * p.moves.length)].move.name;
            document.getElementById(`p2-move-${i}`).value = rm;
        }
    }
}

async function montarCombatente(lado) {
    const p = dadosBatalhaCache[lado];
    const nat = document.getElementById(`${lado}-nature`).value;
    const stats = {};
    p.stats.forEach(s => {
        const iv = document.getElementById(`${lado}-iv-${s.stat.name}`).value;
        stats[s.stat.name] = calcularStatFinal(s.stat.name, s.base_stat, iv, nat);
    });

    const movesEscolhidos = [];
    for(let i=0; i<4; i++) {
        const mName = document.getElementById(`${lado}-move-${i}`).value;
        if (mName) {
            if (!moveCache[mName]) moveCache[mName] = await (await fetch(`https://pokeapi.co/api/v2/move/${mName}`)).json();
            movesEscolhidos.push(moveCache[mName]);
        }
    }

    const item = document.getElementById(`${lado}-item`).value;
    if (item === 'assault-vest') stats['special-defense'] = Math.floor(stats['special-defense'] * 1.5);
    if (item === 'choice-scarf') stats['speed'] = Math.floor(stats['speed'] * 1.5);

    return {
        name: p.name.replace(/-/g, ' ').toUpperCase(),
        spriteFront: (p.sprites.other && p.sprites.other.showdown && p.sprites.other.showdown.front_default) ? p.sprites.other.showdown.front_default : (p.sprites.front_default || p.sprites.other['official-artwork'].front_default),
        spriteBack: (p.sprites.other && p.sprites.other.showdown && p.sprites.other.showdown.back_default) ? p.sprites.other.showdown.back_default : (p.sprites.back_default || p.sprites.front_default),
        types: p.types.map(t => t.type.name),
        ability: document.getElementById(`${lado}-ability`).value,
        item: item,
        itemUsado: false,
        maxHp: stats['hp'],
        hp: stats['hp'],
        stats: stats,
        moves: movesEscolhidos,
        status: null,
        statusTurnos: 0
    };
}

async function iniciarBatalha1v1() {
    const p1 = await montarCombatente('p1');
    const p2 = await montarCombatente('p2');
    estadoBatalha = { p1, p2, turno: 1, encerrada: false, clima: 'none', turnosClima: 0 };

    const arena = document.getElementById('battle-arena');
    arena.classList.remove('hidden');

    document.getElementById('arena-p1-name').textContent = p1.name;
    document.getElementById('arena-p2-name').textContent = p2.name;
    document.getElementById('arena-p1-img').src = p1.spriteBack;
    document.getElementById('arena-p2-img').src = p2.spriteFront;

    atualizarUIBatalha();
    document.getElementById('battle-log').innerHTML = `<div>⚔️ <strong>Batalha iniciada: ${p1.name} vs ${p2.name}!</strong></div>`;

    document.getElementById('battle-controls').innerHTML = p1.moves.map((m, idx) => `
        <button class="battle-move-btn" style="background-color:${coresTipos[m.type.name]}" onclick="executarTurnoBatalha(${idx})">
            <span>${m.name.replace(/-/g, ' ')}</span>
            <small>${m.type.name.toUpperCase()} | Pwr: ${m.power || '--'} | ${getIconeClasse(m.damage_class.name)}</small>
        </button>
    `).join('');

    arena.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function atualizarUIBatalha() {
    ['p1', 'p2'].forEach(lado => {
        const c = estadoBatalha[lado];
        const pct = Math.max(0, Math.round((c.hp / c.maxHp) * 100));
        const bar = document.getElementById(`arena-${lado}-hp-bar`);
        bar.style.width = pct + '%';
        bar.style.backgroundColor = pct > 50 ? '#2ecc71' : (pct > 20 ? '#f1c40f' : '#e74c3c');
        document.getElementById(`arena-${lado}-hp-text`).textContent = `${c.hp} / ${c.maxHp} (${pct}%)`;
        
        const stEl = document.getElementById(`arena-${lado}-status`);
        if (c.status) {
            stEl.style.display = 'inline-block';
            stEl.textContent = c.status.toUpperCase();
            const coresStatus = {brn:'#e74c3c', par:'#f1c40f', psn:'#9b59b6', slp:'#bdc3c7', frz:'#3498db'};
            stEl.style.backgroundColor = coresStatus[c.status] || '#555';
        } else {
            stEl.style.display = 'none';
        }
    });

    const wEl = document.getElementById('arena-weather');
    if (estadoBatalha.clima !== 'none') {
        const nomesClima = {rain: '🌧️ Chovendo', sun: '☀️ Sol Intenso', sand: '🌪️ Tempestade de Areia', snow: '❄️ Nevando'};
        wEl.textContent = nomesClima[estadoBatalha.clima] || '';
    } else {
        wEl.textContent = '';
    }
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
    log.innerHTML += `<div>${msg}</div>`;
    log.scrollTop = log.scrollHeight;
}

async function calcularDanoAtaque(atacante, defensor, move) {
    if (move.name.includes('sunny')) { estadoBatalha.clima = 'sun'; estadoBatalha.turnosClima = 5; return adicionarLogBatalha(`☀️ A luz do Sol ficou intensa!`); }
    if (move.name.includes('rain')) { estadoBatalha.clima = 'rain'; estadoBatalha.turnosClima = 5; return adicionarLogBatalha(`🌧️ Começou a chover!`); }
    if (move.name.includes('sandstorm')) { estadoBatalha.clima = 'sand'; estadoBatalha.turnosClima = 5; return adicionarLogBatalha(`🌪️ Uma tempestade de areia começou!`); }

    if (move.damage_class.name === 'status' || !move.power) {
        if (move.name.includes('recover') || move.name.includes('rest') || move.name.includes('roost') || move.name.includes('synthesis')) {
            const cura = Math.floor(atacante.maxHp * 0.5);
            atacante.hp = Math.min(atacante.maxHp, atacante.hp + cura);
            adicionarLogBatalha(`💚 ${atacante.name} usou <strong>${move.name}</strong> e recuperou ${cura} HP!`);
        } else {
            atacante.stats['attack'] = Math.floor(atacante.stats['attack'] * 1.25);
            atacante.stats['special-attack'] = Math.floor(atacante.stats['special-attack'] * 1.25);
            adicionarLogBatalha(`🔼 ${atacante.name} usou <strong>${move.name}</strong> e elevou seus status ofensivos!`);
        }
        return;
    }

    const isPhys = move.damage_class.name === 'physical';
    let atk = isPhys ? atacante.stats['attack'] : atacante.stats['special-attack'];
    let def = isPhys ? defensor.stats['defense'] : defensor.stats['special-defense'];

    if (isPhys && atacante.item === 'choice-band') atk = Math.floor(atk * 1.5);
    if (!isPhys && atacante.item === 'choice-specs') atk = Math.floor(atk * 1.5);
    if (atacante.status === 'brn' && isPhys) atk = Math.floor(atk * 0.5);

    let baseDmg = Math.floor(Math.floor((42 * move.power * (atk / def)) / 50) + 2);

    if (estadoBatalha.clima === 'sun') {
        if (move.type.name === 'fire') baseDmg = Math.floor(baseDmg * 1.5);
        if (move.type.name === 'water') baseDmg = Math.floor(baseDmg * 0.5);
    } else if (estadoBatalha.clima === 'rain') {
        if (move.type.name === 'water') baseDmg = Math.floor(baseDmg * 1.5);
        if (move.type.name === 'fire') baseDmg = Math.floor(baseDmg * 0.5);
    }

    if (atacante.types.includes(move.type.name)) baseDmg = Math.floor(baseDmg * 1.5);

    const mult = await calcularMultiplicadorExato(move.type.name, defensor.types);
    baseDmg = Math.floor(baseDmg * mult);

    if (mult > 1 && atacante.item === 'expert-belt') baseDmg = Math.floor(baseDmg * 1.2);
    if (atacante.item === 'life-orb') baseDmg = Math.floor(baseDmg * 1.3);

    baseDmg = Math.max(1, Math.floor(baseDmg * (0.85 + Math.random() * 0.15)));
    if (mult === 0) baseDmg = 0;

    if (defensor.hp === defensor.maxHp && baseDmg >= defensor.hp && defensor.item === 'focus-sash' && !defensor.itemUsado) {
        baseDmg = defensor.hp - 1;
        defensor.itemUsado = true;
        adicionarLogBatalha(`🎗️ <strong>Focus Sash</strong> impediu o nocaute de ${defensor.name}!`);
    }

    defensor.hp = Math.max(0, defensor.hp - baseDmg);
    let msgEf = mult >= 2 ? ' (Super Efetivo! 🔥)' : (mult > 0 && mult < 1 ? ' (Pouco efetivo...)' : (mult === 0 ? ' (Não afetou!)' : ''));
    adicionarLogBatalha(`💥 ${atacante.name} usou <strong>${move.name.replace(/-/g, ' ')}</strong> causando <strong>${baseDmg}</strong> de dano!${msgEf}`);

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

    if (defensor.hp > 0 && move.meta && move.meta.ailment && move.meta.ailment.name !== 'none' && !defensor.status) {
        let chance = move.meta.ailment_chance || 100;
        if (Math.random() * 100 <= chance) {
            let ail = move.meta.ailment.name;
            if (ail === 'burn' && !defensor.types.includes('fire')) { defensor.status = 'brn'; adicionarLogBatalha(`🔥 ${defensor.name} foi queimado!`); }
            else if (ail === 'paralysis' && !defensor.types.includes('electric')) { defensor.status = 'par'; adicionarLogBatalha(`⚡ ${defensor.name} foi paralisado!`); }
            else if (ail === 'poison' && !defensor.types.includes('poison') && !defensor.types.includes('steel')) { defensor.status = 'psn'; adicionarLogBatalha(`☠️ ${defensor.name} foi envenenado!`); }
            else if (ail === 'freeze' && !defensor.types.includes('ice')) { defensor.status = 'frz'; adicionarLogBatalha(`🧊 ${defensor.name} foi congelado!`); }
            else if (ail === 'sleep') { defensor.status = 'slp'; defensor.statusTurnos = Math.floor(Math.random()*3)+1; adicionarLogBatalha(`💤 ${defensor.name} adormeceu!`); }
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

    if (c.item === 'leftovers' && c.hp < c.maxHp) {
        const heal = Math.max(1, Math.floor(c.maxHp / 16));
        c.hp = Math.min(c.maxHp, c.hp + heal);
        adicionarLogBatalha(`🍎 Leftovers restaurou ${heal} HP de ${c.name}.`);
    }
    
    if (c.item === 'sitrus-berry' && !c.itemUsado && c.hp <= c.maxHp / 2) {
        const heal = Math.floor(c.maxHp * 0.25);
        c.hp = Math.min(c.maxHp, c.hp + heal);
        c.itemUsado = true;
        adicionarLogBatalha(`🍒 Sitrus Berry restaurou ${heal} HP de ${c.name}!`);
    }
}

async function executarTurnoBatalha(moveIdxJogador) {
    if (!estadoBatalha || estadoBatalha.encerrada) return;
    const { p1, p2 } = estadoBatalha;
    const moveP1 = p1.moves[moveIdxJogador];

    let melhorMoveP2 = p2.moves[0];
    let maiorScore = -1;
    for (let m of p2.moves) {
        const mult = await calcularMultiplicadorExato(m.type.name, p1.types);
        const stab = p2.types.includes(m.type.name) ? 1.5 : 1;
        const score = (m.power || 40) * mult * stab;
        if (score > maiorScore) { maiorScore = score; melhorMoveP2 = m; }
    }

    adicionarLogBatalha(`<hr style="border-color:#333; margin:6px 0;"><strong>--- Turno ${estadoBatalha.turno} ---</strong>`);

    let speedP1 = p1.status === 'par' ? p1.stats.speed / 2 : p1.stats.speed;
    let speedP2 = p2.status === 'par' ? p2.stats.speed / 2 : p2.stats.speed;

    const p1Primeiro = (moveP1.priority || 0) > (melhorMoveP2.priority || 0) || 
                       ((moveP1.priority || 0) === (melhorMoveP2.priority || 0) && speedP1 >= speedP2);

    const ordem = p1Primeiro ? [[p1, p2, moveP1], [p2, p1, melhorMoveP2]] : [[p2, p1, melhorMoveP2], [p1, p2, moveP1]];

    for (let [atq, def, mv] of ordem) {
        if (atq.hp > 0 && def.hp > 0 && !estadoBatalha.encerrada) {
            if (podeAtacar(atq)) await calcularDanoAtaque(atq, def, mv);
            atualizarUIBatalha();
        }
    }

    if (p1.hp > 0) await aplicarFimDeTurnoEClima(p1);
    if (p2.hp > 0) await aplicarFimDeTurnoEClima(p2);
    
    if (estadoBatalha.clima !== 'none') {
        estadoBatalha.turnosClima--;
        if (estadoBatalha.turnosClima <= 0) { adicionarLogBatalha(`🌤️ O clima voltou ao normal.`); estadoBatalha.clima = 'none'; }
    }

    atualizarUIBatalha();

    if (p1.hp <= 0 || p2.hp <= 0) {
        estadoBatalha.encerrada = true;
        const vencedor = p1.hp > 0 ? p1.name : p2.name;
        adicionarLogBatalha(`🏆 <strong>FIM DE BATALHA! Vencedor: ${vencedor}!</strong>`);
    } else {
        estadoBatalha.turno++;
    }
}


// --- 11. MINHA DEX (Criação e Palpite de Tipos) ---
const nomesTipos = {
    pt_BR: { normal: 'Normal', fire: 'Fogo', water: 'Água', grass: 'Planta', electric: 'Elétrico', ice: 'Gelo', fighting: 'Lutador', poison: 'Venenoso', ground: 'Terrestre', flying: 'Voador', psychic: 'Psíquico', bug: 'Inseto', rock: 'Pedra', ghost: 'Fantasma', dragon: 'Dragão', dark: 'Sombrio', steel: 'Aço', fairy: 'Fada' },
    en_US: { normal: 'Normal', fire: 'Fire', water: 'Water', grass: 'Grass', electric: 'Electric', ice: 'Ice', fighting: 'Fighting', poison: 'Poison', ground: 'Ground', flying: 'Flying', psychic: 'Psychic', bug: 'Bug', rock: 'Rock', ghost: 'Ghost', dragon: 'Dragon', dark: 'Dark', steel: 'Steel', fairy: 'Fairy' },
    es_ES: { normal: 'Normal', fire: 'Fuego', water: 'Agua', grass: 'Planta', electric: 'Eléctrico', ice: 'Hielo', fighting: 'Lucha', poison: 'Veneno', ground: 'Tierra', flying: 'Volador', psychic: 'Psíquico', bug: 'Bicho', rock: 'Roca', ghost: 'Fantasma', dragon: 'Dragón', dark: 'Siniestro', steel: 'Acero', fairy: 'Hada' }
};

function getTipoNome(tipo) {
    if (nomesTipos[idiomaAtual] && nomesTipos[idiomaAtual][tipo]) return nomesTipos[idiomaAtual][tipo];
    if (nomesTipos.pt_BR[tipo]) return nomesTipos.pt_BR[tipo];
    return tipo;
}

const regioesMinhaDex = [
    { id: 'all', nome: { pt_BR: 'Dex Completa (#001 - #1025)', en_US: 'National Dex (#001 - #1025)', es_ES: 'Dex Completa (#001 - #1025)' }, min: 1, max: 1025 },
    { id: 'kanto', nome: { pt_BR: 'Kanto - Gen 1 (#001 - #151)', en_US: 'Kanto - Gen 1 (#001 - #151)', es_ES: 'Kanto - Gen 1 (#001 - #151)' }, min: 1, max: 151 },
    { id: 'johto', nome: { pt_BR: 'Johto - Gen 2 (#152 - #251)', en_US: 'Johto - Gen 2 (#152 - #251)', es_ES: 'Johto - Gen 2 (#152 - #251)' }, min: 152, max: 251 },
    { id: 'hoenn', nome: { pt_BR: 'Hoenn - Gen 3 (#252 - #386)', en_US: 'Hoenn - Gen 3 (#252 - #386)', es_ES: 'Hoenn - Gen 3 (#252 - #386)' }, min: 252, max: 386 },
    { id: 'sinnoh', nome: { pt_BR: 'Sinnoh - Gen 4 (#387 - #493)', en_US: 'Sinnoh - Gen 4 (#387 - #493)', es_ES: 'Sinnoh - Gen 4 (#387 - #493)' }, min: 387, max: 493 },
    { id: 'unova', nome: { pt_BR: 'Unova - Gen 5 (#494 - #649)', en_US: 'Unova - Gen 5 (#494 - #649)', es_ES: 'Unova - Gen 5 (#494 - #649)' }, min: 494, max: 649 },
    { id: 'kalos', nome: { pt_BR: 'Kalos - Gen 6 (#650 - #721)', en_US: 'Kalos - Gen 6 (#650 - #721)', es_ES: 'Kalos - Gen 6 (#650 - #721)' }, min: 650, max: 721 },
    { id: 'alola', nome: { pt_BR: 'Alola - Gen 7 (#722 - #809)', en_US: 'Alola - Gen 7 (#722 - #809)', es_ES: 'Alola - Gen 7 (#722 - #809)' }, min: 722, max: 809 },
    { id: 'galar', nome: { pt_BR: 'Galar - Gen 8 (#810 - #898)', en_US: 'Galar - Gen 8 (#810 - #898)', es_ES: 'Galar - Gen 8 (#810 - #898)' }, min: 810, max: 898 },
    { id: 'paldea', nome: { pt_BR: 'Paldea & Hisui - Gen 9 (#899 - #1025)', en_US: 'Paldea & Hisui - Gen 9 (#899 - #1025)', es_ES: 'Paldea & Hisui - Gen 9 (#899 - #1025)' }, min: 899, max: 1025 }
];

let minhaDexEstado = {
    fase: 'intro', // 'intro', 'jogando', 'resultado'
    regiao: 'kanto',
    lista: [],
    indiceAtual: 0,
    respostas: {}, // { [id]: [tipos...] }
    tiposTemp: [], // tipos selecionados para o pokemon atual
    filtroBusca: '',
    filtroTipo: 'all'
};

function salvarEstadoMinhaDex() {
    try {
        localStorage.setItem('dexke_minhadex', JSON.stringify({
            fase: minhaDexEstado.fase,
            regiao: minhaDexEstado.regiao,
            indiceAtual: minhaDexEstado.indiceAtual,
            respostas: minhaDexEstado.respostas
        }));
    } catch(e) {}
}

function carregarEstadoMinhaDex() {
    try {
        const salvo = localStorage.getItem('dexke_minhadex');
        if (salvo) {
            const dados = JSON.parse(salvo);
            if (dados && dados.fase) {
                minhaDexEstado.fase = dados.fase;
                minhaDexEstado.regiao = dados.regiao || 'kanto';
                minhaDexEstado.indiceAtual = typeof dados.indiceAtual === 'number' ? dados.indiceAtual : 0;
                minhaDexEstado.respostas = dados.respostas || {};
            }
        }
    } catch(e) {}
}

function inicializarMinhaDex() {
    carregarEstadoMinhaDex();
    prepararListaMinhaDex();
    renderizarTelaMinhaDex();
}

function prepararListaMinhaDex() {
    const regCfg = regioesMinhaDex.find(r => r.id === minhaDexEstado.regiao) || regioesMinhaDex[1];
    minhaDexEstado.lista = todosPokemon.filter(p => p.id >= regCfg.min && p.id <= regCfg.max).sort((a, b) => a.id - b.id);
    if (minhaDexEstado.indiceAtual >= minhaDexEstado.lista.length) {
        minhaDexEstado.indiceAtual = 0;
    }
    const currPoke = minhaDexEstado.lista[minhaDexEstado.indiceAtual];
    if (currPoke && minhaDexEstado.respostas[currPoke.id]) {
        minhaDexEstado.tiposTemp = [...minhaDexEstado.respostas[currPoke.id]];
    } else {
        minhaDexEstado.tiposTemp = [];
    }
}

function renderizarTelaMinhaDex() {
    const container = document.getElementById('minhadex-container');
    if (!container) return;

    if (!todosPokemon || todosPokemon.length === 0) {
        container.innerHTML = `
            <div class="minhadex-intro-card" style="text-align:center; padding: 40px 20px;">
                <p style="font-size: 18px; font-weight: bold; color: var(--primary);">${t('loading')}</p>
                <p style="font-size: 13px; color: #666; margin-top: 8px;">${t('loading_sub')}</p>
            </div>
        `;
        return;
    }

    if (minhaDexEstado.lista.length === 0) {
        prepararListaMinhaDex();
    }

    if (minhaDexEstado.fase === 'intro') {
        renderizarIntroMinhaDex(container);
    } else if (minhaDexEstado.fase === 'jogando') {
        renderizarJogoMinhaDex(container);
    } else if (minhaDexEstado.fase === 'resultado') {
        renderizarResultadosMinhaDex(container);
    }
}

function renderizarIntroMinhaDex(container) {
    const optionsHtml = regioesMinhaDex.map(r => {
        const label = r.nome[idiomaAtual] || r.nome.pt_BR;
        const selected = r.id === minhaDexEstado.regiao ? 'selected' : '';
        return `<option value="${r.id}" ${selected}>${label}</option>`;
    }).join('');

    container.innerHTML = `
        <div class="minhadex-intro-card">
            <h2>🎨 ${t('minhadex_intro_title')}</h2>
            <p class="minhadex-intro-desc">${t('minhadex_intro_desc')}</p>

            <div class="minhadex-steps-box">
                <h3>${t('minhadex_how_to_play')}</h3>
                <ul class="minhadex-steps-list">
                    <li>${t('minhadex_step1')}</li>
                    <li>${t('minhadex_step2')}</li>
                    <li>${t('minhadex_step3')}</li>
                    <li>${t('minhadex_step4')}</li>
                </ul>
            </div>

            <div class="minhadex-form-group">
                <label for="minhadex-regiao-select">${t('minhadex_region_label')}</label>
                <select id="minhadex-regiao-select" class="minhadex-region-select" onchange="selecionarRegiaoMinhaDex(this.value)">
                    ${optionsHtml}
                </select>
            </div>

            <button class="minhadex-btn-primary" onclick="iniciarBrincadeiraMinhaDex()">
                ${t('minhadex_start_btn')}
            </button>
        </div>
    `;
}

function selecionarRegiaoMinhaDex(regiaoId) {
    minhaDexEstado.regiao = regiaoId;
    prepararListaMinhaDex();
}

function iniciarBrincadeiraMinhaDex() {
    const sel = document.getElementById('minhadex-regiao-select');
    if (sel) minhaDexEstado.regiao = sel.value;
    prepararListaMinhaDex();
    minhaDexEstado.indiceAtual = 0;
    minhaDexEstado.respostas = {};
    minhaDexEstado.tiposTemp = [];
    minhaDexEstado.fase = 'jogando';
    salvarEstadoMinhaDex();
    renderizarTelaMinhaDex();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderizarJogoMinhaDex(container) {
    const total = minhaDexEstado.lista.length;
    if (total === 0) {
        prepararListaMinhaDex();
    }
    const poke = minhaDexEstado.lista[minhaDexEstado.indiceAtual];
    if (!poke) {
        finalizarMinhaDex();
        return;
    }

    const regCfg = regioesMinhaDex.find(r => r.id === minhaDexEstado.regiao) || regioesMinhaDex[1];
    const regNome = regCfg.nome[idiomaAtual] || regCfg.nome.pt_BR;
    const progressoNum = minhaDexEstado.indiceAtual + 1;
    const pct = Math.round((progressoNum / total) * 100);

    let previewTiposHtml = '';
    if (minhaDexEstado.tiposTemp.length === 0) {
        previewTiposHtml = `<span style="font-size: 13px; color: #888;">${t('minhadex_none_selected')}</span>`;
    } else {
        previewTiposHtml = minhaDexEstado.tiposTemp.map(tipo => {
            const cor = coresTipos[tipo] || '#666';
            const nome = getTipoNome(tipo);
            return `
                <span class="minhadex-type-pill" style="background-color: ${cor};" onclick="removerTipoMinhaDex('${tipo}')" title="${t('minhadex_click_to_remove')}">
                    ${nome}
                    <span class="remove-icon">&times;</span>
                </span>
            `;
        }).join('');
    }

    const tiposDisponiveis = Object.keys(coresTipos);
    const tiposGridHtml = tiposDisponiveis.map(tipo => {
        const cor = coresTipos[tipo];
        const nome = getTipoNome(tipo);
        const isSelected = minhaDexEstado.tiposTemp.includes(tipo);
        const classSel = isSelected ? 'selected' : '';
        return `
            <button class="minhadex-type-btn ${classSel}" style="background-color: ${cor};" onclick="alternarTipoMinhaDex('${tipo}')">
                ${nome}
            </button>
        `;
    }).join('');

    const isFirst = minhaDexEstado.indiceAtual === 0;
    const canAdvance = minhaDexEstado.tiposTemp.length > 0;
    const isLast = minhaDexEstado.indiceAtual === total - 1;
    const nextBtnText = isLast ? t('minhadex_finish_btn') : t('minhadex_next_btn');

    const pokeArtworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`;
    const pokeSpriteFallback = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`;

    const oficiaisBadgesHtml = (poke.types && poke.types.length > 0)
        ? poke.types.map(tipo => {
            const cor = coresTipos[tipo] || '#777';
            const nome = getTipoNome(tipo);
            return `<span class="list-type-badge" style="background-color: ${cor}; font-size: 11px; padding: 4px 8px; cursor: pointer;" onclick="alternarTipoMinhaDex('${tipo}')" title="${t('minhadex_click_to_add_type')}">${nome}</span>`;
        }).join('')
        : `<span style="font-size: 11px; color: #888;">-</span>`;

    container.innerHTML = `
        <div class="minhadex-game-header">
            <div class="minhadex-top-bar">
                <span class="minhadex-badge-region">📍 ${regNome}</span>
                <div class="minhadex-header-actions">
                    <button class="btn-small" style="background: #27ae60;" onclick="finalizarMinhaDex()">
                        ${t('minhadex_finish_btn')}
                    </button>
                    <button class="btn-small" style="background: #718096;" onclick="solicitarRecomecarMinhaDex()">
                        🔄 ${t('minhadex_restart_game_btn')}
                    </button>
                </div>
            </div>
            <div class="minhadex-progress-info">
                <span>${t('minhadex_progress_label')} <strong>${progressoNum} / ${total}</strong></span>
                <span>${pct}%</span>
            </div>
            <div class="minhadex-progress-bar-bg">
                <div class="minhadex-progress-bar-fill" style="width: ${pct}%;"></div>
            </div>
        </div>

        <div class="minhadex-poke-card">
            <span class="minhadex-poke-num">#${poke.id.toString().padStart(3, '0')}</span>
            <h2 class="minhadex-poke-title">${poke.name.replace(/-/g, ' ')}</h2>
            
            <div class="minhadex-art-box">
                <img class="minhadex-art-img" src="${pokeArtworkUrl}" onerror="this.onerror=null; this.src='${pokeSpriteFallback}'" alt="${poke.name}">
            </div>

            <div class="minhadex-official-types-container">
                <span class="minhadex-official-label">${t('minhadex_official_types_label')}</span>
                <div class="minhadex-official-badges">
                    ${oficiaisBadgesHtml}
                </div>
                <button type="button" class="minhadex-btn-keep-official" onclick="manterTiposOriginaisMinhaDex()" title="${t('minhadex_keep_official_hint')}">
                    ⚡ ${t('minhadex_keep_official_btn')}
                </button>
            </div>

            <div class="minhadex-types-label">
                ${t('minhadex_selected_types_label')}
            </div>
            <div class="minhadex-selected-preview">
                ${previewTiposHtml}
            </div>

            <div class="minhadex-types-label">
                ${t('minhadex_select_hint')}
            </div>
            <div class="minhadex-types-grid">
                ${tiposGridHtml}
            </div>

            <div class="minhadex-actions-bar">
                <button class="minhadex-btn-nav minhadex-btn-prev" onclick="voltarMinhaDex()" ${isFirst ? 'disabled' : ''}>
                    ${t('minhadex_prev_btn')}
                </button>
                <button class="minhadex-btn-nav minhadex-btn-skip" onclick="pularMinhaDex()">
                    ${t('minhadex_skip_btn')}
                </button>
                <button class="minhadex-btn-nav minhadex-btn-next" onclick="avancarMinhaDex()" ${canAdvance ? '' : 'disabled'}>
                    ${nextBtnText}
                </button>
            </div>
        </div>
    `;
}

function manterTiposOriginaisMinhaDex() {
    const poke = minhaDexEstado.lista[minhaDexEstado.indiceAtual];
    if (poke && poke.types && poke.types.length > 0) {
        minhaDexEstado.tiposTemp = [...poke.types];
        renderizarJogoMinhaDex(document.getElementById('minhadex-container'));
    }
}

function alternarTipoMinhaDex(tipo) {
    const idx = minhaDexEstado.tiposTemp.indexOf(tipo);
    if (idx !== -1) {
        minhaDexEstado.tiposTemp.splice(idx, 1);
    } else {
        if (minhaDexEstado.tiposTemp.length < 2) {
            minhaDexEstado.tiposTemp.push(tipo);
        } else {
            // Substitui o segundo tipo caso já tenha 2
            minhaDexEstado.tiposTemp[1] = tipo;
        }
    }
    renderizarJogoMinhaDex(document.getElementById('minhadex-container'));
}

function removerTipoMinhaDex(tipo) {
    const idx = minhaDexEstado.tiposTemp.indexOf(tipo);
    if (idx !== -1) {
        minhaDexEstado.tiposTemp.splice(idx, 1);
        renderizarJogoMinhaDex(document.getElementById('minhadex-container'));
    }
}

function avancarMinhaDex() {
    if (minhaDexEstado.tiposTemp.length === 0) return;
    const poke = minhaDexEstado.lista[minhaDexEstado.indiceAtual];
    if (poke) {
        minhaDexEstado.respostas[poke.id] = [...minhaDexEstado.tiposTemp];
        salvarEstadoMinhaDex();
    }
    if (minhaDexEstado.indiceAtual < minhaDexEstado.lista.length - 1) {
        minhaDexEstado.indiceAtual++;
        const nextPoke = minhaDexEstado.lista[minhaDexEstado.indiceAtual];
        if (nextPoke && minhaDexEstado.respostas[nextPoke.id]) {
            minhaDexEstado.tiposTemp = [...minhaDexEstado.respostas[nextPoke.id]];
        } else {
            minhaDexEstado.tiposTemp = [];
        }
        renderizarJogoMinhaDex(document.getElementById('minhadex-container'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        finalizarMinhaDex();
    }
}

function voltarMinhaDex() {
    if (minhaDexEstado.indiceAtual > 0) {
        const pokeAtual = minhaDexEstado.lista[minhaDexEstado.indiceAtual];
        if (pokeAtual && minhaDexEstado.tiposTemp.length > 0) {
            minhaDexEstado.respostas[pokeAtual.id] = [...minhaDexEstado.tiposTemp];
            salvarEstadoMinhaDex();
        }
        minhaDexEstado.indiceAtual--;
        const prevPoke = minhaDexEstado.lista[minhaDexEstado.indiceAtual];
        if (prevPoke && minhaDexEstado.respostas[prevPoke.id]) {
            minhaDexEstado.tiposTemp = [...minhaDexEstado.respostas[prevPoke.id]];
        } else {
            minhaDexEstado.tiposTemp = [];
        }
        renderizarJogoMinhaDex(document.getElementById('minhadex-container'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function pularMinhaDex() {
    if (minhaDexEstado.indiceAtual < minhaDexEstado.lista.length - 1) {
        minhaDexEstado.indiceAtual++;
        const nextPoke = minhaDexEstado.lista[minhaDexEstado.indiceAtual];
        if (nextPoke && minhaDexEstado.respostas[nextPoke.id]) {
            minhaDexEstado.tiposTemp = [...minhaDexEstado.respostas[nextPoke.id]];
        } else {
            minhaDexEstado.tiposTemp = [];
        }
        renderizarJogoMinhaDex(document.getElementById('minhadex-container'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        finalizarMinhaDex();
    }
}

function finalizarMinhaDex() {
    const pokeAtual = minhaDexEstado.lista[minhaDexEstado.indiceAtual];
    if (pokeAtual && minhaDexEstado.tiposTemp.length > 0) {
        minhaDexEstado.respostas[pokeAtual.id] = [...minhaDexEstado.tiposTemp];
    }
    minhaDexEstado.fase = 'resultado';
    minhaDexEstado.filtroBusca = '';
    minhaDexEstado.filtroTipo = 'all';
    salvarEstadoMinhaDex();
    renderizarTelaMinhaDex();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function solicitarRecomecarMinhaDex() {
    if (confirm(t('minhadex_restart_confirm'))) {
        recomecarMinhaDex();
    }
}

function recomecarMinhaDex() {
    minhaDexEstado.fase = 'intro';
    minhaDexEstado.indiceAtual = 0;
    minhaDexEstado.respostas = {};
    minhaDexEstado.tiposTemp = [];
    salvarEstadoMinhaDex();
    renderizarTelaMinhaDex();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function avaliarCompatibilidadeTipos(escolhidos, oficiais) {
    if (!escolhidos || escolhidos.length === 0) return 'diff';
    if (!oficiais || oficiais.length === 0) return 'diff';

    const setEscolhidos = new Set(escolhidos);
    const setOficiais = new Set(oficiais);

    if (setEscolhidos.size === setOficiais.size) {
        let exact = true;
        for (let t of setEscolhidos) {
            if (!setOficiais.has(t)) {
                exact = false;
                break;
            }
        }
        if (exact) return 'exact';
    }

    for (let t of setEscolhidos) {
        if (setOficiais.has(t)) return 'partial';
    }

    return 'diff';
}

function renderizarResultadosMinhaDex(container) {
    const todosRespIds = Object.keys(minhaDexEstado.respostas).map(Number);
    const pokemonsClassificados = minhaDexEstado.lista.filter(p => todosRespIds.includes(p.id));

    let contExact = 0;
    let contPartial = 0;
    const contagemTipos = {};

    pokemonsClassificados.forEach(p => {
        const escolhidos = minhaDexEstado.respostas[p.id] || [];
        escolhidos.forEach(t => {
            contagemTipos[t] = (contagemTipos[t] || 0) + 1;
        });
        const compat = avaliarCompatibilidadeTipos(escolhidos, p.types);
        if (compat === 'exact') contExact++;
        else if (compat === 'partial') contPartial++;
    });

    let tipoMaisEscolhido = '-';
    let maxVezes = 0;
    for (let t in contagemTipos) {
        if (contagemTipos[t] > maxVezes) {
            maxVezes = contagemTipos[t];
            tipoMaisEscolhido = `${getTipoNome(t)} (${maxVezes}x)`;
        }
    }

    const totalDefinidos = pokemonsClassificados.length;
    const totalAcertos = contExact + contPartial;
    const pctAcertos = totalDefinidos > 0 ? Math.round((totalAcertos / totalDefinidos) * 100) : 0;

    const termo = escapeHTML(minhaDexEstado.filtroBusca.toLowerCase().trim());
    const tipoFiltro = minhaDexEstado.filtroTipo;

    const filtrados = pokemonsClassificados.filter(p => {
        const atendeNome = p.name.includes(termo) || p.id.toString() === termo;
        const escolhidos = minhaDexEstado.respostas[p.id] || [];
        const atendeTipo = (tipoFiltro === 'all' || escolhidos.includes(tipoFiltro));
        return atendeNome && atendeTipo;
    });

    const cardsHtml = filtrados.map(p => {
        const escolhidos = minhaDexEstado.respostas[p.id] || [];
        const compat = avaliarCompatibilidadeTipos(escolhidos, p.types);
        
        let tagHtml = '';
        let cardClass = '';
        if (compat === 'exact') {
            cardClass = 'match-exact';
            tagHtml = `<span class="minhadex-result-match-tag tag-exact">${t('minhadex_match_exact')}</span>`;
        } else if (compat === 'partial') {
            cardClass = 'match-partial';
            tagHtml = `<span class="minhadex-result-match-tag tag-partial">${t('minhadex_match_partial')}</span>`;
        } else {
            cardClass = 'match-diff';
            tagHtml = `<span class="minhadex-result-match-tag tag-diff">${t('minhadex_match_diff')}</span>`;
        }

        const seusTiposBadges = escolhidos.map(t => `<span class="list-type-badge" style="background-color: ${coresTipos[t]};">${getTipoNome(t)}</span>`).join('');
        const oficiaisBadges = p.types.map(t => `<span class="list-type-badge" style="background-color: ${coresTipos[t]}; opacity: 0.85;">${getTipoNome(t)}</span>`).join('');

        return `
            <div class="minhadex-result-card ${cardClass}" onclick="abrirDetalhes('${p.name}')" style="cursor: pointer;">
                <div class="minhadex-result-img-box">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png" loading="lazy" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'">
                </div>
                <div class="minhadex-result-info">
                    <div class="minhadex-result-name-row">
                        <span class="minhadex-result-name">${p.name.replace(/-/g, ' ')}</span>
                        <span class="minhadex-result-id">#${p.id.toString().padStart(3, '0')}</span>
                    </div>
                    <div class="minhadex-types-row">
                        <strong>${t('minhadex_your_types_label')}</strong>
                        ${seusTiposBadges}
                    </div>
                    <div class="minhadex-types-row">
                        <span>${t('minhadex_official_types_label')}</span>
                        ${oficiaisBadges}
                        ${tagHtml}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const tiposOptionsHtml = Object.keys(coresTipos).map(t => {
        const sel = t === minhaDexEstado.filtroTipo ? 'selected' : '';
        return `<option value="${t}" ${sel}>${getTipoNome(t)}</option>`;
    }).join('');

    container.innerHTML = `
        <div class="minhadex-results-header">
            <h2>${t('minhadex_results_title')}</h2>
            <p style="color: #666; font-size: 14px;">${t('minhadex_results_desc')}</p>

            <div class="minhadex-results-stats-grid">
                <div class="minhadex-stat-card">
                    <div class="minhadex-stat-val">${totalDefinidos}</div>
                    <div class="minhadex-stat-lbl">${t('minhadex_stat_total')}</div>
                </div>
                <div class="minhadex-stat-card">
                    <div class="minhadex-stat-val">${totalAcertos} (${pctAcertos}%)</div>
                    <div class="minhadex-stat-lbl">${t('minhadex_stat_matches')}</div>
                </div>
                <div class="minhadex-stat-card">
                    <div class="minhadex-stat-val" style="font-size: 17px;">${tipoMaisEscolhido}</div>
                    <div class="minhadex-stat-lbl">${t('minhadex_stat_top_type')}</div>
                </div>
            </div>

            <div class="minhadex-results-actions">
                <button class="btn-dark" style="background: var(--primary); padding: 10px 18px; width: auto;" onclick="recomecarMinhaDex()">
                    ${t('minhadex_restart_game_btn')}
                </button>
                <button class="btn-dark" style="background: #34495e; padding: 10px 18px; width: auto;" onclick="copiarResumoMinhaDex()">
                    ${t('minhadex_copy_summary_btn')}
                </button>
            </div>
        </div>

        <div class="minhadex-filter-bar">
            <input type="text" placeholder="${t('minhadex_search_ph')}" value="${escapeHTML(minhaDexEstado.filtroBusca)}" onkeyup="filtrarResultadosMinhaDexTexto(this.value)">
            <select onchange="filtrarResultadosMinhaDexTipo(this.value)">
                <option value="all">${t('minhadex_filter_type_all')}</option>
                ${tiposOptionsHtml}
            </select>
        </div>

        <div class="minhadex-results-grid">
            ${cardsHtml || `<p style="padding: 20px; color: #777; grid-column: 1/-1; text-align: center;">Nenhum Pokémon encontrado com este filtro.</p>`}
        </div>
    `;
}

function filtrarResultadosMinhaDexTexto(val) {
    minhaDexEstado.filtroBusca = val;
    renderizarResultadosMinhaDex(document.getElementById('minhadex-container'));
}

function filtrarResultadosMinhaDexTipo(val) {
    minhaDexEstado.filtroTipo = val;
    renderizarResultadosMinhaDex(document.getElementById('minhadex-container'));
}

function copiarResumoMinhaDex() {
    const todosRespIds = Object.keys(minhaDexEstado.respostas).map(Number);
    const pokemonsClassificados = minhaDexEstado.lista.filter(p => todosRespIds.includes(p.id));
    let texto = `🎮 Minha Dex - Dexke (${pokemonsClassificados.length} Pokémon definidos)\n\n`;
    pokemonsClassificados.forEach(p => {
        const escolhidos = (minhaDexEstado.respostas[p.id] || []).map(t => getTipoNome(t)).join('/');
        const oficiais = p.types.map(t => getTipoNome(t)).join('/');
        texto += `#${p.id.toString().padStart(3, '0')} ${p.name}: [${escolhidos}] (Oficial: ${oficiais})\n`;
    });
    navigator.clipboard.writeText(texto).then(() => {
        alert(t('minhadex_summary_copied'));
    }).catch(() => {
        alert("Erro ao copiar resumo.");
    });
}

window.addEventListener('keydown', (e) => {
    if (minhaDexEstado.fase !== 'jogando') return;
    const abaMinhaDex = document.getElementById('aba-minhadex');
    if (!abaMinhaDex || !abaMinhaDex.classList.contains('active')) return;
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT')) return;

    if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (minhaDexEstado.tiposTemp.length > 0) {
            e.preventDefault();
            avancarMinhaDex();
        }
    } else if (e.key === 'ArrowLeft') {
        if (minhaDexEstado.indiceAtual > 0) {
            e.preventDefault();
            voltarMinhaDex();
        }
    }
});

// --- 12. EMULADOR GBA (EmulatorJS) - ROM salva no navegador do próprio usuário ---
let gbaIniciado = false;

function gbaDB() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open('dexke_gba', 1);
        req.onupgradeneeded = () => req.result.createObjectStore('roms');
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}
async function gbaSalvarRom(nome, blob, core) {
    const db = await gbaDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction('roms', 'readwrite');
        tx.objectStore('roms').put({ nome, blob, core }, 'rom');
        tx.oncomplete = resolve; tx.onerror = () => reject(tx.error);
    });
}
async function gbaCarregarRom() {
    const db = await gbaDB();
    return new Promise((resolve, reject) => {
        const req = db.transaction('roms').objectStore('roms').get('rom');
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => reject(req.error);
    });
}
async function gbaApagarRom() {
    const db = await gbaDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction('roms', 'readwrite');
        tx.objectStore('roms').delete('rom');
        tx.oncomplete = resolve; tx.onerror = () => reject(tx.error);
    });
}

function gbaRodar(blob, nome, core) {
    if (gbaIniciado) return;
    core = core || 'gba';
    gbaIniciado = true;
    document.getElementById('gba-picker').classList.add('hidden');
    document.getElementById('gba-reset').classList.remove('hidden');
    document.getElementById('gba-close').classList.remove('hidden');
    document.getElementById('gba-wrapper').classList.remove('hidden');

    window.EJS_player = '#gba-game';
    window.EJS_core = core;
    document.getElementById('gba-wrapper').classList.toggle('gba-core-gb', core === 'gb');
    window.EJS_gameUrl = URL.createObjectURL(blob);
    window.EJS_gameName = nome.replace(/\.[^.]+$/, '');
    window.EJS_pathtodata = 'https://cdn.emulatorjs.org/stable/data/';
    window.EJS_startOnLoaded = true;
    window.EJS_color = '#c84b31';
    window.EJS_language = 'pt-BR';

    const s = document.createElement('script');
    s.src = window.EJS_pathtodata + 'loader.js';
    document.body.appendChild(s);
}

// Descobre o núcleo do emulador: .gba -> gba | .gb/.gbc -> gb (Game Boy e Color)
function gbaDetectarCore(nome) {
    const ext = (nome.split('.').pop() || '').toLowerCase();
    if (ext === 'gba') return 'gba';
    if (ext === 'gb' || ext === 'gbc') return 'gb';
    const manual = document.getElementById('gba-console').value;
    return manual === 'auto' ? 'gba' : manual;
}

// Primeira vez: usuário escolhe o arquivo -> salva no navegador e inicia
async function iniciarGBA(input) {
    const arquivo = input.files && input.files[0];
    if (!arquivo) return;
    const core = gbaDetectarCore(arquivo.name);
    try {
        await gbaSalvarRom(arquivo.name, arquivo, core);
        if (navigator.storage && navigator.storage.persist) navigator.storage.persist();
    } catch (e) { console.warn('Não foi possível salvar a ROM neste navegador', e); }
    gbaRodar(arquivo, arquivo.name, core);
}

// Ao abrir a aba: se já existe ROM salva, inicia sozinho
async function gbaAoAbrirAba() {
    if (gbaIniciado) return;
    try {
        const salvo = await gbaCarregarRom();
        if (salvo && salvo.blob) gbaRodar(salvo.blob, salvo.nome || 'game', salvo.core);
    } catch (e) { console.warn('Erro ao ler ROM salva', e); }
}

async function gbaTrocarRom() {
    try { await gbaApagarRom(); } catch (e) {}
    location.reload();
}

// Move o emulador entre a aba (grande) e um canto da tela (flutuante) sem pausar o jogo
function gbaDock(modo) {
    if (!gbaIniciado) return;
    const w = document.getElementById('gba-wrapper');
    if (modo === 'float') {
        if (w.parentElement !== document.body) document.body.appendChild(w);
        w.classList.add('gba-floating');
        gbaRestaurarPosicao();
    } else {
        w.classList.remove('gba-floating', 'gba-collapsed');
        const slot = document.getElementById('gba-slot');
        if (w.parentElement !== slot) slot.appendChild(w);
    }
    setTimeout(() => window.dispatchEvent(new Event('resize')), 50);
}
function gbaMinimizar() { document.getElementById('gba-wrapper').classList.toggle('gba-collapsed'); }

// Tamanho da janelinha flutuante (salvo no navegador)
function gbaAplicarTamanho(w) {
    document.documentElement.style.setProperty('--gba-w', w + 'px');
    setTimeout(() => { gbaRestaurarPosicao(); window.dispatchEvent(new Event('resize')); }, 50);
}
function gbaTamanho(delta) {
    let w = 420;
    try { w = parseInt(localStorage.getItem('dexke_gba_w')) || 420; } catch (e) {}
    w = Math.max(240, Math.min(1000, w + delta));
    try { localStorage.setItem('dexke_gba_w', w); } catch (e) {}
    gbaAplicarTamanho(w);
}
try { const wSalvo = parseInt(localStorage.getItem('dexke_gba_w')); if (wSalvo) document.documentElement.style.setProperty('--gba-w', wSalvo + 'px'); } catch (e) {}

// Fecha o emulador de vez (recarrega a página e volta para a aba em que você estava)
function gbaFechar() {
    if (!confirm(t('gba_close_confirm'))) return;
    try {
        const ativa = document.querySelector('.aba-content.active');
        const id = ativa ? ativa.id.replace('aba-', '') : '';
        if (id && id !== 'gba') sessionStorage.setItem('dexke_aba_restaurar', id);
    } catch (e) {}
    location.reload();
}

// Arrastar a janelinha pela barra superior (mouse e toque)
let gbaPos = null;
try { gbaPos = JSON.parse(localStorage.getItem('dexke_gba_pos')); } catch (e) {}

function gbaPosicionar(x, y) {
    const w = document.getElementById('gba-wrapper');
    const r = w.getBoundingClientRect();
    x = Math.max(0, Math.min(x, window.innerWidth - r.width));
    y = Math.max(0, Math.min(y, window.innerHeight - r.height));
    w.style.left = x + 'px'; w.style.top = y + 'px';
    w.style.right = 'auto'; w.style.bottom = 'auto';
    return { x, y };
}
function gbaRestaurarPosicao() {
    const w = document.getElementById('gba-wrapper');
    if (!w.classList.contains('gba-floating')) return;
    if (gbaPos && typeof gbaPos.x === 'number') gbaPosicionar(gbaPos.x, gbaPos.y);
    else if (w.style.left) gbaPosicionar(parseFloat(w.style.left), parseFloat(w.style.top));
}
(function gbaArrastar() {
    const w = document.getElementById('gba-wrapper');
    const bar = document.getElementById('gba-bar');
    let arrasto = null;
    bar.addEventListener('pointerdown', e => {
        if (!w.classList.contains('gba-floating') || e.target.closest('button')) return;
        const r = w.getBoundingClientRect();
        arrasto = { dx: e.clientX - r.left, dy: e.clientY - r.top };
        bar.setPointerCapture(e.pointerId);
        e.preventDefault();
    });
    bar.addEventListener('pointermove', e => {
        if (arrasto) gbaPos = gbaPosicionar(e.clientX - arrasto.dx, e.clientY - arrasto.dy);
    });
    const soltar = () => {
        if (!arrasto) return;
        arrasto = null;
        try { localStorage.setItem('dexke_gba_pos', JSON.stringify(gbaPos)); } catch (e) {}
    };
    bar.addEventListener('pointerup', soltar);
    bar.addEventListener('pointercancel', soltar);
    window.addEventListener('resize', gbaRestaurarPosicao);
})();

iniciarApp().finally(() => {
    // Depois de fechar o emulador, volta para a aba em que você estava
    try {
        const aba = sessionStorage.getItem('dexke_aba_restaurar');
        if (aba) {
            sessionStorage.removeItem('dexke_aba_restaurar');
            const btn = document.querySelector('.nav-btn[onclick*="\'' + aba + '\'"]');
            if (btn) btn.click();
        }
    } catch (e) {}
});
