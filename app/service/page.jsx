import Link from "next/link";

export const metadata = {
  title: "Service page"
}

export default function Services() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">This is service</h1>

      <p className="">
        <Link
          href="/about"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          About
        </Link>
      </p>

      <p className="my-10">
        <Link
          href="/service/webdev"
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
        >
          Web Service
        </Link>
      </p>

      <p>
        <Link
          href="/service/seo"
          className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
        >
          Seo service
        </Link>
      </p>
    </div>

  )

}
