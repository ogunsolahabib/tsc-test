'use client';

import { useEffect, useState } from "react";
import Button from "../shared/Button";
import classNames from "classnames";
import Container from "../shared/Container";
import Table from "../shared/Table";
import { anonymousPro } from "@/app/fonts";
import isNominationCurrent from "@/app/utils/isNominationCurrent";
import ConfirmDeleteNominationModal from "./ConfirmDeleteNominationModal";
import useFormData from "@/app/hooks/useFormData";
import { useRouter } from "next/navigation";
import routePaths from "@/app/utils/routePaths";
import TableEmptyState from "./TableEmptyState";
import { Nomination } from "@/app/types/Nomination";
import TableMobile from "./TableMobile";
import NominationActionButtons from "./NominationActionButtons";
import ProtectedComponent from "../shared/ProtectedComponent";




export default function NominationTables({ data }: { data: Nomination[] }) {
    const [active, setActive] = useState<'current' | 'closed'>('current');

    const [filteredList, setFilteredList] = useState<Nomination[]>([]);

    const [showDeleteModal, setShowDeleteModal] = useState<{ visible: boolean, nomination_id: string | null }>({ visible: false, nomination_id: null });

    const { setFormData } = useFormData();

    const router = useRouter();

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

    const onDeleteClick = (nomination_id: string) => {
        setShowDeleteModal({ visible: true, nomination_id });
    }

    const onEditClick = (record: Nomination) => {
        setFormData({
            first_name: record.first_name,
            nominee_id: record.nominee_id,
            reason: record.reason,
            rating: record.process
        });

        router.push(routePaths.edit + '/' + record.nomination_id);
    }


    const columns = [
        { title: 'Nominee', dataIndex: 'name', width: '10rem' },
        { title: 'Date Submitted', dataIndex: 'date_submitted', },
        { title: 'Closing Date', dataIndex: 'closing_date', },
        { title: 'Reason', dataIndex: 'reason', },
        { title: 'Process', dataIndex: 'process', render: (value: string) => <span className="capitalize">{value.split('_').join(' ')}</span> },
        {
            title: '', dataIndex: 'nomination_id', width: '10rem', render: (value: string, record: Nomination) => <NominationActionButtons onEditClick={() => onEditClick(record)} onDeleteClick={() => onDeleteClick(value)} record={record} active={active} />
        },

    ]


    const buttonClasses = classNames(anonymousPro.className, 'capitalize', ' text-md', '!border-0');



    return <ProtectedComponent>{data.length === 0 ? <TableEmptyState /> : <>
        <Container className='md:max-w-full md:w-[76rem] px-0 !bg-transparent'>
            <h1 className="text-3xl font-bold uppercase mb-6">Your nominations</h1>
            <div className={"space-x-3 mb-4"}>
                <Button width="small" className={buttonClasses} variant={active === 'closed' ? 'green' : "secondary"} onClick={() => setActive('current')}>Current</Button>
                <Button width="small" className={buttonClasses} variant={active === 'current' ? 'green' : 'secondary'} onClick={() => setActive('closed')}>Closed</Button>
            </div>
            <Table columns={columns} dataSource={filteredList} />
            <TableMobile
                data={filteredList}
                active={active}
                renderActionButtons={(record: Nomination) => <NominationActionButtons record={record} active={active} onEditClick={() => onEditClick(record)} onDeleteClick={() => onDeleteClick(record.nomination_id)} />}
            />

            {showDeleteModal.nomination_id && <ConfirmDeleteNominationModal isOpen={showDeleteModal.visible} nomination_id={showDeleteModal.nomination_id} onClose={() => setShowDeleteModal({ visible: false, nomination_id: null })} />}
        </Container>
    </>
    }</ProtectedComponent>




}