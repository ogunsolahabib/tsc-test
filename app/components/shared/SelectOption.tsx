import Link from "next/link"

interface SelectOptionProps {
    value: string,
    label?: string,
    onSelect: (selection: any) => void,
    children: React.ReactNode
}


export default function SelectOption({ value, label, children, onSelect }: React.PropsWithChildren<SelectOptionProps>) {
    return <li onMouseDown={() => onSelect({ value, label })}>
        <Link href="#" className="block p-3">{label || children}</Link>
    </li>
}
