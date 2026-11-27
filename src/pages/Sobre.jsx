import { Check } from 'lucide-react'
import { Container, PageHeader, SectionHeading, Img, Reveal } from '../components/ui'
import { imagens, historico, fundadora, missao, visao, valores } from '../data/content'

export default function Sobre() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre o GEA"
        title="Mais de duas décadas de química a serviço do meio ambiente"
        intro="História, objetivos e liderança do Grupo de Pesquisa em Estudos Ambientais do IFMA."
        image={imagens.equipamento}
      />

      <section className="py-20 sm:py-28" aria-labelledby="historico">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading id="historico" eyebrow="Histórico" title="Como nasceu o GEA" />
            <div className="mt-8 max-w-[65ch] space-y-5 text-[1.0625rem] leading-[1.75] text-ink/80">
              <p>{historico.intro}</p>
              <p>{historico.interdisciplinar}</p>
              <p>{historico.visaoGrupo}</p>
            </div>
            <figure className="mt-12">
              <Img
                src={imagens.equipamento}
                alt="Equipamentos do laboratório do GEA"
                className="aspect-[16/8] w-full rounded-2xl object-cover"
              />
            </figure>
          </div>
          <aside className="lg:col-span-5" aria-labelledby="objetivos">
            <div className="rounded-2xl bg-forest-50 p-7 sm:p-9 lg:sticky lg:top-28">
              <h2 id="objetivos" className="font-display text-2xl">Objetivos</h2>
              <ul className="mt-6 space-y-4">
                {historico.objetivos.map((o) => (
                  <li key={o} className="flex gap-3 leading-relaxed text-ink/80">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-forest-600" aria-hidden="true" />
                    {o}
                  </li>
                ))}
              </ul>
              <h2 className="mt-10 border-t border-forest-200 pt-8 font-display text-2xl">O futuro</h2>
              <p className="mt-4 leading-relaxed text-ink/80">{historico.futuro}</p>
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-y border-ink/[0.07] bg-sand py-20 sm:py-24" aria-label="Missão, visão e valores">
        <Container as="dl" className="grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-ink/10">
          <div className="md:pr-10">
            <dt className="font-display text-2xl text-forest-700">Missão</dt>
            <dd className="mt-3 leading-relaxed text-ink/80">{missao}</dd>
          </div>
          <div className="md:px-10">
            <dt className="font-display text-2xl text-ocean-600">Visão</dt>
            <dd className="mt-3 leading-relaxed text-ink/80">{visao}</dd>
          </div>
          <div className="md:pl-10">
            <dt className="font-display text-2xl text-forest-600">Valores</dt>
            <dd className="mt-3">
              <ul className="space-y-2">
                {valores.map((v) => (
                  <li key={v} className="flex items-center gap-3 text-ink/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-forest-500" aria-hidden="true" />
                    {v}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="fundadora">
        <Container className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Img
              src={fundadora.foto}
              alt={`Retrato de ${fundadora.nome}`}
              fallbackLabel={fundadora.nome}
              className="aspect-[3/4] w-full rounded-2xl object-cover"
            />
            <div className="mt-5 flex items-center gap-5 border-t border-ink/10 pt-5">
              <p className="font-display text-5xl tabular-nums text-forest-700">{fundadora.indiceH}</p>
              <p className="text-sm leading-snug text-ink-soft">Índice H, que mede o impacto da produção científica</p>
            </div>
          </Reveal>
          <div className="lg:col-span-8">
            <SectionHeading id="fundadora" eyebrow="Fundadora e coordenadora" title={fundadora.nome} intro={fundadora.cargo} />
            <p className="mt-8 max-w-[60ch] border-l-2 border-forest-500 pl-5 font-display text-xl leading-snug text-ink/85">
              {fundadora.visao}
            </p>

            <h3 className="mt-12 text-[0.8125rem] font-semibold text-ink-soft">Trajetória acadêmica</h3>
            <ol className="mt-5 space-y-6 border-l border-forest-200 pl-7">
              {fundadora.trajetoria.map((t) => (
                <li key={t} className="relative leading-relaxed text-ink/80">
                  <span className="absolute -left-[33px] top-2 h-2.5 w-2.5 rounded-full bg-forest-500 ring-4 ring-white" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ol>

            <h3 className="mt-12 text-[0.8125rem] font-semibold text-ink-soft">Áreas de atuação</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {fundadora.areas.map((a) => (
                <li key={a} className="rounded-full bg-forest-50 px-3.5 py-1.5 text-sm font-medium text-forest-800">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  )
}
