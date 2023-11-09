import Delete from "@/app/icons/Delete";
import Edit from "@/app/icons/Edit";
import classNames from "classnames";

export default function NominationActionButtons({ active, onEditClick, onDeleteClick, record }: { active: 'current' | 'closed', onEditClick: (record: any) => void, onDeleteClick: (nomination_id: string) => void, record: any }) {


    const iconButtonClasses = classNames(
        {
            'opacity-20': active === 'closed',
        }
    )


    return <div className="flex gap-6">
        <button className={iconButtonClasses} onClick={() => onDeleteClick(record.nomination_id)}
            disabled={active === 'closed'}
        >
            <Delete />
        </button>
        <button className={iconButtonClasses}
            disabled={active === 'closed'}
            onClick={() => onEditClick(record)}>
            <Edit />
        </button>
    </div>

}