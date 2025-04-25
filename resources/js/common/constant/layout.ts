export enum EOrientation {
    Horizontal,
    Vertical,
}

export interface ISpace {
    orientation?: EOrientation;
    size: number;
}

export interface ILayout {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
