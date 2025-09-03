import Link from "next/link";
export default function About() {
    return (
        <div>
            <h1>This is about page</h1>
            <Link href="/">Home</Link> {" "}
            <Link href="/service">Service</Link>
        </div>
    )
}

