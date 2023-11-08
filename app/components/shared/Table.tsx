import { anonymousPro } from "@/app/fonts"

type Column = {
    title: React.ReactNode;
    dataIndex: string;
    width?: string
}
interface TableProps {
    columns: Column[];
    dataSource: any[];
}

export default function Table({ columns, dataSource }: TableProps) {
    return <div className="md:w-[76rem] relative mx-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs bg-tsc-light-grey uppercase text-black">
                <tr>
                    {columns.map(({ title, dataIndex }, i) => (
                        <th
                            key={dataIndex || i}
                            scope="col" className="px-6 py-3"
                        >
                            {title}
                        </th>))}
                </tr>
            </thead>
            <tbody className={anonymousPro.className}>
                {dataSource.map((item, i) => (
                    <tr key={i} className="bg-white border-b text-black">
                        {columns.map((column, i) => {
                            const { dataIndex } = column;
                            return (
                                <td key={dataIndex || i}
                                    className=" px-6 py-3 truncate"
                                    style={column.width ? {
                                        display: 'block',
                                        width: column.width
                                    } : undefined}
                                >
                                    {item[dataIndex]
                                    }
                                </td>
                            );
                        })}
                    </tr>
                ))}

            </tbody>
        </table>
    </div >
}