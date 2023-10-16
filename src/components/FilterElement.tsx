import { ChangeEvent, FunctionComponent, ReactNode, useState } from 'react';
import './styles/FilterElement.css'
import FilterElementType from './FilterElementType';
import PokemonContainer from './Pokemon/PokemonContainer';
import { TypeName } from '@pkmn/dex';

interface IFilterElementProps {
}

const FilterElement: FunctionComponent<IFilterElementProps> = ({ }) => {

    const [selectedProperty, setSelectedProperty] = useState<ReactNode>();
    const [type, setType] = useState<TypeName[]>([]);

    const handleType = (value: TypeName) => {
        setType(prevValue => {
            if (prevValue.length > 1) {
                return [value];
            } else {
                return [...prevValue, value];
            }
        });
    }

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;

        switch (value) {
            case 'ability':
                setSelectedProperty(null);
                break;
            case 'level':
                setSelectedProperty(null);
                break;
            case 'move':
                setSelectedProperty(null);
                break;
            case 'stat':
                setSelectedProperty(null);
                break;
            case 'type':
                setSelectedProperty(<FilterElementType handleType={handleType} />);
                break;
            default:
                break;
        }
    };

    // TODO: store values in enum library
    return (
        <>
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
            {type ? <PokemonContainer field={type} /> : null}
        </>
    );
}

export default FilterElement;
