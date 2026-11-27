import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowRight, ArrowUpRight, Building2, Circle, FlaskConical, Fish, Gauge, Globe, GraduationCap, Mountain, Sprout, Wheat,
} from 'lucide-react'
import sizes from '../data/imageSizes'
import { motionTokens, reducedTransition } from '../lib/motion'

const icons = { Building2, FlaskConical, Fish, Gauge, Globe, GraduationCap, Mountain, Sprout, Wheat }

export function Icon({ name, ...props }) {
  const Cmp = icons[name] ?? Circle
  return <Cmp aria-hidden="true" {...props} />
}

export function Container({ className = '', children, as: Tag = 'div' }) {
  return <Tag className={`mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</Tag>
}

const iniciais = (nome = '') =>
  nome
    .split(' ')
    .filter((p) => p.length > 2)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')

/** <img> com width/height reais, lazy por padrão e estado de erro (iniciais ou bloco neutro). */
export function Img({ src, alt, priority = false, className = '', fallbackLabel, ...rest }) {
  const [erro, setErro] = useState(false)
  const [w, h] = sizes[src.split('/').pop()] ?? []
  if (erro) {
    return (
      <div
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
        className={`grid place-items-center bg-sand-200 font-display text-3xl text-ink-soft ${className}`}
      >
        {fallbackLabel ? iniciais(fallbackLabel) : null}
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      width={w}
      height={h}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      onError={() => setErro(true)}
      className={`photo ${className}`}
      {...rest}
    />
  )
}

/** Entrada sutil ao entrar na viewport; com movimento reduzido, apenas fade curto. */
export function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : motionTokens.distance.md }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={
        reduce
          ? reducedTransition
          : { duration: motionTokens.duration.slow, ease: motionTokens.easing.smooth, delay }
      }
    >
      {children}
    </Tag>
  )
}

/** Rótulo de seção: quadradinho limão + texto mono maiúsculo, dentro de uma etiqueta. */
export function Tag({ children, tone = 'light', className = '' }) {
  const styles = {
    light: 'border-ink/10 bg-white/70 text-ink',
    dark: 'border-white/15 bg-white/5 text-white',
  }[tone]
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 font-mono text-[0.6875rem] font-medium uppercase leading-none tracking-[0.04em] ${styles} ${className}`}
    >
      <span className="h-2 w-2 shrink-0 rounded-[2px] bg-lime-deep" aria-hidden="true" />
      {children}
    </span>
  )
}

// Compatibilidade com as páginas internas
export function Eyebrow({ children, tone }) {
  return <Tag tone={tone === 'light' ? 'dark' : 'light'}>{children}</Tag>
}

export function SectionHeading({ id, eyebrow, title, intro, light = false, className = '' }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && <Tag tone={light ? 'dark' : 'light'}>{eyebrow}</Tag>}
      <h2
        id={id}
        className={`mt-6 font-display text-[2.25rem] font-normal leading-[1.05] tracking-display sm:text-5xl ${light ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 max-w-2xl text-[1.0625rem] leading-relaxed ${light ? 'text-white/75' : 'text-ink-soft'}`}>
          {intro}
        </p>
      )}
    </div>
  )
}

/** Cabeçalho das páginas internas: moldura escura arredondada, como o hero da referência. */
export function PageHeader({ eyebrow, title, intro, children, image }) {
  return (
    <div className="p-2 sm:p-3">
      <header className="relative isolate overflow-hidden rounded-2xl bg-forest-900 text-white sm:rounded-3xl">
        {image && (
          <>
            <Img src={image} alt="" priority className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35 !outline-0" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-900 via-forest-900/80 to-forest-900/30" />
          </>
        )}
        <Container className="pb-12 pt-32 sm:pb-16 sm:pt-40">
          <Reveal>
            <Tag tone="dark">{eyebrow}</Tag>
            <h1 className="mt-6 max-w-5xl font-display text-[2.75rem] font-normal leading-[1] tracking-display sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">{intro}</p>}
          </Reveal>
          {children}
        </Container>
      </header>
    </div>
  )
}

/**
 * Botão da referência: bloco escuro com texto mono maiúsculo + quadrado limão com seta.
 * variant "outline": borda fina, texto normal e seta diagonal (links externos/secundários).
 */
export function Button({ to, href, children, variant = 'primary', className = '', icon = true }) {
  const externo = Boolean(href)
  const Comp = externo ? 'a' : Link
  const props = externo ? { href, target: href.startsWith('mailto:') ? undefined : '_blank', rel: 'noreferrer' } : { to }

  if (variant === 'outline' || variant === 'secondary' || variant === 'onDark') {
    const tone =
      variant === 'onDark'
        ? 'border-white/30 text-white hover:bg-white/10'
        : 'border-ink/25 text-ink hover:border-ink/50 hover:bg-white'
    return (
      <Comp
        {...props}
        className={`group inline-flex min-h-11 items-center gap-3 rounded-lg border px-4 text-[0.9375rem] transition-[background-color,border-color] duration-150 ${tone} ${className}`}
      >
        {children}
        {icon && <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />}
      </Comp>
    )
  }

  const bloco =
    variant === 'light' ? 'bg-white text-ink group-hover:bg-paper' : 'bg-ink text-white group-hover:bg-forest-800'
  return (
    <Comp {...props} className={`group inline-flex min-h-11 items-stretch gap-1 active:scale-[0.98] transition-transform duration-150 ${className}`}>
      <span
        className={`inline-flex items-center rounded-lg px-4 font-mono text-[0.8125rem] font-medium uppercase tracking-[0.04em] transition-colors duration-150 ${bloco}`}
      >
        {children}
      </span>
      {icon && (
        <span className="grid w-11 place-items-center rounded-lg bg-lime text-ink transition-colors duration-150 group-hover:bg-lime-deep">
          <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      )}
    </Comp>
  )
}

export function TextLink({ to, children, className = '' }) {
  return (
    <Link
      to={to}
      className={`group inline-flex min-h-11 items-center gap-2 font-mono text-[0.8125rem] font-medium uppercase tracking-[0.04em] text-ink underline decoration-ink/25 underline-offset-[6px] transition-colors duration-150 hover:decoration-ink ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  )
}

/** Quadrado limão com seta, encaixado no canto do card (detalhe da referência). */
export function CornerArrow({ className = '' }) {
  return (
    <span
      className={`grid h-11 w-11 place-items-center rounded-lg bg-lime text-ink transition-colors duration-150 group-hover:bg-lime-deep ${className}`}
      aria-hidden="true"
    >
      <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
    </span>
  )
}
