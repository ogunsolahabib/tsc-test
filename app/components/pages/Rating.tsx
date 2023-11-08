'use client'

import { anonymousPro } from "@/app/fonts"
import Fair from "@/app/icons/Fair"
import NotSure from "@/app/icons/NotSure"
import Unfair from "@/app/icons/Unfair"
import VeryFiar from "@/app/icons/VeryFair"
import VeryUnfair from "@/app/icons/VeryUnfair"
import classNames from "classnames"
import Image from "next/image"
import { useLayoutEffect, useState } from "react"
import RatingProgress from "./RatingProgress"
import Button from "../shared/Button"


const ratingsList = [{ value: 'very_unfair', label: 'Very unfair', icon: <VeryUnfair /> },
{ value: 'unfair', label: 'Unfair', icon: <Unfair /> },
{ value: 'not_sure', label: 'Not sure', icon: <NotSure /> },
{ value: 'fair', label: 'Fair', icon: <Fair /> },
{ value: 'very_fair', label: 'Very fair', icon: <VeryFiar /> },


]

const calculateProgress = (index: number) => {
    return (index + 1) / (ratingsList.length) * 100;
};
const Rating = ({ setProgress }: { setProgress?: React.SetStateAction<any> }) => {
    const [value, setValue] = useState<string | undefined>(undefined);

    const selectedIndex = ratingsList.findIndex((rating) => rating.value === value);

    const progress = calculateProgress(selectedIndex);

    useLayoutEffect(() => {
        setProgress(3);
    }, []);


    return <div className="w-full space-y-10 p-5">
        <div className='w-full h-[180px] relative'>
            <Image src='/tsc-rating-banner.png' fill className='object-cover' alt='Man checking board' />
        </div>
        <div className="space-y-3 mt-3">
            <h1 className="text-2xl md:text-3xl font-semibold uppercase">Is how we currently run cube of the month fair?</h1>
            <p className={`${anonymousPro.className} max-w-[600px] `}>As you know, out the nominees chosen, we spin a wheel to pick the cube of the month. What’s your opinion on this method?
            </p>
        </div>
        <div className="space-y-5 p-4 w-full md:w-[44rem] mx-auto">
            <RatingProgress marker={progress} progress={progress} />
            <div className="grid md:grid-cols-5 gap-3 mt-5">
                {ratingsList.map((rating) => (
                    <>
                        <button key={rating.value} className="flex flex-col items-center justify-center" onClick={() => setValue(rating.value)}>
                            <div
                                className={classNames("w-fit h-fit p-3", { 'border-4 border-tsc-pink': value === rating.value })}>
                                {rating.icon}
                            </div>
                            <p className="text-center capitalize md:mt-4">{rating.label}</p>
                        </button>

                    </>
                ))}
            </div>
        </div>
        <div className="flex justify-between gap-4">
            <Button sizes='small' variant="secondary" >back</Button>
            <Button sizes='medium' variant="primary">next</Button>
        </div>
    </div >
}

export default Rating