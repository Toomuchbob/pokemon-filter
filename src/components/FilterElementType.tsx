import { Dex, TypeName } from '@pkmn/dex';
import { ChangeEvent, FunctionComponent } from 'react';

interface IFilterElementTypeProps {
    handleType: (value: [TypeName] | [TypeName, TypeName]) => void;
}

const FilterElementType: FunctionComponent<IFilterElementTypeProps> = ({ handleType }) => {

    // TODO: create custom option box using Type images
    const typeList = Dex.types.all()
        .map(type => <option value={type.name}>{type.name}</option>);

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        handleType([value as TypeName]);
    };

    return (
        <div className=''>
            <select name='filter-type' onChange={onChange}>
            <option value='???'>???</option>
                {typeList}
            </select>
        </div>
    );
}

export default FilterElementType;
