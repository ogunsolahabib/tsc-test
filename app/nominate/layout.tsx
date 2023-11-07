import Container from "../components/shared/Container"
import Progress from "../components/shared/Progress"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (<main className="flex min-h-screen flex-col items-center justify-between p-8">
        <Container>
            <div className="p-5">
                <Progress value={10} />
            </div>
            {children}
        </Container></main >
    )
}