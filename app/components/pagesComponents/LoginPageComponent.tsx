'use client';

import { loginUser } from "@/app/actions";
import Container from "../shared/Container";
import { useFormState } from "react-dom";
import InputLabel from "../shared/InputLabel";
import Input from "../shared/Input";
import LoginButton from "./LoginButton";
import { useSearchParams } from "next/navigation";

export default function LoginPageComponent() {
    const resume = useSearchParams().get('resume');
    const [state, formAction] = useFormState<any, FormData>(loginUser, { resume });


    return <main className="flex px-8 py-6 md:py-10">
        <Container className="my-auto py-10 px-8">
            <form className="flex flex-col md:w-[26rem] m-auto" action={formAction}>
                <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
                <div className="space-y-3 w-full">
                    <div>
                        <InputLabel required htmlFor="email">Email</InputLabel>
                        <Input name='email' type='email' id='email' required />
                    </div>
                    <div>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name='password' type="password" id="password" required />
                    </div>
                    <LoginButton />
                    {state?.message && <div className="text-red-600 text-center">Failed: {state?.message}</div>}
                </div>
            </form>
        </Container>
    </main>
}