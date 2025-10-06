import todos from "../../_private/get.json";
import { writeFile } from "fs/promises";


export function GET() {
    return Response.json(todos);
}

export async function POST(request) {
    const todo = await request.json()
    const newtotd = {
        id: crypto.randomUUID(),
        task: todo.task,
        status: false
    }
    todos.push(newtotd)
    await writeFile("app/_private/get.json", JSON.stringify(todos, null, 2))
    return Response.json(newtotd)
}