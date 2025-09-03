import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello first next js</h1>
      <ul>
        <li>
          {" "}
          <Link href="/about">About</Link>
        </li>
        <li>
          {" "}
          <Link href="/service">Service</Link>
        </li>
        <li>
          {" "}
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/allfiles">Allfiles</Link>
        </li>
        <li>
          <Link href="/layout">Layout</Link>
        </li>
      </ul>
    </div>
  );
}
