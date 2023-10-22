import { FunctionComponent } from 'react';
import MoveElement from './Move/MoveElement';
import MoveContainer from './Move/MoveContainer';
//import './styles/FilterElementMove.css';

interface IFilterElementMoveProps {
}

const FilterElementMove: FunctionComponent<IFilterElementMoveProps> = ({  }) => {

    // TODO: refactor container design, move list within filter, moves in separate component (MoveContainer)
    return (
        <div className='filter-element-move'>
            <MoveContainer />
        </div>
    );
}

export default FilterElementMove;
