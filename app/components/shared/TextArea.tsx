import classNames from "classnames";
import InputLabel from "./InputLabel";
import { anonymousPro } from "@/app/fonts";
import Button from "./Button";

interface TextAreaProps {
    label?: React.ReactNode;
    error?: React.ReactNode;
    name?: string;
    required?: boolean;
    onChange?: (event: any) => void;
}

const TextArea: React.FC<TextAreaProps & React.HTMLProps<HTMLTextAreaElement>> = ({ name, label, required, onChange, className, ...props }) => {



    const classes = classNames(className, anonymousPro.className, "w-full border-2 border-black p-2 outline-none caret-tsc-pink");

    return <div>
        <InputLabel required={required} htmlFor={name}>{label}</InputLabel>
        <textarea id={name} name={name} className={classes} {...props} />
    </div>

}

export default TextArea