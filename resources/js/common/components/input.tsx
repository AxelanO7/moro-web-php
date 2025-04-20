import { IInput } from '@/common/constant/interface';
import { Input } from '@/components/ui/input';
import { Column } from '@/layouts/layout';

export function CInput({ ...props }: IInput) {
    return (
        <Column>
            {props.label && <label htmlFor={props.id}>{props.label}</label>}
            <Input id={props.id} value={props.value} onChange={props.onChange} />
        </Column>
    );
}

export function CInputFile({ ...props }: IInput) {
    return (
        <Column>
            {props.label && <label htmlFor={props.id}>{props.label}</label>}
            <Input type="file" id={props.id} value={props.value} onChange={props.onChange} />
        </Column>
    );
}
