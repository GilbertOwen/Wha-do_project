"use client"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardPage(){
    const {data:session, status} = useSession()
    const router = useRouter()
    useEffect(()=>{
        if(status === 'unauthenticated'){
            router.push('/auth-to-do')
        }
    }, [status])
    return (
        <div className="">
            <button onClick={async () => { await signOut(); router.refresh()}}>Log out</button>
        </div>
    )
}