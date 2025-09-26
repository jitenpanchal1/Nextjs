import Link from "next/link"

export const metadata = {
    title: "Blog page"
}

export default async function page({ params }) {

    const { id, comment } = await params

    // if (comment % 2 === 0) {
    //     throw new Error;
    // }

    const rendome = Math.random()
    console.log(rendome)

    if (rendome > 0.5) {
        throw new Error("numer up yo 0.5")
    }
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4 leading-relaxed">
                this is my blog Number{" "}
                <u className="text-blue-600 font-bold">{id}</u> with this comment number{" "}
                <i className="text-green-600 font-medium">{comment}</i>
            </h1>

            <h1 className="text-xl font-bold text-indigo-600">
                This is Nested dynamic route
            </h1>
            <Link
                href="/"
                className="px-4 py-2 mt-5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
                Home
            </Link>
        </div>

    )
}
