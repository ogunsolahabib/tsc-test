import Overview from "@/app/components/pages/Overview";
import ProgresssWrapper from "@/app/components/shared/ProgressWrapper";


export default function Page({ params }: { params: { nomination_id: string } }) {

    return <ProgresssWrapper>
        <Overview nomination_id={params.nomination_id} />
    </ProgresssWrapper>
}