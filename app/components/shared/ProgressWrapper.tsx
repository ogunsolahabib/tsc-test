'use client';

import { Children, cloneElement, useEffect, useState } from "react";
import ProgressStatic from "./Progress";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import dynamic from "next/dynamic";

const Progress = dynamic(() => import("./Progress"), { loading: () => <ProgressStatic value={0} /> });

const ProgresssWrapper = ({ children }: { children: React.ReactNode, currentProgress?: number }) => {
    const { storedValue: progress, setValue: setProgress } = useLocalStorage('progress', 0);

    const [progressLocal, setProgressLocal] = useState(0);


    useEffect(() => {
        setProgressLocal(progress);
    }, [progress]);

    return <>
        <div className="px-5 mt-5">
            <Progress value={progressLocal} />
        </div>
        {Children.map(children, (child: any) => {
            return cloneElement(child, {
                setProgress,
                ...child.props,
            });
        })}


    </>
}

export default ProgresssWrapper