"use client"
import { useContext } from "react"
import { AuthContext } from "@/Providers/authProvider"
import { LogOut, LogIn } from "lucide-react"
import { useRouter } from "next/navigation"



function AuthLink (){

    const { loggedIn, handleLogin, handleLogOut } = useContext(AuthContext)
    const router = useRouter()
   
    const handleClick = () => {
        if (loggedIn){
            handleLogOut()
        } else {
            router.push("/login")
        }
    }


    return (
        <button 
        className="cursor-pointer"
        onClick={handleClick}
        tittle={loggedIn ? "Salir" : "Acceder"}>{loggedIn ? <LogOut/> : <LogIn/>}</button>
    )
}
export default AuthLink 