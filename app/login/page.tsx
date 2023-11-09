// 'use client';

import Container from "../components/shared/Container";
import InputLabel from "../components/shared/InputLabel";
import Input from "../components/shared/Input";
import { API_BASE_URL } from "../config";

import { redirect } from "next/navigation";
import { cookies } from "next/headers"; import LoginButton from "../components/pages/LoginButton";
async function myAction(formData: FormData) {
    'use server';
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

        const data = await res.json();


        if (data?.data?.authToken) {

            cookieStore.set('tsc-authToken', decodeURI(data.data.authToken), {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 30,
                sameSite: 'lax',
                path: '/'
            })
            redirect('/');
        }



    } catch (err) {
        console.log(err)
    }

}
export default function Page() {


    return <main className="flex px-8 py-20">
        <Container className="my-auto py-10 px-8">
            <form method="POST" className="flex flex-col md:w-[26rem] m-auto" action={myAction}>
                <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
                <div className="space-y-3 w-full">
                    <div>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input name='email' type='email' id='email' />

                    </div>
                    <div>

                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name='password' type="password" id="password" />

                    </div>
                    <LoginButton />
                </div>
            </form>
        </Container>
    </main>
}

