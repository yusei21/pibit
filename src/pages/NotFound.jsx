import { Container, Button } from '../components/ui'

// Estado de erro de rota: explica o problema e oferece caminhos de volta
export default function NotFound() {
  return (
    <section className="bg-sand pb-28 pt-36" aria-labelledby="nao-encontrada">
      <Container>
        <p className="font-display text-6xl tabular-nums text-forest-600">404</p>
        <h1 id="nao-encontrada" className="mt-4 font-display text-4xl">Página não encontrada</h1>
        <p className="mt-4 max-w-lg text-lg text-ink-soft">
          O endereço acessado não existe ou mudou de lugar. Use o menu acima ou volte ao início.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/">Voltar ao início</Button>
          <Button to="/pesquisa" variant="secondary" icon={false}>
            Ver a pesquisa
          </Button>
        </div>
      </Container>
    </section>
  )
}
