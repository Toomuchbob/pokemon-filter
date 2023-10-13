import { ChangeEvent, FunctionComponent, useState } from 'react';
import MoveField from './MoveField';
import MoveList from './MoveList';

const MoveContainer: FunctionComponent = () => {

    const [inputValue, setInputValue] = useState<string>();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInputValue(value);
    };

    return (
        <>
            <MoveField updateInputValue={onChange}/>
            <MoveList value={inputValue}/>
        </>
    );
}

export default MoveContainer;
