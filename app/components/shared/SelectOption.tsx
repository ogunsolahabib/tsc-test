import Link from "next/link"

interface SelectOptionProps {
    value: string,
    label?: string,
    onSelect: (selection: any) => void,
    children: React.ReactNode
}


const SelectOption: React.FC<SelectOptionProps> = ({ value, label, children, onSelect }) => {
    return <li onMouseDown={() => onSelect({ value, label })}>
        <Link href="#" className="block p-3">{label || children}</Link>
    </li>
}

export default SelectOption