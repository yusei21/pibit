import { useState } from 'react'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { Container, PageHeader, Icon } from '../components/ui'
import { imagens, site, docentes, tecnicos, parcerias } from '../data/content'

const contatos = [
  { papel: 'Coordenação', nome: `Profa. Dra. ${docentes[0].nome}`, email: docentes[0].email },
  { papel: 'Vice-coordenação', nome: `Prof. Dr. ${docentes[1].nome}`, email: docentes[1].email },
  { papel: 'Técnica de laboratório', nome: tecnicos[0].nome, email: tecnicos[0].email },
]

function Mapa() {
  const [carregado, setCarregado] = useState(false)
  return (
    <div className="relative overflow-hidden rounded-2xl bg-sand shadow-[0_0_0_1px_rgb(0_0_0/0.06)]">
      {/* Estado de carregamento do mapa; o link do Google Maps fica sempre disponível abaixo */}
      {!carregado && (
        <div className="absolute inset-0 grid place-items-center text-sm text-ink-soft" role="status">
          Carregando mapa…
        </div>
      )}
      <iframe
        title="Mapa: IFMA Campus São Luís Monte Castelo"
        src={site.mapa}
        onLoad={() => setCarregado(true)}
        className={`relative aspect-[4/3] w-full transition-opacity duration-300 ${carregado ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  )
}

export default function Contato() {
  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Venha conhecer o laboratório"
        intro="Empresas, instituições de ensino, parceiros internacionais e estudantes: escreva para a coordenação."
        image={imagens.lab}
      />

      <section className="py-20 sm:py-28" aria-labelledby="lac">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="lac" className="font-display text-3xl leading-tight">{site.laboratorio}</h2>
            <p className="mt-2 text-ink-soft">{site.nome}</p>

            <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {contatos.map((c) => (
                <li key={c.email} className="py-5">
                  <p className="text-[0.8125rem] font-semibold text-forest-700">{c.papel}</p>
                  <p className="mt-1 text-lg font-medium">{c.nome}</p>
                  <a
                    href={`mailto:${c.email}`}
                    className="inline-flex min-h-11 items-center gap-2 font-medium text-forest-700 transition-colors duration-150 hover:text-forest-500"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span className="break-all">{c.email}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
              <div>
                <p className="font-semibold">Endereço</p>
                <p className="text-ink-soft">{site.instituicao}</p>
                <a
                  href={site.mapaLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-1 font-medium text-forest-700 hover:text-forest-500"
                >
                  Abrir no Google Maps <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Mapa />
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/[0.07] bg-sand py-20 sm:py-24" aria-labelledby="parcerias">
        <Container>
          <h2 id="parcerias" className="font-display text-3xl">Propor uma parceria</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {parcerias.map((p) => (
              <li key={p.titulo}>
                <a
                  href={`mailto:${docentes[0].email}?subject=${encodeURIComponent(`Parceria com o GEA: ${p.titulo}`)}`}
                  className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-[0_0_0_1px_rgb(0_0_0/0.06)] transition-shadow duration-200 hover:shadow-[0_8px_24px_-8px_rgb(0_0_0/0.15),0_0_0_1px_var(--color-forest-400)]"
                >
                  <Icon name={p.icone} className="h-6 w-6 text-ocean-600" />
                  <h3 className="mt-5 text-lg font-semibold">{p.titulo}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{p.texto}</p>
                  <span className="mt-6 inline-flex items-center gap-1 font-semibold text-forest-700 group-hover:text-forest-500">
                    Escrever para a coordenação <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
