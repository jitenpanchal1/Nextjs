import { Suspense } from "react";
import Streaming from "../_private/Streaming";


export default function page() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
           
            <h1 className="text-3xl font-bold text-blue-600 mb-8">
               This is Like lazy Loading in the react in Next js this is caal streaming/.
            </h1>

            {/* Suspense Wrapper */}
            <Suspense
                fallback={
                    <div className="flex items-center justify-center">
                        <h1 className="text-xl font-semibold text-gray-600 animate-pulse">
                            Loading data...
                        </h1>
                    </div>
                }
            >
                <Streaming />
            </Suspense>
        </div>
    )
}
