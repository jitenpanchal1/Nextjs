import Link from "next/link"
export const metadata = {
    title: "Service page"
}

export default function webservice() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-4xl mb-5 font-bold text-indigo-600">
                    This is Web services
                </h1>
                <div className="">
                    <Link
                        href="/"
                        className="px-4 py-2  bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                        Home
                    </Link>
                </div>
            </div>


        </>
    )
}
