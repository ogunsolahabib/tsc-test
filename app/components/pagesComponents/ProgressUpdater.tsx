'use client'
import { useLayoutEffect } from "react"

export default function ProgressUpdater({ value, setProgress }: any) {
    useLayoutEffect(() => {
        setProgress(value);
    }, [value]);
    return <></>
}