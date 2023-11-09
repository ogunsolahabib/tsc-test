'use client';

import { anonymousPro } from "@/app/fonts";
import OverviewItemCard from "./OverviewItemCard";
import Button from "../shared/Button";
import useFormData from "@/app/hooks/useFormData";
import useFetchRequest from "@/app/hooks/useFetchRequest";
import { useRouter } from "next/navigation";
import routePaths from "@/app/utils/routePaths";
import Image from "next/image";
import ProgressUpdater from "./ProgressUpdater";
import { useState } from "react";

export default function Overview({ setProgress }: { setProgress?: React.SetStateAction<any> }) {

    const router = useRouter();

    const { resetFormData, formData, } = useFormData();
    const [submitLoading, setSubmitLoading] = useState(false);

    const onSubmitClick = async () => {
        const data = {
            nominee_id: formData.nominee_id,
            reason: formData.reason,
            process: formData.rating
        };

        setSubmitLoading(true)
        fetch('/api/nominations', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(() => {
            resetFormData();
            router.push(routePaths.success);
            setSubmitLoading(false)
        })
    }



    return <div className="p-5 space-y-10">
        <ProgressUpdater value={4} setProgress={setProgress} />
        <div className='w-full h-[180px] relative'>
            <Image src='/tsc-overview-banner.png' fill className='object-cover' alt='Man checking board' />
        </div>
        <div className='space-y-3 text-center'>
            <h1 className="text-2xl md:text-3xl font-semibold uppercase">nomination overview</h1>
            <p className={anonymousPro.className + ' max-w-[600px]'}>Thank you for taking the time to nominate a fellow cube. Please check your answers before submitting.</p>
        </div>
        <div className="space-y-5">
            <OverviewItemCard heading="Cube's name" editLink={routePaths.start}>
                {formData.first_name}
            </OverviewItemCard>
            <OverviewItemCard heading="Reasoning" editLink={routePaths.reason}>
                {formData.reason}
            </OverviewItemCard>
            <OverviewItemCard heading="Thoughts on Current Process" editLink={routePaths.rating}>
                <span className="capitalize"> {formData.rating?.split('_').join(' ')}</span>
            </OverviewItemCard>
        </div>
        <div className="flex mt-4">
            <Button className="inline-block mx-auto" variant="primary" loading={submitLoading} onClick={onSubmitClick}>Submit</Button>
        </div>
    </div>
}