import React from 'react'
import Link from 'next/link'

async function page({ params }) {

    const allcmnt = [
        { id: 1, name: "cmtone", comment: "This is the first comment" },
        { id: 2, name: "cmttwo", comment: "This is the second comment" },
        { id: 3, name: "cmtthree", comment: "This is the third comment" },
    ]

    const { id } = await params
    return (
        <div>
            <h1>this all comment of number {id}</h1>
            {allcmnt.map((cmt) => (
                <div key={cmt.id}>
                    <Link href={`/blog/${id}/commennts/${cmt.id}`}>{cmt.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default page
