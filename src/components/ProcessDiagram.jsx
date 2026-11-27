import { ArrowRight } from 'lucide-react'
import { Reveal } from './ui'

// Ilustrações em traço (viewBox 160x120): sálvia no contorno, limão no destaque.
const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', vectorEffect: 'non-scaling-stroke' }

function Coleta() {
  return (
    <svg viewBox="0 0 160 120" className="h-full w-full">
      {/* barco */}
      <path {...s} d="M28 46 H104 L96 58 H38 Z" />
      <path {...s} d="M86 46 V22 M86 22 L112 18" />
      {/* cabo e amostrador */}
      <path {...s} d="M112 18 V70" strokeDasharray="3 3" />
      <rect x="105" y="70" width="14" height="26" rx="5" className="fill-lime" stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      {/* água */}
      <path {...s} d="M10 64 q10 -6 20 0 t20 0 t20 0 t20 0" />
      <path {...s} d="M10 80 q10 -6 20 0 t20 0 t20 0 t20 0" opacity=".55" />
      <path {...s} d="M128 64 q8 -5 16 0" />
      <path {...s} d="M128 80 q8 -5 16 0" opacity=".55" />
      <path {...s} d="M10 96 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" opacity=".35" />
    </svg>
  )
}

function Preparo() {
  return (
    <svg viewBox="0 0 160 120" className="h-full w-full">
      {/* pipeta */}
      <path {...s} d="M118 8 L102 56" />
      <path {...s} d="M116 4 l8 3 l-4 10 l-8 -3 z" className="fill-forest-100" />
      {/* frascos */}
      {[36, 66, 96].map((x, i) => (
        <g key={x}>
          <rect x={x} y={56 - i * 2} width="20" height={50 + i * 2} rx="4" {...s} />
          <rect x={x + 2} y={78 - i * 6} width="16" height={26 + i * 6} rx="3" className={i === 1 ? 'fill-lime' : 'fill-forest-100'} />
          <path {...s} d={`M${x - 2} ${56 - i * 2} H${x + 22}`} />
        </g>
      ))}
      {/* suporte */}
      <path {...s} d="M24 106 H130 M24 92 H130" />
    </svg>
  )
}

function Analise() {
  return (
    <svg viewBox="0 0 160 120" className="h-full w-full">
      <rect x="14" y="10" width="132" height="86" rx="8" {...s} />
      <path {...s} d="M26 82 H134 M26 82 V20" opacity=".5" />
      <path
        {...s}
        strokeWidth="2"
        d="M26 80 L40 80 Q46 80 49 50 Q52 80 58 80 L66 80 Q71 80 74 62 Q77 80 82 80 L90 80 Q96 80 99 28 Q102 80 108 80 L116 80 Q120 80 122 66 Q124 80 128 80 L134 80"
      />
      <circle cx="99" cy="28" r="4" className="fill-lime" stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <path {...s} d="M64 96 L56 112 H104 L96 96" />
    </svg>
  )
}

function Impacto() {
  return (
    <svg viewBox="0 0 160 120" className="h-full w-full">
      {/* relatório */}
      <path {...s} d="M40 8 H100 L116 24 V112 H40 Z" />
      <path {...s} d="M100 8 V24 H116" />
      <path {...s} d="M52 40 H104 M52 52 H104 M52 64 H88" opacity=".6" />
      {/* barras */}
      <rect x="54" y="84" width="10" height="18" rx="2" className="fill-forest-100" stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <rect x="70" y="76" width="10" height="26" rx="2" className="fill-forest-100" stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <rect x="86" y="88" width="10" height="14" rx="2" className="fill-lime" stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      {/* selo de verificação */}
      <circle cx="120" cy="96" r="16" className="fill-lime" stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <path {...s} strokeWidth="2" d="M112 96 l6 6 l10 -12" />
    </svg>
  )
}

const etapas = [
  { n: '01', titulo: 'Coleta em campo', texto: 'Amostragem em rios, estuários e manguezais.', Ilustracao: Coleta },
  { n: '02', titulo: 'Preparo de amostras', texto: 'Extração e microextração de traços.', Ilustracao: Preparo },
  { n: '03', titulo: 'Análise cromatográfica', texto: 'UHPLC, HPLC e GC-MS validados.', Ilustracao: Analise },
  { n: '04', titulo: 'Diagnóstico e impacto', texto: 'Evidências para políticas ambientais.', Ilustracao: Impacto },
]

export default function ProcessDiagram() {
  return (
    <figure>
      <ol className="relative grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
        {etapas.map(({ n, titulo, texto, Ilustracao }, i) => (
          <Reveal as="li" key={n} delay={i * 0.08} className="relative text-center">
            <div className="mx-auto aspect-[4/3] max-w-[11rem] text-forest-600" aria-hidden="true">
              <Ilustracao />
            </div>
            {i < etapas.length - 1 && (
              <ArrowRight
                className="absolute right-0 top-[28%] hidden h-4 w-4 translate-x-1/2 text-forest-400 md:block"
                aria-hidden="true"
              />
            )}
            <p className="mt-6 font-mono text-[0.6875rem] text-ink-soft">{n}</p>
            <h3 className="mt-1 text-lg tracking-heading">{titulo}</h3>
            <p className="mx-auto mt-1 max-w-[14rem] text-sm leading-snug text-ink-soft">{texto}</p>
          </Reveal>
        ))}
      </ol>

      {/* Laço de retroalimentação: resultados orientam novas coletas */}
      <div className="relative mx-[12.5%] mt-8 hidden h-10 rounded-b-2xl border-x border-b border-forest-400/70 md:block" aria-hidden="true">
        <span className="absolute -left-[5px] -top-2 h-0 w-0 border-x-[5px] border-b-[8px] border-x-transparent border-b-forest-400" />
        <span className="absolute -bottom-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-lime-deep" />
      </div>
      <figcaption className="mt-4 text-center text-[0.9375rem] text-forest-700">
        Os resultados orientam novas coletas e métodos
      </figcaption>
    </figure>
  )
}
