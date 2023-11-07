import { anonymousPro } from "@/app/fonts";
import Edit from "@/app/icons/Edit";

export default function OverviewItemCard({ heading, children, onEditClick }: { heading: string, children: React.ReactNode, onEditClick?: () => void }) {
    return <div className="p-5 pr-10 bg-tsc-light-grey relative">
        <button className='absolute top-5 right-5' onClick={onEditClick}><Edit /></button>
        <div>
            <h3 className="font-bold">{heading}</h3>
            <p className={anonymousPro.className}>{children}</p>
        </div>
    </div>
}