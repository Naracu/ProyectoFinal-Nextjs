"use client"

import Link from "next/link"
import { AuthContext } from "@/Providers/authProvider"
import { useContext } from "react"

function AdminLink() {

   const { loggedIn } = useContext(AuthContext)

   if (!loggedIn) return null


  return (
    <Link href="./admin">Administrador</Link>
  )
}

export default AdminLink