import { ReactNode } from "react";



export default function Layout ({children} : {children: ReactNode}){
    return(
        <main className="flex items-center h-screen">
            <div className="bg-white dark:bg-gray-900 h-auto lg:rounded-xl w-full max-w-7xl mx-auto">
                <div className="flex flex-wrap pt-6 md:pt-0">
                    {children}
                </div>
            </div>
        </main>
    )
}