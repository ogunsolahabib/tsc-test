import { headers } from "next/headers";
import NominationTables from "../components/pagesComponents/NominationTables";
import ProtectedPageWrapper from "../components/shared/ProtectedPageWrapper";

export default async function Page(props: any) {
    const res = await import('@/app/api/nominations/route');
    const data = await (await res.GET()).json();

    return <ProtectedPageWrapper>
        <main className="px-8">
            <NominationTables data={data} />
        </main>
    </ProtectedPageWrapper>
}