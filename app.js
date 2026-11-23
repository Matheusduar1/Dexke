// --- 1. SISTEMA DE IDIOMAS (i18n) E TRADUÇÃO DINÂMICA ---
const dicionario = {
    pt_BR: {
        tab_dexke: "Dex", tab_minhadex: "Minha Dex", tab_moves: "Moves", tab_abilities: "Habilidades", tab_items: "Itens", tab_natures: "Naturezas", tab_types: "Tipos", tab_teams: "Times", tab_battle: "⚔️ Batalha 1v1",
        tab_gba: "🎮 Emulador GBA / GBC", gba_title: "Emulador GBA / GBC", gba_desc: "Selecione o arquivo do seu jogo (.gba, .gbc, .gb ou .zip). A ROM é lida apenas no seu navegador e não é enviada para nenhum servidor.", gba_note: "O Dexke não inclui nem distribui ROMs. Use apenas jogos que você possui legalmente. A ROM fica salva só neste navegador e abre sozinha nas próximas vezes. Use \"Trocar ROM\" para mudar de jogo.", gba_reset: "Trocar ROM", gba_close: "Fechar emulador", gba_close_confirm: "Fechar o emulador? Salve o jogo dentro do próprio jogo antes: o progresso não salvo será perdido.", gba_console: "Console (só importa para arquivos .zip):",
        loading: "🔄 Carregando dados da PokéAPI...", loading_sub: "Isso pode levar alguns segundos na primeira vez.",
        choosing_poke: "Escolhendo Pokémon para o Time...", cancel: "Cancelar",
        search_poke: "Buscar Pokémon (Ex: Ursaluna, Bloodmoon)...", search_move: "Buscar Move...", search_ability: "Buscar Habilidade...", search_item: "Buscar Item...", search_nature: "Buscar Natureza...",
        all_regions: "Todas as Regiões & Especiais", all_types: "Todos os Tipos",
        opt_special_cat: "Lendários & Míticos", opt_elemental_types: "Tipos Elementais",
        filter_leg_myth: "👑 Lendários e Míticos", filter_legendary: "⭐ Apenas Lendários", filter_mythical: "✨ Apenas Míticos",
        type_chart_title: "Tabela de Eficácia de Tipos", team_analysis: "Análise de Fraquezas do Time",
        dual_type_title: "Simulador de Fraquezas (Dois Tipos)",
        dual_type_desc: "Selecione dois tipos para ver as fraquezas, resistências e imunidades que um Pokémon com essa combinação teria.",
        dual_type_legend: "Selecionar combinação de dois tipos",
        dual_type_label1: "1º Tipo:", dual_type_label2: "2º Tipo:",
        dual_select_1: "Selecione o 1º Tipo...", dual_select_2: "Nenhum / Selecione o 2º Tipo...",
        dual_type_clear: "Limpar",
        dual_type_empty: "Selecione 1 ou 2 tipos acima para simular as fraquezas defensivas.",
        dual_group_weak: "⚠️ Fraquezas", dual_group_resist: "🛡️ Resistências", dual_group_immune: "🚫 Imunidades",
        dual_none: "Nenhuma", dual_comb_label: "Combinação analisada:",
        natures_title: "Tabela de Naturezas (+10% / -10%)",
        footer_made: "Feito por Matheusduar1",
        copyright: "Pokémon e todos os nomes e imagens relacionados são marcas registradas e propriedades exclusivas da Nintendo, Game Freak e The Pokémon Company. Dexke é um projeto não oficial, sem fins lucrativos, criado exclusivamente para fins educacionais e de estudo.",
        basic_data: "Dados Básicos", height: "Altura:", weight: "Peso:", abilities: "Habilidades:",
        base_stats: "Base Stats", total: "Total:", weak_res: "Fraquezas e Resistências", evo_chain: "Linha Evolutiva & Formas",
        locations_title: "Localização (Onde Encontrar)", location_loading: "Buscando locais de encontro...", location_none: "Não encontrado na natureza (evolução, evento ou exclusivo).",
        item_desc_title: "Descrição do Efeito:", item_obtain_title: "Onde Encontrar / Como Obter:",
        item_held_wild: "Segurado por Pokémon selvagens:", item_buy_mart: "Comprado em Poké Marts / Lojas padrão.",
        item_buy_bp: "Comprado em lojas competitivas (Battle Tower / Delibird Presents / BP).",
        item_explore: "Encontrado explorando o mapa, cavernas ou recompensas de NPCs.",
        item_berry: "Colhido em árvores de Berries ou recompensas de cultivo.",
        item_tm: "Encontrado em Pokébolas no mapa ou fabricado em máquinas de TM.",
        available_moves: "Moves Disponíveis", load_moves: "Carregar Lista de Moves",
        move_type: "Tipo:", move_power: "Poder:", move_acc: "Precisão:", move_class: "Classe:",
        poke_with_ability: "Pokémon com esta Habilidade", poke_with_move: "Pokémon que aprendem este Move",
        team_1: "Time 1", team_2: "Time 2", team_3: "Time 3", team_4: "Time 4", team_5: "Time 5", team_6: "Time 6",
        your_pokemon: "Seu Pokémon (Lv. 100)", cpu_pokemon: "Pokémon da Máquina (Lv. 100)", random_cpu: "🎲 Aleatório",
        item_label: "Item:", nature_label: "Natureza:", ivs_label: "IVs, EVs &amp; Stats Finais:", moves_label: "Moves (Escolha 4):",
        start_battle: "⚔️ Iniciar Batalha!",
        js_load_moves: "<i>Carregando dados precisos...</i>", js_lvl_moves: "Aprende por Nível", js_tm_moves: "Aprende por Máquina", js_egg_moves: "Aprende por Reprodução (Ovo)", js_tutor_moves: "Aprende por Tutor", js_other_moves: "Outros Métodos / Especiais", js_no_moves: "Nenhum golpe encontrado.",
        team_picker_title: "Adicionar Pokémon ao Time", team_choosing_slot: "Escolhendo para o Slot", team_full: "O time já possui 6 Pokémon! Remova um para adicionar outro.", search_poke_team: "Buscar Pokémon para o time (Ex: Ursaluna, Bloodmoon)...",
        team_total_col: "Total do Time", team_weak_singular: "Fraqueza", team_weak_plural: "Fraquezas", team_resistant: "Resistente", team_balanced: "Equilibrado", team_neutral: "Neutro", team_resist_short: "Resist.", team_resist_singular: "Resistência", team_resist_plural: "Resistências", team_immune_short: "Imune",
        js_calc: "Calculando...", js_normal_dmg: "<p>Recebe dano normal de tudo.</p>", js_no_evo: "Linha evolutiva indisponível.",
        js_add_poke: "<p style='color:#777; font-size: 14px;'>Adicione Pokémon para ver a análise cruzada.</p>", js_gen_table: "<i>Gerando tabela de análise...</i>",
        js_atk_def: "Ataque \\ Defesa", js_def_atk: "DEFESA ➔<br><br>ATAQUE ⬇",
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
        all_regions: "All Regions & Specials", all_types: "All Types",
        opt_special_cat: "Legendary & Mythical", opt_elemental_types: "Elemental Types",
        filter_leg_myth: "👑 Legendary & Mythical", filter_legendary: "⭐ Legendary Only", filter_mythical: "✨ Mythical Only",
        type_chart_title: "Type Matchup Chart", team_analysis: "Team Weakness Analysis",
        dual_type_title: "Dual-Type Weakness Calculator",
        dual_type_desc: "Select two types to see the weaknesses, resistances, and immunities a dual-type Pokémon would have.",
        dual_type_legend: "Select dual-type combination",
        dual_type_label1: "1st Type:", dual_type_label2: "2nd Type:",
        dual_select_1: "Select 1st Type...", dual_select_2: "None / Select 2nd Type...",
        dual_type_clear: "Clear",
        dual_type_empty: "Select 1 or 2 types above to simulate defensive weaknesses.",
        dual_group_weak: "⚠️ Weaknesses", dual_group_resist: "🛡️ Resistances", dual_group_immune: "🚫 Immunities",
        dual_none: "None", dual_comb_label: "Analyzed combination:",
        natures_title: "Natures Chart (+10% / -10%)",
        footer_made: "Made by Matheusduar1",
        copyright: "Pokémon and all respective names are trademark & copyright of Nintendo, Game Freak, and The Pokémon Company. Dexke is an unofficial, non-profit project created exclusively for educational purposes.",
        basic_data: "Basic Data", height: "Height:", weight: "Weight:", abilities: "Abilities:",
        base_stats: "Base Stats", total: "Total:", weak_res: "Weaknesses & Resistances", evo_chain: "Evolution Chain & Forms",
        locations_title: "Locations (Where to Find)", location_loading: "Loading encounter locations...", location_none: "Not found in the wild (evolution, event, or exclusive).",
        item_desc_title: "Effect Description:", item_obtain_title: "Where to Find / How to Obtain:",
        item_held_wild: "Held by wild Pokémon:", item_buy_mart: "Purchased at standard Poké Marts / Shops.",
        item_buy_bp: "Purchased at competitive shops (Battle Tower / Delibird Presents / BP).",
        item_explore: "Found while exploring the overworld, caves, or NPC rewards.",
        item_berry: "Picked from Berry trees or farming rewards.",
        item_tm: "Found in overworld Poké Balls or crafted via TM Machines.",
        available_moves: "Available Moves", load_moves: "Load Moves List",
        move_type: "Type:", move_power: "Power:", move_acc: "Accuracy:", move_class: "Class:",
        poke_with_ability: "Pokémon with this Ability", poke_with_move: "Pokémon that learn this Move",
        team_1: "Team 1", team_2: "Team 2", team_3: "Team 3", team_4: "Team 4", team_5: "Team 5", team_6: "Team 6",
        your_pokemon: "Your Pokémon (Lv. 100)", cpu_pokemon: "CPU Pokémon (Lv. 100)", random_cpu: "🎲 Random",
        item_label: "Item:", nature_label: "Nature:", ivs_label: "IVs, EVs &amp; Final Stats:", moves_label: "Moves (Pick 4):",
        start_battle: "⚔️ Start Battle!",
        js_load_moves: "<i>Loading precise data...</i>", js_lvl_moves: "Learned by Level Up", js_tm_moves: "Learned by TM/HM", js_egg_moves: "Learned by Breeding (Egg)", js_tutor_moves: "Learned by Move Tutor", js_other_moves: "Other Methods / Special", js_no_moves: "No moves found.",
        team_picker_title: "Add Pokémon to Team", team_choosing_slot: "Choosing for Slot", team_full: "The team already has 6 Pokémon! Remove one to add another.", search_poke_team: "Search Pokémon for team (e.g. Ursaluna, Bloodmoon)...",
        team_total_col: "Team Total", team_weak_singular: "Weakness", team_weak_plural: "Weaknesses", team_resistant: "Resistant", team_balanced: "Balanced", team_neutral: "Neutral", team_resist_short: "Resist.", team_resist_singular: "Resistance", team_resist_plural: "Resistances", team_immune_short: "Immune",
        js_calc: "Calculating...", js_normal_dmg: "<p>Takes normal damage from everything.</p>", js_no_evo: "Evolution chain unavailable.",
        js_add_poke: "<p style='color:#777; font-size: 14px;'>Add Pokémon to see the cross analysis.</p>", js_gen_table: "<i>Generating analysis table...</i>",
        js_atk_def: "Attack \\ Defense", js_def_atk: "DEFENSE ➔<br><br>ATTACK ⬇",
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
        all_regions: "Todas las Regiones y Especiales", all_types: "Todos los Tipos",
        opt_special_cat: "Legendarios y Míticos", opt_elemental_types: "Tipos Elementales",
        filter_leg_myth: "👑 Legendarios y Míticos", filter_legendary: "⭐ Solo Legendarios", filter_mythical: "✨ Solo Míticos",
        type_chart_title: "Tabla de Eficacia de Tipos", team_analysis: "Análisis de Debilidades",
        dual_type_title: "Simulador de Debilidades (Dos Tipos)",
        dual_type_desc: "Selecciona dos tipos para ver las debilidades, resistencias e inmunidades que tendría un Pokémon con esa combinación.",
        dual_type_legend: "Seleccionar combinación de dos tipos",
        dual_type_label1: "1.º Tipo:", dual_type_label2: "2.º Tipo:",
        dual_select_1: "Selecciona el 1.º Tipo...", dual_select_2: "Ninguno / Selecciona el 2.º Tipo...",
        dual_type_clear: "Limpiar",
        dual_type_empty: "Selecciona 1 o 2 tipos arriba para simular las debilidades defensivas.",
        dual_group_weak: "⚠️ Debilidades", dual_group_resist: "🛡️ Resistencias", dual_group_immune: "🚫 Inmunidades",
        dual_none: "Ninguna", dual_comb_label: "Combinación analizada:",
        natures_title: "Tabla de Naturalezas (+10% / -10%)",
        footer_made: "Hecho por Matheusduar1",
        copyright: "Pokémon y todos los nombres e imágenes están registrados por Nintendo, Game Freak y The Pokémon Company. Dexke es un proyecto no oficial con fines educativos.",
        basic_data: "Datos Básicos", height: "Altura:", weight: "Peso:", abilities: "Habilidades:",
        base_stats: "Estadísticas Base", total: "Total:", weak_res: "Debilidades y Resistencias", evo_chain: "Cadena Evolutiva y Formas",
        locations_title: "Ubicación (Dónde Encontrar)", location_loading: "Buscando ubicaciones...", location_none: "No se encuentra en estado salvaje (evolución, evento o exclusivo).",
        item_desc_title: "Descripción del Efecto:", item_obtain_title: "Dónde Encontrar / Cómo Obtener:",
        item_held_wild: "Equipado por Pokémon salvajes:", item_buy_mart: "Comprado en Tiendas Pokémon estándar.",
        item_buy_bp: "Comprado en tiendas competitivas (Torre Batalla / Delibird / PB).",
        item_explore: "Encontrado explorando el mapa, cuevas o recompensas de NPCs.",
        item_berry: "Recogido de árboles de Bayas o recompensas de cultivo.",
        item_tm: "Encontrado en Poké Balls por el mapa o fabricado en Máquinas MT.",
        available_moves: "Movimientos Disponibles", load_moves: "Cargar Lista",
        move_type: "Tipo:", move_power: "Poder:", move_acc: "Precisión:", move_class: "Clase:",
        poke_with_ability: "Pokémon con esta Habilidad", poke_with_move: "Pokémon que aprenden este Movimiento",
        team_1: "Equipo 1", team_2: "Equipo 2", team_3: "Equipo 3", team_4: "Equipo 4", team_5: "Equipo 5", team_6: "Equipo 6",
        your_pokemon: "Tu Pokémon (Nv. 100)", cpu_pokemon: "Pokémon de la CPU (Nv. 100)", random_cpu: "🎲 Aleatorio",
        item_label: "Objeto:", nature_label: "Naturaleza:", ivs_label: "IVs, EVs y Stats Finales:", moves_label: "Movimientos (Elige 4):",
        start_battle: "⚔️ ¡Iniciar Batalla!",
        js_load_moves: "<i>Cargando datos precisos...</i>", js_lvl_moves: "Aprende por Nivel", js_tm_moves: "Aprende por Máquina (MT/MO)", js_egg_moves: "Aprende por Huevo (Mov. Huevo)", js_tutor_moves: "Aprende por Tutor", js_other_moves: "Otros Métodos / Especiales", js_no_moves: "No se encontraron movimientos.",
        team_picker_title: "Añadir Pokémon al Equipo", team_choosing_slot: "Eligiendo para el Espacio", team_full: "¡El equipo ya tiene 6 Pokémon! Elimina uno para añadir otro.", search_poke_team: "Buscar Pokémon para el equipo (Ej: Ursaluna, Bloodmoon)...",
        team_total_col: "Total Equipo", team_weak_singular: "Debilidad", team_weak_plural: "Debilidades", team_resistant: "Resistente", team_balanced: "Equilibrado", team_neutral: "Neutro", team_resist_short: "Resist.", team_resist_singular: "Resistencia", team_resist_plural: "Resistencias", team_immune_short: "Inmune",
        js_calc: "Calculando...", js_normal_dmg: "<p>Recibe daño normal de todo.</p>", js_no_evo: "Cadena evolutiva no disponible.",
        js_add_poke: "<p style='color:#777; font-size: 14px;'>Añade Pokémon para ver el análisis.</p>", js_gen_table: "<i>Generando tabla de análisis...</i>",
        js_atk_def: "Ataque \\ Defensa", js_def_atk: "DEFENSA ➔<br><br>ATAQUE ⬇",
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

function mudarIdioma(lang, salvar = true) {
    if (!dicionario[lang]) return;
    idiomaAtual = lang;
    document.documentElement.lang = lang.replace('_', '-');
    const langSel = document.getElementById('lang-selector');
    if (langSel) langSel.value = lang;
    if (salvar) { try { localStorage.setItem('dexke_lang', lang); } catch (e) {} }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (dicionario[lang][k] !== undefined) el.innerHTML = dicionario[lang][k];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const k = el.getAttribute('data-i18n-ph');
        if (dicionario[lang][k] !== undefined) el.placeholder = dicionario[lang][k];
    });
    document.querySelectorAll('[data-i18n-label]').forEach(el => {
        const k = el.getAttribute('data-i18n-label');
        if (dicionario[lang][k] !== undefined) el.label = dicionario[lang][k];
    });
    const descChart = document.getElementById('desc-chart-global');
    if (descChart) descChart.innerHTML = t('js_chart_desc');

    filtrarLista(false);
    filtrarMovesGlobal(false);
    filtrarItemsGlobal(false);
    renderizarTime();
    filtrarListaTime();
    renderizarNatures();
    popularSelectsDoisTipos();
    atualizarSimuladorDoisTipos();
    if(document.getElementById('aba-minhadex') && document.getElementById('aba-minhadex').classList.contains('active')) {
        renderizarTelaMinhaDex();
    }
    if(document.getElementById('aba-typechart').classList.contains('active')) {
        document.getElementById('global-type-chart').innerHTML = ''; gerarTabelaDeTiposGlobal();
    }
    if (typeof aoMudarIdiomaExtras === 'function') aoMudarIdiomaExtras(lang);
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
    if (!imgEl) return;

    imgEl.style.objectFit = 'contain';

    if (is3D && currentPokemon3DNormalUrl) {
        imgEl.src = isShiny ? (currentPokemon3DShinyUrl || currentPokemon3DNormalUrl) : currentPokemon3DNormalUrl;
        imgEl.style.width = '110px';
        imgEl.style.height = '110px';
        imgEl.style.maxWidth = '110px';
        imgEl.style.maxHeight = '110px';
        imgEl.style.transform = 'none';
        imgEl.style.margin = '0 auto 10px auto';
    } else {
        imgEl.src = isShiny ? currentPokemonShinyUrl : currentPokemonNormalUrl;
        imgEl.style.width = '140px';
        imgEl.style.height = '140px';
        imgEl.style.maxWidth = '140px';
        imgEl.style.maxHeight = '140px';
        imgEl.style.transform = 'none';
        imgEl.style.margin = '0 auto';
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
            fetch('https://pokeapi.co/api/v2/pokemon?limit=2000'),
            fetch('https://pokeapi.co/api/v2/move?limit=1000'),
            fetch('https://pokeapi.co/api/v2/ability?limit=370'),
            fetch('https://pokeapi.co/api/v2/item?limit=3000')
        ]);

        const mapTipos = {};
        const promessasTipos = Object.keys(coresTipos).map(t => fetch(`https://pokeapi.co/api/v2/type/${t}`).then(r => r.json()));
        const dadosTipos = await Promise.all(promessasTipos);
        
        dadosTipos.forEach(tipoAPI => {
            cacheRelacoesTipos[tipoAPI.name] = tipoAPI.damage_relations;
            tipoAPI.pokemon.forEach(p => {
                const nomePoke = p.pokemon.name;
                if(!mapTipos[nomePoke]) mapTipos[nomePoke] = [];
                mapTipos[nomePoke][p.slot - 1] = tipoAPI.name;
            });
        });

        todosPokemon = (await resPoke.json()).results.map(p => {
            const parts = p.url.split('/');
            return { name: escapeHTML(p.name), id: parseInt(parts[parts.length - 2]), types: mapTipos[p.name] ? mapTipos[p.name].filter(Boolean) : [], bst: 0 };
        });
        
        todosMoves = (await resMoves.json()).results.map(m => ({ name: escapeHTML(m.name) }));
        todasAbilities = (await resAbil.json()).results.map(a => ({ name: escapeHTML(a.name) }));
        todosItems = (await resItems.json()).results.map(i => ({ name: escapeHTML(i.name) }));
        
        document.getElementById('loading-global').style.display = 'none';
        const abaDex = document.getElementById('aba-dexke');
        abaDex.classList.remove('hidden'); abaDex.classList.add('active');

        if (typeof inicializarExtras === 'function') inicializarExtras();
        filtrarLista();
        filtrarMovesGlobal();
        filtrarAbilitiesGlobal();
        filtrarItemsGlobal();
        renderizarNatures();
        renderizarTime();
        filtrarListaTime();
        inicializarMinhaDex();
        inicializarSimulador1v1();
        inicializarSimuladorDoisTipos();
        configurarSwipeModais();
    } catch (e) {
        document.getElementById('loading-global').innerHTML = "❌ Erro de conexão com a PokéAPI.";
    }
}

function mudarAba(event, abaId) {
    document.querySelectorAll('.aba-content').forEach(el => { el.classList.remove('active'); el.classList.add('hidden'); });
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    const abaAlvo = document.getElementById(`aba-${abaId}`);
    if (abaAlvo) { abaAlvo.classList.remove('hidden'); abaAlvo.classList.add('active'); }
    if (event && event.target) {
        event.target.classList.add('active');
    } else {
        const btnNav = document.querySelector(`.nav-btn[onclick*="'${abaId}'"]`);
        if (btnNav) btnNav.classList.add('active');
    }
    if(abaId === 'teams') { renderizarTime(); filtrarListaTime(); }
    if(abaId === 'typechart') { popularSelectsDoisTipos(); atualizarSimuladorDoisTipos(); document.getElementById('global-type-chart').innerHTML = ''; gerarTabelaDeTiposGlobal(); }
    if(abaId === 'minhadex') { renderizarTelaMinhaDex(); }
    if(abaId === 'items') { filtrarItemsGlobal(); }
    if(abaId === 'moves') { filtrarMovesGlobal(); }
    if(abaId === 'abilities') { filtrarAbilitiesGlobal(); }
    if(abaId === 'natures') { renderizarNatures(); }
    
    if(abaId === 'gba') { gbaDock('inline'); gbaAoAbrirAba(); } else gbaDock('float');
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.add('hidden');
    if (typeof sincronizarHashAba === 'function') sincronizarHashAba(abaId);
}

function iniciarSelecaoTime(indexSlot) {
    modoSelecaoTimeSlot = indexSlot;
    renderizarTime();
    const indEl = document.getElementById('team-slot-indicator');
    if (indEl) {
        indEl.innerHTML = `<span style="color:var(--primary); font-weight:bold;">👉 ${t('team_choosing_slot')} ${indexSlot + 1}</span> <button type="button" class="btn-small" onclick="cancelarSelecaoTime()" style="background:#777; margin-left:8px; padding:3px 8px;">${t('cancel')}</button>`;
    }
    const searchContainer = document.getElementById('team-search-container');
    if (searchContainer) {
        searchContainer.scrollIntoView({ behavior: 'smooth' });
        const input = document.getElementById('teamSearchInput');
        if (input) input.focus();
    }
}

function cancelarSelecaoTime() {
    modoSelecaoTimeSlot = null;
    const banner = document.getElementById('selecao-time-banner');
    if (banner) banner.style.display = 'none';
    const indEl = document.getElementById('team-slot-indicator');
    if (indEl) indEl.innerHTML = '';
    renderizarTime();
}

// --- 4. LISTAS E FILTROS ---
const legendaryIds = new Set([
    144, 145, 146, 150,
    243, 244, 245, 249, 250,
    377, 378, 379, 380, 381, 382, 383, 384,
    480, 481, 482, 483, 484, 485, 486, 487, 488,
    638, 639, 640, 641, 642, 643, 644, 645, 646,
    716, 717, 718,
    772, 773, 785, 786, 787, 788, 789, 790, 791, 792, 800,
    888, 889, 890, 891, 892, 894, 895, 896, 897, 898, 905,
    1001, 1002, 1003, 1004, 1007, 1008, 1014, 1015, 1016, 1017, 1024
]);
const legendarySlugs = [
    'articuno','zapdos','moltres','mewtwo',
    'raikou','entei','suicune','lugia','ho-oh',
    'regirock','regice','registeel','latias','latios','kyogre','groudon','rayquaza',
    'uxie','mesprit','azelf','dialga','palkia','heatran','regigigas','giratina','cresselia',
    'cobalion','terrakion','virizion','tornadus','thundurus','reshiram','zekrom','landorus','kyurem',
    'xerneas','yveltal','zygarde',
    'type-null','silvally','tapu-koko','tapu-lele','tapu-bulu','tapu-fini','cosmog','cosmoem','solgaleo','lunala','necrozma',
    'zacian','zamazenta','eternatus','kubfu','urshifu','regieleki','regidrago','glastrier','spectrier','calyrex','enamorus',
    'wo-chien','chien-pao','ting-lu','chi-yu','koraidon','miraidon','okidogi','munkidori','fezandipiti','ogerpon','terapagos'
];
const mythicalIds = new Set([
    151, 251, 385, 386,
    489, 490, 491, 492, 493,
    494, 647, 648, 649,
    719, 720, 721,
    801, 802, 807, 808, 809,
    893, 1025
]);
const mythicalSlugs = [
    'mew','celebi','jirachi','deoxys',
    'phione','manaphy','darkrai','shaymin','arceus',
    'victini','keldeo','meloetta','genesect',
    'diancie','hoopa','volcanion',
    'magearna','marshadow','zeraora','meltan','melmetal',
    'zarude','pecharunt'
];

function isPokemonLegendary(p) {
    if (legendaryIds.has(p.id)) return true;
    if (p.id > 10000) return legendarySlugs.some(s => p.name === s || p.name.startsWith(s + '-'));
    return false;
}

function isPokemonMythical(p) {
    if (mythicalIds.has(p.id)) return true;
    if (p.id > 10000) return mythicalSlugs.some(s => p.name === s || p.name.startsWith(s + '-'));
    return false;
}

const ultraBeastIds = new Set([793, 794, 795, 796, 797, 798, 799, 803, 804, 805, 806]);
const paradoxIds = new Set([984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 1005, 1006, 1009, 1010, 1020, 1021, 1022, 1023]);

function atendeFiltroRegiao(p, gen) {
    if (gen === 'za') return (p.id >= 650 && p.id <= 721) || (p.id >= 10278 && p.id <= 10400);
    const limites = {
        'all': [1, 20000], 'rby': [1, 151], 'frlg': [1, 151], 'lgpe': [1, 151], 'gsc': [152, 251], 'hgss': [152, 251],
        'rse': [252, 386], 'oras': [252, 386], 'dppt': [387, 493], 'bdsp': [387, 493], 'bw': [494, 649], 'xy': [650, 721],
        'sm': [722, 809], 'swsh': [810, 898], 'la': [899, 905], 'sv': [906, 1025], 'special': [10001, 20000]
    };
    const [min, max] = limites[gen] || [1, 20000];
    return p.id >= min && p.id <= max;
}

function atendeFiltroTipoOuRaridade(p, filtro) {
    if (filtro === 'all') return true;
    if (filtro === 'legendary') return isPokemonLegendary(p);
    if (filtro === 'mythical') return isPokemonMythical(p);
    if (filtro === 'legendary_mythical') return isPokemonLegendary(p) || isPokemonMythical(p);
    if (filtro === 'megas') return p.name.includes('-mega');
    if (filtro === 'regional') return p.name.includes('-alola') || p.name.includes('-galar') || p.name.includes('-hisui') || p.name.includes('-paldea');
    if (filtro === 'ub_paradox') return ultraBeastIds.has(p.id) || paradoxIds.has(p.id);
    return p.types.includes(filtro);
}

let pokesRenderizadosQtd = 120;
let observerPokes = null;
let debounceDexTimer = null;

function agendarFiltroDex() {
    clearTimeout(debounceDexTimer);
    debounceDexTimer = setTimeout(() => filtrarLista(true), 150);
}

function carregarMaisPokemons() {
    pokesRenderizadosQtd += 120;
    filtrarLista(false);
}

function configurarAutoLoadPokes() {
    const sentinel = document.getElementById('poke-carregar-mais-box');
    if (!sentinel) return;
    if (observerPokes) observerPokes.disconnect();
    if ('IntersectionObserver' in window) {
        observerPokes = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) carregarMaisPokemons();
        }, { rootMargin: '300px' });
        observerPokes.observe(sentinel);
    }
}

function filtrarLista(resetScroll = true) {
    const searchEl = document.getElementById('searchInput');
    const genEl = document.getElementById('genFilter');
    const tipoEl = document.getElementById('typeFilter');
    const sortEl = document.getElementById('dexSort');
    const container = document.getElementById('pokemon-list');
    if (!searchEl || !genEl || !tipoEl || !container) return;

    const termo = escapeHTML(searchEl.value.toLowerCase().trim());
    const gen = genEl.value, tipoFiltro = tipoEl.value;
    const ordenacao = sortEl ? sortEl.value : 'id_asc';

    if (resetScroll) pokesRenderizadosQtd = 120;

    listaFiltradaPokemon = todosPokemon.filter(p =>
        atendeFiltroRegiao(p, gen) &&
        (p.name.includes(termo) || p.id == termo) &&
        atendeFiltroTipoOuRaridade(p, tipoFiltro)
    );

    listaFiltradaPokemon.sort((a, b) => {
        if (ordenacao === 'id_desc') return b.id - a.id;
        if (ordenacao === 'name_asc') return a.name.localeCompare(b.name);
        if (ordenacao === 'name_desc') return b.name.localeCompare(a.name);
        if (ordenacao === 'bst_desc') return (b.bst || 0) - (a.bst || 0) || a.id - b.id;
        if (ordenacao === 'bst_asc') return (a.bst || 9999) - (b.bst || 9999) || a.id - b.id;
        return a.id - b.id;
    });

    const exibidos = listaFiltradaPokemon.slice(0, pokesRenderizadosQtd);
    let html = exibidos.map(p => {
        const numDisplay = p.id > 10000 ? '★ ESP' : '#' + p.id.toString().padStart(3, '0');
        const nomeFmt = p.name.replace(/-/g, ' ');
        const bstBadge = p.bst ? ` · BST ${p.bst}` : '';
        return `
        <article class="list-item" tabindex="0" role="button" onclick="tratarCliquePokemon('${p.name}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();tratarCliquePokemon('${p.name}');}">
            <div class="list-img-box"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png" alt="${nomeFmt}" loading="lazy" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'"></div>
            <div class="list-info"><span class="list-name">${nomeFmt}</span><span style="font-size:12px; color:var(--text-muted, #777)">${numDisplay}${bstBadge}</span>
            <div class="list-types">${p.types.map(tp => `<span class="list-type-badge" style="background-color: ${coresTipos[tp]}">${getTipoNome(tp)}</span>`).join('')}</div></div>
        </article>`;
    }).join('');

    if (pokesRenderizadosQtd < listaFiltradaPokemon.length) {
        html += `<div id="poke-carregar-mais-box" style="grid-column: 1 / -1; text-align:center; padding:15px 0;">
            <button type="button" class="btn-dark" onclick="carregarMaisPokemons()" style="width:auto; padding:8px 20px; font-size:13px;">
                +${Math.min(120, listaFiltradaPokemon.length - pokesRenderizadosQtd)} (${exibidos.length} / ${listaFiltradaPokemon.length})
            </button>
        </div>`;
    }

    container.innerHTML = html || `<p style="padding:20px; text-align:center; color:#777; grid-column:1/-1;">${t('js_no_moves').replace('golpe', 'Pokémon').replace('moves', 'Pokémon').replace('movimientos', 'Pokémon')}</p>`;
    configurarAutoLoadPokes();
}

let listaFiltradaPokemonTime = [];
function filtrarListaTime() {
    const inputEl = document.getElementById('teamSearchInput');
    const genEl = document.getElementById('teamGenFilter');
    const tipoEl = document.getElementById('teamTypeFilter');
    if (!inputEl || !genEl || !tipoEl) return;

    const termo = escapeHTML(inputEl.value.toLowerCase().trim());
    const gen = genEl.value;
    const tipoFiltro = tipoEl.value;

    listaFiltradaPokemonTime = todosPokemon.filter(p =>
        atendeFiltroRegiao(p, gen) &&
        (p.name.includes(termo) || p.id == termo) &&
        atendeFiltroTipoOuRaridade(p, tipoFiltro)
    );
    
    const container = document.getElementById('team-pokemon-list');
    if (!container) return;

    container.innerHTML = listaFiltradaPokemonTime.slice(0, 120).map(p => {
        const numDisplay = p.id > 10000 ? '★ ESP' : '#' + p.id.toString().padStart(3, '0');
        const nomeFmt = p.name.replace(/-/g, ' ');
        return `
        <article class="list-item" tabindex="0" role="button" onclick="selecionarPokemonParaTime('${p.name}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();selecionarPokemonParaTime('${p.name}');}" title="Adicionar ao time">
            <div class="list-img-box"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png" alt="${nomeFmt}" loading="lazy" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'"></div>
            <div class="list-info">
                <span class="list-name">${nomeFmt}</span>
                <span style="font-size:12px; color:var(--text-muted, #777)">${numDisplay}</span>
                <div class="list-types">${p.types.map(tp => `<span class="list-type-badge" style="background-color: ${coresTipos[tp]}">${getTipoNome(tp)}</span>`).join('')}</div>
            </div>
            <button type="button" class="btn-small" style="background:var(--primary); font-size:11px; padding:5px 8px; margin-left:8px;" onclick="event.stopPropagation(); selecionarPokemonParaTime('${p.name}')">+ Time</button>
        </article>`;
    }).join('');
}

async function selecionarPokemonParaTime(idOuNome) {
    let pObj = todosPokemon.find(p => p.name === idOuNome || p.id == idOuNome);
    if (!pObj || !pObj.types || pObj.types.length === 0) {
        try {
            const apiData = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${idOuNome}`)).json();
            pObj = { id: apiData.id, name: escapeHTML(apiData.name), types: apiData.types.map(t => escapeHTML(t.type.name)) };
        } catch (e) {
            console.error("Erro ao buscar dados do Pokémon", e);
            return;
        }
    }

    const time = timesSalvos[timeAtualIndex];
    let slotAlvo = modoSelecaoTimeSlot;
    if (slotAlvo === null) {
        slotAlvo = time.findIndex(p => p === null);
        if (slotAlvo === -1) {
            alert(t('team_full'));
            return;
        }
    }

    time[slotAlvo] = { id: pObj.id, name: pObj.name, types: pObj.types };
    localStorage.setItem('dexke_times', JSON.stringify(timesSalvos));

    modoSelecaoTimeSlot = null;
    const banner = document.getElementById('selecao-time-banner');
    if (banner) banner.style.display = 'none';
    const indEl = document.getElementById('team-slot-indicator');
    if (indEl) indEl.innerHTML = '';

    renderizarTime();
}

let movesRenderizadosQtd = 120;
let observerMoves = null;
let observerMoveDetails = null;

function getMoveMeta(name) {
    if (window.moveMetaMap && window.moveMetaMap[name]) return window.moveMetaMap[name];
    const cached = moveCache[name];
    if (!cached) return null;
    return {
        type: cached.type ? cached.type.name : 'normal',
        cls: cached.damage_class ? cached.damage_class.name : 'status',
        power: cached.power || 0,
        acc: cached.accuracy || 0
    };
}

function carregarMaisMoves() {
    movesRenderizadosQtd += 120;
    filtrarMovesGlobal(false);
}

function configurarAutoLoadMoves() {
    const sentinel = document.getElementById('moves-carregar-mais-box');
    if (observerMoves) observerMoves.disconnect();
    if (sentinel && 'IntersectionObserver' in window) {
        observerMoves = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) carregarMaisMoves();
        }, { rootMargin: '250px' });
        observerMoves.observe(sentinel);
    }

    if (observerMoveDetails) observerMoveDetails.disconnect();
    const pendingBadges = document.querySelectorAll('#moves-list .move-lazy-badge[data-move]');
    if (pendingBadges.length > 0 && 'IntersectionObserver' in window) {
        observerMoveDetails = new IntersectionObserver((entries, obs) => {
            entries.forEach(async entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                obs.unobserve(el);
                const mName = el.getAttribute('data-move');
                if (!moveCache[mName]) {
                    try { moveCache[mName] = await (await fetch(`https://pokeapi.co/api/v2/move/${mName}`)).json(); } catch (e) { return; }
                }
                const meta = getMoveMeta(mName);
                const badge = document.getElementById(`badge-glb-${mName}`);
                if (badge && meta) {
                    badge.textContent = getIconeClasse(meta.cls);
                    badge.className = `class-badge class-${meta.cls}`;
                }
                const typeBadge = document.getElementById(`type-glb-${mName}`);
                if (typeBadge && meta) {
                    typeBadge.textContent = getTipoNome(meta.type);
                    typeBadge.style.backgroundColor = coresTipos[meta.type] || '#777';
                    typeBadge.classList.remove('hidden');
                }
            });
        }, { rootMargin: '150px' });
        pendingBadges.forEach(el => observerMoveDetails.observe(el));
    }
}

function filtrarMovesGlobal(resetScroll = true) {
    const searchEl = document.getElementById('searchMoveInput');
    const typeEl = document.getElementById('moveTypeFilter');
    const classEl = document.getElementById('moveClassFilter');
    const sortEl = document.getElementById('moveSort');
    const container = document.getElementById('moves-list');
    if (!container) return;

    const termo = searchEl ? escapeHTML(searchEl.value.toLowerCase().trim().replace(/ /g, '-')) : '';
    const tipoFiltro = typeEl ? typeEl.value : 'all';
    const classFiltro = classEl ? classEl.value : 'all';
    const ordenacao = sortEl ? sortEl.value : 'name_asc';

    if (resetScroll) movesRenderizadosQtd = 120;

    listaFiltradaMoves = todosMoves.filter(m => {
        if (termo && !m.name.includes(termo)) return false;
        const meta = getMoveMeta(m.name);
        if (tipoFiltro !== 'all') {
            if (!meta || meta.type !== tipoFiltro) return false;
        }
        if (classFiltro !== 'all') {
            if (!meta || meta.cls !== classFiltro) return false;
        }
        return true;
    });

    if (ordenacao === 'power_desc') {
        listaFiltradaMoves.sort((a, b) => ((getMoveMeta(b.name)?.power || 0) - (getMoveMeta(a.name)?.power || 0)) || a.name.localeCompare(b.name));
    } else if (ordenacao === 'acc_desc') {
        listaFiltradaMoves.sort((a, b) => ((getMoveMeta(b.name)?.acc || 0) - (getMoveMeta(a.name)?.acc || 0)) || a.name.localeCompare(b.name));
    } else {
        listaFiltradaMoves.sort((a, b) => a.name.localeCompare(b.name));
    }

    const exibidos = listaFiltradaMoves.slice(0, movesRenderizadosQtd);
    let html = exibidos.map(m => {
        const meta = getMoveMeta(m.name);
        const nomeFmt = m.name.replace(/-/g, ' ');
        const typeHtml = meta
            ? `<span id="type-glb-${m.name}" class="list-type-badge" style="background-color:${coresTipos[meta.type] || '#777'};">${getTipoNome(meta.type)}</span>`
            : `<span id="type-glb-${m.name}" class="list-type-badge hidden"></span>`;
        const clsHtml = meta
            ? `<span id="badge-glb-${m.name}" class="class-badge class-${meta.cls}">${getIconeClasse(meta.cls)}</span>`
            : `<span id="badge-glb-${m.name}" class="class-badge move-lazy-badge" data-move="${m.name}" style="background:#aaa; color:#fff;">...</span>`;
        const pwrTxt = meta && meta.power ? `<small style="color:var(--text-muted, #777); font-size:11px;">Pwr ${meta.power}${meta.acc ? ` · ${meta.acc}%` : ''}</small>` : '';
        return `<article class="list-item" tabindex="0" role="button" onclick="abrirDetalheMove('${m.name}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();abrirDetalheMove('${m.name}');}" style="justify-content: space-between; gap: 8px;">
            <div style="display:flex; flex-direction:column; gap:3px;">
                <span class="list-name">${nomeFmt}</span>
                ${pwrTxt}
            </div>
            <div style="display:flex; align-items:center; gap:5px; flex-shrink:0;">
                ${typeHtml}
                ${clsHtml}
            </div>
        </article>`;
    }).join('');

    if (movesRenderizadosQtd < listaFiltradaMoves.length) {
        html += `<div id="moves-carregar-mais-box" style="grid-column: 1 / -1; text-align:center; padding:15px 0;">
            <button type="button" class="btn-dark" onclick="carregarMaisMoves()" style="width:auto; padding:8px 20px; font-size:13px;">
                +${Math.min(120, listaFiltradaMoves.length - movesRenderizadosQtd)} (${exibidos.length} / ${listaFiltradaMoves.length})
            </button>
        </div>`;
    }

    container.innerHTML = html || `<p style="padding:20px; text-align:center; color:#777; grid-column:1/-1;">${t('js_no_moves')}</p>`;
    configurarAutoLoadMoves();
}

function filtrarAbilitiesGlobal() {
    const termo = escapeHTML(document.getElementById('searchAbilityInput').value.toLowerCase().trim().replace(/ /g, '-'));
    listaFiltradaAbilities = todasAbilities.filter(a => a.name.includes(termo)).slice(0, 120);
    document.getElementById('abilities-list').innerHTML = listaFiltradaAbilities.map(a => `<article class="list-item" tabindex="0" role="button" onclick="abrirDetalheAbility('${a.name}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();abrirDetalheAbility('${a.name}');}"><span class="list-name">${a.name.replace(/-/g, ' ')}</span></article>`).join('');
}

let itensRenderizadosQtd = 120;
let observerItems = null;

function itemCorrespondeCategoria(nome, cat) {
    if (cat === 'all') return true;
    if (cat === 'competitive') {
        return /^(leftovers|life-orb|choice-|focus-sash|focus-band|assault-vest|expert-belt|rocky-helmet|heavy-duty-boots|booster-energy|eviolite|black-sludge|flame-orb|toxic-orb|clear-amulet|covert-cloak|loaded-dice|weakness-policy|air-balloon|safety-goggles|mental-herb|white-herb|power-herb|light-clay|terrain-extender|throat-spray|sitrus-berry|lum-berry|mirror-herb|ability-shield|punching-glove|scope-lens|razor-claw|muscle-band|wise-glasses|metronome|shell-bell|kings-rock|bright-powder|wide-lens|zoom-lens|eject-|red-card|iron-ball|lagging-tail|sticky-barb|protective-pads|shed-shell|blunder-policy|room-service|utility-umbrella|adrenaline-orb|(electric|grassy|misty|psychic)-seed|(damp|heat|smooth|icy)-rock)$/.test(nome);
    }
    if (cat === 'balls') {
        return nome.endsWith('-ball') && !/^(iron|smoke|light|snow)-?ball$/.test(nome);
    }
    if (cat === 'stones_evo') {
        return nome.endsWith('-stone') || /^(prism-scale|dragon-scale|kings-rock|metal-coat|up-grade|upgrade|dubious-disc|protector|electirizer|magmarizer|reaper-cloth|razor-fang|razor-claw|oval-stone|deep-sea-tooth|deep-sea-scale|whipped-dream|sachet|cracked-pot|chipped-pot|galarica-cuff|galarica-wreath|sweet-apple|tart-apple|syrupy-apple|auspicious-armor|malicious-armor|peat-block|black-augurite|scroll-of-waters|scroll-of-darkness|metal-alloy|unremarkable-teacup|masterpiece-teacup|linking-cord|rusted-sword|rusted-shield|red-orb|blue-orb|adamant-crystal|lustrous-globe|griseous-orb|griseous-core|reins-of-unity|n-solarizer|n-lunarizer|dna-splicers|reveal-glass|prison-bottle|gracidea|wellspring-mask|hearthflame-mask|cornerstone-mask)$/.test(nome);
    }
    if (cat === 'mega_z') {
        return nome.endsWith('ium-z') || nome.includes('ite') && /^(abomasite|absolite|aerodactylite|aggronite|alakazite|altarianite|ampharosite|audinite|banettite|beedrillite|blastoisinite|blazikenite|cameruptite|charizardite|diancite|galladite|garchompite|gardevoirite|gengarite|glalitite|gyaradosite|heracronite|houndoominite|kangaskhanite|latiasite|latiosite|lopunnite|lucarionite|manectite|mawilite|medichamite|metagrossite|mewtwonite|pidgeotite|pinsirite|sablenite|salamencite|sceptilite|scizorite|sharpedonite|slowbronite|steelixite|swampertite|tyranitarite|venusaurite)/.test(nome) || nome === 'ultranecrozium-z';
    }
    if (cat === 'berries') return nome.endsWith('-berry');
    if (cat === 'tms') return /^(tm|hm|tr)\d+/.test(nome);
    return true;
}

function filtrarItemsGlobal(resetScroll = true) {
    const searchEl = document.getElementById('searchItemInput');
    const catEl = document.getElementById('itemCategoryFilter');
    const termo = searchEl ? escapeHTML(searchEl.value.toLowerCase().trim().replace(/ /g, '-')) : '';
    const catFiltro = catEl ? catEl.value : 'all';
    const container = document.getElementById('items-list');
    if (!container) return;

    if (!todosItems || todosItems.length === 0) {
        container.innerHTML = `<div style="padding:20px; text-align:center; color:#777;"><i>${t('loading')}</i></div>`;
        return;
    }

    if (resetScroll) {
        itensRenderizadosQtd = (termo || catFiltro !== 'all') ? 250 : 120;
    }

    listaFiltradaItems = todosItems.filter(i => (!termo || i.name.includes(termo)) && itemCorrespondeCategoria(i.name, catFiltro));
    const itensExibidos = listaFiltradaItems.slice(0, itensRenderizadosQtd);

    if (itensExibidos.length === 0) {
        container.innerHTML = `<div style="padding:20px; text-align:center; color:#777;"><i>${t('js_no_desc')}</i></div>`;
        return;
    }

    let html = itensExibidos.map(i => {
        const nomeFmt = i.name.replace(/-/g, ' ');
        return `
        <article class="list-item" tabindex="0" role="button" onclick="abrirDetalheItem('${i.name}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();abrirDetalheItem('${i.name}');}">
            <div class="list-img-box" style="width:40px; height:40px;"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${i.name}.png" alt="${nomeFmt}" loading="lazy" onerror="this.style.display='none'"></div>
            <span class="list-name">${nomeFmt}</span>
        </article>`;
    }).join('');

    if (itensRenderizadosQtd < listaFiltradaItems.length) {
        html += `
            <div id="items-carregar-mais-box" style="grid-column: 1 / -1; text-align:center; padding:15px 0;">
                <button type="button" class="btn-dark" onclick="carregarMaisItems()" style="width:auto; padding:8px 20px; font-size:13px; cursor:pointer;">
                    +${Math.min(120, listaFiltradaItems.length - itensRenderizadosQtd)} (${itensExibidos.length} / ${listaFiltradaItems.length})
                </button>
            </div>
        `;
    }

    container.innerHTML = html;
    configurarAutoLoadItems();
}

function carregarMaisItems() {
    itensRenderizadosQtd += 120;
    filtrarItemsGlobal(false);
}

function configurarAutoLoadItems() {
    const sentinel = document.getElementById('items-carregar-mais-box');
    if (!sentinel) return;

    if (observerItems) {
        observerItems.disconnect();
    }

    if ('IntersectionObserver' in window) {
        observerItems = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                carregarMaisItems();
            }
        }, { rootMargin: '250px' });
        observerItems.observe(sentinel);
    }
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
        await selecionarPokemonParaTime(idOuNome);
        mudarAba(null, 'teams');
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
const speciesFlavorCache = {};

async function abrirDetalhes(idOuNome) {
    document.getElementById('pokemon-modal').classList.remove('hidden');
    document.getElementById('detail-moves-list').innerHTML = '';
    const locBox = document.getElementById('detail-locations');
    if (locBox) locBox.innerHTML = `<i>${t('location_loading')}</i>`;
    const genusEl = document.getElementById('detail-genus');
    const flavorEl = document.getElementById('detail-flavor');
    const metaEl = document.getElementById('detail-species-meta');
    if (genusEl) genusEl.textContent = '';
    if (flavorEl) flavorEl.innerHTML = `<i>${t('js_translating')}</i>`;
    if (metaEl) metaEl.innerHTML = '';

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
    if (typeof sincronizarHashPokemon === 'function') sincronizarHashPokemon(p.name);

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
    const getCorStat = (val) => {
        if (val < 50) return '#e74c3c';
        if (val < 80) return '#f39c12';
        if (val < 100) return '#eab308';
        if (val < 130) return '#22c55e';
        return '#06b6d4';
    };
    document.getElementById('detail-stats').innerHTML = p.stats.map(s => {
        totalStats += s.base_stat;
        const pct = Math.min(100, Math.round((s.base_stat / 200) * 100));
        const cor = getCorStat(s.base_stat);
        const sNome = escapeHTML(s.stat.name).replace('special-', 'Sp. ').replace(/-/g, ' ');
        return `<div class="stat-bar-row">
            <span class="stat-bar-label">${sNome}</span>
            <strong>${s.base_stat}</strong>
            <div class="stat-bar-track" aria-hidden="true"><div class="stat-bar-fill" style="width:${pct}%; background-color:${cor};"></div></div>
            <meter class="sr-only" min="0" max="255" value="${s.base_stat}">${s.base_stat}</meter>
        </div>`;
    }).join('');
    document.getElementById('detail-total-stats').textContent = totalStats;

    // Dados da Espécie (Categoria, Descrição, Taxa de Captura, Gênero, Felicidade, Egg Groups)
    if (metaEl && spc) {
        const capRate = spc.capture_rate !== undefined ? spc.capture_rate : '--';
        const baseHap = spc.base_happiness !== undefined ? spc.base_happiness : '--';
        const genderRate = spc.gender_rate;
        let genderTxt = t('species_genderless');
        if (genderRate >= 0) {
            const fPct = Math.round((genderRate / 8) * 1000) / 10;
            const mPct = Math.round((100 - fPct) * 10) / 10;
            genderTxt = `♂ ${mPct}% / ♀ ${fPct}%`;
        }
        const eggsTxt = (spc.egg_groups && spc.egg_groups.length > 0)
            ? spc.egg_groups.map(eg => escapeHTML(eg.name).replace(/-/g, ' ')).join(', ')
            : '--';
        metaEl.innerHTML = `
            <div class="species-meta-chip"><strong>${escapeHTML(t('species_capture'))}</strong> ${capRate}</div>
            <div class="species-meta-chip"><strong>${escapeHTML(t('species_gender'))}</strong> ${genderTxt}</div>
            <div class="species-meta-chip"><strong>${escapeHTML(t('species_happiness'))}</strong> ${baseHap}</div>
            <div class="species-meta-chip"><strong>${escapeHTML(t('species_eggs'))}</strong> <span style="text-transform:capitalize;">${eggsTxt}</span></div>
        `;
    }

    if (genusEl && spc && spc.genera) {
        const gTarget = idiomaAtual === 'es_ES' ? 'es' : 'en';
        const gObj = spc.genera.find(g => g.language.name === gTarget) || spc.genera.find(g => g.language.name === 'en');
        if (gObj) {
            if (idiomaAtual === 'pt_BR') {
                const gCacheKey = `g:${idiomaAtual}:${gObj.genus}`;
                if (!speciesFlavorCache[gCacheKey]) speciesFlavorCache[gCacheKey] = await traduzirTextoDinamico(gObj.genus);
                if (atualModalPokemon === p.name) genusEl.textContent = speciesFlavorCache[gCacheKey];
            } else {
                genusEl.textContent = gObj.genus;
            }
        }
    }

    if (flavorEl && spc && spc.flavor_text_entries) {
        const fTarget = idiomaAtual === 'es_ES' ? 'es' : 'en';
        const entries = spc.flavor_text_entries.filter(f => f.language.name === fTarget);
        const fObj = entries.length > 0 ? entries[entries.length - 1] : spc.flavor_text_entries.find(f => f.language.name === 'en');
        if (fObj) {
            const cleanFlavor = fObj.flavor_text.replace(/[\n\f\r]+/g, ' ').replace(/\s+/g, ' ').trim();
            if (idiomaAtual === 'pt_BR') {
                const fCacheKey = `f:${idiomaAtual}:${spc.id}`;
                if (!speciesFlavorCache[fCacheKey]) speciesFlavorCache[fCacheKey] = await traduzirTextoDinamico(cleanFlavor);
                if (atualModalPokemon === p.name) flavorEl.textContent = speciesFlavorCache[fCacheKey];
            } else {
                flavorEl.textContent = cleanFlavor;
            }
        } else {
            flavorEl.textContent = t('js_no_desc');
        }
    }

    calcularDano(p.types);
    buscarEvolucoes(p.species.url);
    const spcId = (spc && spc.id) ? spc.id : (p.species && p.species.url ? p.species.url.split('/')[6] : p.id);
    carregarLocaisDoPokemon(p.id, spcId);
}

function getIconeClasse(classe) { return classe === 'physical' ? '⚔️ FIS' : (classe === 'special' ? '🔮 ESP' : '🛡 STA'); }

async function carregarMovesDoPokemon() {
    const container = document.getElementById('detail-moves-list');
    container.innerHTML = t('js_load_moves');
    if (!pokemonAtualParaMoves || pokemonAtualParaMoves.length === 0) {
        container.innerHTML = t('js_no_moves');
        return;
    }

    // Pré-carregamento concorrente em lotes para acelerar o processo
    const nomesSemCache = pokemonAtualParaMoves.map(m => m.move.name).filter(nome => !moveCache[nome]);
    const tamanhoLote = 25;
    for (let i = 0; i < nomesSemCache.length; i += tamanhoLote) {
        const lote = nomesSemCache.slice(i, i + tamanhoLote);
        await Promise.all(lote.map(async nome => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/move/${nome}`);
                if (res.ok) moveCache[nome] = await res.json();
            } catch (e) {
                console.error("Erro ao carregar move:", nome, e);
            }
        }));
    }

    const ordemGeracoes = [
        'red-blue', 'yellow', 'gold-silver', 'crystal', 'ruby-sapphire', 'emerald',
        'firered-leafgreen', 'diamond-pearl', 'platinum', 'heartgold-soulsilver',
        'black-white', 'colosseum', 'xd', 'black-2-white-2', 'x-y', 'omega-ruby-alpha-sapphire',
        'sun-moon', 'ultra-sun-ultra-moon', 'lets-go-pikachu-lets-go-eevee',
        'sword-shield', 'the-isle-of-armor', 'the-crown-tundra',
        'brilliant-diamond-shining-pearl', 'legends-arceus',
        'scarlet-violet', 'the-teal-mask', 'the-indigo-disk'
    ];

    function getMelhorDetalhe(vgDetails, metodo) {
        const filtrados = vgDetails.filter(d => !metodo || d.move_learn_method.name === metodo);
        if (filtrados.length === 0) return null;
        filtrados.sort((a, b) => {
            const iA = ordemGeracoes.indexOf(a.version_group.name);
            const iB = ordemGeracoes.indexOf(b.version_group.name);
            return iA - iB;
        });
        return filtrados[filtrados.length - 1];
    }

    function gerarHtmlLinhaMove(nome, badgeMetodo) {
        const moveData = moveCache[nome];
        const tipo = (moveData && moveData.type && moveData.type.name) ? moveData.type.name : 'normal';
        const classe = (moveData && moveData.damage_class && moveData.damage_class.name) ? moveData.damage_class.name : 'status';
        const corTipo = coresTipos[tipo] || '#777';
        return `<div class="move-row" onclick="abrirDetalheMove('${escapeHTML(nome)}')">
            <div style="display:flex; align-items:center; flex-wrap:wrap; gap:4px;">
                <strong>${escapeHTML(nome).replace(/-/g, ' ')}</strong>
                <span class="list-type-badge" style="background-color: ${corTipo};">${getTipoNome(tipo)}</span>
                <span class="class-badge class-${classe}">${getIconeClasse(classe)}</span>
            </div>
            <span class="move-lvl">${badgeMetodo}</span>
        </div>`;
    }

    let levelMoves = [], machineMoves = [], eggMoves = [], tutorMoves = [], otherMoves = [];

    for (let m of pokemonAtualParaMoves) {
        const nome = m.move.name;
        const vgd = m.version_group_details || [];
        const lvlDet = getMelhorDetalhe(vgd, 'level-up');
        const tmDet = getMelhorDetalhe(vgd, 'machine');
        const eggDet = getMelhorDetalhe(vgd, 'egg');
        const tutorDet = getMelhorDetalhe(vgd, 'tutor');

        let categorizado = false;
        if (lvlDet) {
            const lvlTexto = lvlDet.level_learned_at === 0 ? 'Evo' : 'Lvl ' + lvlDet.level_learned_at;
            levelMoves.push({ lvl: lvlDet.level_learned_at, html: gerarHtmlLinhaMove(nome, lvlTexto) });
            categorizado = true;
        }
        if (tmDet) {
            machineMoves.push({ nome: nome, html: gerarHtmlLinhaMove(nome, 'TM/HM') });
            categorizado = true;
        }
        if (eggDet && !lvlDet) {
            eggMoves.push({ nome: nome, html: gerarHtmlLinhaMove(nome, 'Egg') });
            categorizado = true;
        }
        if (tutorDet && !lvlDet && !tmDet) {
            tutorMoves.push({ nome: nome, html: gerarHtmlLinhaMove(nome, 'Tutor') });
            categorizado = true;
        }
        if (!categorizado) {
            const anyDet = vgd[vgd.length - 1];
            const metodoNome = anyDet ? anyDet.move_learn_method.name.replace(/-/g, ' ') : 'Especial';
            otherMoves.push({ nome: nome, html: gerarHtmlLinhaMove(nome, metodoNome) });
        }
    }

    levelMoves.sort((a, b) => a.lvl - b.lvl);
    machineMoves.sort((a, b) => a.nome.localeCompare(b.nome));
    eggMoves.sort((a, b) => a.nome.localeCompare(b.nome));
    tutorMoves.sort((a, b) => a.nome.localeCompare(b.nome));
    otherMoves.sort((a, b) => a.nome.localeCompare(b.nome));

    let finalHtml = '';
    if (levelMoves.length > 0) finalHtml += `<div class="move-section-title">${t('js_lvl_moves')} (${levelMoves.length})</div>` + levelMoves.map(m => m.html).join('');
    if (machineMoves.length > 0) finalHtml += `<div class="move-section-title">${t('js_tm_moves')} (${machineMoves.length})</div>` + machineMoves.map(m => m.html).join('');
    if (eggMoves.length > 0) finalHtml += `<div class="move-section-title">${t('js_egg_moves')} (${eggMoves.length})</div>` + eggMoves.map(m => m.html).join('');
    if (tutorMoves.length > 0) finalHtml += `<div class="move-section-title">${t('js_tutor_moves')} (${tutorMoves.length})</div>` + tutorMoves.map(m => m.html).join('');
    if (otherMoves.length > 0) finalHtml += `<div class="move-section-title">${t('js_other_moves')} (${otherMoves.length})</div>` + otherMoves.map(m => m.html).join('');

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
    const catEl = document.getElementById('it-category');
    if (catEl) catEl.innerHTML = '';

    const obtainEl = document.getElementById('it-obtain');
    if (obtainEl) obtainEl.innerHTML = `<i>${t('js_calc')}</i>`;

    if (!itemCache[nome]) itemCache[nome] = await (await fetch(`https://pokeapi.co/api/v2/item/${nome}`)).json();
    const itData = itemCache[nome];

    if (catEl && itData.category) {
        const catNome = formatarCategoriaItem(itData.category.name);
        catEl.innerHTML = `<span class="item-cat-badge">${escapeHTML(catNome)}</span>`;
    }

    if (obtainEl) {
        obtainEl.innerHTML = obterTextoObtencaoItem(nome, itData);
    }

    let descFinal = '';
    if (idiomaAtual === 'es_ES') {
        const esFlv = itData.flavor_text_entries ? itData.flavor_text_entries.find(e => e.language.name === 'es') : null;
        if (esFlv) descFinal = esFlv.text.replace(/[\n\f]/g, ' ');
    }
    if (!descFinal) {
        const engFlv = itData.flavor_text_entries ? itData.flavor_text_entries.find(e => e.language.name === 'en') : null;
        const engEff = itData.effect_entries ? itData.effect_entries.find(e => e.language.name === 'en') : null;
        let textoIngles = (engEff && engEff.short_effect) ? engEff.short_effect : (engFlv ? engFlv.text.replace(/[\n\f]/g, ' ') : '');
        if (textoIngles) {
            descFinal = (idiomaAtual === 'en_US') ? textoIngles : await traduzirTextoDinamico(textoIngles);
        } else {
            descFinal = t('js_no_desc');
        }
    }
    document.getElementById('it-desc').textContent = descFinal;
}

function fecharModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    if (modalId === 'pokemon-modal' && typeof aoFecharModalPokemon === 'function') aoFecharModalPokemon();
}

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


// --- MAPAS DE FORMAS ESPECIAIS, ITENS DE EVOLUÇÃO E OBTENÇÃO ---
const formasEspeciaisItens = {
    'zacian-crowned': { item: 'Rusted Sword', pt: 'Item: Rusted Sword (Espada Enferrujada)', en: 'Item: Rusted Sword', es: 'Objeto: Espada Oxidada' },
    'zamazenta-crowned': { item: 'Rusted Shield', pt: 'Item: Rusted Shield (Escudo Enferrujado)', en: 'Item: Rusted Shield', es: 'Objeto: Escudo Oxidado' },
    'kyogre-primal': { item: 'Blue Orb', pt: 'Item: Blue Orb (Primal Reversion)', en: 'Item: Blue Orb (Primal Reversion)', es: 'Objeto: Esfera Azul' },
    'groudon-primal': { item: 'Red Orb', pt: 'Item: Red Orb (Primal Reversion)', en: 'Item: Red Orb (Primal Reversion)', es: 'Objeto: Esfera Roja' },
    'giratina-origin': { item: 'Griseous Orb / Core', pt: 'Item: Griseous Orb / Griseous Core', en: 'Item: Griseous Orb / Core', es: 'Objeto: Griseosfera' },
    'dialga-origin': { item: 'Adamant Crystal', pt: 'Item: Adamant Crystal', en: 'Item: Adamant Crystal', es: 'Objeto: Gran Diamansfera' },
    'palkia-origin': { item: 'Lustrous Globe', pt: 'Item: Lustrous Globe', en: 'Item: Lustrous Globe', es: 'Objeto: Gran Lustresfera' },
    'calyrex-ice': { item: 'Reins of Unity', pt: 'Item: Reins of Unity (+ Glastrier)', en: 'Item: Reins of Unity (+ Glastrier)', es: 'Objeto: Riendas Unión (+ Glastrier)' },
    'calyrex-shadow': { item: 'Reins of Unity', pt: 'Item: Reins of Unity (+ Spectrier)', en: 'Item: Reins of Unity (+ Spectrier)', es: 'Objeto: Riendas Unión (+ Spectrier)' },
    'necrozma-dusk-mane': { item: 'N-Solarizer', pt: 'Item: N-Solarizer (+ Solgaleo)', en: 'Item: N-Solarizer (+ Solgaleo)', es: 'Objeto: Necrosol (+ Solgaleo)' },
    'necrozma-dawn-wings': { item: 'N-Lunarizer', pt: 'Item: N-Lunarizer (+ Lunala)', en: 'Item: N-Lunarizer (+ Lunala)', es: 'Objeto: Necroluna (+ Lunala)' },
    'necrozma-ultra': { item: 'Ultranecrozium Z', pt: 'Item: Ultranecrozium Z', en: 'Item: Ultranecrozium Z', es: 'Objeto: Ultranecrostal Z' },
    'hoopa-unbound': { item: 'Prison Bottle', pt: 'Item: Prison Bottle (Garrafa de Prisão)', en: 'Item: Prison Bottle', es: 'Objeto: Vasija Castigo' },
    'shaymin-sky': { item: 'Gracidea', pt: 'Item: Gracidea (Flor de Dia)', en: 'Item: Gracidea (Daytime)', es: 'Objeto: Gracídea (De día)' },
    'keldeo-resolute': { item: 'Move Secret Sword', pt: 'Move: Secret Sword', en: 'Move: Secret Sword', es: 'Mov: Espada Santa' },
    'meloetta-pirouette': { item: 'Move Relic Song', pt: 'Move: Relic Song (em batalha)', en: 'Move: Relic Song (in battle)', es: 'Mov: Canto Arcaico (en batalla)' },
    'ogerpon-wellspring-mask': { item: 'Wellspring Mask', pt: 'Item: Wellspring Mask', en: 'Item: Wellspring Mask', es: 'Objeto: Máscara Fuente' },
    'ogerpon-hearthflame-mask': { item: 'Hearthflame Mask', pt: 'Item: Hearthflame Mask', en: 'Item: Hearthflame Mask', es: 'Objeto: Máscara Horno' },
    'ogerpon-cornerstone-mask': { item: 'Cornerstone Mask', pt: 'Item: Cornerstone Mask', en: 'Item: Cornerstone Mask', es: 'Objeto: Máscara Cimiento' },
    'terapagos-terastal': { item: 'Tera Shift', pt: 'Habilidade: Tera Shift', en: 'Ability: Tera Shift', es: 'Habilidad: Teracambio' },
    'terapagos-stellar': { item: 'Terastal Estelar', pt: 'Teracristalização Estelar', en: 'Stellar Terastallization', es: 'Teracristalización Astral' },
    'palafin-hero': { item: 'Zero to Hero', pt: 'Habilidade: Zero to Hero (Troca)', en: 'Ability: Zero to Hero', es: 'Habilidad: Cambio Heroico' },
    'greninja-ash': { item: 'Battle Bond', pt: 'Habilidade: Battle Bond', en: 'Ability: Battle Bond', es: 'Habilidad: Fuerte Afecto' },
    'zygarde-10': { item: 'Zygarde Cube', pt: 'Item: Zygarde Cube (10%)', en: 'Item: Zygarde Cube (10%)', es: 'Objeto: Arca de Zygarde (10%)' },
    'zygarde-complete': { item: 'Power Construct', pt: 'Habilidade: Power Construct', en: 'Ability: Power Construct', es: 'Habilidad: Agrupamento' },
    'darmanitan-zen': { item: 'Zen Mode', pt: 'Habilidade: Zen Mode (<50% HP)', en: 'Ability: Zen Mode (<50% HP)', es: 'Habilidad: Modo Daruma (<50% PS)' },
    'darmanitan-galar-zen': { item: 'Zen Mode', pt: 'Habilidade: Zen Mode (<50% HP)', en: 'Ability: Zen Mode (<50% HP)', es: 'Habilidad: Modo Daruma (<50% PS)' },
    'tornadus-therian': { item: 'Reveal Glass', pt: 'Item: Reveal Glass', en: 'Item: Reveal Glass', es: 'Objeto: Espejo Veraz' },
    'thundurus-therian': { item: 'Reveal Glass', pt: 'Item: Reveal Glass', en: 'Item: Reveal Glass', es: 'Objeto: Espejo Veraz' },
    'landorus-therian': { item: 'Reveal Glass', pt: 'Item: Reveal Glass', en: 'Item: Reveal Glass', es: 'Objeto: Espejo Veraz' },
    'enamorus-therian': { item: 'Reveal Glass', pt: 'Item: Reveal Glass', en: 'Item: Reveal Glass', es: 'Objeto: Espejo Veraz' },
    'kyurem-black': { item: 'DNA Splicers', pt: 'Item: DNA Splicers (+ Zekrom)', en: 'Item: DNA Splicers (+ Zekrom)', es: 'Objeto: Punta ADN (+ Zekrom)' },
    'kyurem-white': { item: 'DNA Splicers', pt: 'Item: DNA Splicers (+ Reshiram)', en: 'Item: DNA Splicers (+ Reshiram)', es: 'Objeto: Punta ADN (+ Reshiram)' },
    'rotom-heat': { item: 'Rotom Catalog', pt: 'Catálogo Rotom (Forno)', en: 'Rotom Catalog (Oven)', es: 'Catálogo Rotom (Microondas)' },
    'rotom-wash': { item: 'Rotom Catalog', pt: 'Catálogo Rotom (Lava-roupa)', en: 'Rotom Catalog (Washing Machine)', es: 'Catálogo Rotom (Lavadora)' },
    'rotom-frost': { item: 'Rotom Catalog', pt: 'Catálogo Rotom (Geladeira)', en: 'Rotom Catalog (Refrigerator)', es: 'Catálogo Rotom (Nevera)' },
    'rotom-fan': { item: 'Rotom Catalog', pt: 'Catálogo Rotom (Ventilador)', en: 'Rotom Catalog (Fan)', es: 'Catálogo Rotom (Ventilador)' },
    'rotom-mow': { item: 'Rotom Catalog', pt: 'Catálogo Rotom (Cortador)', en: 'Rotom Catalog (Lawn Mower)', es: 'Catálogo Rotom (Cortacésped)' },
    'deoxys-attack': { item: 'Meteorito', pt: 'Meteorito (Ataque)', en: 'Meteorite (Attack)', es: 'Meteorito (Ataque)' },
    'deoxys-defense': { item: 'Meteorito', pt: 'Meteorito (Defesa)', en: 'Meteorite (Defense)', es: 'Meteorito (Defensa)' },
    'deoxys-speed': { item: 'Meteorito', pt: 'Meteorito (Velocidade)', en: 'Meteorite (Speed)', es: 'Meteorito (Velocidad)' },
    'castform-sunny': { item: 'Clima', pt: 'Clima: Sol Intenso (Sunny)', en: 'Weather: Sunny', es: 'Clima: Soleado' },
    'castform-rainy': { item: 'Clima', pt: 'Clima: Chuva (Rain)', en: 'Weather: Rain', es: 'Clima: Lluvia' },
    'castform-snowy': { item: 'Clima', pt: 'Clima: Neve / Granizo', en: 'Weather: Snow / Hail', es: 'Clima: Nieve / Granizo' }
};

function obterMetodoEvolucaoForma(pokeNome) {
    if (formasEspeciaisItens[pokeNome]) {
        const itemInfo = formasEspeciaisItens[pokeNome];
        const langKey = idiomaAtual === 'es_ES' ? 'es' : (idiomaAtual === 'en_US' ? 'en' : 'pt');
        return itemInfo[langKey] || itemInfo.pt;
    }
    if (pokeNome.includes('-mega-x')) return 'Item: Mega Stone X';
    if (pokeNome.includes('-mega-y')) return 'Item: Mega Stone Y';
    if (pokeNome.includes('-mega-z')) return 'Item: Mega Stone Z';
    if (pokeNome.includes('-mega')) return 'Item: Mega Stone';
    if (pokeNome.includes('-gmax')) return 'Max Soup / Gigantamax';
    if (pokeNome.includes('bloodmoon')) return 'Kitakami / Lua Carmesim';
    if (pokeNome.includes('-hisui')) return 'Forma de Hisui';
    if (pokeNome.includes('-alola')) return 'Forma de Alola';
    if (pokeNome.includes('-galar')) return 'Forma de Galar';
    if (pokeNome.includes('-paldea')) return 'Forma de Paldea';
    return t('evo_special');
}

const itensEspeciaisObtencao = {
    'rusted-sword': {
        pt: "Item Lendário Exclusivo: Encontrado no altar da Floresta Adormecida (Slumbering Weald) em Galar durante a história principal / side quest pós-jogo com Hop em Pokémon Sword. Quando equipado no Zacian, ativa sua habilidade Intrepid Sword e transforma-o na forma Zacian Crowned Sword.",
        en: "Legendary Key Item: Found at the shrine in the Slumbering Weald in Galar during the main story / post-game side quest with Hop in Pokémon Sword. When held by Zacian, activates Intrepid Sword and transforms it into Zacian Crowned Sword.",
        es: "Objeto Legendario Exclusivo: Se encuentra en el santuario del Bosque Onírico (Slumbering Weald) en Galar durante la historia principal / misión secundaria post-game con Paul en Pokémon Espada. Al equiparse en Zacian, activa Espada Indómita y lo transforma en Zacian Espada Corona."
    },
    'rusted-shield': {
        pt: "Item Lendário Exclusivo: Encontrado no altar da Floresta Adormecida (Slumbering Weald) em Galar durante a história principal / side quest pós-jogo com Hop em Pokémon Shield. Quando equipado no Zamazenta, ativa sua habilidade Dauntless Shield e transforma-o na forma Zamazenta Crowned Shield.",
        en: "Legendary Key Item: Found at the shrine in the Slumbering Weald in Galar during the main story / post-game side quest with Hop in Pokémon Shield. When held by Zamazenta, activates Dauntless Shield and transforms it into Zamazenta Crowned Shield.",
        es: "Objeto Legendario Exclusivo: Se encuentra en el santuario del Bosque Onírico (Slumbering Weald) en Galar durante la historia principal / misión secundaria post-game con Paul en Pokémon Escudo. Al equiparse en Zamazenta, activa Escudo Recio y lo transforma en Zamazenta Escudo Corona."
    },
    'adamant-crystal': {
        pt: "Side Quest Clã Diamante: Recompensa ao vencer Adaman no Lake Valor após zerar Pokémon Legends: Arceus, ou leilão de Porto Marinada em Scarlet/Violet. Transforma Dialga na Forma Origem.",
        en: "Diamond Clan Side Quest: Reward for defeating Adaman at Lake Valor in Legends: Arceus post-game, or Porto Marinada auction in SV. Transforms Dialga into Origin Forme.",
        es: "Misión del Clan Diamante: Recompensa al vencer a Adamas en Lago Valor en Leyendas: Arceus, o subasta de Pueblo Marinada en Escarlata/Púrpura. Transforma a Dialga en Forma Origen."
    },
    'lustrous-globe': {
        pt: "Side Quest Clã Pérola: Recompensa ao vencer Irida no Lake Verity após zerar Pokémon Legends: Arceus, ou leilão de Porto Marinada em Scarlet/Violet. Transforma Palkia na Forma Origem.",
        en: "Pearl Clan Side Quest: Reward for defeating Irida at Lake Verity in Legends: Arceus post-game, or Porto Marinada auction in SV. Transforms Palkia into Origin Forme.",
        es: "Misión del Clan Perla: Recompensa al vencer a Nákara en Lago Veraz en Leyendas: Arceus, o subasta de Pueblo Marinada en Escarlata/Púrpura. Transforma a Palkia en Forma Origen."
    },
    'griseous-core': {
        pt: "Side Quest Giratina: Obtido na Turnback Cave após capturar Giratina em Legends: Arceus, ou leilão de Porto Marinada em SV. Transforma Giratina na Forma Origem.",
        en: "Giratina Side Quest: Obtained in Turnback Cave after catching Giratina in Legends: Arceus, or Porto Marinada auction in SV. Transforms Giratina into Origin Forme.",
        es: "Misión de Giratina: Obtenido en Cueva Retorno tras capturar a Giratina en Leyendas: Arceus, o subasta de Pueblo Marinada en SV. Transforma a Giratina en Forma Origen."
    },
    'griseous-orb': {
        pt: "Encontrado no Distortion World em Pokémon Platinum, Turnback Cave em HGSS/BW, ou leilões especiais. Transforma Giratina na Forma Origem e amplifica golpes Ghost e Dragon.",
        en: "Found in the Distortion World in Platinum, Turnback Cave, or special auctions. Transforms Giratina into Origin Forme and boosts Ghost/Dragon moves.",
        es: "Encontrado en el Mundo Distorsión en Platino, Cueva Retorno, o subastas especiales. Transforma a Giratina en Forma Origen y potencia ataques Fantasma/Dragón."
    },
    'prison-bottle': {
        pt: "Side Quest Hoopa: Entregue por um balconista no Poké Mart ao ter Hoopa na equipe em ORAS/USUM, ou leilão em Porto Marinada (SV). Transforma Hoopa em Hoopa Unbound.",
        en: "Hoopa Side Quest: Given by a clerk at any Poké Mart with Hoopa in party in ORAS/USUM, or Porto Marinada auction in SV. Transforms Hoopa into Hoopa Unbound.",
        es: "Misión de Hoopa: Entregado en cualquier Tienda Pokémon con Hoopa en el equipo en ROZA/USUM, o subasta en Pueblo Marinada (SV). Transforma a Hoopa en Hoopa Desatado."
    },
    'reins-of-unity': {
        pt: "História Principal de Crown Tundra: Forjado no Crown Shrine com Radiant Petal e Mane Hair, ou leilão em Porto Marinada (SV). Funde Calyrex com Glastrier (Ice Rider) ou Spectrier (Shadow Rider).",
        en: "Crown Tundra Story: Crafted at the Crown Shrine using Radiant Petal and Mane Hair, or Porto Marinada auction in SV. Merges Calyrex with Glastrier or Spectrier.",
        es: "Historia de Las Nieves de la Corona: Creado en el Santuario Corona con Pétalo Brillante y Mechón Crin, o subasta en Pueblo Marinada en SV. Fusiona a Calyrex con Glastrier o Spectrier."
    },
    'n-solarizer': {
        pt: "Side Quest Necrozma: Entregue pela cientista Burnet / Faba em Alola, ou leilão em Porto Marinada (SV). Funde Necrozma com Solgaleo para formar Dusk Mane Necrozma.",
        en: "Necrozma Side Quest: Received from Burnet/Faba in Alola, or Porto Marinada auction in SV. Fuses Necrozma with Solgaleo into Dusk Mane Necrozma.",
        es: "Misión Necrozma: Recibido de Burnet/Faba en Alola, o subasta en Pueblo Marinada (SV). Fusiona a Necrozma con Solgaleo en Necrozma Melena Crepuscular."
    },
    'n-lunarizer': {
        pt: "Side Quest Necrozma: Entregue pela cientista Burnet / Faba em Alola, ou leilão em Porto Marinada (SV). Funde Necrozma com Lunala para formar Dawn Wings Necrozma.",
        en: "Necrozma Side Quest: Received from Burnet/Faba in Alola, or Porto Marinada auction in SV. Fuses Necrozma with Lunala into Dawn Wings Necrozma.",
        es: "Misión Necrozma: Recibido de Burnet/Faba en Alola, o subasta en Pueblo Marinada (SV). Fusiona a Necrozma con Lunala en Necrozma Alas del Alba."
    },
    'dna-splicers': {
        pt: "Encontrado no Giant Chasm em Unova (B2W2) ou leilão em Porto Marinada (SV). Funde Kyurem com Reshiram (White Kyurem) ou Zekrom (Black Kyurem).",
        en: "Found in Giant Chasm in Unova (B2W2) or Porto Marinada auction in SV. Fuses Kyurem with Reshiram (White Kyurem) or Zekrom (Black Kyurem).",
        es: "Encontrado en Boquete Gigante en Teselia (B2W2) o subasta en Pueblo Marinada (SV). Fusiona a Kyurem con Reshiram o Zekrom."
    },
    'reveal-glass': {
        pt: "Obtido no Abundant Shrine em Unova levando Landorus, ou leilão de Porto Marinada em SV. Alterna as formas dos gênios (Tornadus, Thundurus, Landorus e Enamorus).",
        en: "Obtained at Abundant Shrine in Unova with Landorus, or Porto Marinada auction in SV. Switches genies between Incarnate and Therian formes.",
        es: "Obtenido en Santuario Abundancia en Teselia con Landorus, o subasta en Pueblo Marinada en SV. Cambia las formas de los genios entre Encarnación y Tótem."
    },
    'peat-block': {
        pt: "Escavação Especial: Encontrado cavando tesouros no solo com a montaria Ursaluna no Crimson Mirelands em Pokémon Legends: Arceus. Use em Ursaring durante a noite de Lua Cheia para evoluir para Ursaluna.",
        en: "Special Digging: Dug up from treasure spots using Ursaluna mount in the Crimson Mirelands in Legends: Arceus. Use on Ursaring during a Full Moon to evolve into Ursaluna.",
        es: "Excavación Especial: Se encuentra escarbando con la montura Ursaluna en Pantanal Carmesí en Leyendas: Arceus. Úsalo en Ursaring durante la noche de Luna Llena para evolucionar a Ursaluna."
    },
    'black-augurite': {
        pt: "Drop de Pokémon & Missão: Drop raro ao derrotar Graveler selvagens ou recompensa do Pedido 68 em Pokémon Legends: Arceus. Usado em Scyther para evoluí-lo para Kleavor.",
        en: "Wild Drop & Request: Rare drop from wild Graveler or reward for Request 68 in Legends: Arceus. Used on Scyther to evolve it into Kleavor.",
        es: "Drop Salvaje y Petición: Drop raro de Graveler salvajes o recompensa de la Petición 68 en Leyendas: Arceus. Úsalo en Scyther para evolucionar a Kleavor."
    },
    'auspicious-armor': {
        pt: "Side Quest de Troca: Entregue por um senhor idoso na cidade de Zapapico (Pokémon Scarlet) em troca de 10 Bronzor Fragments. Usado para evoluir Charcadet para Armarouge.",
        en: "Trade Side Quest: Given by an elderly man in Zapapico (Pokémon Scarlet) in exchange for 10 Bronzor Fragments. Used to evolve Charcadet into Armarouge.",
        es: "Misión de Intercambio: Entregado por un anciano en Pueblo Zapapico (Pokémon Escarlata) a cambio de 10 Fragmentos de Bronzor. Se usa para evolucionar a Charcadet en Armarouge."
    },
    'malicious-armor': {
        pt: "Side Quest de Troca: Entregue por uma senhora na cidade de Zapapico (Pokémon Violet) em troca de 10 Sinistea Chips. Usado para evoluir Charcadet para Ceruledge.",
        en: "Trade Side Quest: Given by an elderly woman in Zapapico (Pokémon Violet) in exchange for 10 Sinistea Chips. Used to evolve Charcadet into Ceruledge.",
        es: "Misión de Intercambio: Entregado por una anciana en Pueblo Zapapico (Pokémon Púrpura) a cambio de 10 Virutas de Sinistea. Se usa para evolucionar a Charcadet en Ceruledge."
    },
    'syrupy-apple': {
        pt: "Comprado por ₽500 no quiosque autônomo de maçãs no sudeste de Mossui Town em Kitakami (DLC The Teal Mask). Usado para evoluir Applin para Dipplin.",
        en: "Purchased for ₽500 at the unmanned apple shed southeast of Mossui Town in Kitakami (The Teal Mask DLC). Used to evolve Applin into Dipplin.",
        es: "Comprado por ₽500 en el puesto autónomo de manzanas al sureste de Pueblo Versui en Noroteo (DLC La Máscara Turquesa). Se usa para evolucionar a Applin en Dipplin."
    },
    'masterpiece-teacup': {
        pt: "Encontrado dentro de uma caverna em Paradise Barrens (Kitakami DLC) ou no Ogre Oustin'. Usado para evoluir Poltchageist (Artisan Form) para Sinistcha (Masterpiece Form).",
        en: "Found inside a cave in Paradise Barrens (Kitakami DLC) or Ogre Oustin'. Used to evolve Poltchageist (Artisan Form) into Sinistcha (Masterpiece Form).",
        es: "Encontrado dentro de una cueva en Páramo Baladí (DLC Noroteo) o en Cazaogros. Se usa para evolucionar a Poltchageist (Forma Exquisita) en Sinistcha (Forma Sublime)."
    },
    'unremarkable-teacup': {
        pt: "Encontrado em uma fenda em Wistful Fields (Kitakami DLC) ou no Ogre Oustin'. Usado para evoluir Poltchageist (Counterfeit Form) para Sinistcha (Unremarkable Form).",
        en: "Found in a cave in Wistful Fields (Kitakami DLC) or Ogre Oustin'. Used to evolve Poltchageist (Counterfeit Form) into Sinistcha (Unremarkable Form).",
        es: "Encontrado en una gruta en Campos Melancólicos (DLC Noroteo) o en Cazaogros. Se usa para evolucionar a Poltchageist (Forma Arcaica) en Sinistcha (Forma Modesta)."
    },
    'metal-alloy': {
        pt: "Comprado por 300 BP na School Store da Blueberry Academy ou encontrado na Chargestone Cavern (DLC The Indigo Disk). Usado para evoluir Duraludon para Archaludon.",
        en: "Purchased for 300 BP at Blueberry Academy School Store or found in Chargestone Cavern (The Indigo Disk DLC). Used to evolve Duraludon into Archaludon.",
        es: "Comprado por 300 PB en la Tienda de la Academia Arándano o en Gruta Electromorfa (DLC El Disco Índigo). Se usa para evolucionar a Duraludon en Archaludon."
    },
    'scroll-of-waters': {
        pt: "Obtido no topo da Torre das Águas na Isle of Armor (Galar DLC) após derrotar o Mestre Mustard com Kubfu. Evolui Kubfu para Urshifu Rapid Strike Style.",
        en: "Obtained at the top of the Tower of Waters in Isle of Armor (Galar DLC) after clearing trials with Kubfu. Evolves Kubfu into Urshifu Rapid Strike Style.",
        es: "Obtenido en la cima de la Torre de las Aguas en Isla de la Armadura (DLC Galar) tras superar el reto con Kubfu. Evoluciona a Kubfu en Urshifu Estilo Fluido."
    },
    'scroll-of-darkness': {
        pt: "Obtido no topo da Torre das Trevas na Isle of Armor (Galar DLC) após derrotar o Mestre Mustard com Kubfu. Evolui Kubfu para Urshifu Single Strike Style.",
        en: "Obtained at the top of the Tower of Darkness in Isle of Armor (Galar DLC) after clearing trials with Kubfu. Evolves Kubfu into Urshifu Single Strike Style.",
        es: "Obtenido en la cima de la Torre de las Sombras en Isla de la Armadura (DLC Galar) tras superar el reto con Kubfu. Evoluciona a Kubfu en Urshifu Estilo Brusco."
    },
    'master-ball': {
        pt: "Item Raro Exclusivo: Entregue pelo Presidente da Silph Co., Devon Corp, Professor Pokémon ou líder da equipe vilã durante a história principal. Também obtido como 1º prêmio na Loteria de ID e torneio pós-jogo.",
        en: "Exclusive Rare Item: Given by the President of Silph Co., Devon Corp, Pokémon Professor or story climax. Also available as 1st prize in the ID Lottery or rare tournament reward.",
        es: "Objeto Raro Exclusivo: Entregado por el Presidente de Silph S.A., Devon S.A., el Profesor Pokémon o en el clímax de la historia. También como 1er premio de la Lotería ID o torneo post-game."
    },
    'shiny-charm': {
        pt: "Recompensa do Diretor de Jogo (Game Freak): Entregue no hotel/edifício da Game Freak após completar 100% de todas as entradas da Pokédex Regional/Nacional. Triplica a chance de encontrar Pokémon Shiny selvagens.",
        en: "Game Freak Director Reward: Given at the Game Freak building/hotel after completing 100% of the Pokédex. Triples the chance of encountering wild Shiny Pokémon.",
        es: "Recompensa del Director de Game Freak: Entregado en el hotel/edificio Game Freak tras completar el 100% de la Pokédex. Triplica la probabilidad de encontrar Pokémon Shiny salvajes."
    },
    'oval-charm': {
        pt: "Recompensa de Batalha: Obtido ao derrotar o desenvolvedor Morimoto / equipe Game Freak em batalha após vencer a Liga Pokémon. Aumenta a velocidade de geração de ovos.",
        en: "Battle Reward: Obtained by defeating Morimoto / Game Freak staff after becoming Champion. Increases egg production speed at Daycare / Picnic.",
        es: "Recompensa de Combate: Obtenido al derrotar a Morimoto / Game Freak tras coronarse Campeón. Aumenta la velocidad de aparición de Huevos."
    },
    'gracidea': {
        pt: "Presente de Florista: Entregue por uma florista em Floaroma Town (Sinnoh) ao mostrar um Shaymin de evento legítimo. Transforma Shaymin na Sky Forme durante o dia.",
        en: "Florist Gift: Given by a florist in Floaroma Town (Sinnoh) when showing an event Shaymin. Transforms Shaymin into Sky Forme during the daytime.",
        es: "Regalo de Florista: Entregado por una florista en Pueblo Aromaflor (Sinnoh) al mostrar un Shaymin de evento. Transforma a Shaymin en Forma Cielo de día."
    },
    'red-orb': {
        pt: "Monte Pírico (Hoenn) ou shopping de Kalos/Alola. Ativa a Primal Reversion de Groudon em batalha transformando-o em Primal Groudon.",
        en: "Mt. Pyre (Hoenn) or Kalos/Alola mall. Triggers Primal Reversion for Groudon in battle turning it into Primal Groudon.",
        es: "Monte Pírico (Hoenn) o centro comercial en Kalos/Alola. Activa la Regresión Primigenia de Groudon en combate."
    },
    'blue-orb': {
        pt: "Monte Pírico (Hoenn) ou shopping de Kalos/Alola. Ativa a Primal Reversion de Kyogre em batalha transformando-o em Primal Kyogre.",
        en: "Mt. Pyre (Hoenn) or Kalos/Alola mall. Triggers Primal Reversion for Kyogre in battle turning it into Primal Kyogre.",
        es: "Monte Pírico (Hoenn) o centro comercial en Kalos/Alola. Activa la Regresión Primigenia de Kyogre en combate."
    },
    'wellspring-mask': {
        pt: "História Principal de Kitakami (The Teal Mask DLC): Máscara da Água de Ogerpon, encontrada durante as missões das Feras de Kitakami. Transforma Ogerpon na forma Máscara Fonte (Grama/Água).",
        en: "Kitakami Story (The Teal Mask DLC): Ogerpon's water mask recovered during the Loyal Three quests. Transforms Ogerpon into Wellspring Mask Forme (Grass/Water).",
        es: "Historia de Noroteo (DLC La Máscara Turquesa): Máscara de agua de Ogerpon recuperada en las misiones. Transforma a Ogerpon en Forma Máscara Fuente (Planta/Agua)."
    },
    'hearthflame-mask': {
        pt: "História Principal de Kitakami (The Teal Mask DLC): Máscara do Fogo de Ogerpon, recuperada durante as missões em Kitakami. Transforma Ogerpon na forma Máscara Fornalha (Grama/Fogo).",
        en: "Kitakami Story (The Teal Mask DLC): Ogerpon's fire mask recovered during story quests. Transforms Ogerpon into Hearthflame Mask Forme (Grass/Fire).",
        es: "Historia de Noroteo (DLC La Máscara Turquesa): Máscara de fuego de Ogerpon. Transforma a Ogerpon en Forma Máscara Horno (Planta/Fuego)."
    },
    'cornerstone-mask': {
        pt: "História Principal de Kitakami (The Teal Mask DLC): Máscara da Pedra de Ogerpon. Transforma Ogerpon na forma Máscara Alicerce (Grama/Pedra).",
        en: "Kitakami Story (The Teal Mask DLC): Ogerpon's rock mask. Transforms Ogerpon into Cornerstone Mask Forme (Grass/Rock).",
        es: "Historia de Noroteo (DLC La Máscara Turquesa): Máscara de piedra de Ogerpon. Transforma a Ogerpon en Forma Máscara Cimiento (Planta/Roca)."
    }
};

function formatarCategoriaItem(cat) {
    const mapa = {
        'species-specific': { pt: 'Específico de Espécie', en: 'Species Specific', es: 'Específico de Especie' },
        'standard-balls': { pt: 'Poké Ball', en: 'Poké Ball', es: 'Poké Ball' },
        'special-balls': { pt: 'Poké Ball Especial', en: 'Special Ball', es: 'Poké Ball Especial' },
        'healing': { pt: 'Cura e Recuperação', en: 'Healing', es: 'Curación' },
        'status-cures': { pt: 'Cura de Status', en: 'Status Cure', es: 'Cura de Estado' },
        'revival': { pt: 'Reviver Pokémon', en: 'Revival', es: 'Revivir' },
        'medicine': { pt: 'Medicina', en: 'Medicine', es: 'Medicina' },
        'vitamins': { pt: 'Vitaminas / EVs', en: 'Vitamins', es: 'Vitaminas' },
        'stat-boosts': { pt: 'Item de Batalha (Boost)', en: 'Stat Boost', es: 'Mejora de Stats' },
        'held-items': { pt: 'Item de Segurar (Hold Item)', en: 'Held Item', es: 'Objeto Equipable' },
        'choice': { pt: 'Item Competitivo Choice', en: 'Choice Item', es: 'Objeto Elegido' },
        'type-enhancement': { pt: 'Potencializador de Tipo', en: 'Type Enhancer', es: 'Potenciador de Tipo' },
        'evolution': { pt: 'Item de Evolução', en: 'Evolution Item', es: 'Objeto de Evolución' },
        'evolution-stones': { pt: 'Pedra de Evolução', en: 'Evolution Stone', es: 'Piedra Evolutiva' },
        'mega-stones': { pt: 'Mega Stone', en: 'Mega Stone', es: 'Megapiedra' },
        'z-crystals': { pt: 'Cristal Z', en: 'Z-Crystal', es: 'Cristal Z' },
        'plates': { pt: 'Placa de Arceus', en: 'Plate', es: 'Tabla' },
        'memories': { pt: 'Memória de Silvally', en: 'Memory', es: 'Disco' },
        'all-machines': { pt: 'Máquina Técnica (TM/HM)', en: 'Technical Machine', es: 'Máquina Técnica' },
        'berries': { pt: 'Baga (Berry)', en: 'Berry', es: 'Baya' },
        'key-items': { pt: 'Item Chave / Especial', en: 'Key Item', es: 'Objeto Clave' },
        'plot-advancement': { pt: 'História Principal', en: 'Plot Item', es: 'Objeto de Historia' }
    };
    const langKey = idiomaAtual === 'es_ES' ? 'es' : (idiomaAtual === 'en_US' ? 'en' : 'pt');
    return (mapa[cat] && mapa[cat][langKey]) ? mapa[cat][langKey] : cat.replace(/-/g, ' ').toUpperCase();
}

function obterTextoObtencaoItem(nome, itData) {
    if (itensEspeciaisObtencao[nome]) {
        const langKey = idiomaAtual === 'es_ES' ? 'es' : (idiomaAtual === 'en_US' ? 'en' : 'pt');
        return `<strong>${escapeHTML(itensEspeciaisObtencao[nome][langKey] || itensEspeciaisObtencao[nome].pt)}</strong>`;
    }
    if (itData.held_by_pokemon && itData.held_by_pokemon.length > 0) {
        const pokes = itData.held_by_pokemon.map(h => escapeHTML(h.pokemon.name).replace(/-/g, ' ')).slice(0, 8).join(', ');
        return `${t('item_held_wild')} <strong>${pokes}</strong>.`;
    }
    const cat = itData.category ? itData.category.name : '';
    if (['standard-balls', 'special-balls', 'healing', 'medicine', 'status-cures', 'revival', 'vitamins'].includes(cat)) {
        return `<strong>${t('item_buy_mart')}</strong>`;
    }
    if (['held-items', 'choice', 'stat-boosts', 'type-enhancement'].includes(cat)) {
        return `<strong>${t('item_buy_bp')}</strong>`;
    }
    if (['evolution', 'evolution-stones'].includes(cat)) {
        return `<strong>${t('item_explore')}</strong>`;
    }
    if (['berries'].includes(cat)) {
        return `<strong>${t('item_berry')}</strong>`;
    }
    if (['all-machines'].includes(cat)) {
        return `<strong>${t('item_tm')}</strong>`;
    }
    return `<strong>${t('item_explore')}</strong>`;
}

// --- LOCALIZAÇÃO (ONDE ENCONTRAR O POKÉMON) ---
let cacheLocaisPokemon = {};

function formatarNomeJogo(nome) {
    const mapaJogos = {
        'red': 'Red', 'blue': 'Blue', 'yellow': 'Yellow',
        'gold': 'Gold', 'silver': 'Silver', 'crystal': 'Crystal',
        'ruby': 'Ruby', 'sapphire': 'Sapphire', 'emerald': 'Emerald',
        'firered': 'FireRed', 'leafgreen': 'LeafGreen',
        'diamond': 'Diamond', 'pearl': 'Pearl', 'platinum': 'Platinum',
        'heartgold': 'HeartGold', 'soulsilver': 'SoulSilver',
        'black': 'Black', 'white': 'White', 'black-2': 'Black 2', 'white-2': 'White 2',
        'x': 'Pokémon X', 'y': 'Pokémon Y',
        'omega-ruby': 'Omega Ruby', 'alpha-sapphire': 'Alpha Sapphire',
        'sun': 'Sun', 'moon': 'Moon', 'ultra-sun': 'Ultra Sun', 'ultra-moon': 'Ultra Moon',
        'lets-go-pikachu': "Let's Go Pikachu", 'lets-go-eevee': "Let's Go Eevee",
        'sword': 'Sword', 'shield': 'Shield',
        'the-isle-of-armor-sword': 'Isle of Armor (Sw)', 'the-isle-of-armor-shield': 'Isle of Armor (Sh)',
        'the-crown-tundra-sword': 'Crown Tundra (Sw)', 'the-crown-tundra-shield': 'Crown Tundra (Sh)',
        'brilliant-diamond': 'Brilliant Diamond', 'shining-pearl': 'Shining Pearl',
        'legends-arceus': 'Legends: Arceus',
        'scarlet': 'Scarlet', 'violet': 'Violet',
        'the-teal-mask': 'The Teal Mask', 'the-indigo-disk': 'The Indigo Disk'
    };
    return mapaJogos[nome] || nome.replace(/-/g, ' ').toUpperCase();
}

function getCorJogo(nome) {
    const mapaCores = {
        'red': '#c0392b', 'blue': '#2980b9', 'yellow': '#d68910',
        'gold': '#b7950b', 'silver': '#7f8c8d', 'crystal': '#16a085',
        'ruby': '#b03a2e', 'sapphire': '#1f618d', 'emerald': '#1e8449',
        'firered': '#c0392b', 'leafgreen': '#27ae60',
        'diamond': '#2874a6', 'pearl': '#af7ac5', 'platinum': '#5d6d7e',
        'heartgold': '#b7950b', 'soulsilver': '#7f8c8d',
        'black': '#2c3e50', 'white': '#7f8c8d', 'black-2': '#17202a', 'white-2': '#85929e',
        'x': '#2980b9', 'y': '#c0392b',
        'omega-ruby': '#922b21', 'alpha-sapphire': '#1b4f72',
        'sun': '#d35400', 'moon': '#6c3483', 'ultra-sun': '#ba4a00', 'ultra-moon': '#5b2c6f',
        'lets-go-pikachu': '#d4ac0d', 'lets-go-eevee': '#996633',
        'sword': '#0984e3', 'shield': '#d63031',
        'the-isle-of-armor-sword': '#0984e3', 'the-isle-of-armor-shield': '#d63031',
        'the-crown-tundra-sword': '#0984e3', 'the-crown-tundra-shield': '#d63031',
        'brilliant-diamond': '#2980b9', 'shining-pearl': '#af7ac5',
        'legends-arceus': '#2c3e50',
        'scarlet': '#c0392b', 'violet': '#6c5ce7',
        'the-teal-mask': '#00b894', 'the-indigo-disk': '#0984e3'
    };
    return mapaCores[nome] || 'var(--primary)';
}

async function carregarLocaisDoPokemon(id, speciesId) {
    const container = document.getElementById('detail-locations');
    if (!container) return;
    container.innerHTML = `<i>${t('location_loading')}</i>`;
    
    try {
        if (!cacheLocaisPokemon[id]) {
            const ctrl = new AbortController();
            const tm = setTimeout(() => ctrl.abort(), 3500);
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`, { signal: ctrl.signal });
            clearTimeout(tm);
            let data = await res.json();
            // Se for variedade e não tiver encontros próprios, busca da espécie base
            if ((!data || data.length === 0) && speciesId && speciesId != id) {
                const ctrlBase = new AbortController();
                const tmBase = setTimeout(() => ctrlBase.abort(), 3500);
                const resBase = await fetch(`https://pokeapi.co/api/v2/pokemon/${speciesId}/encounters`, { signal: ctrlBase.signal });
                clearTimeout(tmBase);
                data = await resBase.json();
            }
            cacheLocaisPokemon[id] = data;
        }
        const data = cacheLocaisPokemon[id];
        if (!data || data.length === 0) {
            container.innerHTML = `<div class="location-empty">${t('location_none')}</div>`;
            return;
        }

        const porJogo = {};
        data.forEach(item => {
            const areaLimpa = item.location_area.name
                .replace(/-area$/i, '')
                .replace(/-/g, ' ')
                .split(' ')
                .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                .join(' ');
            
            item.version_details.forEach(vd => {
                const vNome = vd.version.name;
                if (!porJogo[vNome]) porJogo[vNome] = new Set();
                porJogo[vNome].add(areaLimpa);
            });
        });

        const jogosNomes = Object.keys(porJogo);
        if (jogosNomes.length === 0) {
            container.innerHTML = `<div class="location-empty">${t('location_none')}</div>`;
            return;
        }

        let html = '';
        for (let j of jogosNomes) {
            const locaisArray = Array.from(porJogo[j]);
            const badgeCor = getCorJogo(j);
            const nomeJogoFormatado = formatarNomeJogo(j);
            html += `
                <div class="location-row">
                    <span class="location-game-badge" style="background-color: ${badgeCor};">${nomeJogoFormatado}</span>
                    <span class="location-area-list">${locaisArray.join(', ')}</span>
                </div>
            `;
        }
        container.innerHTML = html;
    } catch (e) {
        container.innerHTML = `<div class="location-empty">${t('location_none')}</div>`;
    }
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
                        const metodoEsp = obterMetodoEvolucaoForma(v.pokemon.name);
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

async function renderizarTime() {
    const time = timesSalvos[timeAtualIndex]; while(time.length < 6) time.push(null);
    let htmlSlots = '';
    for(let i=0; i<6; i++) {
        if(time[i]) {
            const nomePoke = escapeHTML(time[i].name).replace(/-/g, ' ');
            const itemTxt = time[i].item ? `@ ${escapeHTML(time[i].item).replace(/-/g, ' ')}` : '';
            const natTxt = time[i].nature ? ` · ${escapeHTML(time[i].nature)}` : '';
            const movesCount = Array.isArray(time[i].moves) ? time[i].moves.filter(Boolean).length : 0;
            const metaLine = (itemTxt || natTxt || movesCount)
                ? `<div class="team-slot-meta">${[itemTxt, natTxt, movesCount ? `${movesCount} moves` : ''].filter(Boolean).join(' ')}</div>`
                : '';
            htmlSlots += `<article class="team-slot" onclick="tratarCliquePokemon('${time[i].name}')">
                <button type="button" class="team-slot-edit" aria-label="Configurar Set de ${nomePoke}" onclick="event.stopPropagation(); if(typeof abrirEditorSetTime==='function') abrirEditorSetTime(${i});">⚙️ Set</button>
                <button type="button" class="team-slot-remove" aria-label="Remover ${nomePoke}" onclick="event.stopPropagation(); removerDoTime(${i})">X</button>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${time[i].id}.png" alt="${nomePoke}">
                <div class="team-slot-name">${nomePoke}</div>
                ${metaLine}
            </article>`;
        } else if (modoSelecaoTimeSlot === i) {
            htmlSlots += `<button type="button" class="team-slot selecting" onclick="cancelarSelecaoTime()" title="Clique para cancelar"><span style="color:var(--primary); font-size:13px; font-weight:bold;">Slot ${i+1}</span><span style="font-size:11px; color:#c84b31; margin-top:4px;">${t('choosing_poke')}</span><span style="font-size:10px; color:#777; margin-top:2px;">(${t('cancel')})</span></button>`;
        } else {
            htmlSlots += `<button type="button" class="team-slot" style="background:transparent; border: 2px dashed #999;" onclick="iniciarSelecaoTime(${i})" aria-label="Adicionar Pokémon no Slot ${i+1}"><span style="color:#999; font-size:32px;">+</span></button>`;
        }
    }
    document.getElementById('team-slots').innerHTML = htmlSlots;
    const timeValido = time.filter(p => p !== null);
    gerarTabelaFraquezas(timeValido);
    if (typeof gerarCoberturaOfensivaTime === 'function') gerarCoberturaOfensivaTime(timeValido);
}

async function gerarTabelaFraquezas(timeValido) {
    const container = document.getElementById('team-analysis-table');
    if (timeValido.length === 0) return container.innerHTML = t('js_add_poke');
    container.innerHTML = t('js_gen_table');
    
    let tabela = `<table class="type-table"><thead><tr><th scope="col" style="background:#444">${t('js_atk_def')}</th>`;
    timeValido.forEach(p => tabela += `<th scope="col" class="team-poke-col">${escapeHTML(p.name).replace(/-/g, ' ')}</th>`);
    tabela += `<th scope="col" style="background:#222; color:white; min-width:135px;">${t('team_total_col')}</th>`;
    tabela += '</tr></thead><tbody>';

    for (let tipoAtq of Object.keys(coresTipos)) {
        tabela += `<tr><th scope="row" style="background-color:${coresTipos[tipoAtq]}; color:white; font-weight:bold; text-transform:uppercase; text-shadow: 1px 1px 1px rgba(0,0,0,0.5);">${escapeHTML(tipoAtq)}</th>`;
        
        let qtdFracos = 0;
        let qtdResist = 0;
        let qtdImune = 0;

        for (let p of timeValido) {
            let mult = await calcularMultiplicadorExato(tipoAtq, p.types);
            if (p.ability) mult = aplicarHabilidadeDefensivaMultiplicador(tipoAtq, mult, p.ability);
            if (mult > 1) qtdFracos++;
            else if (mult === 0) qtdImune++;
            else if (mult < 1) qtdResist++;

            const estilo = getCorEficacia(mult);
            tabela += `<td style="background-color:${estilo.bg}; color:${estilo.text}; font-weight: bold;">${formatarMultiplicador(mult)}x</td>`;
        }

        const saldoDefensivo = qtdFracos - (qtdResist + qtdImune);
        let bgTotal = '#f7f7f7';
        let textoTotal = '#333';
        let tituloStatus = '';

        if (saldoDefensivo > 0) {
            if (saldoDefensivo >= 3) {
                bgTotal = '#c0392b';
                textoTotal = 'white';
                tituloStatus = `🚨 +${saldoDefensivo} ${t('team_weak_plural')}`;
            } else {
                bgTotal = '#F08030';
                textoTotal = 'white';
                tituloStatus = `⚠️ +${saldoDefensivo} ${saldoDefensivo > 1 ? t('team_weak_plural') : t('team_weak_singular')}`;
            }
        } else if (saldoDefensivo < 0) {
            bgTotal = '#27ae60';
            textoTotal = 'white';
            tituloStatus = `🛡️ ${t('team_resistant')}`;
        } else {
            if (qtdFracos > 0) {
                bgTotal = '#f1c40f';
                textoTotal = '#333';
                tituloStatus = `⚖️ ${t('team_balanced')}`;
            } else {
                bgTotal = '#f0f0f0';
                textoTotal = '#666';
                tituloStatus = `➖ ${t('team_neutral')}`;
            }
        }

        let partes = [];
        if (qtdFracos > 0) partes.push(`${qtdFracos} ${qtdFracos > 1 ? t('team_weak_plural') : t('team_weak_singular')}`);
        if (qtdResist > 0) partes.push(`${qtdResist} ${qtdResist > 1 ? t('team_resist_plural') : t('team_resist_singular')}`);
        if (qtdImune > 0) partes.push(`${qtdImune} ${t('team_immune_short')}`);
        if (partes.length === 0) partes.push(`0 ${t('team_weak_plural')}`);
        const detalheTexto = partes.join(' / ');

        tabela += `<td style="background-color:${bgTotal}; color:${textoTotal}; font-weight:bold; padding:4px 6px;">
            <div style="font-size:11px; line-height:1.2;">${tituloStatus}</div>
            <div style="font-size:10px; opacity:0.9; margin-top:2px; font-weight:normal;">${detalheTexto}</div>
        </td>`;

        tabela += '</tr>';
    }
    container.innerHTML = tabela + '</tbody></table>';
}

async function gerarTabelaDeTiposGlobal() {
    const container = document.getElementById('global-type-chart');
    if (container.innerHTML.includes('<table')) return; 
    
    const todosOsTipos = Object.keys(coresTipos);
    let tabela = '<table class="type-table" style="width: 100%; max-width: 900px; margin: auto;">';
    
    tabela += `<thead><tr><th scope="col" style="background:#444; color:white; font-size: 10px;">${t('js_def_atk')}</th>`;
    todosOsTipos.forEach((tp, cIdx) => {
        tabela += `<th scope="col" data-col="${cIdx}" style="background-color:${coresTipos[tp]}; height: 90px; vertical-align: bottom;">
                       <div style="writing-mode: vertical-rl; transform: rotate(180deg); margin: auto; padding-top: 5px; color: white; text-shadow: 1px 1px 1px #000; letter-spacing: 1px; font-size: 11px;">${tp.toUpperCase()}</div>
                   </th>`;
    });
    tabela += '</tr></thead><tbody>';

    for (let rIdx = 0; rIdx < todosOsTipos.length; rIdx++) {
        const tipoAtq = todosOsTipos[rIdx];
        tabela += `<tr data-row="${rIdx}"><th scope="row" style="background-color:${coresTipos[tipoAtq]}; text-align: center; padding: 4px; border: 1px solid #ddd;"><span style="color:white; font-weight:bold; text-transform:uppercase; text-shadow: 1px 1px 1px #000; font-size: 11px; letter-spacing: 1px;">${escapeHTML(tipoAtq)}</span></th>`;
        for (let cIdx = 0; cIdx < todosOsTipos.length; cIdx++) {
            const tipoDef = todosOsTipos[cIdx];
            let mult = await calcularMultiplicadorExato(tipoAtq, [tipoDef]);
            const estilo = getCorEficacia(mult);
            tabela += `<td data-row="${rIdx}" data-col="${cIdx}" data-atq="${tipoAtq}" data-def="${tipoDef}" data-mult="${mult}" style="background-color:${estilo.bg}; color:${estilo.text}; font-weight: bold; font-size: 13px;">${formatarMultiplicador(mult)}</td>`;
        }
        tabela += '</tr>';
    }
    container.innerHTML = tabela + '</tbody></table>';
    if (typeof configurarCrosshairTabelaTipos === 'function') configurarCrosshairTabelaTipos();
}

function popularSelectsDoisTipos() {
    const sel1 = document.getElementById('dual-type-1');
    const sel2 = document.getElementById('dual-type-2');
    if (!sel1 || !sel2) return;

    const val1 = sel1.value;
    const val2 = sel2.value;
    const tipos = Object.keys(coresTipos);

    const gerarOpcoes = (placeholderKey) => {
        let html = `<option value="">${escapeHTML(t(placeholderKey))}</option>`;
        tipos.forEach(tp => {
            const tCap = tp.charAt(0).toUpperCase() + tp.slice(1);
            const label = idiomaAtual === 'en_US' ? tCap : `${getTipoNome(tp)} (${tCap})`;
            html += `<option value="${tp}">${escapeHTML(label)}</option>`;
        });
        return html;
    };

    sel1.innerHTML = gerarOpcoes('dual_select_1');
    sel2.innerHTML = gerarOpcoes('dual_select_2');

    if (val1 && tipos.includes(val1)) sel1.value = val1;
    if (val2 && tipos.includes(val2) && val2 !== sel1.value) sel2.value = val2;

    Array.from(sel2.options).forEach(opt => {
        opt.disabled = Boolean(sel1.value && opt.value === sel1.value);
    });
    Array.from(sel1.options).forEach(opt => {
        opt.disabled = Boolean(sel2.value && opt.value === sel2.value);
    });
}

function inicializarSimuladorDoisTipos() {
    popularSelectsDoisTipos();
    atualizarSimuladorDoisTipos();
}

function limparSimuladorDoisTipos() {
    const sel1 = document.getElementById('dual-type-1');
    const sel2 = document.getElementById('dual-type-2');
    const selAb = document.getElementById('dual-ability');
    if (sel1) {
        sel1.value = '';
        Array.from(sel1.options).forEach(opt => { opt.disabled = false; });
    }
    if (sel2) {
        sel2.value = '';
        Array.from(sel2.options).forEach(opt => { opt.disabled = false; });
    }
    if (selAb) selAb.value = '';
    atualizarSimuladorDoisTipos();
}

function aplicarHabilidadeDefensivaMultiplicador(tipoAtq, mult, hab) {
    if (!hab) return mult;
    if ((hab === 'levitate' || hab === 'earth-eater') && tipoAtq === 'ground') return 0;
    if ((hab === 'flash-fire' || hab === 'well-baked-body') && tipoAtq === 'fire') return 0;
    if ((hab === 'water-absorb' || hab === 'storm-drain' || hab === 'dry-skin') && tipoAtq === 'water') return 0;
    if ((hab === 'volt-absorb' || hab === 'lightning-rod' || hab === 'motor-drive') && tipoAtq === 'electric') return 0;
    if (hab === 'sap-sipper' && tipoAtq === 'grass') return 0;
    if (hab === 'thick-fat' && (tipoAtq === 'fire' || tipoAtq === 'ice')) return mult * 0.5;
    if (hab === 'purifying-salt' && tipoAtq === 'ghost') return mult * 0.5;
    if ((hab === 'heatproof' || hab === 'water-bubble') && tipoAtq === 'fire') return mult * 0.5;
    if (hab === 'fluffy' && tipoAtq === 'fire') return mult * 2;
    if (hab === 'dry-skin' && tipoAtq === 'fire') return mult * 1.25;
    if (hab === 'wonder-guard' && mult <= 1) return 0;
    return mult;
}

async function atualizarSimuladorDoisTipos() {
    const sel1 = document.getElementById('dual-type-1');
    const sel2 = document.getElementById('dual-type-2');
    const selAb = document.getElementById('dual-ability');
    const resEl = document.getElementById('dual-type-result');
    if (!sel1 || !sel2 || !resEl) return;

    let t1 = sel1.value;
    let t2 = sel2.value;
    const hab = selAb ? selAb.value : '';
    if (t1 && t2 && t1 === t2) {
        t2 = '';
        sel2.value = '';
    }

    Array.from(sel2.options).forEach(opt => {
        opt.disabled = Boolean(t1 && opt.value === t1);
    });
    Array.from(sel1.options).forEach(opt => {
        opt.disabled = Boolean(t2 && opt.value === t2);
    });

    const tiposDef = [...new Set([t1, t2].filter(Boolean))];
    if (tiposDef.length === 0) {
        resEl.innerHTML = `<p class="dual-type-empty">${escapeHTML(t('dual_type_empty'))}</p>`;
        return;
    }

    const fraquezas = [];
    const resistencias = [];
    const imunidades = [];

    for (const tipoAtq of Object.keys(coresTipos)) {
        let mult = await calcularMultiplicadorExato(tipoAtq, tiposDef);
        mult = aplicarHabilidadeDefensivaMultiplicador(tipoAtq, mult, hab);
        if (mult > 1) fraquezas.push({ tipo: tipoAtq, mult });
        else if (mult === 0) imunidades.push({ tipo: tipoAtq, mult });
        else if (mult > 0 && mult < 1) resistencias.push({ tipo: tipoAtq, mult });
    }

    if (sel1.value !== t1 || sel2.value !== t2) return;

    fraquezas.sort((a, b) => b.mult - a.mult);
    resistencias.sort((a, b) => a.mult - b.mult);

    const renderizarGrupo = (titulo, itens, classeGrupo) => {
        const conteudo = itens.length > 0
            ? `<ul class="dual-badge-list">${itens.map(item => {
                const estilo = getCorEficacia(item.mult);
                return `<li class="dual-badge-item">
                    <span class="dual-type-chip" style="background-color:${coresTipos[item.tipo]}">${escapeHTML(getTipoNome(item.tipo))}</span>
                    <strong class="dual-mult-tag" style="background-color:${estilo.bg}; color:${estilo.text}">${formatarMultiplicador(item.mult)}x</strong>
                </li>`;
            }).join('')}</ul>`
            : `<p class="dual-none">${escapeHTML(t('dual_none'))}</p>`;

        return `<section class="dual-result-group ${classeGrupo}">
            <h4>${escapeHTML(titulo)} (${itens.length})</h4>
            ${conteudo}
        </section>`;
    };

    const badgesSelecionados = tiposDef.map(tp =>
        `<span class="type-badge" style="background-color:${coresTipos[tp]}">${escapeHTML(getTipoNome(tp))}</span>`
    ).join('') + (hab ? `<span class="item-cat-badge" style="background:#334155;">${escapeHTML(hab.replace(/-/g, ' '))}</span>` : '');

    const pokesCombinacao = todosPokemon.filter(p => {
        if (!p.types || p.types.length !== tiposDef.length) return false;
        if (tiposDef.length === 1) return p.types[0] === tiposDef[0];
        return (p.types[0] === tiposDef[0] && p.types[1] === tiposDef[1]) || (p.types[0] === tiposDef[1] && p.types[1] === tiposDef[0]);
    });

    const matchingHtml = pokesCombinacao.length > 0
        ? `<div class="mini-poke-grid" style="max-height: 190px;">${pokesCombinacao.slice(0, 60).map(p => {
            const nomeFmt = p.name.replace(/-/g, ' ');
            return `<button type="button" class="mini-poke-card" onclick="abrirDetalhes('${p.name}')">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png" alt="${nomeFmt}" loading="lazy" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'">
                <div>${nomeFmt}</div>
            </button>`;
        }).join('')}</div>`
        : `<p class="dual-none">${escapeHTML(t('dual_matching_none'))}</p>`;

    resEl.innerHTML = `
        <div class="dual-type-selected-bar">
            <strong>${escapeHTML(t('dual_comb_label'))}</strong>
            ${badgesSelecionados}
        </div>
        <div class="dual-type-grid">
            ${renderizarGrupo(t('dual_group_weak'), fraquezas, 'group-weak')}
            ${renderizarGrupo(t('dual_group_resist'), resistencias, 'group-resist')}
            ${renderizarGrupo(t('dual_group_immune'), imunidades, 'group-immune')}
        </div>
        <section class="dual-matching-section">
            <h4>${escapeHTML(t('dual_matching_title'))} (${pokesCombinacao.length})</h4>
            ${matchingHtml}
        </section>
    `;
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

// --- 10. SIMULADOR DE BATALHA 1v1 / 6v6 & SET EDITOR (Implementado em features.js) ---


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
