import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()

  const { data } = await supabase.auth.getClaims()
  const claims = data?.claims
  if (!claims) redirect('/login')

  const usuario = claims.user_metadata?.user_name ?? 'dev'
  const { data: membro } = await supabase.rpc('eh_membro')

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Olá, @{usuario}!</h1>
      <p>
        {membro
          ? 'Acesso liberado à comunidade.'
          : 'Login feito, mas seu acesso ainda não foi liberado. Fale com o mantenedor.'}
      </p>
      <form action="/auth/logout" method="post">
        <button className="rounded-lg border px-4 py-2 hover:bg-neutral-100">
          Sair
        </button>
      </form>
    </main>
  )
}
