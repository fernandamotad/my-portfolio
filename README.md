# Portfólio — Fernanda Diniz

Landing page/portfólio pessoal desenvolvida em React + Vite com Material UI e Emotion. Inclui seções de apresentação, sobre, habilidades e projetos, com navegação suave e animação de fundo.

## Tecnologias
- React + Vite
- TypeScript
- Material UI (MUI)
- Emotion (estilização)

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

## Convenções de código
- Estilização com MUI + Emotion (`sx` e `styled`).
- Componentes funcionais com TypeScript.
- IDs de seção: `#top`, `#about`, `#skills`, `#projects` (usados pelo NavBar).

## Acessibilidade e UX
- Navegação com scroll suave e foco visível no menu.
- Botões com `aria-label` implícito e ícones com `aria-hidden` quando decorativos.
- Layout responsivo (breakpoints MUI).

## Deploy
1. `npm run build`
2. Servir a pasta `dist` (Vite) no host de sua escolha.

---
© {year} Fernanda Diniz. Todos os direitos reservados.
