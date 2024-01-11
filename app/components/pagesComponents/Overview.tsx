'use client';

import { anonymousPro } from "@/app/fonts";
import OverviewItemCard from "./OverviewItemCard";
import Button from "../shared/Button";
import useFormData from "@/app/hooks/useFormData";
import { useRouter } from "next/navigation";
import routePaths from "@/app/utils/routePaths";
import Image from "next/image";
import ProgressUpdater from "./ProgressUpdater";
import { useState } from "react";

export default function Overview({ setProgress, nomination_id }: { setProgress?: React.SetStateAction<any>, nomination_id?: string }) {

    const router = useRouter();

    const { resetFormData, formData, } = useFormData();
    const [submitLoading, setSubmitLoading] = useState(false);

    const [showEditModal, setShowEditModal] = useState<{ visible: boolean, nomination_id: string | null, step?: 'rating' | 'reason' | 'nominee' }>({ visible: false, nomination_id: null });

    const onSubmitClick = async () => {
        const data = {
            nominee_id: formData.nominee_id,
            reason: formData.reason,
            process: formData.rating
        };

        setSubmitLoading(true);
        fetch(`/api/nominations${nomination_id ? `/${nomination_id}` : ''}`, {
            method: nomination_id ? 'PUT' : 'POST',
            body: JSON.stringify(data)
        }).then(() => {
            resetFormData();
            router.push(routePaths.success);
            setSubmitLoading(false);
        }).catch(() => {
            setSubmitLoading(false);
        });
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
            <OverviewItemCard heading="Cube's name" onEditClick={() => router.push(`${routePaths.start}${nomination_id ? `?nomination_id=${nomination_id}` : ''}`)}>
                {formData.first_name}
            </OverviewItemCard>
            <OverviewItemCard heading="Reasoning" onEditClick={() => router.push(`${routePaths.reason}${nomination_id ? `?nomination_id=${nomination_id}` : ''}`,)}>
                {formData.reason}
            </OverviewItemCard>
            <OverviewItemCard heading="Thoughts on Current Process" onEditClick={() => router.push(`${routePaths.rating}${nomination_id ? `?nomination_id=${nomination_id}` : ''}`)}>
                <span className="capitalize"> {formData.rating?.split('_').join(' ')}</span>
            </OverviewItemCard>
        </div>
        <div className="flex mt-4">
            <Button className="w-full md:w-fit inline-block mx-auto" variant="primary" loading={submitLoading} onClick={onSubmitClick}>Submit</Button>
        </div>
    </div>
}