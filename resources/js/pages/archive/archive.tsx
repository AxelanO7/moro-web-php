import AppLayout from '@/layouts/app-layout';
import { Column } from '@/layouts/layout';
import { Files } from 'lucide-react';

const breadcrumbs = [
    {
        title: 'Archive',
        href: '/archive',
    },
];

export default function Archive() {
    const data = [
        {
            period: '2024-2025',
        },
        {
            period: '2023-2024',
        },
        {
            period: '2022-2023',
        },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="m-4 grid grid-cols-1 gap-4 bg-black md:grid-cols-2 lg:grid-cols-3">
                {data.map((item, index) => (
                    <Column className="transform rounded-lg bg-gradient-to-r from-blue-500 to-green-500 p-8 shadow-lg transition-transform hover:scale-105 dark:from-gray-800 dark:to-gray-600">
                        <div className="flex flex-col items-center justify-center gap-4">
                            <Files className="text-white" size={80} />
                            <h3 className="text-lg font-semibold text-white">{item.period}</h3>
                        </div>
                        <a
                            key={index}
                            href={`/archive/${item.period}`}
                            className="mt-2 block w-full rounded-lg bg-white px-4 py-2 text-center text-sm font-medium text-black hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:bg-gray-300"
                        >
                            Explore
                        </a>
                    </Column>
                ))}
            </div>
        </AppLayout>
    );
}
