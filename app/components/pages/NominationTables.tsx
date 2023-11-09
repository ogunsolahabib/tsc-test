'use client';

import { useEffect, useState } from "react";
import Button from "../shared/Button";
import classNames from "classnames";
import Container from "../shared/Container";
import Table from "../shared/Table";
import { anonymousPro } from "@/app/fonts";
import isNominationCurrent from "@/app/utils/isNominationCurrent";

interface Nomination {
    nomination_id: string;
    date_submitted: string;
    closing_date: string;
    reason: string;
    process: string;
}

const columns = [{ title: 'Nominee', dataIndex: 'nominee' },
{ title: 'Date Submitted', dataIndex: 'date_submitted' },
{ title: 'Closing Date', dataIndex: 'closing_date' }, { title: 'Reason', dataIndex: 'reason' }, { title: 'Process', dataIndex: 'process' }]

export default function NominationTables({ data }: { data: Nomination[] }) {
    const [active, setActive] = useState<'current' | 'closed'>('current');

    const [filteredList, setFilteredList] = useState<Nomination[]>([]);


    useEffect(() => {
        const filtered = data.filter((nomination) => {
            if (active === 'current') {
                return isNominationCurrent(nomination.closing_date);
            } else {

                return !isNominationCurrent(nomination.closing_date);
            }
        })
        setFilteredList(filtered);
    }, [active, data]);

    console.log(filteredList);

    const buttonClasses = classNames(anonymousPro.className, 'capitalize', ' text-md', '!border-0');

    return <>
        <Container className='md:max-w-full md:w-[76rem] px-0 !bg-transparent'>
            <div className={"space-x-3 mb-4"}>
                <Button width="small" className={buttonClasses} variant={active === 'closed' ? 'green' : "secondary"} onClick={() => setActive('current')}>Current</Button>
                <Button width="small" className={buttonClasses} variant={active === 'current' ? 'green' : 'secondary'} onClick={() => setActive('closed')}>Closed</Button>
            </div>
            <Table columns={columns} dataSource={filteredList} />
        </Container>
    </>
}