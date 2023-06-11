'use client'
import { Header } from '@/components/headerPaginaPrincipal'
import { SignInButton } from '@/components/signInButton'
import { SessionProvider, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  




  return (
    <>
    <Header />
    <main>
      <SignInButton />
      <Link href="/auth/register">Registrarme</Link>
    </main>
    </>
  )
}
