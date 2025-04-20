import CInput from '@/common/components/input';
import { CTable } from '@/common/components/table';
import { IPlan } from '@/common/constant/interface_data';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { TableCell } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Pencil, Trash } from 'lucide-react';
import { useState } from 'react';

const tableHead = [
    { title: 'Nama', key: 'name', className: 'text-center' },
    { title: 'Tujuan', key: 'objective', className: 'text-center' },
    { title: 'Periode', key: 'period', className: 'text-center' },
    { title: 'Sasaran', key: 'target', className: 'text-center' },
    { title: 'Aksi', key: 'action', className: 'text-center' },
];

const invoices: IPlan[] = [
    {
        id: 1,
        name: 'John Doe',
        objective: 'John Doe',
        period: 'John Doe',
        target: 'John Doe',
    },
];

const breadcrumb = [{ title: 'Renja Ormawa', href: '/plan' }];

export default function Plan() {
    const [data, setData] = useState<IPlan>({
        id: 0,
        name: '',
        objective: '',
        period: '',
        target: '',
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
                        <Button className="btn btn-primary">Tambah</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <CInput id="name" label="Nama" onChange={(e) => setData({ ...data, name: e.target.value })} value={data?.name ?? ''} />
                        <CInput
                            id="objective"
                            label="Tujuan"
                            onChange={(e) => setData({ ...data, objective: e.target.value })}
                            value={data?.objective ?? ''}
                        />
                        <CInput
                            id="period"
                            label="Periode"
                            onChange={(e) => setData({ ...data, period: e.target.value })}
                            value={data?.period ?? ''}
                        />
                        <CInput
                            id="target"
                            label="Sasaran"
                            onChange={(e) => setData({ ...data, target: e.target.value })}
                            value={data?.target ?? ''}
                        />
                        <Button className="btn btn-primary" onClick={() => submit()}>
                            Simpan
                        </Button>
                    </DialogContent>
                </Dialog>
            }
        >
            <Head title="Plan" />
            <CTable
                rootClassName="p-4"
                tableHeader={tableHead}
                tableData={invoices}
                tableBody={(item: IPlan) => (
                    <>
                        <TableCell className="text-center">{item.name}</TableCell>
                        <TableCell className="text-center">{item.objective}</TableCell>
                        <TableCell className="text-center">{item.period}</TableCell>
                        <TableCell className="text-center">{item.target}</TableCell>
                        <TableCell className="flex justify-center gap-8">
                            <Pencil className="cursor-pointer" onClick={() => edit()} />
                            <Trash className="cursor-pointer" onClick={() => remove()} />
                        </TableCell>
                    </>
                )}
            />
        </AppLayout>
    );
}
