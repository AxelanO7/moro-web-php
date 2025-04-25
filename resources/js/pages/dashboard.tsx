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
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <Column className="h-full items-center justify-center">
                            <Notebook size={200} />
                            <p className="text-center text-2xl font-semibold">Data Ormawa</p>
                        </Column>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <Column className="h-full items-center justify-center">
                            <ChartNoAxesCombined size={200} />
                            <p className="text-center text-2xl font-semibold">Progress Renja</p>
                        </Column>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
