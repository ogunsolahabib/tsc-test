import { anonymousPro } from "@/app/fonts"

type Column = {
    title: React.ReactNode;
    dataIndex: string;
    width?: string;
    render?: (value: any, record?: any) => React.ReactNode;
}
interface TableProps {
    columns: Column[];
    dataSource: any[];
}

export default function Table({ columns, dataSource }: TableProps) {
    return <div className="hidden md:block relative mx-auto w-full">
        <table className="w-full table-fixed text-sm text-left text-gray-500 max-w-full overflow-x-auto">
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
                            const { dataIndex, render } = column;
                            return (
                                <td key={dataIndex || i}
                                    className=" px-6 py-3 truncate"
                                    style={column.width ? {
                                        display: 'block',
                                        width: column.width
                                    } : undefined}
                                >
                                    {render ? render(item[dataIndex], item) : item[dataIndex]
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