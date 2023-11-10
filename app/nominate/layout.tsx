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
        <main className="md:px-8 md:py-20">
            <Container>
                {children}
            </Container>
        </main >
    )
}