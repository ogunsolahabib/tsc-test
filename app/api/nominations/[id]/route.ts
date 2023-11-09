import { API_BASE_URL } from "@/app/config";
import { cookies } from "next/headers";

export async function DELETE (req: Request, query: any) {
    const cookieStore = cookies();
    const authToken = cookieStore.get('tsc-authToken')?.value;
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
