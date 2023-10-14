import { Dex } from '@pkmn/dex';
import { ChangeEvent, FunctionComponent } from 'react';

interface IFilterElementTypeProps {
    bar: (value: string) => void;
}

const FilterElementType: FunctionComponent<IFilterElementTypeProps> = ({ bar }) => {

    // TODO: create custom option box using Type images
    const typeList = Dex.types.all()
        .map(type => <option value={type.name}>{type.name}</option>);

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        bar(value);
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
