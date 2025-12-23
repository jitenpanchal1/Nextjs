export default async function Page() {
  const res = await fetch(`${process.env.API_BASE_URL}/manue`, {
    next: { revalidate: 100 } // ISR
  });

  if (!res.ok) {
    throw new Error("Failed to fetch menu");
  }

  const data = await res.json();      // object returned by backend
  const menu = data.manue;            // extract the array

  return (
    <div>
      <h1>Incremental Static Regeneration Demo 🚀</h1>
      <ul>
        {menu.map(item => (
          <li key={item.id}>
            {item.name} — ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
