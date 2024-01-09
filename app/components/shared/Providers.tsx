import { CookiesProvider } from "next-client-cookies/server";
import { cookies } from "next/headers";
import { getCookies } from "next-client-cookies/server";

export default function Providers({ children }: { children: React.ReactNode }) {
    return <CookiesProvider>
        {children}
    </CookiesProvider>
}