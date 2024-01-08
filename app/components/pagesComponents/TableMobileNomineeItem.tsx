import { anonymousPro } from "@/app/fonts";

export default function TableMobileNomineeItem({ record, renderActionButtons }: any) {

    return <div className="flex justify-between items-center truncate ">
        <div className="space-y-2 truncate w-4/5">
            <h4 className="font-semibold">{record.name}
            </h4>
            <p className={`${anonymousPro.className} truncate`}>{record.reason}</p>
        </div>
        <div className="w-fit px-4 ml-auto">
            {renderActionButtons(record)}
        </div>
    </div>
}