import { API_BASE_URL } from "@/app/config";
import { cookies } from "next/headers";

const cookieStore = cookies();
const authToken = cookieStore.get('tsc-authToken')?.value;
export async function DELETE (req: Request, query: any) {
    const res = await fetch(`${API_BASE_URL}/nomination/${query.params.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`
        }
    });

    const data = await res.json();

    return Response.json(data);
}

export async function PUT (req: Request, query: any) {
    const res= await fetch(`${API_BASE_URL}/nomination/${query.params.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`
        },
        body: req.body
    });

    const data = await res.json();

    return Response.json(data);
}
