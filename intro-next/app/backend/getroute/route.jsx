import todos from "../../_private/get.json";

export function GET() {
    return Response.json(todos);
}