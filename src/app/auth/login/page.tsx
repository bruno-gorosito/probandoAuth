'use client'
import Image from "next/image";
import { useState } from "react";



const Page = () => {
    const [error, setError] = useState({
        error: false,
        msg: ''
    })

    
    return(
        <>
            <Image 
                src="/login.svg"
                height={500}
                width={500}
                alt="img-logo"
                className="w-full md:w-3/4 lg:w-1/2 mx-auto"
            />
            <form className="w-full flex flex-col justify-center items-center px-4 sm:px-10  lg:w-1/2 pb-10 lg:py:0">
                
                <h1 className="text-3xl text-center">Iniciar sesión</h1>
                <div
                    className="my-4 w-full"
                >
                    <label
                        className="w-full block my-2"
                    >E-mail:</label>
                    <input 
                        className="w-full px-4 py-2 rounded text-black"
                        type="email"
                        placeholder="Ingrese el e-mail"
                    />
                </div>
                <div
                    className="my-4 w-full"
                >
                    <label
                        className="w-full block my-2"
                    >Contraseña:</label>
                    <input 
                        className="w-full px-4 py-2 rounded text-black"
                        type="password"
                        placeholder="Ingrese el contraseña"
                    />
                </div>
            </form>
        </>
    )
}

export default Page;