export const metadata = {
    title: "Layout page"
}

export default function layout({ children }) {
    return (
       <div className="min-h-screen flex flex-col bg-gray-100 text-center">
  <h1 className="bg-indigo-600 text-white text-3xl font-bold py-4 shadow-md">
    Header
  </h1>

  <div className="flex-1 flex flex-col items-center justify-center px-6">
    <h1 className="text-2xl font-semibold text-gray-800 mb-5">
      here header and footer are reusable URLs because of layout.js file
    </h1>
    <h3 className="text-gray-600 leading-relaxed max-w-2xl">
      whenever we wanna create Re-usable URL inside the children and any nested
      segment we use this method.
    </h3>

    <div className="w-full">{children}</div>
  </div>

  <h1 className="bg-indigo-600 text-white text-xl font-semibold py-3 shadow-inner">
    footer
  </h1>
</div>

    )
}
