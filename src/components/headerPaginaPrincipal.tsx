import Link from "next/link"


export const Header = () => {
    return (
        <>
            {/* Header mobile */}
            <header className="block lg:hidden"> 
                <nav className="w-full justify-between ">
                    <h1 className="text-4xl text-center w-full md:w-1/2 lg:w-1/3">Websapp</h1>
                    <div 
                        className="w-full md:w-1/2"
                    >
                        <button
                            className="px-4 py-2 border rounded"
                        >Abrir Chats Online</button>
                        <button
                            className=""
                        >Registrarme</button>
                    </div>
                </nav>
            </header>

            {/* Header desktop */}
            <header className="hidden lg:block bg-default py-2">
                <nav className="w-full flex flex-wrap justify-between">
                    <h1 className="text-4xl text-center w-2/12 font-mono">Websap</h1>
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