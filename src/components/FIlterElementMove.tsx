import {
    FocusEvent,
    MouseEvent,
    FunctionComponent,
    useState,
    ChangeEvent,
    useRef,
    Dispatch,
    SetStateAction
} from 'react';
import { debounce } from 'lodash';
import MoveField from './Move/MoveField';
import MoveList from './Move/MoveList';
import './styles/FilterElementMove.css';

interface IFilterElementMoveProps {
    setSelectedMoves: Dispatch<SetStateAction<string[]>>;
}

const FilterElementMove: FunctionComponent<IFilterElementMoveProps> = ({ setSelectedMoves }) => {

    const [currentTargetValue, setCurrentTargetValue] = useState<string>('');
    const [currentTargetPreviousValue, setCurrentTargetPreviousValue] = useState<string>('');

    let focusedInput = useRef<HTMLInputElement | null>(null);

    const onClick = (event: MouseEvent<HTMLDivElement>) => {
        const moveNameFromId = event.currentTarget.id;
        const focusedInputId = focusedInput.current?.id;

        setCurrentTargetValue(moveNameFromId);

        if (focusedInput.current) {
            focusedInput.current.value = moveNameFromId;
        };
        setSelectedMoves(moves => {
            moves?.splice(Number(focusedInputId), 1, moveNameFromId);
            return [...moves];
        });
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const focusedInputId = focusedInput.current?.id;
        setCurrentTargetValue(value);

        setSelectedMoves(moves => {
            moves?.splice(Number(focusedInputId), 1, value);
            return [...moves];
        });
    };

    const focusTarget = (event: FocusEvent<HTMLInputElement>) => {
        const { value } = event.target;

        focusedInput.current = event.target;
        focusedInput.current ? setCurrentTargetPreviousValue(value) : setCurrentTargetPreviousValue('');
    };

    // TODO: refactor container design, move list within filter, moves in separate component (MoveContainer)
    return (
        <div className='filter-element-move'>
            <div className='move-list'>
                <MoveField className='move-input-field' id='0' updateInputValue={debounce(onChange, 200)} focusTarget={focusTarget} />
                <MoveField className='move-input-field' id='1' updateInputValue={debounce(onChange, 200)} focusTarget={focusTarget} />
                <MoveField className='move-input-field' id='2' updateInputValue={debounce(onChange, 200)} focusTarget={focusTarget} />
                <MoveField className='move-input-field' id='3' updateInputValue={debounce(onChange, 200)} focusTarget={focusTarget} />
            </div>
            <MoveList onClick={onClick} value={currentTargetValue} />
        </div>
    );
}

export default FilterElementMove;
