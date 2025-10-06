import Link from "next/link";

export default function notfound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-extrabold text-red-600 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Go Back Home
      </Link>
    </div>

  )
}
