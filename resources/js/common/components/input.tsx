import { IInput } from '@/common/constant/interface';
import { Input } from '@/components/ui/input';
import { Column } from '@/layouts/layout';

export default function CInput({ id, label, value, onChange }: IInput) {
    return (
        <Column>
            {label && <label htmlFor={id}>{label}</label>}
            <Input id={id} value={value} onChange={onChange} />
        </Column>
    );
}
