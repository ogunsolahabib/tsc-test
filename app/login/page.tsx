import Container from "../components/shared/Container";
import InputLabel from "../components/shared/InputLabel";
import Input from "../components/shared/Input";
import LoginButton from "../components/pages/LoginButton";
import { loginUser } from "../actions";

export default function Page() {


    return <main className="flex px-8 py-10 md:py-20">
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

