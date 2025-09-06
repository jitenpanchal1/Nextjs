import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: "Blog page"
}

async function page({ params }) {

    const allcmnt = [
        { id: 1, name: "cmtone", comment: "This is the first comment" },
        { id: 2, name: "cmttwo", comment: "This is the second comment" },
        { id: 3, name: "cmtthree", comment: "This is the third comment" },
    ]

    const { id } = await params
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
  <h1 className="text-2xl font-bold text-blue-600 mb-6">
    This all comments of number {id}
  </h1>

  {allcmnt.map((cmt) => (
    <div
      key={cmt.id}
      className="w-full max-w-md bg-white shadow-md rounded-lg px-4 py-3 mb-4 hover:shadow-lg transition"
    >
      <Link
        href={`/blog/${id}/commennts/${cmt.id}`}
        className="text-gray-800 font-medium hover:text-blue-500 text-lg"
      >
        {cmt.name}
      </Link>
    </div>
  ))}
</div>

    )
}

export default page
