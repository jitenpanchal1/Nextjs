import { resolve } from "styled-jsx/css"

export default async function Streaming() {

    new Promise((resolve) => setTimeout(resolve, 10000))

    const call = await fetch("https://jsonplaceholder.typicode.com/users")
    const read = await call.json()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {read.map((user) => (
                <div
                    key={user.id}
                    className="bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition"
                >
                    <h1 className="text-lg font-bold text-blue-600">{user.name}</h1>
                    <p className="text-gray-700">@{user.username}</p>
                    <p className="text-gray-500">{user.email}</p>
                </div>
            ))}
        </div>

    )
}
