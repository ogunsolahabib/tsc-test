
import { logoutUser } from "@/app/actions";
import Signout from "@/app/icons/Signout";





export default function SignoutButton() {
    return <form action={logoutUser}><button type="submit" className="hover:underline text-xs" >
        <span className="inline md:hidden">
            <Signout />
        </span>
        <span className="hidden md:inline">
            Sign out
        </span></button>
    </form>
}