import Inbox from "@/app/icons/Inbox";
import Button from "../shared/Button";
import Container from "../shared/Container";

export default function TableEmptyState() {
    return <Container className="flex flex-col items-center justify-center  min-h-[400px]">


        <div className="flex flex-col items-center justify-center gap-8 md:w-[26rem] m-auto p-4 h-40">
            <span className="text-[20rem] text-tsc-mid-grey"><Inbox width={88} height={88} /></span>


            <p className="uppercase font-semibold text-center text-2xl">Once you submit a nomination, you will be able to view and edit it here.</p>

            <Button variant="primary">Create new nomination</Button>
        </div> </Container>
}