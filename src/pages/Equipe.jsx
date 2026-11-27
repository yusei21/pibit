import { Mail, Wrench } from 'lucide-react'
import { Container, PageHeader, SectionHeading, Button, Img, Reveal } from '../components/ui'
import { imagens, docentes, tecnicos, categoriasEquipe } from '../data/content'

export default function Equipe() {
  return (
    <>
      <PageHeader
        eyebrow="Pessoas"
        title="Nossa equipe"
        intro="Professores, técnicos e estudantes de graduação e pós-graduação que unem rigor científico, trabalho de campo e inovação."
        image={imagens.grupo}
      />

      <section className="py-20 sm:py-28" aria-labelledby="docentes">
        <Container>
          <SectionHeading
            id="docentes"
            eyebrow="Corpo docente"
            title="Pesquisadores"
            intro="Profissionais experientes e qualificados, referência em química e educação."
          />
          <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {docentes.map((d, i) => (
              <Reveal as="li" key={d.email} delay={(i % 3) * 0.06}>
                <article>
                  <div className="overflow-hidden rounded-2xl bg-sand">
                    <Img
                      src={d.foto}
                      alt={`Retrato de ${d.nome}`}
                      fallbackLabel={d.nome}
                      className="aspect-[4/5] w-full object-cover object-[center_30%]"
                    />
                  </div>
                  <p className="mt-5 text-[0.8125rem] font-semibold text-forest-700">{d.papel}</p>
                  <h3 className="mt-1 font-display text-2xl leading-snug">{d.nome}</h3>
                  <p className="mt-1.5 text-[0.9375rem] text-ink-soft">{d.titulacao}</p>
                  <a
                    href={`mailto:${d.email}`}
                    className="mt-2 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-medium text-forest-700 transition-colors duration-150 hover:text-forest-500"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span className="break-all">{d.email}</span>
                  </a>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-sand py-20 sm:py-28" aria-labelledby="estudantes">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="estudantes"
              eyebrow="Estudantes e técnicos"
              title="Formando a próxima geração de cientistas"
              intro="Cada integrante tem papel ativo nos projetos, da coleta em campo à validação de métodos no laboratório."
            />
            <Img
              src={imagens.grupo}
              alt="Integrantes do GEA reunidos em atividade de campo"
              className="mt-10 aspect-[16/9] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <dl className="grid gap-x-8 sm:grid-cols-2">
              {categoriasEquipe.map((c, i) => (
                <div key={c.titulo} className="border-t border-ink/10 py-6">
                  <dt className="flex items-baseline gap-3">
                    <span className="text-xs font-mono tabular-nums text-ink-soft">0{i + 1}</span>
                    <span className="text-lg font-semibold">{c.titulo}</span>
                  </dt>
                  <dd className="mt-2 leading-relaxed text-ink-soft">{c.texto}</dd>
                </div>
              ))}
            </dl>
            {tecnicos.map((t) => (
              <div key={t.email} className="mt-6 flex gap-4 rounded-2xl bg-white p-6 shadow-[0_0_0_1px_rgb(0_0_0/0.06)]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ocean-50 text-ocean-600">
                  <Wrench className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold">{t.nome}</p>
                  <p className="text-[0.9375rem] text-ink-soft">{t.papel}</p>
                  <a href={`mailto:${t.email}`} className="inline-flex min-h-11 items-center text-[0.9375rem] font-medium text-forest-700 hover:text-forest-500">
                    {t.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-3xl">Quer fazer parte do GEA?</h2>
            <p className="mt-2 max-w-xl text-ink-soft">
              Estudantes interessados em iniciação científica ou pós-graduação podem falar com a coordenação.
            </p>
          </div>
          <Button to="/contato">Falar com a coordenação</Button>
        </Container>
      </section>
    </>
  )
}
