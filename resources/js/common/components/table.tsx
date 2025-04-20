import { ITable } from '@/common/constant/interface';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Row } from '@/layouts/layout';
import clsx from 'clsx';
import { Pencil, Trash } from 'lucide-react';

export const EmptyDataTable = ({ colSpan = 5, message = 'Data tidak ditemukan' }: { colSpan?: number; message?: string }) => {
    return (
        <TableRow>
            <TableCell colSpan={colSpan} className={clsx('py-4 text-center')}>
                {message}
            </TableCell>
        </TableRow>
    );
};

export const CTable = ({ tableHeader, tableData, tableBody }: ITable) => {
    return (
        <Table>
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
                                <TableCell className={clsx('whitespace-nowrap')}>{index + 1}</TableCell>
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

export const EditDeleteIcon = ({
    edit,
    remove,
}: {
    edit: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    remove: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
    return (
        <TableCell>
            <Row className={clsx('justify-center gap-4 text-center')}>
                <Pencil className={clsx('cursor-pointer')} onClick={() => edit()} />
                <Trash className={clsx('cursor-pointer')} onClick={() => remove()} />
            </Row>
        </TableCell>
    );
};
