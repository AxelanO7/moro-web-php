import { CInput } from '@/common/components/input';
import { CTable, EditDeleteIcon } from '@/common/components/table';
import { IReportActivity } from '@/common/constant/interface_data';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { TableCell } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import clsx from 'clsx';
import { useState } from 'react';

const tableHead = [
    { title: 'Nama', key: 'name', className: 'text-center' },
    { title: 'Tujuan', key: 'objective', className: 'text-center' },
    { title: 'Tanggal Mulai', key: 'start_date', className: 'text-center' },
    { title: 'Tanggal Selesai', key: 'end_date', className: 'text-center' },
    { title: 'File', key: 'file', className: 'text-center w-24' },
    { title: 'Aksi', key: 'action', className: 'text-center w-24' },
];

const invoices: IReportActivity[] = [
    {
        id: 1,
        name: 'John Doe',
        objective: 'John Doe',
        start_date: '01-01-2025',
        end_date: '30-01-2025',
        file: 'https://placehold.co/100x100',
    },
];

const breadcrumb = [
    {
        title: 'Kegiatan Ormawa',
        href: '/activity',
    },
    { title: 'Laporan Kegiatan Ormawa', href: '/report-activity' },
];

export default function ReportActivity() {
    const [data, setData] = useState<IReportActivity>({
        id: 0,
        name: '',
        objective: '',
        start_date: '',
        end_date: '',
        file: '',
    });

    const submit = () => {};
    const edit = () => {};
    const remove = () => {};

    return (
        <AppLayout
            breadcrumbs={breadcrumb}
            headerButton={
                <Dialog>
                    <DialogTrigger>
                        <Button className={clsx('btn btn-primary')}>Tambah</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>Laporan Kegiatan Ormawa</DialogHeader>
                        <CInput id="name" label="Nama" onChange={(e) => setData({ ...data, name: e.target.value })} value={data.name} />
                        <CInput
                            id="objective"
                            label="Tujuan"
                            onChange={(e) => setData({ ...data, objective: e.target.value })}
                            value={data.objective}
                        />
                        <CInput
                            id="start_date"
                            label="Tanggal Mulai"
                            onChange={(e) => setData({ ...data, start_date: e.target.value })}
                            value={data.start_date}
                        />
                        <CInput
                            id="end_date"
                            label="Tanggal Selesai"
                            onChange={(e) => setData({ ...data, end_date: e.target.value })}
                            value={data.end_date}
                        />
                        <CInput id="file" label="File" onChange={(e) => setData({ ...data, file: e.target.value })} value={data.file} />

                        <Button className={clsx('btn btn-primary')} onClick={() => submit()}>
                            Simpan
                        </Button>
                    </DialogContent>
                </Dialog>
            }
        >
            <Head title="Laporan Kegiatan Ormawa" />
            <div className={clsx('p-4')}>
                <CTable
                    tableHeader={tableHead}
                    tableData={invoices}
                    tableBody={(item: IReportActivity) => (
                        <>
                            <TableCell className={clsx('text-center')}>{item.name}</TableCell>
                            <TableCell className={clsx('text-center')}>{item.objective}</TableCell>
                            <TableCell className={clsx('text-center')}>{item.start_date}</TableCell>
                            <TableCell className={clsx('text-center')}>{item.end_date}</TableCell>
                            <TableCell>
                                <img src={item.file} alt="file" width={100} height={100} className={clsx('object-cover')} />
                            </TableCell>
                            <EditDeleteIcon edit={() => edit()} remove={() => remove()} />
                        </>
                    )}
                />
            </div>
        </AppLayout>
    );
}
