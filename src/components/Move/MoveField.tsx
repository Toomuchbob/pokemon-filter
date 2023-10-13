import { ChangeEvent, FunctionComponent } from 'react';

interface IMoveFieldProps {
    updateInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

const MoveField: FunctionComponent<IMoveFieldProps> = ({ updateInputValue }) => {

    return (
        <input type='text' onChange={updateInputValue}/>
    );
}

export default MoveField;
