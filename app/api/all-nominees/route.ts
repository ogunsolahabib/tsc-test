import { API_BASE_URL } from "@/app/config"
import getToken from "@/app/utils/getToken";



export async function GET() {
    try {


        const res = await fetch(`${API_BASE_URL}/nominee`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${getToken()}`
            },
        }).then(res => res.json());

        const allNominees = await res.data;

        return Response.json(allNominees);
    }
    catch (error) {
        return Response.json([])
    }
}