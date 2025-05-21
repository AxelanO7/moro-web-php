import { CInput } from '@/common/components/input';
import { CTable, EditDeleteIcon } from '@/common/components/table';
import { IPlan } from '@/common/constant/interface_data';
import { ApiHelpers } from '@/common/helpers/api_helper';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { TableCell } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const tableHead = [
    { title: 'Nama', key: 'name', className: 'text-center' },
    { title: 'Tujuan', key: 'objective', className: 'text-center' },
    { title: 'Periode', key: 'period', className: 'text-center' },
    { title: 'Sasaran', key: 'target', className: 'text-center' },
    { title: 'Aksi', key: 'action', className: 'text-center' },
];

const breadcrumb = [{ title: 'Renja Ormawa', href: '/plan' }];

export default function Plan() {
    const [plans, setPlans] = useState<IPlan[]>([]);
    const [plan, setPlan] = useState<IPlan>({ id: 0, name: '', objective: '', period: '', target: '' });

    const submit = () => {};
    const edit = () => {};
    const remove = () => {};

    const getPlans = () => {
        ApiHelpers.get({
            url: '/plan',
            onSuccess: (res) => {
                setPlans(res.data.data);
            },
            onError: (err) => {},
        });
    };

    useEffect(() => {
        getPlans();
    }, []);

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
                        <CInput id="name" label="Nama" onChange={(e) => setPlan({ ...plan, name: e.target.value })} value={plan.name} />
                        <CInput
                            id="objective"
                            label="Tujuan"
                            onChange={(e) => setPlan({ ...plan, objective: e.target.value })}
                            value={plan.objective}
                        />
                        <CInput id="period" label="Periode" onChange={(e) => setPlan({ ...plan, period: e.target.value })} value={plan.period} />
                        <CInput id="target" label="Sasaran" onChange={(e) => setPlan({ ...plan, target: e.target.value })} value={plan.target} />
                        <Button className={clsx('btn btn-primary')} onClick={() => submit()}>
                            Simpan
                        </Button>
                    </DialogContent>
                </Dialog>
            }
        >
            <Head title="Renja Ormawa" />
            <div className={clsx('p-4')}>
                <CTable
                    tableHeader={tableHead}
                    tableData={plans}
                    tableBody={(item: IPlan) => (
                        <>
                            <TableCell className={clsx('text-center')}>{item.name}</TableCell>
                            <TableCell className={clsx('text-center')}>{item.objective}</TableCell>
                            <TableCell className={clsx('text-center')}>{item.period}</TableCell>
                            <TableCell className={clsx('text-center')}>{item.target}</TableCell>
                            <EditDeleteIcon edit={() => edit()} remove={() => remove()} />
                        </>
                    )}
                />
            </div>
        </AppLayout>
    );
}
