import { EOrientation } from '@/common/constant/enum';
import { ILayout, ISpace } from '@/common/constant/interface';

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
