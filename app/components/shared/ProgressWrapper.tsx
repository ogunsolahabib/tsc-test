'use client';

import { useState } from "react";

const ProgresssWrapper = ({ children }: { children: React.ReactNode }) => {

    const [value, setValue] = useState(0);

    return <>{children}</>
}