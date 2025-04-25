import { EOrientation, ILayout, ISpace } from '@/common/constant/layout';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    headerButton?: React.ReactNode;
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
        {children}
    </AppLayoutTemplate>
);

export const Row = ({ children, className = '', onClick }: ILayout) => {
    return (
        <div className={`flex ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export const Column = ({ children, className = '' }: ILayout) => {
    return <div className={`flex flex-col ${className}`}>{children}</div>;
};

export const Shrink = ({ orientation = EOrientation.Vertical, size }: ISpace) => {
    return <div className={orientation === EOrientation.Vertical ? `h-${size}` : `w-${size}`} />;
};
