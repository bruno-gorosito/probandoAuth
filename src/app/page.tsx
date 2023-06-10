'use client'
import { SignInButton } from '@/components/signInButton'
import { SessionProvider, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  


  const {data: session} = useSession()

  console.log(session?.user.accessToken)



  return (
    <main>
      <SignInButton />
      {session ? <p>Ola {session?.user?.name}</p> : null}
      <Link href="/about-us">Irme a otro</Link>
    </main>
  )
}
