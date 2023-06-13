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
    <main className='w-full mx-auto max-w-7xl bg-default min-h-screen'>
      <div>
        <h1>Aqui va el content</h1>
      </div>
    </main>
    </>
  )
}
