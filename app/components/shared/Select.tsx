'use client';

import classNames from "classnames"
import { useState } from "react";
import SelectOption from "./SelectOption";
import { Anonymous_Pro } from "next/font/google";

const anonymousPro = Anonymous_Pro({
    weight: '400',
    subsets: ['latin'],
})

interface SelectProps {
    label: React.ReactNode,
    value: string,
    name: string,
    options: Array<{ label: string, value: string }>,
    onChange: (event: any) => void,
    placeholder?: string,
    required?: boolean
}




const Select: React.FC<SelectProps & React.HTMLProps<HTMLDivElement>> = ({ label, value, name, options = [], onChange, placeholder = "Select an Option", required, ...props }) => {
    const [visibleOptions, setVisibleOptions] = useState(false);
    const dropdownClasses = classNames({
        "block": visibleOptions,
        "hidden": !visibleOptions
    });

    const onSelect = (selection: any) => {
        const { value, label: selectedDisplayName } = selection;
        const e = {
            target: {
                type: 'select',
                name,
                selected: selectedDisplayName,
                label,

                value,
            },
        };
        if (onChange) {
            onChange(e);
        }

        setVisibleOptions(false);
    };

    const getDisplayLabel = (value: string) => {

        if (options) {
            const selectedItem = options?.find((opt) => opt.value === value);

            if (selectedItem) {
                return selectedItem?.label;
            }
            return value;
        }
    };
    const displayLabel = getDisplayLabel(value);
    const onToggle = () => {
        setVisibleOptions(!visibleOptions);
    }
    const selectClasses = classNames('w-full md:w-96 md:min-w-[18rem] relative',
        props.className)
    const labelClasses = classNames('font-bold relative', {
        'before:content-["*"] before:text-tsc-error-red before:mt-1 before:text before:left-0 before:absolute align-middle': required,
        'pl-3': required
    })
    const inputClasses = classNames(anonymousPro.className,
        'w-full border-0 cursor-pointer outline-none p-3',
    )


    return (
        <div data-dropdown-toggle="dropdown" className={selectClasses} onClick={onToggle} >

            <label htmlFor={name} className={labelClasses}>{label}</label>
            <div className="flex items-center border border-tsc-mid-grey pr-3 mt-3">
                <input name={name} className={inputClasses} id="dropdownDefaultButton" value={displayLabel || placeholder}
                    readOnly
                    required
                />
                <svg className="w-2.5 h-2.5 ml-2.5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6" fill="none">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" className="stroke-tsc-pink" />
                </svg>
            </div>


            {/* <!-- Dropdown menu --> */}
            <div id="dropdown" className={`${anonymousPro.className} z-10 ${dropdownClasses} bg-tsc-light-grey divide-y w-full absolute text-black`}>
                <ul className="py-2 text-lg text-gray-700" aria-labelledby="dropdownDefaultButton">
                    {options.map((option) => {
                        return (
                            <SelectOption
                                key={option.value}
                                value={option.value}
                                onSelect={onSelect}
                            >
                                {option.label}
                            </SelectOption>

                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Select