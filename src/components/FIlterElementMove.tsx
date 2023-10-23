import { ChangeEvent, FunctionComponent, useState } from 'react';
import { debounce } from 'lodash';
import MoveField from './Move/MoveField';
import './styles/FilterElementMove.css';
import MoveList from './Move/MoveList';

interface IFilterElementMoveProps {
}

const FilterElementMove: FunctionComponent<IFilterElementMoveProps> = ({ }) => {

    const [selectedMoves, setSelectedMoves] = useState<string[]>(['', '', '', '']);
    const [currentInput, setCurrentInput] = useState<string>('');


    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setCurrentInput(value);
        setSelectedMoves(prevValue => {
            return prevValue?.splice(prevValue.indexOf(value), 1, value);
        });
    };

    // TODO: refactor container design, move list within filter, moves in separate component (MoveContainer)
    return (
        <>
        <div className='filter-element-move'>
            <MoveField className='move-input-field' updateInputValue={debounce(onChange, 200)} />
            <MoveField className='move-input-field' updateInputValue={debounce(onChange, 200)} />
            <MoveField className='move-input-field' updateInputValue={debounce(onChange, 200)} />
            <MoveField className='move-input-field' updateInputValue={debounce(onChange, 200)} />
        </div>
        <MoveList value={currentInput} />
        </>
    );
}

export default FilterElementMove;
