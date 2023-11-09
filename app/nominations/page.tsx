import NominationTables from "../components/pages/NominationTables";

export default async function Page() {
    const res = await import('../api/nominations/route');
    const data = await (await res.GET()).json();
    const nominations = await data.data;

    return <main className="md: px-8 py-20">
        <h1 className="text-3xl font-bold uppercase mb-6">Your nominations</h1>
        <NominationTables data={nominations} />
    </main>
}