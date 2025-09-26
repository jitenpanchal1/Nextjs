'use client';

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {

  const route = useRouter()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          ⚠️ Oops! Something went wrong
        </h1>
        <p className="text-gray-700">
          {error.message} <br />
          Error occurred at <span className="font-semibold">Comment Page</span>.
        </p>
        <p className="my-4">here this is unexpected error and i use error.jsx file to show a unexpected error.</p>
        <p>In my comment page i Math.randome() to creat a unexpected error if numbet up to 0.5 it will gives a error and after refresh if our Math.randome() generate a number below to 0.5 our error will automaticall removing and u csan able to see page and this method does not stop entire webapplication</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => {
              startTransition(() => {
                route.refresh()
                reset()
              })
            }}>Refresh</button>
          <a
            href="/"
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
