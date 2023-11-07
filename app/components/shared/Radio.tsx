interface Radio {
    children: React.ReactNode;
    groupValue: string;
    value: string;
}

export default function Radio({ children, value, groupValue }: Radio) {

    const checked = groupValue === value;
    return <><div className="radio__wrapper">
        <label htmlFor={value}>
            {children}
            <div className="toggle__wrapper">
                <div className="radio__toggle"></div>
            </div>
        </label>

        <input
            className="radio__input"
            type={'radio'}
            checked={checked}
            value={value}
        />

    </div></>;
}