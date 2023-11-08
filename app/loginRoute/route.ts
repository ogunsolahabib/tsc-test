import { NextApiRequest } from "next";
import { API_BASE_URL } from "../config";
import { redirect } from 'next/navigation'


export async function POST (req: Request, init?: RequestInit) {
    redirect('/nominate/enter-nominee');
    return Response.json({message: 'Something went wrong'});

    // console.log(req.json());

    // const body = await req.json();
    // return Response.json({body});
    // try {
    // const res =await fetch(`${API_BASE_URL}/login`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(body),
    // });


    // const data = await res.json();

    // return Response.json(data);
    // } catch (error) {
    //         console.log(error);
    //         return Response.json({message: 'Something went wrong'});
    // }
}