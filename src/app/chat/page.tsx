'use client'
import ColumnaChats from "@/components/columnaChats"
import { useSession } from "next-auth/react"

export default function Page () {

    const {data:session} = useSession()

    return(
        <>
            <main className="w-full mx-auto xl:max-w-7xl max-w-5xl bg-default min-h-screen">
                {/* Chats */}
                <ColumnaChats />
            </main>
        </>
    )
}