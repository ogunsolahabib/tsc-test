import { API_BASE_URL } from "@/app/config"
import getToken from "@/app/utils/getToken";
import routePaths from "@/app/utils/routePaths";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";


export async function GET (){

    try {
        const res= await fetch(`${API_BASE_URL}/nomination`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${getToken()}`
            },
        });
    
        const nomineesRes= await fetch(`${API_BASE_URL}/nominee`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${getToken()}`
            }
        });
    
    
        const nominees = await (typeof nomineesRes === 'object'?nomineesRes.json(): {data: []})??{data: []};
    
    
        const data = await res.json();
    
        
        // convert nominees data to object
        const nomineesObject= await nominees.data?.reduce((acc: any, nominee: any) => {
            acc[nominee.nominee_id] = nominee
            return acc
        })??{};
    
        const updatedData = data.data?.map((nomination: any) => {
            const {first_name, last_name} = nomineesObject[nomination.nominee_id] || {first_name: 'N/A', last_name: 'N/A'};
            nomination.first_name = first_name;
            nomination.name= first_name + ' ' + last_name
            return nomination
        })??[];
    
        return Response.json(updatedData);
    } catch (error) {
       return Response.json({})
    }

   
}

export async function POST (req: Request,) {

    const body = await req.json();

    const res= await fetch(`${API_BASE_URL}/nomination`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify(body)
    });

    const data = await res.json();

    revalidatePath(routePaths.nominations);

    return Response.json({});

}

