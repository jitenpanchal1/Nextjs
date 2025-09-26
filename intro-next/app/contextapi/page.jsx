"use client"

// import { ustheme } from "../../context/Workcontext"
import React, { useContext } from 'react'
import "../../theme.css"
import Provide from '../../context/Context'

function page() {

    // const { color, toggle } = ustheme()

    const { color, toggle } = useContext(Provide)
    return (
        <div className={`w100 ${color}`}>
            <button className='butn' onClick={toggle}>
                Click to change background
            </button>
        </div>
    )
}

export default page
