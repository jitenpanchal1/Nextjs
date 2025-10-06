import Link from "next/link"

export default function page() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
            <h1 className="text-4xl font-bold text-indigo-600 mb-4">
                This is group Two
            </h1>

            <h2 className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                Right now you are seeing the routing group concept. This means it allows
                you to write a folder without destructuring the URL. This folder needs to
                be written in parentheses <span className="font-mono text-blue-600">()</span>.
            </h2>
             <Link
                        href="/"
                        className="px-4 py-2  bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                        Home
                    </Link>
        </div>
    )
}
