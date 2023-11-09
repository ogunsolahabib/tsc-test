import NominateStart from "@/app/components/pages/NominateStart";
import ProgresssWrapper from "@/app/components/shared/ProgressWrapper";
import { API_BASE_URL } from "@/app/config";
import { cookies } from "next/headers";

export default async function Page() {
    const cookieStore = cookies();

    const authToken = cookieStore.get('tsc-authToken')?.value;

    const res = await fetch(`${API_BASE_URL}/nominee`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`
        },
    }).then(res => res.json());

    const allNominees = await res.data;


    return (
        <ProgresssWrapper>
            <NominateStart allNominees={allNominees} />
        </ProgresssWrapper>
    )
}