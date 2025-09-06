

export default async function page() {

    const Api = await fetch("http://localhost:5000/manue", {
        next: { revalidate: 300 }
    })
    const read = await Api.json()
    console.log("Run manue",)

    return (
        <div>
            <h1>increamanetal</h1>
            <div>
                <h1>Incremental Static Regeneration Demo 🚀</h1>
                <ul>
                    {read.map((item) => (
                        <li key={item.id}>
                            {item.name} — ₹{item.price}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
            </div>
        </div>
    )
}
