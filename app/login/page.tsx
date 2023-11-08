'use client';

import { useState } from "react";
import Container from "../components/shared/Container";
import Button from "../components/shared/Button";
import InputLabel from "../components/shared/InputLabel";
import Input from "../components/shared/Input";
import { API_BASE_URL } from "../config";
import useLocalStorage from "../hooks/useLocalStorage";
import { useRouter } from "next/navigation";
export default function Page() {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { storedValue: authToken, setValue: setAuthToken } = useLocalStorage('tsc-authToken', '');

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {


            fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }).then(res => res.json()).then(data => {
                setAuthToken(data?.data.authToken);
                router.push('/');

            })
        } catch (error) {
            console.log(error)
        }

    }
    return <main className="flex min-h-[600px] px-8 py-20">
        <Container className="my-auto py-10 px-8">
            <form onSubmit={onFormSubmit} className="flex flex-col md:w-[26rem] m-auto">
                <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
                <div className="space-y-3 w-full">
                    <div>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>

                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Button type="submit" className="block mx-auto mt-10" variant="primary">Submit</Button>
                </div>
            </form>
        </Container>
    </main>
}

