# Portfólio | Fernanda Diniz

Portfólio pessoal desenvolvido com React, TypeScript e Vite.  
O projeto apresenta minha atuação profissional, habilidades técnicas e projetos, com foco em UI moderna, boa experiência do usuário e código organizado.

## Visão geral

Aplicação frontend construída como landing page, com navegação suave entre seções, layout responsivo e identidade visual consistente. O projeto também serve como base de estudo e evolução contínua em React, UI e boas práticas.

## Tecnologias principais

* React
* TypeScript
* Vite
* Material UI
* Emotion

## Funcionalidades

* Seção Hero com apresentação e CTAs
* Seção Sobre com transição suave e cards informativos
* Seção Habilidades em grid responsivo
* Seção Projetos com cards e ações fixas
* Navegação com scroll suave
* Layout responsivo com breakpoints do MUI

## Estrutura do projeto

```text
src/
├── components/
│   ├── NavBar/                Navegação fixa com destaque da seção ativa
│   ├── AnimatedBackground/    Animação de fundo do Hero
│
├── pages/
│   └── Home/
│       ├── sections/
│       │   ├── Hero/           Capa com avatar, título e botões
│       │   ├── About/          Texto profissional e cards
│       │   ├── Skills/         Grid de habilidades
│       │   └── Projects/       Cards de projetos
│
├── theme.ts                   Tema global do Material UI
├── App.tsx                    Estrutura principal da aplicação
└── main.tsx                   Bootstrap do React


## Como rodar
```bash
# instalar dependências
npm install

# ambiente de desenvolvimento
npm run dev

# build para produção
npm run build

# pré-visualizar o build
npm run preview
```

## Estrutura (src/)
- `components/`
  - `NavBar/` — navegação fixa com destaque da seção ativa.
  - `AnimatedBackground/` — animação de fundo usada no herói.
- `pages/Home/`
  - `sections/Hero/` — capa com avatar, título e CTAs.
  - `sections/About/` — texto sobre, cards de atuação/formação.
  - `sections/Skills/` — grid responsiva de habilidades (6 colunas no desktop).
  - `sections/Projects/` — cards de projetos com links.
- `theme.ts` — tema MUI (cores, tipografia, overrides).
- `main.tsx` / `App.tsx` — bootstrap da aplicação.

## Scripts úteis
- `npm run lint` (se configurado) para checagens estáticas.
- `npm run dev` para desenvolvimento local.

## Convenções adotadas

- Componentes funcionais com TypeScript  
- Estilização usando Material UI (MUI) e Emotion  
- Uso extensivo da prop `sx` para customização de estilos  
- IDs de seção para navegação:
  - `top`
  - `about`
  - `skills`
  - `projects`

## Acessibilidade e UX

- Scroll suave entre seções  
- Botões com foco visível  
- Layout responsivo  
- Ações principais sempre posicionadas de forma consistente  

## Deploy

Após gerar o build, basta servir a pasta `dist` em qualquer serviço de hospedagem estática compatível com Vite.

## Sobre o template Vite

Este projeto utiliza o template **React + TypeScript** do Vite, com suporte a **HMR** e **ESLint**.

### Plugins oficiais utilizados

- `@vitejs/plugin-react` com Babel  
- `@vitejs/plugin-react-swc` com SWC  

A configuração de ESLint pode ser estendida para lint com reconhecimento de tipos utilizando  
`tseslint.configs.recommendedTypeChecked` ou `tseslint.configs.strictTypeChecked`, conforme a necessidade do projeto.

## Licença

Projeto de uso pessoal e educacional.

© 2025 Fernanda Diniz
