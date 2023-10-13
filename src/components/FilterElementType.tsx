import { Dex, Type } from '@pkmn/dex';
import { ChangeEvent, FunctionComponent, useState } from 'react';
import MoveImage from './Move/MoveImage';


const FilterElementType: FunctionComponent = ({ }) => {

    const [selectedProperty, setSelectedProperty] = useState<string>();

    // TODO: create custom option box using Type images
    const typeList = Dex.types.all()
        .map(type => <option value={type.name}>{type.name}</option>);

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setSelectedProperty(value);
        console.log(value);
    };

    return (
        <div className=''>
            <select name='filter-type' onChange={onChange}>
                {typeList}
            </select>
        </div>
    );
}

export default FilterElementType;
