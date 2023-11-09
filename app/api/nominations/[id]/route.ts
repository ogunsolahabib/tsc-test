import { API_BASE_URL } from "@/app/config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function GET (req: Request, query: any) {
    const cookieStore = cookies();
const authToken = cookieStore.get('tsc-authToken')?.value;
    const res = await fetch(`${API_BASE_URL}/nomination/${query.params.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`
        }
    });

    const data = await res.json();

    return Response.json(data);
}

export async function DELETE (req: Request, {params}: any) {
    const cookieStore = cookies();
const authToken = cookieStore.get('tsc-authToken')?.value;

    const res = await fetch(`${API_BASE_URL}/nomination/${params.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`
        }
    });

    const data = await res.json();

    return Response.json(data);
}

export async function PUT (req: Request, {params}: any) {
    const cookieStore = cookies();
const authToken = cookieStore.get('tsc-authToken')?.value;

const body = await req.json();
    const res= await fetch(`${API_BASE_URL}/nomination/${params.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(body)
    });

    const data = await res.json();

    return Response.json(data);
}
