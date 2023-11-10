import Plus from "@/app/icons/Plus";
import LogoSvg from "./LogoSvg";
import Inbox from "@/app/icons/Inbox";
import routePaths from "@/app/utils/routePaths";
import getToken from "@/app/utils/getToken";
import Link from "next/link";


export default async function Header() {


    const nominationsRes = await import('@/app/api/nominations/route');
    const nominationsData = await (await nominationsRes.GET()).json();

    return <header className="w-full p-5 flex items-center justify-between bg-black text-white sticky top-0 z-50">
        <Link href="/">
            <LogoSvg />
        </Link>
        {getToken() ? <div className="flex gap-5">
            <Link href={routePaths.start}>
                <Plus />
            </Link>

            <Link href={routePaths.nominations}><span className="hidden md:block">Your Nominations ({nominationsData.length})</span>
                <span className="md:hidden">
                    <Inbox />
                </span>
            </Link>
        </div> : <Link href={routePaths.login}>Login</Link>}
    </header>
}



