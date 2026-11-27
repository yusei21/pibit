import { Suspense, useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Menu, X, ArrowUp, ArrowUpRight } from 'lucide-react'
import { Container, Button } from './ui'
import { nav, site, docentes } from '../data/content'
import { motionTokens, reducedTransition } from '../lib/motion'

const ANO = new Date().getFullYear()
const navPrincipal = nav.filter((n) => n.to !== '/contato')

function Header() {
  const { pathname } = useLocation()
  const reduce = useReducedMotion()
  const [abertoEm, setAbertoEm] = useState(null)
  const aberto = abertoEm === pathname
  const botaoRef = useRef(null)

  useEffect(() => {
    if (!aberto) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setAbertoEm(null)
        botaoRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [aberto])

  const pill = 'rounded-xl border border-white/40 bg-[#e9ece9]/80 shadow-[0_1px_2px_rgb(0_0_0/0.06)] backdrop-blur-xl'

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="mx-auto flex max-w-[90rem] items-start justify-between gap-3 p-3 sm:p-5 lg:px-9">
        <Link to="/" aria-label="GEA, página inicial" className="flex h-12 items-center rounded-xl bg-white/95 px-3 shadow-[0_1px_2px_rgb(0_0_0/0.06)]">
          <img src={site.logo} alt="" width="100" height="52" className="h-7 w-auto" />
        </Link>

        <nav aria-label="Principal" className={`hidden h-12 items-center gap-0.5 p-1 lg:flex ${pill}`}>
          {navPrincipal.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `inline-flex h-10 items-center rounded-lg px-3.5 font-mono text-[0.8125rem] font-medium uppercase tracking-[0.04em] transition-colors duration-150 ${
                  isActive ? 'bg-white text-ink' : 'text-ink/80 hover:bg-white/60 hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contato"
            className="ml-1 inline-flex h-10 items-center rounded-lg bg-ink px-4 font-mono text-[0.8125rem] font-medium uppercase tracking-[0.04em] text-white transition-colors duration-150 hover:bg-forest-800"
          >
            Contato
          </NavLink>
        </nav>

        <button
          ref={botaoRef}
          type="button"
          onClick={() => setAbertoEm(aberto ? null : pathname)}
          className={`grid h-12 w-12 place-items-center text-ink lg:hidden ${pill}`}
          aria-expanded={aberto}
          aria-controls="menu-movel"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
        >
          {aberto ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {aberto && (
          <motion.nav
            id="menu-movel"
            aria-label="Principal"
            className="mx-3 max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain rounded-2xl bg-white p-2 shadow-xl lg:hidden"
            initial={{ opacity: 0, y: reduce ? 0 : -motionTokens.distance.sm }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: motionTokens.duration.fast } }}
            transition={reduce ? reducedTransition : { duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth }}
          >
            <ul>
              {[{ to: '/', label: 'Início' }, ...nav].map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end
                    className={({ isActive }) =>
                      `flex min-h-12 items-center rounded-xl px-4 font-mono text-sm font-medium uppercase tracking-[0.04em] ${
                        isActive ? 'bg-lime text-ink' : 'text-ink'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  const coord = docentes[0]
  return (
    <footer className="relative isolate mt-2 overflow-hidden rounded-t-3xl bg-ink text-white sm:mx-3 sm:mt-3">
      {/* brilho sutil em verde, como o fundo escuro da referência */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_85%_10%,rgb(95_133_116/0.35),transparent_60%),radial-gradient(60%_50%_at_10%_100%,rgb(66_106_89/0.4),transparent_60%)]"
        aria-hidden="true"
      />
      <Container className="grid gap-12 pt-16 sm:pt-20 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="max-w-lg font-display text-3xl leading-[1.1] tracking-heading sm:text-[2.5rem]">
            Química analítica a serviço das águas, dos ecossistemas e da saúde pública.
          </p>
          <Button to="/contato" className="mt-8">
            Fale conosco
          </Button>
        </div>

        <nav aria-label="Rodapé" className="lg:col-span-2 lg:col-start-8">
          <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.06em] text-white/60">Navegar</h2>
          <ul className="mt-4">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="inline-flex min-h-9 items-center text-[0.9375rem] text-white/90 transition-colors duration-150 hover:text-lime">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.06em] text-white/60">Contato</h2>
          <ul className="mt-4 space-y-2 text-[0.9375rem] text-white/90">
            <li>
              <a href={`mailto:${coord.email}`} className="inline-flex min-h-9 items-center break-all transition-colors duration-150 hover:text-lime">
                {coord.email}
              </a>
            </li>
            <li>
              <a href={site.mapaLink} target="_blank" rel="noreferrer" className="transition-colors duration-150 hover:text-lime">
                {site.instituicao}
              </a>
            </li>
            <li>
              <a href="https://portal.ifma.edu.br" target="_blank" rel="noreferrer" className="inline-flex min-h-9 items-center gap-1 transition-colors duration-150 hover:text-lime">
                Portal do IFMA <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:col-span-1 lg:flex lg:justify-end">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0 })}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors duration-150 hover:bg-white/10"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </Container>

      <Container className="pt-16">
        <p
          translate="no"
          aria-hidden="true"
          className="select-none font-display text-[34vw] font-medium leading-[0.78] tracking-[-0.06em] text-white sm:text-[30vw] lg:text-[26rem]"
        >
          GEA
        </p>
      </Container>
      <Container className="flex flex-col gap-1 border-t border-white/10 py-5 font-mono text-[0.6875rem] uppercase tracking-[0.06em] text-white/60 sm:flex-row sm:justify-between">
        <p>
          © {ANO} <span translate="no">GEA</span> · Grupo de Pesquisa em Estudos Ambientais
        </p>
        <p>Instituto Federal do Maranhão</p>
      </Container>
    </footer>
  )
}

function CarregandoPagina() {
  return (
    <div className="p-2 sm:p-3" role="status" aria-live="polite">
      <div className="h-[22rem] animate-pulse rounded-3xl bg-sand" />
      <p className="sr-only">Carregando…</p>
    </div>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#conteudo"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('conteudo')?.focus()
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-lime focus:px-5 focus:py-3 focus:font-mono focus:text-sm focus:uppercase"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1} className="flex-1 focus:outline-none">
        <Suspense fallback={<CarregandoPagina />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
