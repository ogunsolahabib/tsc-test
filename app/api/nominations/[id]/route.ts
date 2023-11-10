import { API_BASE_URL } from "@/app/config";
import getToken from "@/app/utils/getToken";
import routePaths from "@/app/utils/routePaths";
import { revalidatePath } from "next/cache";


export async function GET (req: Request, query: any) {
   
    const res = await fetch(`${API_BASE_URL}/nomination/${query.params.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getToken()}`
        }
    });

    const data = await res.json();

    return Response.json(data);
}

export async function DELETE (req: Request, {params}: any) {
   

    const res = await fetch(`${API_BASE_URL}/nomination/${params.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getToken()}`
        }
    });

    const data = await res.json();

    revalidatePath(routePaths.nominations);

    return Response.json(data);
}

export async function PUT (req: Request, {params}: any) {
   

const body = await req.json();
    const res= await fetch(`${API_BASE_URL}/nomination/${params.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify(body)
    });

    const data = await res.json();

    revalidatePath(routePaths.nominations);

    return Response.json(data);
}
