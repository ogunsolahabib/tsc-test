import { useEffect } from "react";

export default function useDidUpdateEffect(effect: () => void, inputs: any[]) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, inputs);
}