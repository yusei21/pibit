# Portal GEA — IFMA

Site do Grupo de Pesquisa em Estudos Ambientais, em React + Vite + Tailwind CSS v4. Linguagem visual inspirada em integratedbio.com (ver `docs/design-contract.md`).

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera a pasta dist/ para publicar
```

- **Conteúdo:** todo texto, pessoas, publicações e equipamentos ficam em `src/data/content.js`.
- **Imagens:** `public/assets/`.
- **Publicação:** copie o conteúdo de `dist/` para a pasta do servidor (ex.: `/gea/`). As rotas usam `#/` (HashRouter), então funciona em qualquer servidor estático sem configuração extra.
