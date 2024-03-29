import classNames from "classnames";
import Loading from "../../icons/Loading";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | 'green';
    loading?: boolean;
    disabled?: boolean;
    width?: "small" | "medium" | "large" | 'fit';
    type?: "button" | "submit" | "reset";

}

export default function Button({ variant, children, className, loading, width = 'large', type, ...props }: React.PropsWithChildren<ButtonProps & React.HTMLProps<HTMLButtonElement>>) {
    const classes = classNames('px-6 py-3  font-semibold text-sm transition-background duration-300 uppercase disabled:cursor-not-allowed',
        {
            "bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black disabled:bg-tsc-mid-grey disabled:hover:border-0 disabled:hover:text-white": variant === "primary",
            "bg-white text-black border-2 border-black hover:bg-black hover:text-white disabled:border-gray-300 disabled:text-gray-400 disabled:text-gray-500": variant === "secondary",
            "bg-tsc-green text-black hover:bg-white hover:text-black hover:border-2 hover:border-black disabled:bg-tsc-mid-grey disabled:hover:border-0 disabled:hover:text-white font-thin": variant === "green",
            // 'min-w-[11rem] md:min-w-[18rem]': width === "large",
            'w-[-webkit-fill-available] md:w-[18rem]': width === "large",
            'min-w-[10rem]': width === "medium",
            'md:min-w-[8rem]': width === "small",
            'w-full': !width || className?.includes(' block'),
            'w-fit': !width || className?.includes(' inline'),
        }, className
    )

    return <button type={type} disabled={loading || props.disabled} className={classes} {...props}>{loading ? <span className="flex m-auto w-fit animate-spin"><Loading /></span> : children}</button>;
}