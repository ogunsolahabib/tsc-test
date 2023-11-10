import Image from "next/image";

import Twitter from "../../icons/Twitter";
import Instagram from "../../icons/Instagram";
import Facebook from "../../icons/Facebook";
import Linkedin from "../../icons/Linkedin";
import Youtube from "../../icons/Youtube";
import { anonymousPro } from "@/app/fonts";



const locations = [
    { name: "Bournemouth", address: "Telephone House Bournemouth, BH1 3NE" },
    { name: "London", address: "51 Eastcheap London, EC3M 1JP" },
    { name: "Washington", address: "80 M Street SE Washington, D.C 20003" },
    {
        name: 'Florida',
        address: '7901 4th St N, STE 300 St. Petersburg FL 33702'
    }
]

export default function Footer() {

    return <footer className="w-full max-w-full p-5 flex flex-col md:flex-row items-center justify-between bg-black text-white py-6 px-20">
        <div className="w-full flex gap-6 flex-col">
            <div className="w-fit mx-auto md:mx-0">
                <Image src="/tsc-logo.svg" width={196} height={32} alt="3sc logo" />
            </div>
            <hr className="bg-white" />
            <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-16">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    {locations.map(({ name, address }) => (
                        <div key={name} className="space-y-2">
                            <h6 className="uppercase font-bold text-xs">{name}</h6>
                            <address
                                className={`text-xs not-italic ${anonymousPro.className}`}
                            >
                                {address}</address>
                        </div>
                    ))}
                </div>
                <div className="space-y-2">
                    <h6 className="uppercase font-bold text-xs">Get social</h6>
                    <div className="flex gap-3 justify-between">
                        <a className="w-fit"><Twitter /></a>
                        <a className="w-fit"><Instagram /></a>
                        <a className="w-fit"><Facebook /></a>
                        <a className="w-fit"><Linkedin /></a>
                        <a className="w-fit"><Youtube /></a>
                    </div>
                </div>
            </div>

            <div className={`flex flex-col md:flex-row md:justify-between gap-2 mt-10 text-xs text-center md:text-left ${anonymousPro.className}`}>
                <p>© 2023 3 Sided Cube</p>
                <p>Let&apos;s Build Tech For Good</p>
            </div>
        </div>

    </footer>
}