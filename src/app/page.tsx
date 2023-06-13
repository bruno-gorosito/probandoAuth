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
    <main className='w-full mx-auto max-w-7xl bg-default min-h-screen px-6 lg:px-20 py-6'>
      <div className='flex flex-wrap even:flex-row-reverse items-center justify-around'>
        <Image
          width={500}
          height={500}
          className='w-full md:w-3/4 lg:w-1/2'
          src="/Digital-nomad-rafiki.svg"
          alt='Digital nomad'
        />
        <div className="w-full max-w-lg even:text-left flex flex-col justify-center mb-8">
          <h2 className="text-4xl py-8">Mensajeá desde donde quieras</h2>
          <p>Con nuestro servicio online podes hablar con tus amigos desde tu PC, tablet o teléfono.</p>
        </div>
      </div>
      <div className='flex flex-wrap even:flex-row-reverse items-center justify-around'>
        <Image
          width={500}
          height={500}
          className='w-full md:w-3/4 lg:w-1/2'
          src="/Online-wishes-amico.svg"
          alt='Digital nomad'
        />
        <div className="w-full max-w-lg even:text-left flex flex-col justify-center mb-8">
          <h2 className="text-4xl py-8">Chatea con amigos</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius sequi, maxime fugit quasi itaque veniam aut vero dicta, molestias soluta optio quis perferendis praesentium tempore eum nihil temporibus numquam quos.</p>
        </div>
      </div>
      <div className='flex flex-wrap even:flex-row-reverse items-center justify-around'>
        <Image
          width={500}
          height={500}
          className='w-full md:w-3/4 lg:w-1/2'
          src="/Voice-chat-amico.svg"
          alt='Digital nomad'
        />
        <div className="w-full max-w-lg even:text-left flex flex-col justify-center mb-8">
          <h2 className="text-4xl py-8">Algo más que decir?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo provident ipsa fugiat. Mollitia, ea eius corporis ratione soluta voluptates doloribus, voluptatem fugit neque eaque ipsam saepe a animi dolores maxime?</p>
        </div>
      </div>
      <div className='flex flex-wrap even:flex-row-reverse items-center justify-around'>
        <Image
          width={500}
          height={500}
          className='w-full md:w-3/4 lg:w-1/2'
          src="/Messaging-rafiki.svg"
          alt='Digital nomad'
        />
        <div className="w-full max-w-lg even:text-left flex flex-col justify-center mb-8">
          <h2 className="text-4xl py-8">Chamuyá desde donde quieras</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto sapiente molestias excepturi iure recusandae, fuga aliquam ipsa minus. Mollitia aut error, et dolores quo tempora porro at eligendi iste ut?</p>
        </div>
      </div>
    </main>
    </>
  )
}
