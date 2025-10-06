"use client"

import { useEffect, useState } from "react"

export default function usefetch(url) {

    const [data, setdata] = useState([])
    const [loading, setloading] = useState(null)
    const [error, seterror] = useState(null)

    useEffect(() => {
        if (!url) {
            seterror("This request is not valid")
            return
        }
        const ops = async () => {
            seterror(false)
            setloading("Data fetching")
            const call = await fetch(url)
            if (!call.ok) {
                seterror("Data is not valid")
                return
            }
            setloading("Data Loading")
            const read = await call.json()
            setloading(false)
            seterror(false)
            setdata(read)
        }

        ops()
    }, [url])
    return {
        data,
        loading,
        error
    }

}
