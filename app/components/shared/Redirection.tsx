'use client';

import LoadingPage from "@/app/icons/LoadingPage";
import windowLocationRedirect from "@/app/utils/windowLocationRedirect";


export default function Redirection() {

    if (typeof window !== 'undefined') {

        windowLocationRedirect();
    }

    return <><LoadingPage /></>
}