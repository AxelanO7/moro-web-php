import { EOrientation } from "@/common/constant/enum";
export interface ILayout {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export interface ITable {
    tableHeader: { title: string; key: string; className: string }[];
    tableBody?: any;
    tableData: any[];
}

export interface ISpace {
    orientation?: EOrientation;
    size: number;
}

export interface IInput {
    id: string;
    label?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    prefix?: any;
}

export interface ISelect {
    id: string;
    label?: string;
    value: string;
    options: { value: string; label: string }[];
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
