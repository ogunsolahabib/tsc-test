'use client';

import Image from "next/image"
import { anonymousPro } from "@/app/fonts"
import TextArea from "../shared/TextArea"
import Button from "../shared/Button"
import { useRouter } from "next/navigation";
import useProgress from "@/app/hooks/useProgress";
import { useEffect } from "react";


const NominateReasoning: React.FC<{ setProgress?: React.SetStateAction<any> }> = ({ setProgress }) => {
    const router = useRouter();

    const { progress } = useProgress();
    useEffect(() => {
        setProgress(2);
    }, [])


    return <>

        <div className='w-full h-[320px] relative'>
            <Image src='/tsc-cotm.png' fill className='object-cover' alt='Man checking board' />
        </div>
        <div className="p-5 space-y-10">
            <div className='space-y-3'>
                <h1 className="text-2xl md:text-3xl font-semibold uppercase">I&apos;d like to nominate <span className="text-tsc-pink">DAVID</span> because...</h1>
                <p className={anonymousPro.className + ' max-w-[600px] '}>Please let us know why you think this cube deserves the ‘cube of the month’ title 🏆⭐</p>
            </div>

            <TextArea rows={6} required label={"Reasoning"} />
            <div className="flex justify-between">
                <Button width='small' variant="secondary" onClick={() => {
                    setProgress(1);
                }} >back</Button>
                <Button onClick={() => {
                    router.push('/nominate/rating');
                    // setProgress(3);
                }}
                    width='medium' variant="primary">next</Button>
            </div>
        </div>
    </ >
}

export default NominateReasoning