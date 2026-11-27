import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, ChevronDown, FileText, Link2Off } from 'lucide-react'
import { Container, PageHeader, SectionHeading, Icon, Reveal, TextLink } from '../components/ui'
import Chromatogram from '../components/Chromatogram'
import { imagens, linhasPesquisa, projetos } from '../data/content'
import { motionTokens, reducedTransition } from '../lib/motion'

function Publicacao({ pub }) {
  if (!pub.url) {
    // Estado parcial: a publicação existe, mas o link ainda não foi confirmado
    return (
      <div className="flex gap-3 rounded-xl border border-dashed border-ink/15 p-4">
        <FileText className="mt-0.5 h-5 w-5 shrink-0 text-ink/35" aria-hidden="true" />
        <span className="min-w-0 flex-1">
          <span className="block font-medium leading-snug text-ink/80">{pub.titulo}</span>
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-lime px-2.5 py-0.5 text-xs font-semibold text-forest-600">
            <Link2Off className="h-3 w-3" aria-hidden="true" />
            link em verificação
          </span>
        </span>
      </div>
    )
  }
  return (
    <a
      href={pub.url}
      target="_blank"
      rel="noreferrer"
      className="group flex gap-3 rounded-xl border border-ink/10 bg-white p-4 transition-colors duration-150 hover:border-forest-400"
    >
      <FileText className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
      <span className="min-w-0 flex-1">
        <span className="block font-medium leading-snug group-hover:text-forest-700">{pub.titulo}</span>
        {pub.veiculo && <span className="mt-1 block text-sm italic text-ink-soft">{pub.veiculo}</span>}
      </span>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-ink/30 group-hover:text-forest-600" aria-hidden="true" />
      <span className="sr-only">(abre em nova aba)</span>
    </a>
  )
}

function Projeto({ p, indice, aberto, alternar }) {
  const reduce = useReducedMotion()
  const painel = `painel-${p.id}`
  const botao = `botao-${p.id}`
  return (
    <li className="border-b border-ink/10" id={`projeto-${p.id}`}>
      <h3>
        <button
          id={botao}
          type="button"
          onClick={alternar}
          aria-expanded={aberto}
          aria-controls={painel}
          className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-5 py-7 text-left"
        >
          <span className="pt-1 text-sm font-mono tabular-nums text-ink-soft">{String(indice + 1).padStart(2, '0')}</span>
          <span className="min-w-0">
            <span className="block font-display text-xl leading-snug transition-colors duration-150 group-hover:text-forest-700 sm:text-2xl">
              {p.titulo}
            </span>
            <span className="mt-1.5 block text-ink-soft">{p.resumo}</span>
          </span>
          <span className="grid h-11 w-11 place-items-center rounded-full transition-colors duration-150 group-hover:bg-forest-50">
            <ChevronDown
              className={`h-5 w-5 text-ink-soft transition-transform duration-200 ${aberto ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {aberto && (
          <motion.div
            id={painel}
            role="region"
            aria-labelledby={botao}
            initial={{ opacity: 0, y: reduce ? 0 : -motionTokens.distance.xs }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: motionTokens.duration.fast } }}
            transition={reduce ? reducedTransition : { duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth }}
            className="pb-10 sm:pl-12"
          >
            <p className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink/80">{p.texto}</p>
            <h4 className="mt-8 text-[0.8125rem] font-semibold text-ink-soft">Trabalhos publicados</h4>
            {p.publicacoes.length > 0 ? (
              <ul className="mt-3 space-y-3">
                {p.publicacoes.map((pub) => (
                  <li key={pub.titulo}>
                    <Publicacao pub={pub} />
                  </li>
                ))}
              </ul>
            ) : (
              // Estado vazio
              <p className="mt-3 rounded-xl bg-sand p-4 text-[0.9375rem] text-ink-soft">
                Publicações desta pesquisa em atualização.{' '}
                <Link to="/contato" className="font-semibold text-forest-700 underline-offset-4 hover:underline">
                  Fale com a coordenação
                </Link>{' '}
                para saber mais.
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default function Pesquisa() {
  const [params, setParams] = useSearchParams()
  const aberto = params.get('projeto') ?? projetos[0].id
  const linhaAlvo = params.get('linha')

  // Chegando por um pico do cromatograma (?linha=...), rola até a linha correspondente
  useEffect(() => {
    if (!linhaAlvo) return
    const el = document.getElementById(`linha-${linhaAlvo}`)
    if (el) {
      el.scrollIntoView({ block: 'center' })
      el.focus({ preventScroll: true })
    }
  }, [linhaAlvo])

  const alternar = (id) =>
    setParams((prev) => {
      const next = new URLSearchParams(prev)
      next.delete('linha')
      next.set('projeto', aberto === id ? 'nenhum' : id)
      return next
    }, { replace: true, preventScrollReset: true })

  return (
    <>
      <PageHeader
        eyebrow="Pesquisa"
        title="Linhas de pesquisa e projetos"
        intro="Novas metodologias, tecnologias e evidências científicas para a saúde ambiental e para as políticas públicas."
        image={imagens.campo}
      />

      <section className="pt-16 sm:pt-20" aria-label="Cromatograma das linhas de pesquisa">
        <Container>
          <Chromatogram />
        </Container>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="linhas-titulo">
        <Container>
          <SectionHeading
            id="linhas-titulo"
            eyebrow="Linhas de pesquisa"
            title="Áreas de estudo"
            intro="Linhas interdisciplinares para compreender os impactos ambientais e contribuir com a saúde pública."
          />
          <ol className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {linhasPesquisa.map((l, i) => {
              const destaque = linhaAlvo === l.id
              return (
                <Reveal as="li" key={l.id} delay={i * 0.04}>
                  <article
                    id={`linha-${l.id}`}
                    tabIndex={-1}
                    className={`h-full border-t-2 py-7 transition-colors duration-300 ${
                      destaque ? 'border-forest-500 bg-lime/30 px-4' : 'border-ink/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-forest-50 text-forest-700">
                        <Icon name={l.icone} className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-mono tabular-nums text-ink-soft">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold leading-snug">{l.titulo}</h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">{l.texto}</p>
                  </article>
                </Reveal>
              )
            })}
          </ol>
        </Container>
      </section>

      <section className="bg-sand py-20 sm:py-28" aria-labelledby="projetos-titulo">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                id="projetos-titulo"
                eyebrow="20 anos de pesquisa"
                title="Pesquisas desenvolvidas"
                intro="Projetos conduzidos pelo grupo ao longo de duas décadas, com os trabalhos publicados. O projeto aberto fica no endereço da página para você compartilhar."
              />
              <TextLink to="/contato" className="mt-6">
                Propor uma colaboração
              </TextLink>
            </div>
          </div>
          <ul className="border-t border-ink/10 lg:col-span-8">
            {projetos.map((p, i) => (
              <Projeto key={p.id} p={p} indice={i} aberto={aberto === p.id} alternar={() => alternar(p.id)} />
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
