'use client'
import { signIn, signOut, useSession } from "next-auth/react"

export const SignInButton = () => {
    
    const {data:session}= useSession();

    if (session) {
        return (<button onClick={() => signOut()}>sign out</button>)
    } else {
        return(
            <>
                <button
                    onClick={() => signIn()}
                >Sign in</button>
            </>
        )
    }

}