import todo from "../../../_private/get.json"
import { writeFile } from "fs/promises"

export async function GET(_, { params }) {
    const { id } = await params
    const findd = todo.find((t) => t.id === id)
    if (!findd) {
        return Response.json({ message: `This to do /${id} is not exist` }, { status: 404 })
    } else {
        return Response.json(findd)
    }
}

export async function DELETE(_, { params }) {

    const { id } = await params
    const index = todo.findIndex((t) => t.id === id)
    if (index === -1) {
        return Response.json({ message: `this to do/${id} is not exist` }, { status: 404 })
    } else {
        const deletedtodo = todo.splice(index, 1)
        await writeFile("app/_private/get.json", JSON.stringify(todo, null, 2))
        return Response.json({ message: `this is the deleted todo /${id}` }, { deleted: deletedtodo[0] })
    }

}