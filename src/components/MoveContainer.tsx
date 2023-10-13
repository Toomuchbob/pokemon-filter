import { ChangeEvent, FunctionComponent, useState } from 'react';
import MoveField from './MoveField';
import MoveList from './MoveList';
import { debounce } from 'lodash';

const MoveContainer: FunctionComponent = () => {

    const [inputValue, setInputValue] = useState<string>();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInputValue(value);
    };

    return (
        <>
            <MoveField updateInputValue={debounce(onChange, 200)} />
            <MoveList value={inputValue} />
        </>
    );
}

export default MoveContainer;
