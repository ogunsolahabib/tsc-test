import { redirect } from "next/navigation";
import getToken from "../utils/getToken";
import LoginPageComponent from "../components/pagesComponents/LoginPageComponent";

export default function Page({ searchParams }: any) {
    if (!!getToken()) {
        const redirectUrl = searchParams?.resume ? `/${decodeURI(searchParams.resume)}` : '/';
        redirect(redirectUrl);
    }

    return <LoginPageComponent />
}

