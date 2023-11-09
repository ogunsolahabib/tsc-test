import { useState } from "react";
import { API_BASE_URL } from "../config";
import useLocalStorage from "./useLocalStorage";

export default function useFetchRequest(pathname: string) {

    const [data, setData] = useState<any>();

    const { storedValue: authToken} = useLocalStorage('tsc-authToken', 0);

    const GET = async () => {
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

    const POST = async (data: any) => {
        const response = await fetch(`${API_BASE_URL}/${pathname}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        setData(json);
    }

    return { data, GET, POST };


}