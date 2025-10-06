import Link from "next/link"

export const metadata = {
  title: "All files page"
}

export default async function page({ params }) {

  const allfi = await params

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-6">
      <ol className="list-decimal list-inside space-y-6 max-w-2xl text-left text-gray-800">
        <li className="font-semibold text-lg">
          Catch route
          <p className="text-gray-600 font-normal mt-2">
            Whenever we want to match one or more URLs with one segment, this is
            called a <span className="text-blue-600 font-medium">catch route</span>.
          </p>
        </li>

        <li className="font-semibold text-lg">
          Optional catch route
          <p className="text-gray-600 font-normal mt-2">
            Whenever we need to match one or more URLs without any segment, we use{" "}
            <span className="text-green-600 font-medium">
              optional catch routes
            </span>
            .
          </p>
        </li>

        <li className="font-semibold text-lg">
          Try to do something in the URL
          <p className="text-gray-600 font-normal mt-2">
            Example:{" "}
            <b className="text-indigo-600 font-semibold">files/jeeten/hello/</b> —
            anything you write here will always give you the correct URL inside the{" "}
            <b className="text-purple-600 font-semibold">files page</b>.
          </p>
        </li>
      </ol>

      <h1 className="mt-10 text-2xl font-bold text-indigo-700">
        This is all files{" "}
        <span className="text-green-600">
          {allfi.catchall?.join("/")}
        </span>
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