import Link from "next/link";

export default function Services() {

  return (
    <div>
      <h1>this is service</h1>

      <p>
        <Link href="/about" >About</Link>{" "}
      </p>
      <p>
        <Link href="/service/webdev" >Web Service</Link>{" "}
      </p>
      <p>
        <Link href="/service/seo" >Seo service</Link>{" "}
      </p>

    </div>
  )

}
