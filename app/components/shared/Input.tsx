import classNames from "classnames";

export default function Input({ className, ...rest }: React.HTMLProps<HTMLInputElement>) {
    return <input className={classNames(className, 'w-full border-2 border-black p-2 outline-none caret-tsc-pink')} {...rest} />
}