import Link from "next/link"

export default function page() {
    return (
        <div className=" mt-5 flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold text-indigo-600 mb-6">this is children</h1>

            <ul className="space-y-5">
                <li>
                    <Link
                        href="/layout/laone"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        Layout one
                    </Link>
                </li>
                <li>
                    <Link
                        href="/layout/latwo"
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                        Layout two
                    </Link>
                </li>
            </ul>
        </div>

    )
}
