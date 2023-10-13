import { ChangeEvent, FunctionComponent, ReactNode, useState } from 'react';
import './styles/FilterElement.css'
import FilterElementType from './FilterElementType';

interface IFilterElementProps {
}

const FilterElement: FunctionComponent<IFilterElementProps> = ({ }) => {

    const [selectedProperty, setSelectedProperty] = useState<ReactNode>();

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;

        switch (value) {
            case 'ability':
                setSelectedProperty(<FilterElementType />);
                break;
            case 'level':
                setSelectedProperty(<FilterElementType />);
                break;
            case 'move':
                setSelectedProperty(<FilterElementType />);
                break;
            case 'stat':
                setSelectedProperty(<FilterElementType />);
                break;
            case 'type':
                setSelectedProperty(<FilterElementType />);
                break;
            default:
                break;
        }
    };

    // TODO: store values in enum library
    return (
        <div className='filter-element'>
            <select name='filter-property' onChange={onChange}>
                <option value='ability'>Ability</option>
                <option value='level'>Level</option>
                <option value='move'>Move</option>
                <option value='stat'>Stat</option>
                <option value='type'>Type</option>
            </select>
            {selectedProperty}
        </div>
    );
}

export default FilterElement;
