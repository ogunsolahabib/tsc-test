
import { logoutUser } from "@/app/actions";
import { useCookies } from "next-client-cookies";





export default function SignoutButton() {
    return <form action={logoutUser} method="POST"><button type="submit" className="hover:underline text-sm" >Sign out</button>
    </form>
}