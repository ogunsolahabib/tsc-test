import React from "react";

export default function RadioGroup({ children, value }: { children: any, value: any }) {

    const arrayChildren = React.Children.toArray(children);
    return <div>
        {React.Children.map(arrayChildren, (Child: any) => (
            <>{React.cloneElement(Child, { ...Child.props, groupValue: value })}</>
        ))}
    </div>
}