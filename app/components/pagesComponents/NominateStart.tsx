'use client';

import Image from "next/image";
import Select from "../shared/Select";
import { useEffect, useState } from "react";
import Button from "../shared/Button";
import ConfirmCloseModal from "./ConfirmCloseModal";
import { anonymousPro } from "@/app/fonts";
import { Controller, FieldValues, useForm } from "react-hook-form";
import ProgressUpdater from "./ProgressUpdater";
import { useRouter, useSearchParams } from "next/navigation";
import useFormData from "@/app/hooks/useFormData";
import routePaths from "@/app/utils/routePaths";

export default function NominateStart({ setProgress, allNominees }: { setProgress?: (progress: number) => void, allNominees: any[] }) {

    const searchParams = useSearchParams();

    const nomination_id = searchParams.get('nomination_id');


    const [isModalOpen, setIsModalOpen] = useState(false);

    const { register, control, handleSubmit, watch, reset, setValue } = useForm();

    const [isNextActive, setIsNextActive] = useState(false);

    const router = useRouter();

    const { updateFormData, formData, resetFormData } = useFormData()

    const selectedCube = watch('nominee_id');

    useEffect(() => {
        setIsNextActive(!!selectedCube);
    }, [selectedCube]);

    useEffect(() => {
        if (formData.nominee_id) {
            setValue('nominee_id', formData.nominee_id);
        }
    }, [])

    useEffect(() => {
        if (!nomination_id) {
            resetFormData();
            reset();
        }
    }, [nomination_id]);

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

    const onFormSubmit = (data: FieldValues) => {
        data.first_name = allNominees.find((nominee) => nominee.nominee_id === data.nominee_id)?.first_name;
        if (nomination_id) {
            return handleSave({
                nominee_id: data.nominee_id,
            });
        }
        updateFormData(data);
        router.push(routePaths.reason);
    }


    return <>
        <ProgressUpdater setProgress={setProgress} value={1} />
        <div className="py-5 md:px-5">
            <div className='w-full h-[180px] relative'>
                <Image src='/tsc-select-nominee-banner.png' fill className='object-cover' alt='Man checking board' />
            </div>
        </div>
        <div className="p-5 space-y-10">

            <div className='space-y-3'>
                <h1 className="text-2xl md:text-3xl font-semibold uppercase">I&apos;d like to nominate...</h1>
                <p className={anonymousPro.className}>Please select a cube who you feel has done something honourable this month or just all round has a great work ethic.</p>

            </div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <Controller name="nominee_id" control={control} render={({ field }) => (
                    <Select required
                        label="Cube's name"
                        {...field}
                        options={allNominees.map((nominee) => ({ label: `${nominee.first_name} ${nominee.last_name}`, value: nominee.nominee_id }))}
                        register={register}
                    />
                )}
                />
                {nomination_id ? <div className="flex w-fit mt-8 mx-auto">
                    <Button width='large' variant="primary" type="submit">Save</Button>
                </div> : <div className="flex justify-between gap-2 mt-6">
                    <Button width='small' variant="secondary" onClick={() => setIsModalOpen(true)}>back</Button>
                    <Button width='large' variant="primary" disabled={!isNextActive} type="submit">next</Button>
                </div>}
            </form>
        </div>
        <ConfirmCloseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
}