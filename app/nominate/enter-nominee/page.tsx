import NominateStart from "@/app/components/pages/NominateStart";
import ProgresssWrapper from "@/app/components/shared/ProgressWrapper";


export default async function Page() {
    const res = await import('@/app/api/all-nominees/route');
    const data = await (await res.GET()).json();

    return (
        <ProgresssWrapper>
            <NominateStart allNominees={data} />
        </ProgresssWrapper>
    )
}