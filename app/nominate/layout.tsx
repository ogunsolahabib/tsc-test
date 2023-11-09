'use client';

import Container from "../components/shared/Container"
import dynamic from "next/dynamic";
dynamic


// const Progress = dynamic(() => import("../components/shared/Progress"), { ssr: false });

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <main className=" px-8 py-10 md:py-20">
            <Container>
                {children}
            </Container>
        </main >
    )
}