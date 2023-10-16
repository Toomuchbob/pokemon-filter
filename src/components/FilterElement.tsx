import { ChangeEvent, FunctionComponent, ReactNode, useState } from 'react';
import './styles/FilterElement.css'
import FilterElementType from './FilterElementType';
import PokemonContainer from './Pokemon/PokemonContainer';
import { TypeName } from '@pkmn/dex';

interface IFilterElementProps {
}

const FilterElement: FunctionComponent<IFilterElementProps> = ({ }) => {
    const [property, setProperty] = useState<string>();
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
        setProperty(value);
    };

    const renderFilterComponentByProperty = (): ReactNode => {
        switch (property) {
            case 'ability':
                return null;
            case 'level':
                return null;
            case 'move':
                return null;
            case 'stat':
                return null;
            case 'type':
                return <FilterElementType handleType={handleType} type={type}/>;
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
                {renderFilterComponentByProperty()}
            </div>
            {<PokemonContainer field={type} />}
        </>
    );
}

export default FilterElement;
