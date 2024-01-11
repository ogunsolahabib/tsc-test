import Container from "../components/shared/Container"
import ProtectedPageWrapper from "../components/shared/ProtectedPageWrapper";


export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <ProtectedPageWrapper>
            <main className="md:px-8 md:py-12">
                <Container>
                    {children}
                </Container>
            </main >
        </ProtectedPageWrapper>
    )
}