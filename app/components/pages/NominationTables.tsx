'use client';

import { useState } from "react";
import Button from "../shared/Button";
import classNames from "classnames";
import Container from "../shared/Container";
import Table from "../shared/Table";
import { anonymousPro } from "@/app/fonts";

export default function NominationTables() {
    const [active, setActive] = useState<'current' | 'closed'>('current');

    const buttonClasses = classNames(anonymousPro.className, 'capitalize', ' text-md', '!border-0')

    return <>
        <Container className='md:max-w-full md:w-[76rem] px-0 bg-transparent'>
            <div className={"space-x-3 mb-4"}>
                <Button width="small" className={buttonClasses} variant={active === 'closed' ? 'green' : "secondary"}>Current</Button>
                <Button width="small" className={buttonClasses} variant={active === 'current' ? 'green' : 'secondary'}>Closed</Button>
            </div>
            <Table columns={[{
                title: 'Color', dataIndex: 'color', width: '20px'
            }, { title: 'Category', dataIndex: 'category' }, { title: 'Price', dataIndex: 'price' }]} dataSource={[{
                color: 'Albert Einstein Blueish Grey',
                category: 'red',
                price: '$2999'
            }]} />
        </Container>
    </>
}