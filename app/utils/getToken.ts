import { cookies } from "next/headers";

export default function getToken(){
    const cookieStore = cookies();
    const authToken = cookieStore.get('tsc-authToken')?.value;

    return authToken
}