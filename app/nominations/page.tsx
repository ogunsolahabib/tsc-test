import NominationTables from "../components/pages/NominationTables";

export default async function Page() {
    const res = await import('@/app/api/nominations/route');
    const data = await (await res.GET()).json();

    return <main className="px-8 py-10 md:py-20">
        <NominationTables data={data} />
    </main>
}