import { useState } from "react";
import { API_BASE_URL } from "../config";
import useLocalStorage from "./useLocalStorage";

export default function useFetchRequest(pathname: string) {

    const [data, setData] = useState<any>();

    const [loading, setLoading] = useState(false);

    const { storedValue: authToken} = useLocalStorage('tsc-authToken', 0);

    const GET = async () => {
       
        setLoading(true);

        try {

            const response = await fetch(`${API_BASE_URL}/${pathname}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${authToken}`
                }
            });
            const json = await response.json();
            setData(json);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    const POST = async (data: any) => {
        setLoading(true);
        try {

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
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

    return { data, GET, POST, loading };


}