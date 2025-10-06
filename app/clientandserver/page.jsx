"use client"
import { Todo } from "../_private/privatelinks"
import usefetch from "../_private/usefetch"

export default function page() {

    const { data, loading, error } = usefetch(Todo)

    if (loading) return <p>{loading}</p>
    if (error) return <p>{error}</p>
    return (
        <div className="hello">
            {data.map((user) => (
                <div key={user.id}>
                    <h1> {user.id} . {user.title}</h1>
                </div>
            ))}
        </div>
    )
}
