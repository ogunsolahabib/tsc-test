'use client';

import Image from "next/image";
import Select from "../shared/Select";
import { useEffect, useState } from "react";
import Button from "../shared/Button";
import ConfirmCloseModal from "./ConfirmCloseModal";
import { anonymousPro } from "@/app/fonts";
import { Controller, useForm } from "react-hook-form";
import ProgressUpdater from "./ProgressUpdater";

export default function NominateStart({ setProgress, allNominees }: { setProgress: (progress: number) => void, allNominees: any[] }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { register, control, handleSubmit, watch } = useForm();
    const [isNextActive, setIsNextActive] = useState(false);

    const selectedCube = watch('cube');

    useEffect(() => {
        setIsNextActive(!!selectedCube);
    }, [selectedCube]);

    return <>
        <ProgressUpdater setProgress={setProgress} value={1} />
        <div className="p-5 space-y-10">
            <div className='w-full h-[180px] relative'>
                <Image src='/tsc-select-nominee-banner.png' fill className='object-cover' alt='Man checking board' />
            </div>
            <div className='space-y-3'>
                <h1 className="text-2xl md:text-3xl font-semibold uppercase">I&apos;d like to nominate...</h1>
                <p className={anonymousPro.className}>Please select a cube who you feel has done something honourable this month or just all round has a great work ethic.</p>

            </div>
            <form onSubmit={handleSubmit((data) => {
                console.log(data)
            })}>
                <Controller name="cube" control={control} render={({ field }) => (
                    <Select required
                        label="Cube's name"
                        {...field}
                        options={allNominees.map((nominee) => ({ label: `${nominee.first_name} ${nominee.last_name}`, value: nominee.nominee_id }))}
                        register={register}
                    />
                )}
                />
                <div className="flex justify-between mt-6">
                    <Button width='small' variant="secondary" onClick={() => setIsModalOpen(true)}>back</Button>
                    <Button width='medium' variant="primary" disabled={!isNextActive} type="submit">next</Button>
                </div>
            </form>
        </div>
        <ConfirmCloseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
}