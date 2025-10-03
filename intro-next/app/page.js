import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-blue-600 mb-10 drop-shadow-md">
        🚀 Hello, First Next.js Project
      </h1>

      {/* Navigation Grid */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-4xl">
        <li>
          <Link
            href="/about"
            className="block px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition text-center font-medium"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/service"
            className="block px-6 py-3 bg-green-500 text-white rounded-xl shadow-md hover:bg-green-600 transition text-center font-medium"
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="block px-6 py-3 bg-purple-500 text-white rounded-xl shadow-md hover:bg-purple-600 transition text-center font-medium"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/allfiles"
            className="block px-6 py-3 bg-pink-500 text-white rounded-xl shadow-md hover:bg-pink-600 transition text-center font-medium"
          >
            Allfiles
          </Link>
        </li>
        <li>
          <Link
            href="/layout"
            className="block px-6 py-3 bg-yellow-500 text-white rounded-xl shadow-md hover:bg-yellow-600 transition text-center font-medium"
          >
            Layout
          </Link>
        </li>
        <li>
          <Link
            href="/notfound"
            className="block px-6 py-3 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition text-center font-medium"
          >
            Notfound
          </Link>
        </li>
        <li>
          <Link
            href="/gone"
            className="block px-6 py-3 bg-indigo-500 text-white rounded-xl shadow-md hover:bg-indigo-600 transition text-center font-medium"
          >
            Group One
          </Link>
        </li>
        <li>
          <Link
            href="/gtwo"
            className="block px-6 py-3 bg-teal-500 text-white rounded-xl shadow-md hover:bg-teal-600 transition text-center font-medium"
          >
            Group Two
          </Link>
        </li>
        <li>
          <Link
            href="/privattte"
            className="block px-6 py-3 bg-gray-500 text-white rounded-xl shadow-md hover:bg-gray-600 transition text-center font-medium"
          >
            Private Folder
          </Link>
        </li>
        <li>
          <Link
            href="/ststigeneration"
            className="block px-6 py-3 bg-orange-500 text-white rounded-xl shadow-md hover:bg-orange-600 transition text-center font-medium"
          >
            Static Site Generation
          </Link>
        </li>
        <li>
          <Link
            href="/isr"
            className="block px-6 py-3 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition text-center font-medium"
          >
            Incremental Site Regeneration
          </Link>
        </li>
        <li>
          <Link
            href="/streamjng"
            className="block px-6 py-3 bg-pink-500 text-white rounded-xl shadow-md hover:bg-pink-600 transition text-center font-medium"
          >
            Streaming Method
          </Link>
        </li>
        <li>
          <Link
            href="/clientandserver"
            className="block px-6 py-3  bg-indigo-500 text-white rounded-xl shadow-md hover:bg-indigo-600 transition text-center font-medium"
          >
            client side and server side
          </Link>
        </li>
        <li>
          <Link
            href="/contextapi"
            className="block px-6 py-3 bg-yellow-500 text-white rounded-xl shadow-md hover:bg-yellow-600 transition text-center font-medium"
          >
            Context Api
          </Link>
        </li>
        <li>
          <Link
            href="/redux"
            className="block px-6 py-3  bg-gray-500 text-white rounded-xl shadow-md hover:bg-gray-600 transition text-center font-medium"
          >
            Redux Api
          </Link>
        </li>
        <li>
          <Link
            href="/imageopt"
            className="block px-6 py-3 bg-orange-500 text-white rounded-xl shadow-md hover:bg-orange-600 transition text-center font-medium"
          >
            Image optimisation
          </Link>
        </li>
        <li>
          <Link
            href="/backend"
            className="block px-6 py-3 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition text-center font-medium"
          >
            Backend Side
          </Link>
        </li>
      </ul>
    </div>
  );
}
