import { Dex, TypeName } from '@pkmn/dex';
import { MouseEvent, FunctionComponent, useState } from 'react';
import MoveImage from './Move/MoveImage';
import './styles/FilterElementType.css';
import { uniqueId } from 'lodash';

interface IFilterElementTypeProps {
    handleType: (value: TypeName) => void;
}

const FilterElementType: FunctionComponent<IFilterElementTypeProps> = ({ handleType }) => {

    //TODO: clean up css functionality for handling type choices
    const [numberPicked, setNumberPicked] = useState<number>(0);

    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        const { value, classList } = event.currentTarget;

        handleType(value as TypeName);
        setNumberPicked(prevNumberPicked => {
            if (prevNumberPicked > 1) {
                classList.remove('type-button-pressed');
                return 0;
            } else {
                classList.add('type-button-pressed');
                return prevNumberPicked++;
            }
        });
    };

    const typeList = Dex.types.all()
    .map(type =>
        <button className='type-button' value={type.name} onClick={onClick} key={uniqueId()}>
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
