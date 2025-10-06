import Link from "next/link"

export default function page() {
  return (
    <div className="space-y-5">
      <h1 className="text-4xl font-bold">
        Layout One
      </h1>
      <Link
        href="/"
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Home
      </Link>
    </div>

  )
}
