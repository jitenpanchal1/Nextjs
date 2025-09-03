import Link from 'next/link'
import React from 'react'

export default async function page({ params }) {

    const { id } = await params
    
    return (
        <div>
            <h1>This is normal dynamic route</h1>
            <h1>Dynamic route is a feature ist allow to creat a pages path accodin to id and slug and we also creat a folder using [squar] breaket and i will automaticall creats a usrl and render the componnet accordin to the Url</h1>
            <h1> Example :  Post {id} details page</h1>
            <p>Also show the URL {id} is my url right now </p>
            <Link href={`/blog/${id}/commennts`}>Go to comments</Link>
        </div>
    )
}
