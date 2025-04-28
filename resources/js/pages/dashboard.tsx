import AppLayout, { Column } from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { ChartNoAxesCombined, Notebook } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl bg-[#111111] p-6 shadow-lg">
                <div className="grid auto-rows-min gap-6 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-white shadow-md shadow-gray-300/50">
                        <Column className="h-full items-center justify-center bg-gradient-to-br from-[#F5F5DC] to-[#F0F0F0] backdrop-blur-sm">
                            <Notebook size={100} className="text-gray-500" />
                            <p className="text-center text-2xl font-bold text-gray-800 drop-shadow">Data Ormawa</p>
                        </Column>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-white shadow-md shadow-gray-300/50">
                        <Column className="h-full items-center justify-center bg-gradient-to-br from-[#F5F5DC] to-[#F0F0F0] backdrop-blur-sm">
                            <ChartNoAxesCombined size={100} className="text-gray-500" />
                            <p className="text-center text-2xl font-bold text-gray-800 drop-shadow">Progress Renja</p>
                        </Column>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
