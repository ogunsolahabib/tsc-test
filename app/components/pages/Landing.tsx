import Image from "next/image";
import Button from "../shared/Button";
import Container from "../shared/Container";
import { anonymousPro } from "@/app/fonts";
import Link from "next/link";
import routePaths from "@/app/utils/routePaths";

export default function Landing() {
    return <Container className='px-0 my-0'>
        <div className='w-full h-[215px] md:h-[320px] relative'>
            <Image src='/tsc-cotm.png' fill className='object-cover' alt='Man checking board' />
        </div>
        <div className="p-5">

            <div className='text-center space-y-3 mx-auto'>
                <h1 className="text-3xl font-bold">CUBE OF THE MONTH NOMINATIONS</h1>
                <p className={anonymousPro.className + ' max-w-[600px] mx-auto'}>At cube we’re passionate about recognising the great work that our cubes do. Each month one of our cubes are crowned cube of the month 👑⭐. Please nominate who you think deserves this months title.</p>
            </div>
            <Link href={routePaths.start} className='block mt-8 mx-auto w-full md:w-fit'>
                <Button variant='primary' className='w-full uppercase'>get started</Button>
            </Link>
        </div>

    </Container>
}