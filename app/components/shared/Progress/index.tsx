'use client'

import { useEffect, useState } from 'react'
import useProgress from '@/app/hooks/useProgress';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import classNames from 'classnames';


// Reduce a fraction by finding the Greatest Common Divisor and dividing by it.
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