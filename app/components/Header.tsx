import Inbox from "../icons/Inbox";
import Plus from "../icons/Plus";
import LogoSvg from "./LogoSvg";

export default function Header() {
    return <header className="w-full p-5 flex items-center justify-between bg-black text-white"><LogoSvg />
        <div className="flex gap-5">
            <Plus />
            <Inbox />
            <a>Your Nominations (3)</a>
        </div>
    </header>
}



