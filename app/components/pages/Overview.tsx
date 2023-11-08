'use client';

import { anonymousPro } from "@/app/fonts";
import OverviewItemCard from "./OverviewItemCard";
import Button from "../shared/Button";
import { useEffect, useLayoutEffect } from "react";

export default function Overview({ setProgress }: { setProgress?: React.SetStateAction<any> }) {
    useLayoutEffect(() => {
        setProgress(4);
    }, [])

    return <div className="p-5 space-y-10">
        <div className='space-y-3 text-center'>
            <h1 className="text-2xl md:text-3xl font-semibold uppercase">nomination overview</h1>
            <p className={anonymousPro.className + ' max-w-[600px]'}>Thank you for taking the time to nominate a fellow cube. Please check your answers before submitting.</p>
        </div>
        <div className="space-y-5">
            <OverviewItemCard heading="Cube's name">
                David
            </OverviewItemCard>
            <OverviewItemCard heading="Reasoning">
                I&apos;d like to nominate David because...
            </OverviewItemCard>
            <OverviewItemCard heading="Thoughts on Current Process">
                I&apos;d like to nominate David because...
            </OverviewItemCard>
        </div>
        <Button className="block mx-auto mt-16" variant="primary">Submit</Button>
    </div>
}