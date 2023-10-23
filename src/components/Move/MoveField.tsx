import { ChangeEvent, FunctionComponent } from 'react';

interface IMoveFieldProps {
    updateInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const MoveField: FunctionComponent<IMoveFieldProps> = ({ updateInputValue , className}) => {

    return (
        <input className={className} type='text' onChange={updateInputValue}/>
    );
}

export default MoveField;
