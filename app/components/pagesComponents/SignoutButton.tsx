
import { logoutUser } from "@/app/actions";





export default function SignoutButton() {
    return <form action={logoutUser} method="POST"><button type="submit" className="hover:underline text-sm" >Sign out</button>
    </form>
}