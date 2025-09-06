import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Hello first Next.js
      </h1>
      <ul className="flex flex-wrap gap-4">
        <li>
          <Link
            href="/about"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/service"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/allfiles"
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
          >
            Allfiles
          </Link>
        </li>
        <li>
          <Link
            href="/layout"
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          >
            Layout
          </Link>
        </li>
        <li>
          <Link
            href="/notfound"
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Notfound
          </Link>
        </li>
        <li>
          <Link
            href="/gone"
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
          >
            Groupone
          </Link>
        </li>
        <li>
          <Link
            href="/gtwo"
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
          >
            Grouptwo
          </Link>
        </li>
        <li>
          <Link
            href="/privattte"
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Private Folder
          </Link>
        </li>
        <li>
          <Link
            href="/ststigeneration"
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Static Site Generation
          </Link>
        </li>
        <li>
          <Link
            href="/isr"
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Increament site regeneration
          </Link>
        </li>
      </ul>
    </div>
  );
}
