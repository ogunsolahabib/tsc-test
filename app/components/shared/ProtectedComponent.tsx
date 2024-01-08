'use client';

import getToken from "@/app/utils/getToken";
import windowLocationRedirect from "@/app/utils/windowLocationRedirect";
import { useCookies } from 'next-client-cookies';
import { useEffect } from "react";

export default function ProtectedComponent({ children }: { children: React.ReactNode }) {
    const cookies = useCookies();
    const token = cookies.get('tsc-authToken');


    useEffect(() => {
        if (!token) {
            windowLocationRedirect();
        }
    }, [token]);


    return <>{children}</>;
}