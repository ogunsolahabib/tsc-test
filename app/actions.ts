'use server';

import { cookies } from "next/headers";
import { API_BASE_URL } from "./config";
import { redirect } from "next/navigation";

export async function loginUser(state: any, formData: FormData) {

    const cookieStore = cookies();

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    let success = false;

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

            success = true;

        }

        else if (res.status === 401) {
            success = false;
            return {
                ...state,
                message: 'Incorrect email or password'
            }

        } else {
            success = false;
            return {
                ...state,
                message: "Something went wrong"
            }
        }



    } catch (err) {
        success = false;
        return {
            ...state,
            err,
            message: "Something went wrong"
        }
    }
    if (success || true) {
        const { resume } = state;

        const redirectUrl = resume ? `/${decodeURI(resume)}` : '/';

        redirect(redirectUrl);
    }



}

export async function logoutUser() {
    const cookieStore = cookies();
    cookieStore.set('tsc-authToken', '', {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 30,
        sameSite: 'lax',
        path: '/'
    });
    redirect('/login');
}
