import classNames from "classnames";
import Loading from "../../icons/Loading";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary";
    loading?: boolean;
    disabled?: boolean;
    sizes?: "small" | "medium" | "large";

}

const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({ variant, children, className, type, loading, sizes = 'large', ...props }) => {
    const classes = classNames('px-4 py-2  w-full md:w-auto font-semibold transition-background duration-300 uppercase disabled:cursor-not-allowed',
        {
            "bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black disabled:bg-tsc-mid-grey disabled:hover:border-0 disabled:hover:text-white": variant === "primary",
            "bg-white text-black border-2 border-black hover:bg-black hover:text-white disabled:border-gray-300 disabled:text-gray-400 disabled:text-gray-500": variant === "secondary",
            'min-w-[18rem]': sizes === "large",
            'min-w-[12rem]': sizes === "medium",
            'min-w-[8rem]': sizes === "small",
        }, className
    )

    return <button className={classes} {...props}>{loading ? <span className="flex m-auto w-fit animate-spin"><Loading /></span> : children}</button>;
}

export default Button;