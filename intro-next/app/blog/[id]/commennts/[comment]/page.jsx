import React from 'react'

export default async function page({ params }) {

    const { id, comment } = await params
    return (
        <div>
            <h1>this is my blog Number <u>{id}.</u> with this comment number <i>{comment}</i> </h1>
            <h1>This is Nested dynamic route</h1>
        </div>
    )
}
