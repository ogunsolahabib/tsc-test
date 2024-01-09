import getToken from "@/app/utils/getToken";
import routePaths from "@/app/utils/routePaths";
import { redirect } from "next/navigation";
import { headers } from 'next/headers';
import Redirection from "./Redirection";


export default function ProtectedPageWrapper({ children }: { children: React.ReactNode }) {
    if (!getToken()) {
        return <Redirection />
    }
    return <>{children}</>
}