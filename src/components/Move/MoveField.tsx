import { FocusEvent, ChangeEvent, FunctionComponent } from 'react';

interface IMoveFieldProps {
    updateInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
    focusTarget: (event: FocusEvent<HTMLInputElement>) => void;
    className?: string;
    id?: string;
}

const MoveField: FunctionComponent<IMoveFieldProps> = ({ focusTarget, updateInputValue, className, id }) => {

    return (
        <input className={className} type='text' id={id} onChange={updateInputValue} onFocus={focusTarget} />
    );
}

export default MoveField;
