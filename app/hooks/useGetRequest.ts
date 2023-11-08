import { useState } from "react";
import { API_BASE_URL } from "../config";
import useLocalStorage from "./useLocalStorage";

export default function useGetRequest(pathname: string) {

    const [data, setData] = useState<any>();

    const { storedValue: authToken} = useLocalStorage('tsc-authToken', 0);

    const fetchData = async () => {
        const response = await fetch(`${API_BASE_URL}/${pathname}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${authToken}`
            }
        });
        const json = await response.json();
        setData(json);
    };

    return { data, fetchData };


}