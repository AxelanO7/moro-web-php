import { CInput, CInputFile } from '@/common/components/input';
import { CSelect } from '@/common/components/select';
import { CTable, EditDeleteIcon } from '@/common/components/table';
import { IActivity } from '@/common/constant/interface_data';
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
    { title: 'Periode', key: 'period', className: 'text-center' },
    { title: 'Sasaran', key: 'target', className: 'text-center' },
    { title: 'Status', key: 'status', className: 'text-center' },
    { title: 'File', key: 'file', className: 'text-center w-24' },
    { title: 'Aksi', key: 'action', className: 'text-center w-24' },
];

const invoices: IActivity[] = [
    {
        id: 1,
        name: 'John Doe',
        objective: 'John Doe',
        date: 'John Doe',
        target: 'John Doe',
        status: 'pending',
        file: 'https://placehold.co/100x100',
    },
];

const breadcrumb = [{ title: 'Kegiatan Ormawa', href: '/activity' }];

const optionStatus = [
    { value: 'pending', label: 'Pending' },
    { value: 'approved', label: 'Approved' },
    { value: 'rejected', label: 'Rejected' },
];

export default function Activity() {
    const [data, setData] = useState<IActivity>({
        id: 0,
        name: '',
        objective: '',
        date: '',
        target: '',
        status: '',
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
                        <DialogHeader>Kegiatan Ormawa</DialogHeader>
                        <CInput id="name" label="Nama" onChange={(e) => setData({ ...data, name: e.target.value })} value={data.name} />
                        <CInput
                            id="objective"
                            label="Tujuan"
                            onChange={(e) => setData({ ...data, objective: e.target.value })}
                            value={data.objective}
                        />
                        <CInput id="date" label="Tanggal" onChange={(e) => setData({ ...data, date: e.target.value })} value={data.date} />
                        <CInput id="target" label="Sasaran" onChange={(e) => setData({ ...data, target: e.target.value })} value={data.target} />
                        <CSelect
                            id="status"
                            label="Status"
                            options={optionStatus}
                            onChange={(e) => setData({ ...data, status: e.target.value })}
                            value={data.status}
                        />
                        <CInputFile id="file" label="File" onChange={(e) => setData({ ...data, file: e.target.value })} value={data.file} />
                        <Button className={clsx('btn btn-primary')} onClick={() => submit()}>
                            Simpan
                        </Button>
                    </DialogContent>
                </Dialog>
            }
        >
            <Head title="Kegiatan Ormawa" />
            <div className={clsx('p-4')}>
                <CTable
                    tableHeader={tableHead}
                    tableData={invoices}
                    tableBody={(item: IActivity) => (
                        <>
                            <TableCell className={clsx('text-center')}>{item.name}</TableCell>
                            <TableCell className={clsx('text-center')}>{item.objective}</TableCell>
                            <TableCell className={clsx('text-center')}>{item.date}</TableCell>
                            <TableCell className={clsx('text-center')}>{item.target}</TableCell>
                            <TableCell className={clsx('text-center')}>{item.status}</TableCell>
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
