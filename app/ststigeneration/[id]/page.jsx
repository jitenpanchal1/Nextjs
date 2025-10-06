import Link from "next/link"

export async function generateStaticParams() {
    const res = await fetch("https://dummyjson.com/todos")
    const data = await res.json()
    return data.todos.map((item) => ({
        id: item.id.toString()
    }))
}

export default async function Page({ params }) {
    const { id } = await params
    const res = await fetch(`https://dummyjson.com/todos/${id}`)
    const data = await res.json()
    console.log(`Call dat in detail page ${id}`)

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 p-6">
            <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 transform transition hover:scale-[1.02] hover:shadow-2xl">
                <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
                    Static Site Generation Page
                </h1>
                <h2 className="text-md font-medium text-gray-700 mb-6 text-center">
                    that means save our all dynamic rendering data in build time and show according to the need
                </h2>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {data.todo}
                    </h2>
                    <p className="text-gray-700">
                        <span className="font-medium">User ID:</span> {data.userId}
                    </p>
                    <p
                        className={`font-medium ${data.completed ? "text-green-600" : "text-red-600"}`}
                    >
                        Status: {data.completed ? "Completed ✅" : "Pending ❌"}
                    </p>
                </div>

                {/* Back Button */}
                <div className="mt-8 text-center flex justify-center space-x-4">
                    <Link
                        href="/ststigeneration"
                        className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                    >
                        ⬅ Back
                    </Link>
                    <Link
                        href="/"
                        className="px-8 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                        Home
                    </Link>
                </div>
            </div>
        </div>
    )
}
