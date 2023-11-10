'use server';

import { cookies } from "next/headers";
import { API_BASE_URL } from "./config";
import { redirect } from "next/navigation";

export async function loginUser(formData: FormData) {
    const cookieStore = cookies();

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
        const res = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        if (res.ok) {
        const data = await res.json();


            cookieStore.set('tsc-authToken', decodeURI(data.data.authToken), {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 30,
                sameSite: 'lax',
                path: '/'
            });
        }
        
        
    } catch (err) {
        console.log(err)
    }

}
