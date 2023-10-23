import { ChangeEvent, FunctionComponent, useState } from 'react';
import { debounce } from 'lodash';
import MoveField from './Move/MoveField';
import './styles/FilterElementMove.css';

interface IFilterElementMoveProps {
}

const FilterElementMove: FunctionComponent<IFilterElementMoveProps> = ({ }) => {

    const [inputValue, setInputValue] = useState<string[]>(['', '', '', '']);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const { id } = event.target.dataset;

        setInputValue(prevValue => {
            prevValue.splice(Number(id), 1, value);
            return prevValue;
        });
    };

    // TODO: refactor container design, move list within filter, moves in separate component (MoveContainer)
    return (
        <div className='filter-element-move'>
            <MoveField className='move-input-field' data-id='0' updateInputValue={debounce(onChange, 200)} />
            <MoveField className='move-input-field' data-id='1' updateInputValue={debounce(onChange, 200)} />
            <MoveField className='move-input-field' data-id='2' updateInputValue={debounce(onChange, 200)} />
            <MoveField className='move-input-field' data-id='3' updateInputValue={debounce(onChange, 200)} />
        </div>
    );
}

export default FilterElementMove;
