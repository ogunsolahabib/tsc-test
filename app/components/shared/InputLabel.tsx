import classNames from "classnames";

interface InputLabelProps {
    children: React.ReactNode,
    required?: boolean
}

const InputLabel: React.FC<InputLabelProps & React.LabelHTMLAttributes<HTMLLabelElement>> = ({ children, required, ...props }) => {

    const labelClasses = classNames(props.className, 'font-bold relative mb-2 block', {
        'before:content-["*"] before:text-tsc-error-red before:mt-1 before:text before:left-0 before:absolute align-middle': required,
        'pl-3': required
    })
    return <label className={labelClasses} {...props}>{children}</label>
}

export default InputLabel;