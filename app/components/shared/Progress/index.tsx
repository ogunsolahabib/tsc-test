'use client'

import classNames from 'classnames';

const progressList = ['w-1/4', 'w-1/2', 'w-3/4', 'w-full'];

const Progress: React.FC<{ value: number }> = ({ value }) => {

    const valueString = value ? progressList[value - 1] : 'w-0';

    const progressClasses = classNames('bg-tsc-tomato-pink h-2 transition-all', valueString)
    return <div suppressHydrationWarning className="relative w-full bg-tsc-mid-grey h-2">
        <div
            className={progressClasses}
        />
    </div>

}

export default Progress