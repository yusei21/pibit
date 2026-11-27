import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { linhasPesquisa } from '../data/content'
import { motionTokens, reducedTransition } from '../lib/motion'

// Cromatograma ILUSTRATIVO: cada pico representa uma linha de pesquisa.
// Coordenadas no espaço do viewBox (1000 x 200); a linha de base fica em y = 180.
const W = 1000
const H = 200
const BASE = 180

const picos = [
  { x: 120, h: 118, s: 11 },
  { x: 265, h: 78, s: 9 },
  { x: 405, h: 140, s: 12 },
  { x: 560, h: 96, s: 10 },
  { x: 715, h: 128, s: 13 },
  { x: 870, h: 70, s: 9 },
].map((p, i) => ({ ...p, linha: linhasPesquisa[i] }))

// Picos menores sem rótulo: dão realismo ao traço
const ruido = [
  { x: 60, h: 10, s: 5 },
  { x: 190, h: 18, s: 6 },
  { x: 335, h: 12, s: 5 },
  { x: 480, h: 22, s: 6 },
  { x: 640, h: 14, s: 5 },
  { x: 800, h: 20, s: 6 },
  { x: 945, h: 9, s: 5 },
]

function tracar() {
  const todos = [...picos, ...ruido]
  const pts = []
  for (let x = 0; x <= W; x += 2) {
    const deriva = 4 * Math.sin(x / 140) // pequena deriva da linha de base
    const y = todos.reduce((acc, p) => acc + p.h * Math.exp(-((x - p.x) ** 2) / (2 * p.s ** 2)), 0)
    pts.push(`${x},${(BASE - y - deriva).toFixed(1)}`)
  }
  return `M${pts.join(' L')}`
}
const PATH = tracar()

export default function Chromatogram() {
  const reduce = useReducedMotion()

  return (
    <figure className="relative">
      <div className="relative h-44 sm:h-56">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full overflow-visible"
          aria-hidden="true"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1="0" x2={W} y1={BASE - i * 40} y2={BASE - i * 40} className="stroke-ink/[0.06]" vectorEffect="non-scaling-stroke" />
          ))}
          <line x1="0" x2={W} y1={BASE} y2={BASE} className="stroke-ink/25" vectorEffect="non-scaling-stroke" />
          {/*
            O traço é revelado por uma máscara que cresce em scaleX (só transform).
            Não dá para usar pathLength aqui: com vector-effect="non-scaling-stroke" o
            tracejado é calculado em pixels de tela e o desenho para antes do fim.
          */}
          <defs>
            <clipPath id="revela-cromatograma">
              <motion.rect
                x="0"
                y="-20"
                width={W}
                height={H + 40}
                style={{ originX: 0 }}
                initial={{ scaleX: reduce ? 1 : 0 }}
                animate={{ scaleX: 1 }}
                transition={
                  reduce ? { duration: 0 } : { duration: motionTokens.duration.crawl * 1.6, ease: motionTokens.easing.smooth, delay: 0.2 }
                }
              />
            </clipPath>
          </defs>
          <motion.path
            d={PATH}
            fill="none"
            className="stroke-forest-600"
            strokeWidth="2"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            clipPath="url(#revela-cromatograma)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={reduce ? reducedTransition : { duration: motionTokens.duration.fast }}
          />
        </svg>

        {/* Marcadores e rótulos em HTML: legíveis, focáveis e sem distorção */}
        <ol className="absolute inset-0">
          {picos.map((p, i) => {
            const topo = ((BASE - p.h) / H) * 100
            return (
              <li
                key={p.linha.id}
                className="absolute -translate-x-1/2"
                style={{ left: `${(p.x / W) * 100}%`, top: `${topo}%` }}
              >
                <motion.div
                  initial={{ opacity: 0, y: reduce ? 0 : motionTokens.distance.sm }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    reduce
                      ? reducedTransition
                      : { duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth, delay: 0.5 + i * 0.22 }
                  }
                  className="-translate-y-full pb-2"
                >
                  <Link
                    to={`/pesquisa?linha=${p.linha.id}`}
                    className="group flex min-h-11 min-w-11 flex-col items-center justify-end"
                  >
                    <span className="hidden whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-ink shadow-[0_1px_2px_rgb(0_0_0/0.08),0_0_0_1px_rgb(0_0_0/0.06)] transition-colors duration-150 group-hover:bg-forest-600 group-hover:text-white md:block">
                      {p.linha.curto}
                    </span>
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-lime text-[0.6875rem] font-bold tabular-nums text-ink transition-transform duration-150 group-hover:scale-110 md:mt-1.5 md:h-2.5 md:w-2.5">
                      <span className="md:hidden">{i + 1}</span>
                    </span>
                    <span className="sr-only md:hidden">{p.linha.curto}</span>
                  </Link>
                </motion.div>
              </li>
            )
          })}
        </ol>
      </div>

      <div className="mt-2 flex justify-between text-[0.6875rem] tabular-nums text-ink-soft" aria-hidden="true">
        {[0, 2, 4, 6, 8, 10].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <figcaption className="mt-1 flex flex-wrap justify-between gap-x-4 text-xs text-ink-soft">
        <span>tempo de retenção (min)</span>
        <span>Cromatograma ilustrativo: cada pico é uma linha de pesquisa do GEA</span>
      </figcaption>

      {/* Legenda numerada para telas pequenas */}
      <ol className="mt-6 grid grid-cols-2 gap-x-4 gap-y-1 md:hidden">
        {picos.map((p, i) => (
          <li key={p.linha.id}>
            <Link to={`/pesquisa?linha=${p.linha.id}`} className="flex min-h-11 items-center gap-2 text-sm font-medium text-ink">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime text-[0.6875rem] font-bold tabular-nums" aria-hidden="true">
                {i + 1}
              </span>
              {p.linha.curto}
            </Link>
          </li>
        ))}
      </ol>
    </figure>
  )
}
