import { Dex, TypeName } from '@pkmn/dex';
import { MouseEvent, FunctionComponent } from 'react';
import MoveImage from './Move/MoveImage';
import './styles/FilterElementType.css';

interface IFilterElementTypeProps {
    handleType: (value: TypeName) => void;
}

const FilterElementType: FunctionComponent<IFilterElementTypeProps> = ({ handleType }) => {

    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        const { value, classList } = event.currentTarget;
        handleType(value as TypeName);
        
        classList.toggle('type-button-pressed');
    };

    const typeList = Dex.types.all()
    .map((type, index) =>
        <button className='type-button' value={type.name} onClick={onClick} key={index}>
            <MoveImage type={type.name} />
        </button>
    );

    return (
        <div className='filter-element-type'>
            {typeList}
        </div>
    );
}

export default FilterElementType;
