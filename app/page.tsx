async function getUsers() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      cache: "no-store", // SSR on every request
    }
  );

  return res.json();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        Next.js Server Side Rendering
      </h1>

      <div className="grid gap-4">
        {users.map((user: any) => (
          <div
            key={user.id}
            className="border p-4 rounded shadow"
          >
            <h2 className="font-bold">{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </main>
  );
}