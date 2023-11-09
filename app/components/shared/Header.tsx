import Plus from "@/app/icons/Plus";
import LogoSvg from "./LogoSvg";
import Inbox from "@/app/icons/Inbox";
import { cookies } from "next/headers";
import routePaths from "@/app/utils/routePaths";


export default async function Header() {
    const cookieStore = cookies();
    const authToken = cookieStore.get('tsc-authToken')?.value;

    const nominationsRes = await import('@/app/api/nominations/route');
    const nominationsData = await (await nominationsRes.GET()).json();

    return <header className="w-full p-5 flex items-center justify-between bg-black text-white">
        <a href="/">
            <LogoSvg />
        </a>
        <div className="flex gap-5">
            <a href={routePaths.start}>
                <Plus />
            </a>

            <a href={routePaths.nominations}><span className="hidden md:block">Your Nominations ({nominationsData.length})</span>
                <span className="md:hidden"><Inbox /></span>

            </a>
        </div>
    </header>
}



