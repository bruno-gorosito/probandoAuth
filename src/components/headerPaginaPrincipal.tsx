import Link from "next/link"
import { useState } from "react"


export const Header = () => {


    const [menu, setMenu] = useState(false)

    return (
        <>
            {/* Header mobile */}
            <header className="flex bg-gradient-bg lg:hidden items-center select-none justify-center"> 
                <h1 className="text-4xl text-center py-4  text-white">Brusapp</h1>
                <svg  className="w-8 aspect-square right-4 absolute hover:cursor-pointer " onClick={() => setMenu(!menu)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </header>
            <aside className={`fixed w-full h-screen bg-gradient-bg top-0 lg:hidden ${menu ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 flex flex-col`}>
                
                <svg className="w-8 aspect-square right-4 top-4 absolute hover:cursor-pointer " onClick={() => setMenu(!menu)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                <ul className="flex flex-col items-center mt-16 h-full ">
                    <Link href="/chat" className="py-4 text-white hover:cursor-pointer hover:opacity-60 hover:scale-125 transition-transform">Abrir Chats Online</Link>
                    <li className="py-4 text-white hover:cursor-pointer hover:opacity-60 hover:scale-125 transition-transform">Funciones</li>
                    <li className="py-4 text-white hover:cursor-pointer hover:opacity-60 hover:scale-125 transition-transform">Privacidad</li>
                    <li className="py-4 text-white hover:cursor-pointer hover:opacity-60 hover:scale-125 transition-transform">Servicio de ayuda</li>
                    <li className="py-4 text-white hover:cursor-pointer hover:opacity-60 hover:scale-125 transition-transform">Blog</li>
                    <li className="py-4 text-white hover:cursor-pointer hover:opacity-60 hover:scale-125 transition-transform">Para empresa</li>
                </ul>
            </aside>

            {/* Header desktop */}
            <header className="hidden lg:block bg-default py-2">
                <nav className="w-full flex flex-wrap justify-between">
                    <h1 className="text-4xl text-center w-2/12 font-mono">Brusapp</h1>
                    <ul className="flex justify-center items-center w-6/12 xl:w-7/12  cursor-pointer">
                        
                        <li className="px-4 py-2 rounded whitespace-nowrap relative after:content-[''] after:w-full after:h-1 after:absolute after:bg-gradient-bg after:bottom-0 after:left-0 after:transition after:origin-left hover:after:scale-x-100 after:scale-x-0 dark:hover:bg-black hover:bg-slate-300 transition-all">Funciones</li>
                        <li className="px-4 py-2 rounded whitespace-nowrap relative after:content-[''] after:w-full after:h-1 after:absolute after:bg-gradient-bg after:bottom-0 after:left-0 after:transition after:origin-left hover:after:scale-x-100 after:scale-x-0 dark:hover:bg-black hover:bg-slate-300 transition-all">Privacidad</li>
                        <li className="px-4 py-2 rounded whitespace-nowrap relative after:content-[''] after:w-full after:h-1 after:absolute after:bg-gradient-bg after:bottom-0 after:left-0 after:transition after:origin-left hover:after:scale-x-100 after:scale-x-0 dark:hover:bg-black hover:bg-slate-300 transition-all">Servicio de ayuda</li>
                        <li className="px-4 py-2 rounded whitespace-nowrap relative after:content-[''] after:w-full after:h-1 after:absolute after:bg-gradient-bg after:bottom-0 after:left-0 after:transition after:origin-left hover:after:scale-x-100 after:scale-x-0 dark:hover:bg-black hover:bg-slate-300 transition-all">Blog</li>
                        <li className="px-4 py-2 rounded whitespace-nowrap relative after:content-[''] after:w-full after:h-1 after:absolute after:bg-gradient-bg after:bottom-0 after:left-0 after:transition after:origin-left hover:after:scale-x-100 after:scale-x-0 dark:hover:bg-black hover:bg-slate-300 transition-all">Para empresa</li>
                    </ul>
                    <Link
                        href="/chat"
                        className="px-4 py-2 border bg-transparent hover:bg-gradient-bg mr-4 transition-all duration-300 border-violet-600 ml-2 rounded hover:text-white "
                    >Abrir Chats Online</Link>
                
                </nav>
            </header>
        </>
    )
}