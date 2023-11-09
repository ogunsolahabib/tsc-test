import NominationTables from "../components/pages/NominationTables";

export default function Page() {

    return <main className="md: px-8 py-20">
        <h1 className="text-3xl font-bold uppercase mb-6">Your nominations</h1>
        <NominationTables />
    </main>
}