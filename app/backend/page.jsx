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
                        className="block px-8 py-4 bg-blue-500 text-white rounded-2xl shadow-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300 ease-in-out text-center font-semibold"
                    >
                        🔹 Get Method
                    </Link>
                </li>
                <li>
                    <Link
                        href="/backend/postroute"
                        className="block px-8 py-4 bg-amber-500 text-white rounded-2xl shadow-lg 
                        hover:bg-amber-600 hover:scale-105 transition-all duration-300 ease-in-out text-center font-semibold"
                    >
                        🔹 Post Method
                    </Link>
                </li>
                <li>
                    <Link
                        href="/backend/edittodo"
                        className="block px-8 py-4 bg-emerald-500 text-white rounded-2xl shadow-lg 
                        hover:bg-emerald-600 hover:scale-105 transition-all duration-300 ease-in-out text-center font-semibold"
                    >
                        🔹 Edit Method
                    </Link>
                </li>
                <li>
                    <Link
                        href="/backend/delettodo"
                        className="block px-8 py-4  bg-pink-500 text-white rounded-2xl shadow-lg 
                        hover:bg-pink-600 hover:scale-105 transition-all duration-300 ease-in-out text-center font-semibold"
                    >
                        🔹 Delete Method
                    </Link>
                </li>
            </ul>
        </div>
    )
}
