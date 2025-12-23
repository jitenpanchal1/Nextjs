"use client"
import { useEffect, useState } from "react"

export default function page() {

    const [todos, settodos] = useState([])
    const [task, settask] = useState("")
    const [editid, seteditid] = useState(null)
    const [edittask, setedittask] = useState("")

    useEffect(() => {
        call()
    }, [])

    const call = async () => {
        const res = await fetch("/backend/getroute")
        const data = await res.json()
        settodos(data)
    }

    const addtodo = async () => {
        const res = await fetch("/backend/postroute", {
            method: "POST",
            body: JSON.stringify({ task }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const newtodo = await res.json()
        settodos([...todos, newtodo])
        settask("")
    }

    const delet = async (id) => {
        const res = await fetch(`/backend/delettodo/${id}`, {
            method: "DELETE",
        })
        if (res.ok) {
            call()
        }
    }

    const toggle = async (id) => {
        const todo = todos.find((t) => t.id === id)
        if (!todo) {
            console.log("todo not found")
            return
        } else {
            const response = await fetch(`/backend/edittodo/${id}`, {
                method: "PUT",
                body: JSON.stringify({ status: !todo.status })
            })
            if (response.ok) {
                call()
            }
        }
    }

    const update = async (id) => {
        if (!edittask) {
            alert("Task cannot be empty")
            return
        }
        const response = await fetch(`/backend/edittodo/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                task: edittask
            })
        })
        if (response.ok) {
            seteditid(null)
            setedittask("")
            call()
        }

    }


    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-teal-100 to-blue-100 flex flex-col items-center py-12 px-6">
             
                <h1 className="text-5xl font-extrabold text-emerald-700 mb-12 drop-shadow-xl tracking-wide text-center">
                    ✅ Modern Todo List
                </h1>

             
                <div className="flex items-center justify-between gap-3 bg-white/90 shadow-xl rounded-2xl p-5 w-full max-w-2xl backdrop-blur-lg transition-transform duration-300 hover:scale-[1.02]">
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => settask(e.target.value)}
                        placeholder="🖊️ Add a new task..."
                        className="flex-1 border border-emerald-200 rounded-lg px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                    <button
                        onClick={addtodo}
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl active:scale-95 transition-all"
                    >
                        ➕ Add
                    </button>
                </div>

             
                <div className="w-full max-w-2xl mt-10 bg-white/95 shadow-2xl rounded-3xl p-6 backdrop-blur-md border border-emerald-100 transition-all duration-300 hover:shadow-emerald-200/70">
                    {todos.length > 0 ? (
                        <ul className="space-y-4">
                            {todos.map((todo) => (
                                <li
                                    key={todo.id}
                                    className="flex items-center justify-between bg-gradient-to-r from-white to-emerald-50 border border-emerald-100 hover:from-emerald-50 hover:to-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-200"
                                >
                               
                                    <div className="flex items-center gap-3 flex-1">
                                        {editid === todo.id ? (
                                           
                                            <div className="flex items-center gap-2 w-full">
                                                <input
                                                    type="text"
                                                    value={edittask}
                                                    onChange={(e) => setedittask(e.target.value)}
                                                    className="border border-emerald-300 rounded-md px-2 py-1 flex-1 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                                />
                                                <button
                                                    onClick={() => update(todo.id)}
                                                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 rounded-md text-sm font-semibold shadow-sm"
                                                >
                                                    💾 Save
                                                </button>
                                                <button
                                                    onClick={() => seteditid(null)}
                                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded-md text-sm font-semibold shadow-sm"
                                                >
                                                    ✖ Cancel
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <input
                                                    type="checkbox"
                                                    checked={todo.status}
                                                    onChange={() => toggle(todo.id)}
                                                    className="w-5  accent-emerald-600 cursor-pointer transition-all hover:scale-110"
                                                />
                                                <span
                                                    className={`text-lg font-medium transition-all me-5 duration-300 ${todo.status
                                                            ? "line-through text-gray-400"
                                                            : "text-gray-800 hover:text-emerald-600"
                                                        }`}
                                                >
                                                    {todo.task}
                                                </span>
                                            </>
                                        )}
                                    </div>

                                    {editid !== todo.id && (
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`text-sm font-semibold ${todo.status ? "text-green-600" : "text-red-500"
                                                    }`}
                                            >
                                                {todo.status ? "✅ Done" : "⏳ Pending"}
                                            </span>

                                            <button
                                                onClick={() => delet(todo.id)}
                                                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold px-3 py-2 rounded-lg shadow-md hover:shadow-lg active:scale-95 transition-transform"
                                            >
                                                🗑 Delete
                                            </button>

                                            <button
                                                onClick={() => {
                                                    seteditid(todo.id);
                                                    setedittask(todo.task);
                                                }}
                                                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-3 py-2 rounded-lg shadow-md hover:shadow-lg active:scale-95 transition-transform"
                                            >
                                                ✏️ Edit
                                            </button>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600 text-center italic py-6">
                            💤 No todos available. Start adding some!
                        </p>
                    )}
                </div>
            </div>

        </>

    )
}
