import Link from "next/link"

export default function Myintro() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center space-y-6">
            <h1 className="text-3xl font-bold text-indigo-600">
                Hi, I am Panchal Jeeten and right now you are in private folder
            </h1>

            <h1 className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                The folder we create using underscore (<span className="font-mono text-blue-600">_</span>) is called a private folder.
                Most of the time we use this folder when we need to create components and render according to the needs.
            </h1>

            <h1 className="text-lg text-red-600 font-semibold">
                Right now I am in private folder, so I cannot create a route...
            </h1>
            <Link
                href="/"
                className="px-4 py-2  bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
                Home
            </Link>
        </div>

    )
}
