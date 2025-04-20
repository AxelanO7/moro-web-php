import { ITable } from '@/common/constant/interface';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import clsx from 'clsx';

export const EmptyDataTable = ({ colSpan = 5, message = 'Data tidak ditemukan' }: { colSpan?: number; message?: string }) => {
    return (
        <TableRow>
            <TableCell colSpan={colSpan} className="py-4 text-center">
                {message}
            </TableCell>
        </TableRow>
    );
};

export const CTable = ({ rootClassName, tableHeader, tableData, tableBody }: ITable) => {
    return (
        <Table className={rootClassName}>
            <TableHeader className={clsx('select-none')}>
                <TableRow>
                    {tableHeader.map((header, index) => (
                        <TableHead key={index} className={header.className}>
                            {header.title}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableData.length === 0 && <EmptyDataTable colSpan={tableHeader.length} />}
                {tableData.map((item, index) => (
                    <TableRow key={item.key || index}>
                        {tableBody ? (
                            tableBody(item, index)
                        ) : (
                            <>
                                <TableCell className="whitespace-nowrap">{index + 1}</TableCell>
                                {tableHeader.map((header, index) => (
                                    <TableCell key={index} className={header.className}>
                                        {item[header.key]}
                                    </TableCell>
                                ))}
                            </>
                        )}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
