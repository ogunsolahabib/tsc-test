'use client';

import Image from "next/image"
import { anonymousPro } from "@/app/fonts"
import TextArea from "../shared/TextArea"
import Button from "../shared/Button"
import { useRouter } from "next/navigation";
import ProgressUpdater from "./ProgressUpdater";
import useFormData from "@/app/hooks/useFormData";
import routePaths from "@/app/utils/routePaths";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";


const NominateReasoning: React.FC<{ setProgress?: React.SetStateAction<any> }> = ({ setProgress }) => {
    const router = useRouter();

    const { formData, updateFormData } = useFormData();

    const [firstName, setFirstName] = useState("");

    useEffect(() => {
        setFirstName(formData.first_name);
    }, [formData.first_name]);

    const { register, handleSubmit } = useForm();
    const onFormSubit = (data: any) => {
        console.log(data);
        data.first_name = formData.first_name;
        updateFormData(data);
        router.push(routePaths.rating);
    }

    return <>
        <ProgressUpdater setProgress={setProgress} value={2} />
        <div className="p-5 space-y-10">
            <div className='w-full h-[180px] relative'>
                <Image src='/tsc-select-nominee-banner.png' fill className='object-cover' alt='Man checking board' />
            </div>
            <div className='space-y-3'>
                <h1 className="text-2xl md:text-3xl font-semibold uppercase">I&apos;d like to nominate <span className="text-tsc-pink">{firstName}</span> because...</h1>
                <p className={anonymousPro.className + ' max-w-[600px] '}>Please let us know why you think this cube deserves the ‘cube of the month’ title 🏆⭐</p>
            </div>
            <form className="space-y-3" onSubmit={handleSubmit(onFormSubit)}>
                <TextArea rows={6} required label={"Reasoning"} {...register('reason')} />
                <div className="flex justify-between">
                    <a href={routePaths.start}>
                        <Button width='small' variant="secondary" type="button">back</Button>
                    </a>
                    <Button type="submit"
                        width='medium' variant="primary">next</Button>
                </div>
            </form>
        </div>
    </ >
}

export default NominateReasoning