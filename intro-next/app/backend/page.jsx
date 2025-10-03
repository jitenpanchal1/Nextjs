import Link from "next/link"

export default function page() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-8">
            <div className="text-center max-w-3xl">
                <h1 className="text-5xl font-extrabold text-blue-700 mb-6 drop-shadow-lg">
                    🚀 Hello, Next.js
                </h1>
                <p className="text-lg text-gray-700 mb-12">
                    This is the backend side of Next.js.
                    Below you can see multiple backend projects created in Next.js for practice.
                    Click the buttons to test the APIs 👇
                </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-5xl">
                <li>
                    <Link
                        href="/backend/getroute"
                        className="block px-8 py-4 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out text-center font-semibold"
                    >
                        🔹 Get Method
                    </Link>
                </li>
            </ul>
        </div>
    )
}
