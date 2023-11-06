import classNames from "classnames";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary";
    loading?: boolean;
    disabled?: boolean;

}

const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({ variant, children, className, type, ...props }) => {
    const classes = classNames(className, 'px-4 py-2 min-w-[16rem] w-full md:w-auto',
        {
            "bg-black text-white hover:bg-white hover:text-black disabled:bg-gray-300": variant === "primary",
            "bg-white text-black border-2 border-black hover:bg-black hover:text-white disabled:border-gray-300 disabled:text-gray-400 disabled:text-gray-500": variant === "secondary",
        }
    )

    return <button className={classes} {...props}>Button</button>;
}

export default Button;