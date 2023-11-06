import Image from "next/image";

import { Anonymous_Pro } from 'next/font/google'
import Twitter from "../icons/Twitter";
import Instagram from "../icons/Instagram";
import Facebook from "../icons/Facebook";
import Linkedin from "../icons/Linkedin";
import Youtube from "../icons/Youtube";


const anonymousPro = Anonymous_Pro({
    weight: '400',
    subsets: ['latin'],
})

const locations = [
    { name: "Bournemouth", address: "123 Fake Street, Bournemouth" },
    { name: "London", address: "123 Fake Street, London" },
    { name: "New York", address: "123 Fake Street, New York" },
]

export default function Footer() {

    return <footer className="w-full p-5 flex flex-col md:flex-row items-center justify-between bg-black text-white py-6 px-20">
        <div className="w-full flex gap-6 flex-col">
            <div className="w-fit mx-auto md:mx-0">
                <Image src="/tsc-logo.svg" width={196} height={32} alt="3sc logo" />
            </div>
            <hr className="bg-white" />
            <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-16">
                <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                    {locations.map(({ name, address }) => (
                        <div key={name} className="space-y-2">
                            <h6 className="uppercase font-bold">{name}</h6>
                            <address
                                className={`text-xs not-italic ${anonymousPro.className}`}
                            >
                                {address}</address>
                        </div>
                    ))}
                </div>
                <div className="space-y-2">
                    <h6>GET SOCIAL</h6>
                    <div className="flex gap-3">
                        <a><Twitter /></a>
                        <a><Instagram /></a>
                        <a><Facebook /></a>
                        <a><Linkedin /></a>
                        <a><Youtube /></a>
                    </div>
                </div>
            </div>

            <div className={`space-y-2 mt-10 text-xs text-center md:text-left ${anonymousPro.className}`}>
                <p>© 2023 3 Sided Cube</p>
                <p>Let&apos;s Build Tech For Good</p>
            </div>
        </div>

    </footer>
}