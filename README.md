#Dexke
📙 Dexke - Pokédex & Team Builder Avançado

O Dexke é uma aplicação web responsiva (Mobile e Desktop) desenvolvida com Vanilla JavaScript, HTML5 e CSS3. Muito mais do que uma simples Pokédex, o Dexke oferece um construtor de times robusto, análise de fraquezas cruzadas, e detalhes minuciosos sobre habilidades e ataques de todas as gerações.

✨ Funcionalidades

Pokédex Completa: Lista com mais de 1000 Pokémon, suportando filtros por nome, ID e por jogos/regiões (incluindo Legends: Arceus, Legends: Z-A e Remakes).

Detalhes Aprofundados: Status base calculados, linha evolutiva completa, peso, altura e habilidades.

Calculadora de Danos: Visualização rápida de multiplicadores de fraqueza, resistência e imunidade (4x, 2x, 0.5x, 0.25x e 0x).

Moves e Habilidades:

Separação inteligente de ataques aprendidos por Nível (Level-up) e por Máquina (TM/HM).

Identificação visual da categoria do ataque (⚔️ Físico, 🔮 Especial, 🛡️ Status).

Abas globais para pesquisa detalhada de qualquer Ataque ou Habilidade da franquia, com suas descrições em tela.

Team Builder Avançado (Com LocalStorage):

Crie e gerencie até 6 times diferentes.

Salvamento automático no navegador para você não perder suas equipes.

Matriz de Fraquezas: Uma tabela dinâmica que cruza os tipos do seu time contra todos os tipos atacantes, permitindo que você identifique rapidamente buracos defensivos na sua equipe.

🚀 Como Executar o Projeto

Como o projeto foi construído puramente com tecnologias web nativas, não há necessidade de instalar dependências complexas (como Node.js ou NPM).

Faça o download ou clone este repositório.

Certifique-se de que os três arquivos estão na mesma pasta (index.html, style.css e app.js).

Abra o arquivo index.html diretamente no seu navegador, ou utilize a extensão Live Server no VS Code para uma melhor experiência de desenvolvimento.

Requisito: Uma conexão ativa com a internet para buscar os dados em tempo real da API.

🔗 Powered by PokéAPI

Todo o banco de dados deste projeto é fornecido graciosamente pela PokéAPI, uma API RESTful de consumo gratuito incrivelmente detalhada sobre a franquia Pokémon.

Gostaria de deixar um agradecimento especial aos mantenedores do projeto open-source: Repositório Oficial: https://github.com/PokeAPI/pokeapi

O Dexke faz uso massivo e eficiente dos seguintes endpoints fornecidos por eles:

/pokemon e /pokemon-species: Para listagem e dados vitais.

/evolution-chain: Para mapear dinamicamente as árvores de evolução.

/type: Para calcular as matrizes de dano complexas.

/move e /ability: Para extrair descrições e mecânicas específicas.

Para otimizar as milhares de requisições possíveis, o Dexke implementa um sistema de Cache Local em JavaScript, garantindo que o servidor da PokéAPI não seja sobrecarregado ao consultar informações repetidas (como detalhes de Moves comuns entre vários Pokémon da mesma equipe).

🛠️ Tecnologias Utilizadas

HTML5: Estruturação semântica e acessível.

CSS3: Estilização com Flexbox/Grid, variáveis de ambiente para o tema, UI responsiva inspirada em aplicativos mobile, e design limpo.

Vanilla JavaScript (ES6+): Lógica assíncrona (async/await, fetch), manipulação agressiva do DOM, lógica matemática para matriz de tipos, e persistência de dados utilizando a API do localStorage.

Feito com dedicação para a comunidade de treinadores Pokémon.
