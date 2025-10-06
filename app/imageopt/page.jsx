
import Image from "next/image"
import na from "../../public/aimage.jpg"
import Link from "next/link"

function page() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-10 space-y-10">

                <h1 className="text-3xl font-bold text-gray-800 text-center">
                    Image Optimization Method in Next.js
                </h1>

                <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg text-center">
                    <h2 className="mb-4 text-xl font-semibold text-gray-700">
                        Normal HTML &lt;img&gt; Tag
                    </h2>
                    <img
                        className="w-96 rounded-lg shadow-md mx-auto"
                        src="https://cdn.wallpapersafari.com/41/28/6yefSc.jpg"
                        alt="No image"
                    />
                    <p className="mt-3 text-gray-500 text-sm">
                        ❌ Loads full-size image, no optimization, no lazy loading.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg text-center">
                    <h2 className="mb-4 text-xl font-semibold text-gray-700">
                        Next.js Optimized &lt;Image&gt; Component
                    </h2>
                    <Image
                        src={na}
                        width={384}
                        height={250}
                        alt="This is image optimisation"
                        priority
                        className="rounded-lg shadow-md mx-auto"
                    />
                    <p className="mt-3 text-gray-500 text-sm">
                        ✅ Optimized with resizing, lazy loading, caching, and WebP support.
                    </p>
                </div>

                <Link
                    href="/"
                    className="px-6 py-3 mt-5 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 shadow-md transition"
                >
                    Go Home
                </Link>
            </div>
        </>
    )
}

export default page
