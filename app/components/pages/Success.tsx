'use client';

import Image from "next/image";
import Button from "../shared/Button";
import Container from "../shared/Container";
import { anonymousPro } from "@/app/fonts";
import routePaths from "@/app/utils/routePaths";
import useFormData from "@/app/hooks/useFormData";
import { useEffect } from "react";
import Link from "next/link";

export default function Success() {
    const { resetFormData } = useFormData();

    useEffect(() => {
        resetFormData();
    }, []);

    return <Container className='px-0'>
        <div className='w-full h-[320px] relative'>
            <Image src='/tsc-success-banner.png' fill className='object-cover' alt='Man checking board' />
        </div>
        <div className="py-10">

            <div className='text-center space-y-3 mx-auto'>
                <h1 className="text-3xl font-bold">NOMINATION SUBMITTED</h1>
                <p className={anonymousPro.className + ' max-w-[600px] mx-auto'}>Thank you for taking the time to fill out this form! Why not nominate another cube?</p>

            </div>
            <div className="flex justify-center gap-2 mx-auto mt-10">

                <Link href={routePaths.nominations} className='w-fit'>
                    <Button variant='secondary'>view nominations</Button>
                </Link>
                <Link href={routePaths.start} className='w-fit'>
                    <Button variant='secondary'>create new nomination</Button>
                </Link>
            </div>
        </div>

    </Container>
}