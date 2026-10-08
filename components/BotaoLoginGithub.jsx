'use client'

import { createClient } from '@/lib/supabase/client'

export default function BotaoLoginGithub() {
  async function entrar() {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: { redirectTo: `${location.origin}/auth/callback` },
    })
  }

  return (
    <button
      onClick={entrar}
      className="rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-neutral-800"
    >
      Entrar com GitHub
    </button>
  )
}