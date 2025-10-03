import todo from "../../../_private/get.json"

export async function GET(_, { params }) {
    const { id } = await params
    const singletodo = todo.find((t) => t.id === parseInt(id))
    if (!singletodo) {
        return Response.json({ message: `To do Number /${id} is not exist` }, { status: 404 })
    }
    return Response.json(singletodo)
}