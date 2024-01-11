'use client';

import Image from "next/image"
import { anonymousPro } from "@/app/fonts"
import TextArea from "../shared/TextArea"
import Button from "../shared/Button"
import { useRouter, useSearchParams } from "next/navigation";
import ProgressUpdater from "./ProgressUpdater";
import useFormData from "@/app/hooks/useFormData";
import routePaths from "@/app/utils/routePaths";
import { FieldValues, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function NominateReasoning({ setProgress }: React.PropsWithChildren<{ setProgress?: React.SetStateAction<any> }>) {
    const router = useRouter();

    const { formData, updateFormData, resetFormData } = useFormData();

    const [firstName, setFirstName] = useState("");



    const searchParams = useSearchParams();


    const nomination_id = searchParams.get('nomination_id');


    useEffect(() => {
        setFirstName(formData.first_name);
    }, [formData.first_name]);

    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        if (formData.reason) {
            setValue('reason', formData.reason);
        }
    }, [])

    const handleSave = async (data: FieldValues) => {
        const res = await fetch(`/api/nominations/${nomination_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            resetFormData();
            router.push(routePaths.nominations);
        }

    }

    const onFormSubit = (data: FieldValues) => {
        data.first_name = formData.first_name;

        if (nomination_id) {
            return handleSave(data);
            router.push(routePaths.nominations);

        }
        updateFormData(data);
        router.push(routePaths.rating);
    }

    return <>
        <ProgressUpdater setProgress={setProgress} value={2} />
        <div className="py-5 md:px-5">
            <div className='w-full h-[180px] relative'>
                <Image src='/tsc-reason-banner.png' fill className='object-cover' alt='Man checking board' />
            </div>
        </div>
        <div className="p-5 space-y-10">

            <div className='space-y-3'>
                <h1 className="text-2xl md:text-3xl font-semibold uppercase">I&apos;d like to nominate <span className="text-tsc-pink">{firstName}</span> because...</h1>
                <p className={anonymousPro.className + ' max-w-[600px] '}>Please let us know why you think this cube deserves the ‘cube of the month’ title 🏆⭐</p>
            </div>
            <form className="space-y-3" onSubmit={handleSubmit(onFormSubit)}>
                <TextArea rows={6} required label={"Reasoning"} {...register('reason')} autoFocus />
                {nomination_id ? <div className="flex w-fit mt-8 mx-auto">
                    <Button width='large' variant="primary" type="submit">Save</Button>
                </div> : <div className="flex justify-between gap-2 mt-6">
                    <Link href={routePaths.start}>
                        <Button width='small' variant="secondary" type="button">back</Button>
                    </Link>
                    <Button type="submit" width='large' variant="primary" >next</Button>
                </div>}
            </form>
        </div>
    </ >
}

