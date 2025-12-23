import Link from "next/link"

export const metadata = {
  title: "Blog page"
}

export default function page() {
  const posts = [
    { title: "First Post", id: 1 },
    { title: "Second Post", id: 2 },
    { title: "Third Post", id: 3 }
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">
        All posts with dynamic route
      </h1>

      {posts.map((post) => (
        <div
          key={post.id}
          className="mb-4 w-full max-w-md px-4 py-2 bg-white shadow rounded-lg hover:shadow-md transition"
        >
          <Link
            href={`/blog/${post.id}`}
            className="text-lg text-gray-800 hover:text-blue-500 font-medium"
          >
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  )
}
