import Container from "../components/shared/Container";
import InputLabel from "../components/shared/InputLabel";
import Input from "../components/shared/Input";
import LoginButton from "../components/pagesComponents/LoginButton";
import { loginUser } from "../actions";
import { redirect } from "next/navigation";
import getToken from "../utils/getToken";

export default function Page({ searchParams }: any) {

    if (!!getToken()) {
        const redirectUrl = searchParams?.resume ? `/${decodeURI(searchParams.resume)}` : '/';
        redirect(redirectUrl);
    }

    return <main className="flex px-8 py-6 md:py-10">
        <Container className="my-auto py-10 px-8">
            <form method="POST" className="flex flex-col md:w-[26rem] m-auto" action={loginUser}>
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
                </div>
            </form>
        </Container>
    </main>
}

