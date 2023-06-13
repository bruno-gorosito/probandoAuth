'use client'
import { useSession } from "next-auth/react";
import { CldUploadButton } from "next-cloudinary";
import { CldUploadWidget } from 'next-cloudinary';
import Image from "next/image";

const ColumnaChats = () => {
    const {data: session} = useSession();
    
    return(
        <>
            <div>
                <div>
                    <div className="w-10 aspect-square rounded-full bg-red-200">
                    <svg className="h-full aspect-square fill-gray-800 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  >
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>
                    <h2>{`${session?.user.name} ${session?.user.lastName}`}</h2>
                    </div>
                </div>

            </div>
            <ul>
            </ul>
        </>
    )
}

export default ColumnaChats;