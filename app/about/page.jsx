import Link from "next/link";

export const metadata = {
    title: "About page"
}
export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">
                This is About Page
            </h1>

            <div className="flex gap-4">
                <Link
                    href="/"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                    Home
                </Link>
                <Link
                    href="/service"
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
                >
                    Service
                </Link>
            </div>
        </div>

    )
}

