import classNames from "classnames";

export default function Container({ children, className }: React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    const classes = classNames(className, 'bg-white container mx-auto md:my-5 w-full md:max-w-[800px]');
    return <div className={classes}>{children}</div>;
}
