import todo from "../../../_private/get.json"
import { writeFile } from "fs/promises";

export async function GET(_, { params }) {
    const { id } = await params
    const findd = todo.find((t) => t.id === id)
    if (!findd) {
        return Response.json({ message: `this to do /${id} is not exist` }, { status: 404 })
    } else {
        return Response.json(findd)
    }
}

export async function PUT(request, { params }) {

    const edittodo = request.json()
    const { id } = await params
    const index = todo.findIndex((t) => t.id === id)
    if (index === -1) {
        return Response.json({ message: `this todo ${id} is not exist` }, { status: 404 })
    } else {
        if (edittodo.id) {
            return Response.json({ message: `you can not able to change a id` }, { status: 403 })
        } else {
            todo[index] = { ...todo[index], ...await edittodo }
            await writeFile("app/_private/get.json", JSON.stringify(todo, null, 2))
            return Response.json(todo[index])
        }
    }
}