import NominationTables from "../components/pagesComponents/NominationTables";

export default async function Page() {
    const res = await import('@/app/api/nominations/route');
    const data = await (await res.GET()).json();

    return <main className="px-8">
        <NominationTables data={data} />
    </main>
}