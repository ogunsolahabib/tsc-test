import Image from "next/image";
import Button from "../shared/Button";
import Container from "../shared/Container";
import { anonymousPro } from "@/app/fonts";
import routePaths from "@/app/utils/routePaths";

export default function Success() {
    return <Container className='px-0'>
        <div className='w-full h-[320px] relative'>
            <Image src='/tsc-success-banner.png' fill className='object-cover' alt='Man checking board' />
        </div>
        <div className="p-5">

            <div className='text-center space-y-3 mx-auto'>
                <h1 className="text-3xl font-bold">NOMINATION SUBMITTED</h1>
                <p className={anonymousPro.className + ' max-w-[600px] mx-auto'}>Thank you for taking the time to fill out this form! Why not nominate another cube?</p>

            </div>
            <div className="flex justify-center gap-2 mx-auto mt-10">

                <a href={routePaths.nominations} className='w-fit'>
                    <Button variant='secondary'>view nominations</Button>
                </a>
                <a href={routePaths.start} className='w-fit'>
                    <Button variant='secondary'>create new nomination</Button>
                </a>
            </div>
        </div>

    </Container>
}