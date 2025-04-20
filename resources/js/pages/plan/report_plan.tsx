import { CInput, CInputFile } from '@/common/components/input';
import { CTable, EditDeleteIcon } from '@/common/components/table';
import { IReportPlan } from '@/common/constant/interface_data';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { TableCell } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import clsx from 'clsx';
import { useState } from 'react';

const tableHead = [
    { title: 'Nama', key: 'name', className: 'text-center' },
    { title: 'Periode', key: 'period', className: 'text-center' },
    { title: 'Tidak Terlaksana', key: 'status_unimplemented', className: 'text-center' },
    { title: 'Penggunaan Anggaran', key: 'file_budget', className: 'text-center w-24' },
    { title: 'Dokumentasi', key: 'file_documentation', className: 'text-center w-24' },
    { title: 'LPJ', key: 'file_resposibility', className: 'text-center w-24' },
    { title: 'Aksi', key: 'action', className: 'text-center w-24' },
];

const invoices: IReportPlan[] = [
    {
        id: 1,
        organization_name: 'Ormawa 1',
        period: '2023-2024',
        status_unimplemented: 'John Doe',
        file_budget: 'https://placehold.co/100x100',
        file_documentation: 'https://placehold.co/100x100',
        file_resposibility: 'https://placehold.co/100x100',
    },
];

const breadcrumb = [{ title: 'Laporan Renja Ormawa', href: '/report_plan' }];

export default function ReportPlan() {
    const [data, setData] = useState<IReportPlan>({
        id: 0,
        organization_name: '',
        period: '',
        status_unimplemented: '',
        file_budget: '',
        file_documentation: '',
        file_resposibility: '',
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
                        <DialogHeader>Renja Ormawa</DialogHeader>
                        <CInput
                            id="organization_name"
                            label="Nama Ormawa"
                            onChange={(e) => setData({ ...data, organization_name: e.target.value })}
                            value={data.organization_name}
                        />
                        <CInput id="period" label="Periode" onChange={(e) => setData({ ...data, period: e.target.value })} value={data.period} />
                        <CInput
                            id="status_unimplemented"
                            label="Tidak Terlaksana"
                            onChange={(e) => setData({ ...data, status_unimplemented: e.target.value })}
                            value={data.status_unimplemented}
                        />
                        <CInputFile
                            id="file_budget"
                            label="Penggunaan Anggaran"
                            onChange={(e) => setData({ ...data, file_budget: e.target.value })}
                            value={data.file_budget}
                        />
                        <CInputFile
                            id="file_documentation"
                            label="Dokumentasi"
                            onChange={(e) => setData({ ...data, file_documentation: e.target.value })}
                            value={data.file_documentation}
                        />
                        <CInputFile
                            id="file_resposibility"
                            label="LPJ"
                            onChange={(e) => setData({ ...data, file_resposibility: e.target.value })}
                            value={data.file_resposibility}
                        />
                        <Button className={clsx('btn btn-primary')} onClick={() => submit()}>
                            Simpan
                        </Button>
                    </DialogContent>
                </Dialog>
            }
        >
            <Head title="Laporan Renja Ormawa" />
            <div className={clsx('p-4')}>
                <CTable
                    tableHeader={tableHead}
                    tableData={invoices}
                    tableBody={(item: IReportPlan) => (
                        <>
                            <TableCell className={clsx('text-center')}>{item.organization_name}</TableCell>
                            <TableCell className={clsx('text-center')}>{item.period}</TableCell>
                            <TableCell className={clsx('text-center')}>{item.status_unimplemented}</TableCell>
                            <TableCell className={clsx('text-center')}>{item.file_budget}</TableCell>
                            <TableCell className={clsx('text-center')}>{item.file_documentation}</TableCell>
                            <TableCell className={clsx('text-center')}>{item.file_resposibility}</TableCell>
                            <EditDeleteIcon edit={() => edit()} remove={() => remove()} />
                        </>
                    )}
                />
            </div>
        </AppLayout>
    );
}
