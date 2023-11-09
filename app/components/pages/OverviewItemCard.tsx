import { anonymousPro } from "@/app/fonts";
import Edit from "@/app/icons/Edit";

export default function OverviewItemCard({ heading, children, editLink }: { heading: string, children: React.ReactNode, editLink?: string }) {
    return <div className="p-5 pr-10 bg-tsc-light-grey relative">
        <a href={editLink} className="absolute top-5 right-5">
            <button className='absolute top-5 right-5'><Edit /></button>
        </a>
        <div>
            <h3 className="font-bold">{heading}</h3>
            <p className={anonymousPro.className}>{children}</p>
        </div>
    </div>
}