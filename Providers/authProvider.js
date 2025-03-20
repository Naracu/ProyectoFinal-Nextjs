"use client"

import { createContext } from "react";
import { auth } from "@/firebase"
import {signInWithEmailAndPassword ,signOut , onAuthStateChanged  } from "firebase/auth"
import { useEffect, useState } from "react"

export const AuthContext = createContext()


const {Provider} = AuthContext;

const AuthContextProvider = ( props ) => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true)
                setCurrentUser(user)
            } else {
                setLoggedIn(false)
                setCurrentUser(null)
            }

  
        })
    }, [])

    const handleLogin = async(email,password) => {
      await signInWithEmailAndPassword(auth, email , password) 
        

    }   
    const handleLogOut = async() => {
        await signOut(auth)
        

    }

    return (
    <Provider value={{ currentUser,loggedIn, handleLogin, handleLogOut}}>
        {props.children}
    </Provider>
    )

}

export default AuthContextProvider;