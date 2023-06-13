'use client'
import { Header } from '@/components/headerPaginaPrincipal'
import { SignInButton } from '@/components/signInButton'
import { SessionProvider, signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  




  return (
    <>
    <Header />
    <main>
      <button
        onClick={() => signIn()}
      >sassssss</button>
      <SignInButton />
      <Link href="/auth/register">Registrarme</Link>
    </main>
    </>
  )
}
