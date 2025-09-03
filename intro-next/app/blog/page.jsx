import Link from "next/link"

export default function page() {
    const posts = [
        { title: "First Post", id: 1 },
        { title: "Second Post", id: 2 },
        { title: "Third Post", id: 3 }
    ]
    return (
        <div>
            <h1>All posts with dynamic route</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </div>
            ))}
        </div>
    )
}
