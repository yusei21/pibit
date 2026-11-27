# Contrato de design — Portal GEA

Feito com o departamento de front do `yusei21/yus`, usando as skills `frontend-design-direction`,
`make-interfaces-feel-better`, `web-design-guidelines`, `motion-foundations`, `frontend-a11y` e `react-performance`.

## Superfície e público

| Item | Decisão |
| --- | --- |
| Superfície | Portal institucional de um grupo de pesquisa (site estático, SPA React) |
| Tarefa principal do usuário | Entender o que o GEA pesquisa e chegar a quem contatar |
| Ação primária | "Ver a pesquisa" → linhas/projetos/publicações; secundária: contato com a coordenação |
| Públicos | 1) estudantes que buscam IC/pós · 2) empresas e instituições que buscam análises/parcerias · 3) pesquisadores conferindo publicações |
| Viewports-alvo | `390x844` (celular) e `1440x900` (desktop) |

## Direção (v3, referência: integratedbio.com)

- **Tom:** biotech/científico contemporâneo, calmo e confiante, como o site da Integrated Biosciences. Vale a
  *linguagem* visual, não a marca: nenhum texto, imagem ou logo deles foi usado.
- **Papel e tipografia:** fundo off-white (`#f7f7f5`), tinta petróleo (`#222f30`) e Geist em peso regular com tracking
  negativo (-3%) em tamanhos grandes. Rótulos, navegação e botões em Geist Mono maiúscula.
- **Elementos da referência adaptados ao GEA:**
  - Hero numa moldura arredondada com foto real de coleta em campo, tratada em verde-sálvia.
  - Nav em pílula flutuante, com o item "Contato" em destaque escuro.
  - Botão escuro acompanhado de um quadrado limão com seta.
  - Etiquetas de seção com quadradinho limão sobre uma linha fina.
  - Títulos com o final destacado em sálvia.
  - Diagrama de processo 01–04 com laço de retroalimentação. Aqui é o fluxo real do grupo: coleta → preparo →
    cromatografia → diagnóstico.
  - Cards de publicação em três tons, com seta no canto.
  - Rodapé escuro com a marca gigante.
- **Detalhe próprio mantido:** o cromatograma em que cada pico é uma linha de pesquisa (página Pesquisa).
- **Paleta:** sálvia (marca), limão (acento só em superfícies, nunca em texto sobre claro), petróleo, areia e oceano
  (foco).
- **Movimento:** tokens de `src/lib/motion.js`. Revelação do traço por máscara em `scaleX`, já que `pathLength` falha
  com `non-scaling-stroke`.

## Restrições verificáveis

- Toda `<img>` com `width`/`height` reais (`src/data/imageSizes.js`), `loading="lazy"` abaixo da dobra e
  `fetchpriority="high"` no hero.
- Foco visível em todo elemento interativo (`:focus-visible`), skip link e alvos de toque com pelo menos 44 px.
- Nenhum `transition: all`. Só se anima `transform`/`opacity`.
- O projeto aberto na página de pesquisa fica na URL (`?projeto=<id>`) e pode ser compartilhado por link.
- Rotas com code splitting (`React.lazy`).
- Sem gradientes roxos, blobs decorativos ou cards dentro de cards.

## Estados de conteúdo

| Estado | Gatilho | Feedback | Próxima ação |
| --- | --- | --- | --- |
| Carregando | Chunk da rota ainda baixando; mapa (iframe) carregando | Esqueleto com "Carregando…"; fundo areia no mapa | Aguardar; o link "Abrir no Google Maps" fica sempre visível |
| Vazio | Projeto sem publicações cadastradas | "Publicações desta pesquisa em atualização." | Link para contato com a coordenação |
| Erro | Rota inexistente; foto que não carrega | Página 404 com retorno; iniciais no lugar da foto | Voltar ao início / o e-mail continua visível |
| Parcial | Publicação sem link confirmado | Item exibido com o selo "link em verificação" | O título continua legível |
| Sucesso | Página carregada | Conteúdo completo | CTAs para pesquisa e contato |
| Permissão | — | — | Não se aplica: site público, sem login nem área restrita |
