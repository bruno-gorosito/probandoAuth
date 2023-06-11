'use client'
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";


const Page = () => {
    const [error, setError] = useState({
        error: false,
        msg: ''
    })



    const {data: session} = useSession()
    const [errorPass, setErrorPass] = useState(false) 

    const [newUser, setNewUser] = useState({
        name: '',
        lastName: '',
        password: '',
        email: ''
    })

    const {name, lastName, password, email} = newUser

    const [pass2, setPass2] = useState('')

    const submitRegister = async(e:FormEvent) => {   
        e.preventDefault();
        
        if (newUser.name.trim() === '') {
            setError({
                error: true,
                msg: 'Debe ingresar un nombre correcto'
            })
            reiniciarError()
            return
        }
        if (newUser.lastName.trim() === '') {
            setError({
                error: true,
                msg: 'Debe ingresar un apellido correcto'
            })
            reiniciarError()
            return
        }
        if (newUser.email.trim() === '') {
            setError({
                error: true,
                msg: 'Debe ingresar un email correcto'
            })
            reiniciarError()
            return
        }
        if (newUser.password.trim() === '' || newUser.password.length < 6) {
            setError({
                error: true,
                msg: 'Debe ingresar una contraseña válida'
            })
            reiniciarError()
            return
        }

        if (pass2 !== newUser.password) {
            setError({
                error: true,
                msg: 'Las contraseñas deben ser iguales'
            })
            reiniciarError()
            return
        }
        
        const res = await axios.post('/api/user', newUser)
        if (res.data === null) {
            setError({error: true, msg: "El email ya está registrado"})
            reiniciarError()
            return
        }
        
        const result = await signIn('credentials', {
            email: newUser.email, 
            password: newUser.password,
            redirect: true,
            callbackUrl: '/'
        })


    }

    const reiniciarError = () => {
        setTimeout(() => {
            setError({
                error: false,
                msg: ''
            })
        }, 2000)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewUser({
            ...newUser,
            [e.target.name] : e.target.value
        })
    }



    useEffect(() => {
        if (pass2 !== newUser.password) {
            setErrorPass(true);
        } else {
            setErrorPass(false)
        }
    }, [pass2, password])

    
    useEffect(() => {
        setTimeout(() => {
            session ? useRouter().push('/chat') : null
        }, 500)
    }, [])

    return (
        <>
            <Image 
                src="/login-image.svg"
                height={500}
                width={500}
                alt="img-logo"
                className="w-full md:w-3/4 lg:w-1/2 mx-auto mt-10"
            />
            <form 
                className="w-full flex flex-col justify-center items-center px-4 sm:px-10  lg:w-1/2 lg:py:0 relative"
                onSubmit={e => submitRegister(e)}
            >
                {error.error 
                    ? <p className=" w-full py-3 bg-red-500 mt-2 border-red-700 text-white text-center mb-3">{error.msg}</p> 
                    : null}
                <h1 className="text-3xl text-center mb-2">Iniciemos la aventura</h1>
                <div className="w-full md:flex">
                    <div
                        className="my-2 w-full md:w-1/2 md:pr-2"
                    >
                        <label
                            className="w-full block my-2"
                        >Nombre/s:</label>
                        <input 
                            className="w-full px-4 py-2 rounded text-black border border-gray-300"
                            type="text"
                            name="name"
                            onChange={e => handleChange(e)}
                            placeholder="Ingrese su/s nombre/s"
                        />
                    </div>
                    <div
                        className="my-2 w-full md:w-1/2 md:pl-2"
                    >
                        <label
                            className="w-full block my-2"
                        >Apellido/s:</label>
                        <input 
                            className="w-full px-4 py-2 rounded text-black border border-gray-300"
                            onChange={e => handleChange(e)}
                            type="text"
                            name="lastName"
                            placeholder="Ingrese su/s apellido/s"
                        />
                    </div>
                </div>
                <div
                    className="my-2 w-full"
                >
                    <label
                        className="w-full block my-2"
                    >E-mail:</label>
                    <input 
                        className="w-full px-4 py-2 rounded text-black border border-gray-300"
                        type="email"
                        required
                        name="email"
                        onChange={e => handleChange(e)}
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
                        className="w-full px-4 py-2 rounded text-black border border-gray-300"
                        type="password"
                        name="password"
                        onChange={e => handleChange(e)}
                        placeholder="Ingrese el contraseña"
                    />
                </div>
                <div
                    className="my-2 w-full relative"
                >
                    <label
                        className="w-full block my-2"
                    >Confirmar contraseña:</label>
                    <input 
                        className="w-full px-4 py-2 rounded text-black border border-gray-300"
                        type="password"
                        name = "pass2"
                        onChange={e => setPass2(e.target.value)}
                        placeholder="Reingrese el contraseña"
                    />
                    {errorPass 
                        ? <p className="text-red-500 absolute">Las contraseñas deben ser iguales</p>
                        : null
                    }
                </div>
                <button
                    type="submit"
                    className="mt-6 bg-gradient-bg w-full py-3 rounded-md hover:bg-gradient-bg hover:opacity-50 text-white"
                >Registrarme</button>
                <Link
                    className="mt-4"
                    href="auth/login"
                >Ya tengo una cuenta</Link>
            </form>
        </>
    )
}

export default Page;

