'use client'
import { signOut, useSession } from "next-auth/react";
import { CldUploadButton } from "next-cloudinary";
import { CldUploadWidget } from 'next-cloudinary';
import Image from "next/image";
import { useRouter } from "next/navigation";

const ColumnaChats = () => {
    const {data: session} = useSession();
    const router = useRouter();
    const cerrarSesion = () => {
        signOut();
        () => router.push('/auth/login');
    }
    
    return(
        <>
                <div className="flex justify-between items-center relative mb-4">
                    <div className="flex items-center">
                        <div className="w-10 aspect-square rounded-full bg-red-200 mr-3">
                            <svg className="h-full aspect-square fill-gray-800 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  >
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                            </svg>
                        </div>
                        
                        <h2 className="capitalize">{session?.user.name} <span>{session?.user.lastName}</span></h2>
                    </div>
                    <button
                        onClick={cerrarSesion}
                        className="dark:hover:bg-black hover:bg-gray-300 px-4 py-2 duration-300 transition rounded"
                    >Cerrar sesión</button>
                </div>
                <div className="h-px w-full  bg-cyan-400 bottom-0"></div>
                
        </>
    )
}

export default ColumnaChats;