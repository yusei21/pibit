import { Check } from 'lucide-react'
import { Container, PageHeader, SectionHeading, Img, Reveal } from '../components/ui'
import { imagens, equipamentos, tecnicas, aplicacoes, site } from '../data/content'

export default function Infraestrutura() {
  return (
    <>
      <PageHeader
        eyebrow="Infraestrutura"
        title={site.laboratorio}
        intro="Equipamentos que sustentam a pesquisa e o desenvolvimento de novos métodos analíticos, com precisão, confiabilidade e inovação."
        image={imagens.hero}
      />

      <section className="py-20 sm:py-28" aria-labelledby="equipamentos">
        <Container>
          <SectionHeading id="equipamentos" eyebrow="Equipamentos" title="Principais sistemas analíticos" />
          <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {equipamentos.map((e, i) => (
              <Reveal as="li" key={e.nome} className="grid gap-8 py-10 md:grid-cols-12 md:items-center md:gap-12">
                <div className="md:col-span-4">
                  <Img src={e.foto} alt={e.nome} className="aspect-[4/3] w-full rounded-2xl bg-sand object-cover" />
                </div>
                <div className="md:col-span-8">
                  <p className="text-xs font-mono tabular-nums text-ink-soft">{String(i + 1).padStart(2, '0')}</p>
                  <p className="mt-2 text-[0.8125rem] font-semibold text-forest-700">{e.tipo}</p>
                  <h3 className="mt-1 font-display text-3xl">{e.nome}</h3>
                  <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {e.specs.map((s) => (
                      <li key={s} className="flex gap-3 text-ink/80">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-forest-500" aria-hidden="true" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-forest-900 py-20 text-white sm:py-28" aria-labelledby="tecnicas">
        <Container>
          <SectionHeading
            light
            id="tecnicas"
            eyebrow="Técnicas executadas"
            title="Cromatografia: separar, identificar e quantificar"
            intro="A equipe usa estas e outras técnicas de ponta para garantir a qualidade das análises e desenvolver novas metodologias."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {tecnicas.map((t) => (
              <Reveal as="article" key={t.nome} className="overflow-hidden rounded-2xl bg-white/[0.04] ring-1 ring-white/10">
                <Img src={t.foto} alt={`Ilustração de ${t.nome}`} className="aspect-[2/1] w-full bg-white object-cover" />
                <div className="p-7 sm:p-8">
                  <h3 className="font-display text-2xl">{t.nome}</h3>
                  <p className="mt-3 leading-relaxed text-forest-100/80">{t.texto}</p>
                  <dl className="mt-6 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-2">
                    <div>
                      <dt className="text-[0.8125rem] font-semibold text-lime">Aplicações</dt>
                      <dd className="mt-1 text-[0.9375rem]">{t.aplicacoes}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.8125rem] font-semibold text-lime">Vantagens</dt>
                      <dd className="mt-1 text-[0.9375rem]">{t.vantagens}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="aplicacoes">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Img
            src={imagens.computador}
            alt="Pesquisador do GEA processando dados analíticos"
            className="aspect-[16/10] w-full rounded-2xl object-cover"
          />
          <div>
            <SectionHeading id="aplicacoes" eyebrow="Aplicações" title="Onde os equipamentos fazem diferença" />
            <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {aplicacoes.map((a) => (
                <li key={a} className="flex gap-4 py-4 text-ink/85">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
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
