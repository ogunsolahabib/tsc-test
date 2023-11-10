import Button from "../shared/Button";
import TableMobileNomineeItem from "./TableMobileNomineeItem";

export default function TableMobile({ data, renderActionButtons }: { data: any[], active: 'current' | 'closed', renderActionButtons: (record: any) => React.ReactNode, }) {
    return <div className="full md:hidden px-8 py-5 pb-28 bottom-0 left-0 right-0 fixed top-[17rem] z-10 bg-white overflow-y-scroll">
        <h2 className="text-xl uppercase mb-4 font-semibold">Nominee</h2>
        <div className="flex flex-col gap-5">
            {data.map((record) => (
                <TableMobileNomineeItem key={record.nominee_id}
                    record={record}
                    renderActionButtons={renderActionButtons}
                />
            ))}
        </div>
        <div className="full md:hidden px-8 py-5 bottom-0 left-0 right-0 fixed z-50 bg-white">
            <Button className="w-full block" variant="secondary">
                Create new nomination
            </Button>
        </div>

        <style global jsx>
            {`@media (max-width: 768px) {
                body {
                    overflow-y: hidden;  
                }
            }
            `}
        </style>

    </div>
}