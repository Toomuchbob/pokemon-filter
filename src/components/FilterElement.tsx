import { ChangeEvent, FunctionComponent, ReactNode, useEffect, useState } from 'react';
import FilterElementType from './FilterElementType';
import PokemonContainer from './Pokemon/PokemonContainer';
import { TypeName } from '@pkmn/dex';
import { Filters } from '../lib/enums';
import _ from 'lodash';
import FilterElementMove from './FIlterElementMove';
import './styles/FilterElement.css'

const FilterElement: FunctionComponent = ({ }) => {
    const [property, setProperty] = useState<string>();
    const [type, setType] = useState<TypeName[]>([]);
    const [selectedMoves, setSelectedMoves] = useState<string[]>(['', '', '', '']);


    useEffect(() => {
        console.log(selectedMoves);
    }, selectedMoves);

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setProperty(value);
    };

    const renderFilterComponentByProperty = (): ReactNode => {
        switch (property) {
            case 'Ability':
                return null;
            case 'Level':
                return null;
            case 'Move':
                return <FilterElementMove setSelectedMoves={setSelectedMoves} />;
            case 'Stat':
                return null;
            case 'Type':
                return <FilterElementType type={type} setType={setType} />;
            default:
                break;
        }
    };

    return (
        <>
            <div className='filter-element'>
                <select name='filter-property' className='filter-property' onChange={onChange}>
                    {_.map(Filters).map((v, i) => <option value={v} key={i}>{v}</option>)}
                </select>
                {renderFilterComponentByProperty()}
            </div>
            {<PokemonContainer field={type} sort={property} />}
        </>
    );
}

export default FilterElement;
