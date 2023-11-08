import Plus from "@/app/icons/Plus";
import LogoSvg from "./LogoSvg";
import Inbox from "@/app/icons/Inbox";


export default function Header() {
    return <header className="w-full p-5 flex items-center justify-between bg-black text-white">
        <a href="/">
            <LogoSvg />
        </a>
        <div className="flex gap-5">
            <Plus />
            <Inbox />
            <a>Your Nominations (3)</a>
        </div>
    </header>
}



