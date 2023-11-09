import classNames from "classnames";
import InputLabel from "./InputLabel";
import { anonymousPro } from "@/app/fonts";
import React from "react";

interface TextAreaProps {
    label?: React.ReactNode;
    error?: React.ReactNode;
    name?: string;
    required?: boolean;
    onChange?: (event: any) => void;
}

const TextArea = React.forwardRef(({ name, label, required, onChange, className, ...props }: TextAreaProps & React.HTMLProps<HTMLTextAreaElement>, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
    const classes = classNames(className, anonymousPro.className, "w-full border-2 border-black p-2 outline-none caret-tsc-pink");

    return <div>
        <InputLabel required={required} htmlFor={name}>{label}</InputLabel>
        <textarea ref={ref} id={name} name={name} className={classes} {...props} />
    </div>
});

TextArea.displayName = "TextArea";

export default TextArea