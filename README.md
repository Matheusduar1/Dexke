# Dexke

📙 **Dexke - Pokédex & Team Builder Avançado**

O Dexke é uma aplicação web responsiva (Mobile e Desktop) idealizada, arquitetada e desenvolvida por **Matheus Duarte**. Durante o processo de criação, estruturação e otimização do código, o projeto contou com o auxílio da inteligência artificial **Gemini**

Muito mais do que uma simples Dex, o Dexke oferece um construtor de equipas robusto, análise de fraquezas cruzadas, emulador integrado e detalhes minuciosos sobre habilidades e ataques de todas as gerações.

---

## ✨ Funcionalidades

*   **Pokédex Completa:** Lista com mais de 1000 Pokémon, suportando filtros por nome, ID e por jogos/regiões (incluindo *Legends: Arceus*, *Legends: Z-A* e Remakes).
*   **Detalhes Aprofundados:** Status base calculados, linha evolutiva completa, peso, altura, e suporte para visualizar **Modelos 3D** e ouvir o **Áudio (Cries)** oficiais.
*   **Simulador de Batalha 1v1:** Uma arena integrada no navegador com mecânicas competitivas reais (Cálculo de dano, Status Conditions, Clima, IVs/EVs, Naturezas e efeitos de itens como *Life Orb* ou *Focus Sash*).
*   **Moves, Habilidades, Itens e Naturezas:**
    *   Separação inteligente de ataques aprendidos por Nível (Level-up) e por Máquina (TM/HM).
    *   Identificação visual da categoria do ataque (⚔️ Físico, 🔮 Especial, 🛡️ Status).
    *   Abas globais para pesquisa detalhada de Ataques, Habilidades e Itens da franquia, com tabelas dinâmicas de Naturezas.
*   **Team Builder Avançado (Com LocalStorage):**
    *   Crie e gira até 6 equipas diferentes com salvamento automático.
    *   **Importação/Exportação Showdown:** Cole os seus times no formato de texto do *Pokémon Showdown* para os importar automaticamente.
    *   **Matriz de Fraquezas:** Uma tabela dinâmica que cruza os tipos da tua equipa contra todos os tipos atacantes, permitindo identificar rapidamente buracos defensivos.
*   **Emulador Nativo (WebAssembly):** Joga as tuas ROMs de GBA e GBC (ex: Emerald, FireRed, Crystal) diretamente no navegador através de uma janela flutuante, sem perderes o acesso à Dex ou ao Team Builder.

---

## 🔗 Powered by PokéAPI

Todo o banco de dados deste projeto é fornecido graciosamente pela **PokéAPI**, uma API RESTful de consumo gratuito incrivelmente detalhada sobre a franquia Pokémon.

Um agradecimento especial aos mantenedores do projeto open-source
**Repositório Oficial:** https://github.com/PokeAPI/pokeapi

O Dexke faz uso massivo e eficiente dos seguintes *endpoints*:
*   `/pokemon` e `/pokemon-species`: Para listagem e dados vitais.
*   `/evolution-chain`: Para mapear dinamicamente as árvores de evolução.
*   `/type`: Para calcular as matrizes de dano complexas.
*   `/move` e `/ability`: Para extrair descrições e mecânicas específicas.

Para otimizar as milhares de requisições possíveis, o Dexke implementa um sistema de **Cache Local em JavaScript**, garantindo que o servidor da PokéAPI não seja sobrecarregado ao consultar informações repetidas.

---

## 🛠️ Tecnologias Utilizadas

*   **HTML5:** Estruturação semântica e acessível.
*   **CSS3:** Estilização com Flexbox/Grid, variáveis de ambiente para o tema escuro, UI responsiva inspirada em aplicações mobile e design limpo.
*   **Vanilla JavaScript (ES6+):** Lógica assíncrona (`async/await`, `fetch`), manipulação agressiva do DOM, sistema de *Drag & Drop*, e persistência de dados utilizando a API do `localStorage`.
*   **WebAssembly (WASM):** Integração com o *EmulatorJS* para processamento nativo de jogos.

---

## ⚖️ Direitos Autorais e Aviso Legal

Pokémon e todos os nomes e imagens relacionados são marcas registadas e propriedades exclusivas da Nintendo, Game Freak e The Pokémon Company.

O **Dexke** é um projeto não oficial, sem fins lucrativos, criado exclusivamente para fins educacionais, de estudo e para a comunidade de fãs. Este projeto não possui nenhuma afiliação, patrocínio ou aprovação oficial da Nintendo, Game Freak ou The Pokémon Company.

<br>

*Feito com dedicação por Matheus Duarte para a comunidade de treinadores Pokémon.*
