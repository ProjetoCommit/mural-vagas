import BotaoLoginGithub from '@/components/BotaoLoginGithub'

export default async function LoginPage({ searchParams }) {
  const { erro } = await searchParams

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold">Mural de Vagas</h1>
      <p className="text-neutral-600">
        Oportunidades da nossa comunidade de devs.
      </p>
      {erro && (
        <p className="text-sm text-red-600">
          Não foi possível entrar. Tente novamente.
        </p>
      )}
      <BotaoLoginGithub />
    </main>
  )
}