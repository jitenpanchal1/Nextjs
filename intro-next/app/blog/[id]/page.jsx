import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

export const metadata = {
    title: "Blog page"
}

export async function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' }
    ]
}

export default async function page({ params }) {

    const { id } = await params
    console.log(id)

    if (id > 3) {
        return notFound()
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
  <h1 className="text-3xl font-bold text-indigo-600 mb-4">
    This is normal dynamic route
  </h1>

  <h1 className="text-lg text-gray-700 mx-30 mb-4 leading-relaxed">
    Dynamic route is a feature, it allows creating pages paths according to
    <span className="font-semibold text-blue-500"> id </span> and
    <span className="font-semibold text-blue-500"> slug </span>. We also create
    a folder using <span className="font-mono text-red-500">[square]</span>{" "}
    brackets and it will automatically create a URL and render the component
    according to the URL.
  </h1>

  <h1 className="text-xl font-semibold text-gray-800 mb-4">
    Example: Post {id} details page
  </h1>

  <p className="text-gray-600 mb-6">
    Also showing the current URL ID:{" "}
    <span className="font-bold text-green-600">{id}</span>
  </p>

  <Link
    href={`/blog/${id}/commennts`}
    className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
  >
    Go to comments
  </Link>
</div>

    )
}
