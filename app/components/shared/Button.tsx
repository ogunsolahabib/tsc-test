import classNames from "classnames";
import Loading from "../../icons/Loading";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary";
    loading?: boolean;
    disabled?: boolean;

}

const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({ variant, children, className, type, loading, ...props }) => {
    const classes = classNames('p-4 min-w-[18rem] w-full md:w-auto font-semibold transition-background duration-300',
        {
            "bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black disabled:bg-gray-300": variant === "primary",
            "bg-white text-black border-2 border-black hover:bg-black hover:text-white disabled:border-gray-300 disabled:text-gray-400 disabled:text-gray-500": variant === "secondary",
        }, className
    )

    return <button className={classes} {...props}>{loading ? <span className="flex m-auto w-fit animate-spin"><Loading /></span> : children}</button>;
}

export default Button;