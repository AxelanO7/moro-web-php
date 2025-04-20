import { IInput } from '@/common/constant/interface';
import { Input } from '@/components/ui/input';
import { Column } from '@/layouts/layout';

export function CInput({ id, label, value, onChange }: IInput) {
    return (
        <Column>
            {label && <label htmlFor={id}>{label}</label>}
            <Input id={id} value={value} onChange={onChange} />
        </Column>
    );
}

export function CInputFile({ id, label, value, onChange }: IInput) {
    return (
        <Column>
            {label && <label htmlFor={id}>{label}</label>}
            <Input type="file" id={id} value={value} onChange={onChange} />
        </Column>
    );
}
