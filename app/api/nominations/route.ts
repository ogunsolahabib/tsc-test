import { API_BASE_URL } from "@/app/config"
import { cookies } from "next/headers";


export async function GET (){
    const cookieStore = cookies();

const authToken = cookieStore.get('tsc-authToken')?.value;

    const res= await fetch(`${API_BASE_URL}/nomination`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`
        },
    });

    const nomineesRes= await fetch(`${API_BASE_URL}/nominee`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`
        }
    });

    const nominees = await nomineesRes.json();

    

    const data = await res.json();

    
    // convert nominees data to object
    const nomineesObject= await nominees.data.reduce((acc: any, nominee: any) => {
        acc[nominee.nominee_id] = nominee
        return acc
    })

    

    const updatedData = data.data.map((nomination: any) => {
        const {first_name, last_name} = nomineesObject[nomination.nominee_id] || {first_name: 'N/A', last_name: 'N/A'};
        nomination.first_name = first_name;
        nomination.name= first_name + ' ' + last_name
        return nomination
    })

    return Response.json(updatedData);
}

export async function POST (req: Request,) {
    const cookieStore = cookies();

    const authToken = cookieStore.get('tsc-authToken')?.value;
    const body =await req.json();

    console.log(body, 'body');

    const res= await fetch(`${API_BASE_URL}/nomination`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(body)
    });

    const data = await res.json();

    return Response.json(data);

}

