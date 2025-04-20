import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Column } from '@/layouts/layout';

export function CSelect({ ...props }) {
    return (
        <Column>
            {props.label && <label htmlFor={props.id}>{props.label}</label>}
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder={props.placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {props.options.map((option: any) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </Column>
    );
}
