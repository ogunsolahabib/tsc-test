'use client';

import windowLocationRedirect from "@/app/utils/windowLocationRedirect";


export default function Redirection() {

    if (typeof window !== 'undefined') {

        windowLocationRedirect();
    }

    return <></>
}