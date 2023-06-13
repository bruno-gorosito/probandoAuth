'use client'
import ColumnaChats from "@/components/columnaChats"
import ColumnaMensajes from "@/components/columnaMensajes"
import { useSession } from "next-auth/react"
import { useState } from "react"

export default function Page () {

    const {data:session} = useSession()
    const [chatSeleccionado, setChat] = useState('')
    const [modalChat, setModal] = useState(false)

    return(
        <>  

            {/* MODAL */}
            <div className={`w-full h-screen ${modalChat ? 'block' : 'hidden'} absolute flex justify-center items-center mx-auto z-50`}> 
                <div 
                    className="w-full absolute h-full bg-slate-50/30 z-40" 
                    onClick={() => setModal(false)}    
                ></div>
                <div className="w-full max-w-md max-h-96  p-8 z-50 dark:bg-default bg-gray-300/90 rounded-xl">
                    <svg  className="w-6 h-6 float-right hover:cursor-pointer" onClick={() => setModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                    <h2 className="text-2xl mt-4">Nuevo chat</h2>
                    <form
                    >
                        <div className="my-4">
                            <label className="block">Destinatario:</label>
                            <input 
                                className="w-full py-2 px-4 text-black my-2"
                                type="email"

                            />
                        </div>
                        <button
                            type="submit"
                            className="py-2 px-4 rounded bg-gradient-bg text-white float-right"
                        >Crear</button>
                    </form>
                </div>
            </div>


            <main className="w-full mx-auto xl:max-w-7xl max-w-5xl bg-default flex flex-wrap min-h-screen relative z-10">
                {/* Chats */}
                
                <div className="w-full lg:w-4/12 p-4  relative h-screen after:h-full after:w-px after:bg-cyan-600 after:hidden lg:after:block after:content-[''] after:absolute after:top-0 after:right-0">
                    <ColumnaChats />
                    <div
                        className="absolute bottom-7 right-4"
                    >
                        <div
                            onClick={() => setModal(!modalChat)}
                            className="bg-gradient-bg w-16 aspect-square rounded-full text-white flex justify-center text-4xl font-medium place-items-center hover:cursor-pointer"
                        >+</div>
                    </div>
                </div>
                {
                    chatSeleccionado 
                        ? <ColumnaMensajes />
                        : null
                }
            </main>
        </>
    )
}