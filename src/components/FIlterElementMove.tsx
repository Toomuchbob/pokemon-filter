import { FocusEvent, MouseEvent, FunctionComponent, useState, ChangeEvent, useRef, useEffect } from 'react';
import { debounce } from 'lodash';
import MoveField from './Move/MoveField';
import './styles/FilterElementMove.css';
import MoveList from './Move/MoveList';

interface IFilterElementMoveProps {
}

const FilterElementMove: FunctionComponent<IFilterElementMoveProps> = ({ }) => {

    const [selectedMoves, setSelectedMoves] = useState<string[]>(['', '', '', '']);
    const [currentTargetValue, setCurrentTargetValue] = useState<string>('');

    let focusedInput = useRef<HTMLInputElement | null>(null);

    const onClick = (event: MouseEvent<HTMLInputElement>) => {
        const { id } = event.currentTarget;

        if (focusedInput.current) {
            focusedInput.current.value = id;
        };
        setSelectedMoves(prevValue => {
            return prevValue?.splice(prevValue.indexOf(id), 1, id);
        });
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setSelectedMoves(prevValue => {
            return prevValue?.splice(prevValue.indexOf(value), 1, value);
        });
    };

    const focusTarget = (event: FocusEvent<HTMLInputElement>) => {
        focusedInput.current = event.target;
        setCurrentTargetValue(event.target.value);
        
    };

    // TODO: refactor container design, move list within filter, moves in separate component (MoveContainer)
    return (
        <div className='filter-element-move'>
            <div className='move-list'>
                <MoveField className='move-input-field' updateInputValue={debounce(onChange, 200)} focusTarget={focusTarget} />
                <MoveField className='move-input-field' updateInputValue={debounce(onChange, 200)} focusTarget={focusTarget} />
                <MoveField className='move-input-field' updateInputValue={debounce(onChange, 200)} focusTarget={focusTarget} />
                <MoveField className='move-input-field' updateInputValue={debounce(onChange, 200)} focusTarget={focusTarget} />
            </div>
            <MoveList onClick={onClick} value={focusedInput.current?.value} />
        </div>
    );
}

export default FilterElementMove;
