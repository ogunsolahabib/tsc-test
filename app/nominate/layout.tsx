'use client';

import { useEffect, useState } from "react";
import Container from "../components/shared/Container"
import useProgress from "../hooks/useProgress";
import { usePathname } from 'next/navigation'
import useLocalStorage from "../hooks/useLocalStorage";
import dynamic from "next/dynamic";
dynamic


// const Progress = dynamic(() => import("../components/shared/Progress"), { ssr: false });

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <main className="flex md: px-8 py-20">
            <Container>
                {children}
            </Container>
        </main >
    )
}