import CInput from '@/common/components/input';
import { CTable, EditDeleteIcon } from '@/common/components/table';
import { IUser } from '@/common/constant/interface_data';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { TableCell } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const tableHead = [
    { title: 'Nama', key: 'name', className: 'text-center' },
    { title: 'Email', key: 'email', className: 'text-center' },
    { title: 'Username', key: 'Password', className: 'text-center' },
    { title: 'Password', key: 'username', className: 'text-center' },
    { title: 'Aksi', key: 'action', className: 'text-center' },
];

const invoices: IUser[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john_doe@example.com',
        username: 'user1',
        password: 'password1',
    },
];

const breadcrumb = [{ title: 'User', href: '/user' }];

export default function User() {
    const [data, setData] = useState<IUser>({
        id: 0,
        name: '',
        email: '',
        username: '',
        password: '',
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
                        <DialogHeader>User</DialogHeader>
                        <CInput id="name" label="Nama" onChange={(e) => setData({ ...data, name: e.target.value })} value={data?.name ?? ''} />
                        <CInput id="email" label="Email" onChange={(e) => setData({ ...data, email: e.target.value })} value={data?.email ?? ''} />
                        <CInput
                            id="username"
                            label="Username"
                            onChange={(e) => setData({ ...data, username: e.target.value })}
                            value={data?.username ?? ''}
                        />
                        <CInput
                            id="password"
                            label="Password"
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            value={data?.password ?? ''}
                        />
                        <Button className="btn btn-primary" onClick={() => submit()}>
                            Simpan
                        </Button>
                    </DialogContent>
                </Dialog>
            }
        >
            <Head title="User" />
            <CTable
                rootClassName="p-4"
                tableHeader={tableHead}
                tableData={invoices}
                tableBody={(item: IUser) => (
                    <>
                        <TableCell className="text-center">{item.name}</TableCell>
                        <TableCell className="text-center">{item.email}</TableCell>
                        <TableCell className="text-center">{item.username}</TableCell>
                        <TableCell className="text-center">{item.password}</TableCell>
                        <EditDeleteIcon edit={() => edit()} remove={() => remove()} />
                    </>
                )}
            />
        </AppLayout>
    );
}
