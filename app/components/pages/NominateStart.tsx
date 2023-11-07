'use client';

import Image from "next/image";
import Container from "../shared/Container";
import Select from "../shared/Select";
import { useState } from "react";
import Button from "../shared/Button";
import ConfirmCloseModal from "./ConfirmCloseModal";
import { anonymousPro } from "@/app/fonts";

export default function NominateStart() {
    const [value, setValue] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);

    return <>
        <div className='w-full h-[320px] relative'>
            <Image src='/tsc-cotm.png' fill className='object-cover' alt='Man checking board' />
        </div>
        <div className="p-5 space-y-10">
            <div className='space-y-3'>
                <h1 className="text-2xl md:text-3xl font-semibold uppercase">I&apos;d like to nominate...</h1>
                <p className={anonymousPro.className}>Please select a cube who you feel has done something honourable this month or just all round has a great work ethic.</p>

            </div>
            <Select required name='cube' label="Cube's name" value={value} onChange={(e) => setValue(e.target.value)} options={[
                {
                    value: '1',
                    label: 'Option 1',
                },
                {
                    value: '2',
                    label: 'Option 2',
                },
                {
                    value: '3',
                    label: 'Option 3',
                },
            ]}

            />

            <div className="flex justify-between">
                <Button sizes='small' variant="secondary" onClick={() => setIsModalOpen(true)}>back</Button>
                <Button sizes='medium' variant="primary" disabled={!value}>next</Button>
            </div>
        </div>
        <ConfirmCloseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
}