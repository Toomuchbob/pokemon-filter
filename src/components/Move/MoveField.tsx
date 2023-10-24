import { FocusEvent, ChangeEvent, FunctionComponent } from 'react';

interface IMoveFieldProps {
    updateInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    focusTarget: (event: FocusEvent<HTMLInputElement>) => void;
}

const MoveField: FunctionComponent<IMoveFieldProps> = ({ focusTarget, updateInputValue, className}) => {

    return (
        <input className={className} type='text' onChange={updateInputValue} onFocus={focusTarget}/>
    );
}

export default MoveField;
