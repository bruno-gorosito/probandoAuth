'use client'
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";


export default function Page() {

    const router = useRouter();
    const [mensajeError, setError] = useState({
        error: false,
        msg: ''
    })
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const {data: session} = useSession()

    const handleSubmit = async(e:FormEvent) => {
        e.preventDefault();
        
            const result = await signIn('credentials', {
                email: user.email, 
                password: user.password,
                redirect: false
            })
            if (result?.error !== null) {
                setError({
                    error: true,
                    msg: "Email o contraseña incorrectos."
                })
                setTimeout(() => {
                    setError({
                        error: false,
                        msg: ""
                    })
                }, 2000)
                return 
            } 
            console.log('me voy de aki')
            router.push('/chat');
    }   

    
    return(
        <>
            <Image 
                src="/login.svg"
                height={500}
                width={500}
                alt="img-logo"
                className="w-full md:w-3/4 lg:w-1/2 mx-auto"
            />
            <form 
                onSubmit={e => handleSubmit(e)}
                className="w-full flex flex-col justify-center items-center px-4 sm:px-10  lg:w-1/2 pb-10 lg:py:0"
            >    
                {mensajeError.error 
                    ? <p className=" w-full py-3 bg-red-500 mt-2 border-red-700 text-white text-center mb-3">{mensajeError.msg}</p> 
                    : null}
                <h1 className="text-3xl text-center">¡Te extrañabamos!</h1>
                <div
                    className="my-2 w-full"
                >
                    <label
                        className="w-full block my-2"
                    >E-mail:</label>
                    <input 
                        className="w-full px-4 py-2 rounded text-black"
                        type="email"
                        name="email"
                        onChange={e => handleChange(e)}
                        required
                        placeholder="Ingrese el e-mail"
                    />
                </div>
                <div
                    className="my-2 w-full"
                >
                    <label
                        className="w-full block my-2"
                    >Contraseña:</label>
                    <input 
                        className="w-full px-4 py-2 rounded text-black"
                        type="password"
                        name="password"
                        onChange={e => handleChange(e)}
                        required
                        placeholder="Ingrese el contraseña"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-6 bg-gradient-bg w-full py-3 rounded-md hover:bg-gradient-bg hover:opacity-50 text-white"
                >Iniciar Sesión</button>
                <Link
                    className="mt-4"
                    href="auth/register"
                >No tengo una cuenta</Link>
            </form>
        </>
    )
}