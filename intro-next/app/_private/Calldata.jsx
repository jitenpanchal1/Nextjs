'use client'
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Calldata() {
    const [alldata, setalldata] = useState([])

    const All = async () => {
        try {
            const res = await fetch('https://dummyjson.com/todos')
            const read = await res.json()
            setalldata(read.todos)
            console.log("call from private folder")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        All()
    }, [])

    return (

        <>
             <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-10">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
                        All Todos
                    </h1>

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {alldata.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
                            >
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                        {item.todo}
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-1">
                                        User: {item.userId}
                                    </p>
                                    <p
                                        className={`text-sm font-medium mb-4 ${item.completed
                                            ? "text-green-600"
                                            : "text-red-600"
                                            }`}
                                    >
                                        {item.completed ? "Completed ✅" : "Pending ⏳"}
                                    </p>
                                </div>

                                {/* Detail Button */}
                                <Link
                                    href={`/ststigeneration/${item.id}`}
                                    className="text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                                >
                                    Detail
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </>
    )
}
