# 📙 Dexke — Pokédex & Team Builder Avançado

<p align="center">
  <a href="https://dexke.com.br/">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Dexke Pokédex" width="140" />
  </a>
</p>

<p align="center">
  <strong>Uma experiência completa, moderna e semântica para treinadores e entusiastas de Pokémon.</strong><br>
  Explore todas as gerações, teste seus palpites no modo <em>Minha Dex</em>, construa equipes competitivas e jogue ROMs clássicas direto no navegador.
</p>

<p align="center">
  <a href="https://dexke.com.br/"><strong>🌐 Acessar Projeto Online (dexke.com.br)</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-Semântico%20%26%20A11y-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Semântico" />
  <img src="https://img.shields.io/badge/CSS3-Modern%20Flex%2FGrid-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-Vanilla%20ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Vanilla" />
  <img src="https://img.shields.io/badge/PokéAPI-RESTful%20Data-EE1515?style=for-the-badge&logo=pokemon&logoColor=white" alt="PokéAPI" />
  <img src="https://img.shields.io/badge/WebAssembly-EmulatorJS-654FF0?style=for-the-badge&logo=webassembly&logoColor=white" alt="WebAssembly" />
  <img src="https://img.shields.io/badge/i18n-PT%20%7C%20EN%20%7C%20ES-2ea44f?style=for-the-badge" alt="Internacionalização" />
</p>

---

## 📖 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades em Destaque](#-funcionalidades-em-destaque)
  - [1. Pokédex Completa](#1-pokédex-completa)
  - [2. Minha Dex (Quiz & Criação de Tipos)](#2-minha-dex-quiz--criação-de-tipos)
  - [3. Detalhes Profundos & Visualização 3D](#3-detalhes-profundos--visualização-3d)
  - [4. Team Builder & Análise Showdown](#4-team-builder--análise-showdown)
  - [5. Simulador de Batalha 1v1](#5-simulador-de-batalha-1v1)
  - [6. Enciclopédia Global (Moves, Habilidades, Itens e Natures)](#6-enciclopédia-global-moves-habilidades-itens-e-natures)
  - [7. Emulador Retrô GBA/GBC Flutuante](#7-emulador-retrô-gbagbc-flutuante)
  - [8. Internacionalização Instantânea (i18n)](#8-internacionalização-instantânea-i18n)
- [Arquitetura & Engenharia de Frontend](#-arquitetura--engenharia-de-frontend)
- [Integração & Consumo da PokéAPI](#-integração--consumo-da-pokéapi)
- [Como Executar Localmente](#-como-executar-localmente)
- [Autor & Créditos](#-autor--créditos)
- [Aviso Legal e Direitos Autorais](#-aviso-legal-e-direitos-autorais)

---

## 💡 Sobre o Projeto

O **Dexke** é uma aplicação web progressiva (PWA/SPA), responsiva e de alta performance idealizada, arquitetada e desenvolvida por **Matheus Duarte**, com assistência contínua de inteligência artificial (**Gemini**) em estruturação, design de código, acessibilidade e otimização.

Mais do que uma enciclopédia estática, o Dexke une ferramentas analíticas para o cenário competitivo, recursos multimídia (modelos 3D animados, áudios oficiais de grito), modos de jogo interativos e uma estrutura construída com **HTML5 semântico rigoroso**, garantindo excelente legibilidade, SEO e acessibilidade.

---

## ✨ Funcionalidades em Destaque

### 1. Pokédex Completa
- **Catálogo de mais de 1025+ Pokémon:** Suporte a todas as gerações canônicas (Gen 1 a Gen 9 / Paldea), incluindo DLCs, formas regionais (*Alola, Galar, Hisui, Paldea*), Mega Evoluções e formas especiais.
- **Filtros Regionais & Especiais:** Navegue por jogos específicos, como *Legends: Arceus*, *Legends: Z-A*, Remakes (*Brilliant Diamond/Shining Pearl*, *Let's Go*), ou visualize a National Dex completa.
- **Busca e Ordenação Instantâneas:** Pesquisa em tempo real por nome ou número e ordenação numérica ou alfabética instantânea.

### 2. Minha Dex (Quiz & Criação de Tipos)
Uma brincadeira interativa onde você redefine a tipagem dos Pokémon:
- **Escolha de Escopo:** Jogue selecionando uma região específica ou a Pokédex Completa.
- **Instruções Integradas:** Modal inicial com resumo explicativo antes do início da partida.
- **Visualização dos Tipos Oficiais:** Durante a seleção, os tipos oficiais do Pokémon são exibidos na tela. É possível mantê-los com um clique no botão *"Manter Tipos Oficiais"* ou clicar nos emblemas para combiná-los com sua própria teoria.
- **Seleção Inteligente:** Escolha de 1 ou 2 tipos com proteção contra combinações idênticas ou seleções excedentes.
- **Resumo & Catálogo Final:**
  - Painel com o catálogo completo de todas as escolhas feitas.
  - Estatísticas de acertos/coincidências em relação aos tipos originais da franquia.
  - Filtros interativos por tipo e campo de busca por nome.
  - Reinício rápido para tentar novas regiões a qualquer momento.

### 3. Detalhes Profundos & Visualização 3D
- **Multimídia Imersiva:**
  - Alternador para versão **Shiny** ✨ em alta resolução.
  - Visualizador de **Modelos 3D Animados** (sprites animados de Pokémon Showdown).
  - Reprodução do **Áudio Oficial (Cry)** de cada espécie.
- **Status Base (BST):** Gráficos de barras animados para HP, Ataque, Defesa, Ataque Especial, Defesa Especial e Velocidade, com totalizador de pontos.
- **Linha Evolutiva Dinâmica:** Mapeamento visual das árvores de evolução com métodos (nível, pedra, amizade, troca, itens).
- **Matriz de Fraquezas & Resistências:** Cálculo em tempo real dos multiplicadores de dano recebido (0x, 0.25x, 0.5x, 1x, 2x, 4x) para a tipagem do Pokémon.
- **Ataques Aprendidos:** Divisão categorizada entre ataques por **Nível (Level-up)** e por **Máquina (TM/HM)**.

### 4. Team Builder & Análise Showdown
- **Gerenciamento de Equipes:** Crie, edite e salve até 6 equipes diferentes com persistência automática no `localStorage`.
- **Compatibilidade Showdown:** Importação e exportação de times no formato de texto padrão do **Pokémon Showdown**.
- **Matriz Defensiva de Equipe:** Tabela dinâmica que cruza as fraquezas e resistências de todos os 6 membros da equipe contra os 18 tipos de ataque, revelando vulnerabilidades compartilhadas e coberturas defensivas.
- **Customização Total:** Definição de item, habilidade, natureza, ataques e distribuição de IVs para cada integrante.

### 5. Simulador de Batalha 1v1
- **Arena Competitiva no Navegador:**
  - Cálculo de dano fiel às fórmulas oficiais da Geração 9.
  - Suporte a condições de status (*Burn, Freeze, Paralyze, Poison, Sleep*).
  - Modificadores de clima (*Sun, Rain, Sandstorm, Snow/Hail*).
  - Prioridade de movimentos, cálculo de acerto crítico e multiplicadores de efetividade de tipos.
  - Efeitos de itens competitivos populares (*Life Orb, Focus Sash, Leftovers, Choice Band, etc.*).
  - Log detalhado de turnos e barras de vida com animação fluída.

### 6. Enciclopédia Global (Moves, Habilidades, Itens e Natures)
- **Moves:** Catálogo com filtro por tipo, categoria de dano (⚔️ Físico, 🔮 Especial, 🛡️ Status), poder, precisão, PP e lista de todos os Pokémon aptos a aprender o golpe.
- **Habilidades:** Descrições detalhadas dos efeitos em batalha e fora dela, com relação de espécies detentoras.
- **Itens:** Banco de dados de itens competitivos e utilitários da franquia.
- **Naturezas:** Tabela dinâmica com os multiplicadores de status (+10% / -10%) de todas as naturezas.
- **Global Type Chart:** Tabela interativa com as relações de forças e fraquezas de todos os 18 tipos Pokémon.

### 7. Emulador Retrô GBA/GBC Flutuante
- Integração de alta fidelidade com **EmulatorJS via WebAssembly**.
- Carregue ROMs de Game Boy Advance e Game Boy Color (`.gba`, `.gbc`, `.zip`) diretamente no navegador.
- Janela flutuante redimensionável: continue jogando enquanto consulta a Pokédex ou monta sua equipe sem reiniciar a sessão.

### 8. Internacionalização Instantânea (i18n)
- Suporte nativo completo a **3 idiomas**:
  - 🇧🇷 Português do Brasil (`pt_BR`)
  - 🇺🇸 Inglês (`en_US`)
  - 🇪🇸 Espanhol (`es_ES`)
- Troca de idioma dinâmica sem necessidade de recarregar a página, com salvamento da preferência no navegador.

---

## 🏗️ Arquitetura & Engenharia de Frontend

O Dexke foi construído priorizando performance, ausência de dependências pesadas e excelência em boas práticas web:

```
Dexke/
├── index.html        # Estrutura semântica HTML5 completa (Acessibilidade A11y & ARIA)
├── style.css         # CSS3 moderno: Variáveis, Flexbox/Grid, Dark Theme e Animações
├── app.js            # Lógica SPA Vanilla JS (ES6+), estado, cache e i18n
├── sitemap.xml       # Mapa do site para indexação de motores de busca
├── CNAME             # Configuração de domínio personalizado (dexke.com.br)
└── README.md         # Documentação completa do projeto
```

### Destaques Técnicos:
- **Semântica HTML5 Estrita:** Uso deliberado de `<main>`, `<section>`, `<article>`, `<header>`, `<nav>`, `<search>`, `<aside>`, `<figure>`, `<figcaption>`, `<output>` e `<button>`, limitando `<div>` apenas a estruturas essenciais de Grid/Flexbox e contêineres de injeção dinâmica de scripts.
- **Acessibilidade (A11y):** Inclusão de atributos ARIA (`role="dialog"`, `aria-modal="true"`, `role="status"`, `aria-live="polite"`, `aria-label`).
- **Animação Estilo Baralho de Cartas:** Abertura e fechamento de modais com aceleração de hardware (`will-change`, perspectiva 3D) e suporte a gestos de arrasto/swipe para fechar em telas de toque.
- **Armazenamento e Performance:** Cache em memória durante a sessão e `localStorage` para persistência de equipes e idioma, eliminando chamadas repetitivas de rede.

---

## 🔗 Integração & Consumo da PokéAPI

Os dados de Pokémon, movimentos, espécies e itens são fornecidos pela extraordinária API pública **[PokéAPI](https://pokeapi.co/)**.

O Dexke consome os seguintes *endpoints*:
- `/pokemon` e `/pokemon-species`: Informações vitais, tipos, stats, descrições e formas.
- `/evolution-chain`: Resolução recursiva das ramificações evolutivas.
- `/type`: Matrizes de efetividade e cálculo defensivo/ofensivo.
- `/move` e `/ability`: Mecânicas, categorias, prioridades e listas de compatibilidade.
- `/item` e `/nature`: Efeitos de itens e tabelas de atributos.

Agradecemos imensamente aos mantenedores e colaboradores do projeto open-source PokéAPI:  
👉 **Repositório Oficial:** [https://github.com/PokeAPI/pokeapi](https://github.com/PokeAPI/pokeapi)

---

## 🚀 Como Executar Localmente

Como o projeto é construído em puro **Vanilla JavaScript**, não há necessidade de etapas de compilação ou instalação de dependências pesadas via npm.

### Pré-requisitos
- Um navegador web moderno com suporte a ES6 e WebAssembly (Chrome, Edge, Firefox, Safari ou Opera).

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/Dexke.git
   cd Dexke
   ```

2. **Abra o projeto com um servidor local:**
   Para garantir que as requisições `fetch` e os módulos funcionem perfeitamente, utilize um servidor HTTP local:

   * **Via VS Code (Recomendado):**
     Instale a extensão **Live Server**, clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.

   * **Via Python:**
     ```bash
     # Python 3
     python -m http.server 8000
     ```
     Depois, acesse no navegador: `http://localhost:8000`

   * **Via Node.js (npx):**
     ```bash
     npx serve .
     ```

---

## 👨‍💻 Autor & Créditos

- **Idealização, Arquitetura e Desenvolvimento:** [Matheus Duarte](https://github.com/matheusduarte)
- **Assistência de Inteligência Artificial:** [Google Gemini](https://deepmind.google/technologies/gemini/) — colab nos processos de estruturação, refinamento semântico, simulador de batalha e testes de performance.
- **Biblioteca de Emulação:** [EmulatorJS](https://emulatorjs.org/) (WebAssembly).
- **Sprites e Modelos 3D:** PokéAPI e Pokémon Showdown.

---

## ⚖️ Aviso Legal e Direitos Autorais

*Pokémon* e todos os respectivos nomes, personagens, marcas e artes associadas são marcas registradas e propriedades intelectuais exclusivas da **Nintendo**, **Game Freak** e **The Pokémon Company**.

O **Dexke** é uma aplicação não oficial, gratuita e sem fins lucrativos desenvolvida exclusivamente para fins educacionais, de estudo de desenvolvimento web e para a comunidade de fãs. O projeto não possui qualquer vínculo, endosso ou patrocínio oficial da Nintendo, Game Freak ou The Pokémon Company.

---

<p align="center">
  <em>Feito com dedicação e paixão por Matheus Duarte para toda a comunidade de treinadores Pokémon.</em>
</p>
