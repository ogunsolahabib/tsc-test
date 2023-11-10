import classNames from "classnames";

const Container: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children, className }) => {

    const classes = classNames(className, 'bg-white container mx-auto my-5 w-full md:max-w-[800px]');
    return <div className={classes}>{children}</div>;
}

export default Container