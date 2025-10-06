"use client"

import React, {useEffect, useState } from 'react'
import Provide from './Context'

export default function Workcontext({ children }) {

    const [color, setcolor] = useState("light")

    const toggle = () => {

        if (color === "light") {
            setcolor("dark")
            localStorage.setItem("theme", "dark")
        } else {
            setcolor("light")
            localStorage.setItem("theme", "light")
        }
    }

    useEffect(() => {
        setcolor(localStorage.getItem("theme" || "light"))
    }, [])

    useEffect(() => {
        localStorage.setItem("theme", color)
    }, [color])
    return (
        <div>
            <Provide.Provider value={{ color, toggle }}>
                {children}
            </Provide.Provider>
        </div>
    )
}
