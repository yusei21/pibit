import { Link } from 'react-router-dom'
import { Container, Button, Img, Reveal, Tag, Icon, CornerArrow } from '../components/ui'
import ProcessDiagram from '../components/ProcessDiagram'
import { site, imagens, numeros, historico, linhasPesquisa, projetos, fundadora, docentes } from '../data/content'

function Hero() {
  return (
    <section className="p-2 sm:p-3" aria-labelledby="titulo-hero">
      <div className="relative isolate flex min-h-[38rem] flex-col overflow-hidden rounded-2xl bg-forest-900 text-white sm:rounded-3xl lg:h-[calc(100svh-1.5rem)] lg:max-h-[60rem]">
        <Img
          src={imagens.campo}
          priority
          alt=""
          className="absolute inset-0 -z-20 h-full w-full origin-[0%_72%] object-cover object-[50%_72%] !outline-0 md:scale-[1.6]"
        />
        {/* tratamento em verde-sálvia sobre a foto de campo */}
        <div className="absolute inset-0 -z-10 bg-forest-900/55 mix-blend-multiply" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-900/70 via-forest-900/10 to-forest-900/80" />

        <Container className="flex flex-1 flex-col justify-between pb-8 pt-32 sm:pb-10 sm:pt-36">
          <Reveal>
            <h1
              id="titulo-hero"
              className="max-w-6xl font-display text-[3.25rem] font-normal leading-[0.98] tracking-display sm:text-7xl lg:text-[7rem]"
            >
              Química analítica para proteger nossas águas.
            </h1>
          </Reveal>

          <div className="mt-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-xl text-xl leading-snug tracking-heading text-white/90 sm:text-2xl">
              Compostos emergentes, contaminantes e biomonitoramento em rios, estuários e manguezais do Maranhão.
            </p>
            <Button to="/pesquisa" variant="light">
              Conheça a pesquisa
            </Button>
          </div>
        </Container>
        <p className="sr-only">Foto: integrante do GEA em coleta de água a bordo de um barco.</p>
      </div>
    </section>
  )
}

/** Linha divisória com etiqueta à esquerda, padrão de seção da referência */
function Secao({ tag, id, children, className = '' }) {
  return (
    <section aria-labelledby={id} className={`py-20 sm:py-28 ${className}`}>
      <Container>
        <div className="grid gap-8 border-t border-ink/10 pt-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Tag>{tag}</Tag>
          </div>
          <div className="lg:col-span-9">{children}</div>
        </div>
      </Container>
    </section>
  )
}

function Plataforma() {
  return (
    <Secao tag="Como trabalhamos" id="como-trabalhamos">
      <Reveal>
        <h2 id="como-trabalhamos" className="font-display text-[2.5rem] font-normal leading-[1.04] tracking-display sm:text-6xl lg:text-[4.5rem]">
          Do manguezal ao cromatógrafo, um ciclo contínuo de <span className="text-forest-500">descoberta ambiental.</span>
        </h2>
        <p className="mt-8 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-soft">
          Unimos trabalho de campo, preparo de amostras e cromatografia de alta eficiência para medir contaminantes em
          concentrações ultrabaixas. Os resultados voltam ao campo, orientando novas coletas, métodos e políticas
          ambientais.
        </p>
      </Reveal>

      <div className="mt-16 lg:-ml-[33.333%]">
        <ProcessDiagram />
      </div>

      <div className="mt-16 flex flex-col gap-6 border-t border-ink/10 pt-8 lg:-ml-[33.333%] lg:flex-row lg:items-end lg:justify-between">
        <p className="max-w-md text-xl leading-snug tracking-heading">
          Quer aplicar essa capacidade analítica a uma questão de pesquisa?
        </p>
        <div className="flex flex-wrap gap-3">
          <Button to="/pesquisa">Ver a pesquisa</Button>
          <Button to="/contato" variant="outline">
            Propor uma parceria
          </Button>
        </div>
      </div>
    </Secao>
  )
}

function Grupo() {
  return (
    <Secao tag="O grupo" id="o-grupo">
      <div className="grid gap-10 lg:-ml-[33.333%] lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Img
            src={imagens.equipamento}
            alt="Integrantes do GEA reunidos no laboratório, de jaleco"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </Reveal>
        <div className="flex flex-col">
          <h2 id="o-grupo" className="font-display text-4xl font-normal leading-[1.08] tracking-display sm:text-5xl">
            Da coleta em campo <span className="text-forest-500">a soluções ambientais.</span>
          </h2>
          <div className="mt-10 grid gap-6 text-[0.9375rem] leading-relaxed text-ink-soft sm:grid-cols-2">
            <p>{historico.intro.split('. ').slice(0, 2).join('. ')}.</p>
            <div className="space-y-4">
              <p>
                Coordenado pela {fundadora.nome}, Professora Titular do IFMA, com pós-doutorado em poluentes orgânicos
                emergentes pelo Instituto Politécnico do Porto.
              </p>
              <p>
                Publicações em periódicos como <em>Environmental Science and Pollution Research</em> e{' '}
                <em>Revista Brasileira de Criminalística</em>.
              </p>
            </div>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ink/10 pt-8 sm:grid-cols-4">
            {numeros.map((n) => (
              <div key={n.rotulo} className="flex flex-col">
                <dt className="mt-1 text-[0.8125rem] leading-snug text-ink-soft">{n.rotulo}</dt>
                <dd className="order-first font-display text-4xl tabular-nums tracking-display">{n.valor}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/sobre">Conheça o GEA</Button>
            <Button to="/equipe" variant="outline" icon={false}>
              {docentes.length} pesquisadores
            </Button>
          </div>
        </div>
      </div>
    </Secao>
  )
}

function Linhas() {
  return (
    <Secao tag="Linhas de pesquisa" id="linhas">
      <h2 id="linhas" className="max-w-3xl font-display text-4xl font-normal leading-[1.08] tracking-display sm:text-5xl">
        Seis frentes, <span className="text-forest-500">um mesmo rigor analítico.</span>
      </h2>
      <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:-ml-[33.333%] lg:grid-cols-3">
        {linhasPesquisa.map((l, i) => (
          <li key={l.id} className="bg-paper">
            <Link
              to={`/pesquisa?linha=${l.id}`}
              className="group flex h-full flex-col p-6 transition-colors duration-150 hover:bg-white sm:p-8"
            >
              <span className="flex items-center justify-between">
                <span className="font-mono text-[0.6875rem] text-ink-soft">{String(i + 1).padStart(2, '0')}</span>
                <Icon name={l.icone} className="h-5 w-5 text-forest-500" />
              </span>
              <span className="mt-10 text-xl leading-snug tracking-heading">{l.titulo}</span>
              <span className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{l.texto}</span>
            </Link>
          </li>
        ))}
      </ol>
    </Secao>
  )
}

function Publicacoes() {
  const pubs = projetos
    .flatMap((p) => p.publicacoes.map((pub) => ({ ...pub, area: p.titulo, resumo: p.texto })))
    .filter((p) => p.url)
  const [destaque, ...demais] = pubs
  const tons = [
    { card: 'bg-white text-ink', meta: 'text-ink-soft', tag: 'light' },
    { card: 'bg-slate-card text-white', meta: 'text-white/90', tag: 'dark' },
    { card: 'bg-ink text-white', meta: 'text-white/80', tag: 'dark' },
  ]

  return (
    <section className="px-2 sm:px-3" aria-labelledby="publicacoes">
      <div className="rounded-3xl bg-sand py-16 sm:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 id="publicacoes" className="font-display text-5xl font-normal tracking-display sm:text-7xl">
              Publicações
            </h2>
            <Button to="/pesquisa">Todas as pesquisas</Button>
          </div>

          {destaque && (
            <Reveal className="mt-12">
              <a
                href={destaque.url}
                target="_blank"
                rel="noreferrer"
                className="group relative grid gap-8 rounded-2xl bg-white p-4 sm:p-6 lg:grid-cols-2 lg:gap-12"
              >
                <Img src={imagens.grupo} alt="" className="aspect-[16/10] w-full rounded-xl object-cover lg:aspect-auto lg:h-full" />
                <div className="flex flex-col pb-14 lg:py-4 lg:pr-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <Tag>Publicação</Tag>
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.04em] text-ink-soft">{destaque.veiculo}</span>
                  </div>
                  <h3 className="mt-10 text-2xl leading-[1.15] tracking-heading sm:text-3xl">{destaque.titulo}</h3>
                  <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-soft">{destaque.resumo}</p>
                  <span className="mt-8 font-mono text-[0.75rem] font-medium uppercase tracking-[0.04em]">Ler artigo</span>
                  <span className="sr-only">(abre em nova aba)</span>
                </div>
                <CornerArrow className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6" />
              </a>
            </Reveal>
          )}

          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {demais.map((p, i) => {
              const t = tons[i % tons.length]
              return (
                <Reveal as="li" key={p.titulo} delay={i * 0.06}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`group relative flex h-full min-h-[17rem] flex-col rounded-2xl p-6 ${t.card}`}
                  >
                    <Tag tone={t.tag}>{p.area.split(' ').slice(0, 3).join(' ')}</Tag>
                    <h3 className="mt-6 text-lg leading-snug tracking-heading">{p.titulo}</h3>
                    <span className={`mt-auto pt-8 font-mono text-[0.75rem] font-medium uppercase tracking-[0.04em] ${t.meta}`}>
                      {p.veiculo ? p.veiculo : 'Ler artigo'}
                    </span>
                    <span className="sr-only">(abre em nova aba)</span>
                    <CornerArrow className="absolute bottom-4 right-4" />
                  </a>
                </Reveal>
              )
            })}
          </ul>
        </Container>
      </div>
    </section>
  )
}

function Contato() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="contato-home">
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <h2 id="contato-home" className="font-display text-4xl font-normal leading-[1.06] tracking-display sm:text-6xl lg:col-span-8">
          Empresas, instituições e estudantes: <span className="text-forest-500">vamos pesquisar juntos.</span>
        </h2>
        <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
          <Button to="/contato">Fale conosco</Button>
          <Button href={site.mapaLink} variant="outline">
            Como chegar
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Plataforma />
      <Grupo />
      <Linhas />
      <Publicacoes />
      <Contato />
    </>
  )
}
