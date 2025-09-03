import Link from "next/link"

export default function page() {
    return (
        <div>
            <h1>this is children</h1>
            <ul>
                <li><Link href="/layout/laone">Layout one</Link></li>
                <li><Link href="/layout/latwo">Layout two</Link></li>
            </ul>
        </div>
    )
}
