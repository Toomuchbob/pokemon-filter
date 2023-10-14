import { Dex, TypeName } from '@pkmn/dex';
import { FunctionComponent } from 'react';
import { Sprites } from '@pkmn/img';
import { isEqual } from 'lodash';

interface IPokemonContainerProps {
    sort?: string;
    field: [TypeName] | [TypeName, TypeName];
}

const PokemonContainer: FunctionComponent<IPokemonContainerProps> = ({ sort, field }) => {

    // TODO: add functionality for searching by generation
    const pkmnList = Dex.mod('gen9').species.all()
        .filter(pkmn => pkmn.isNonstandard === null)
        .filter(pkmn => isEqual(pkmn.types, field));

    const pkmnSpriteData = pkmnList
        .map(pkmn => Sprites.getPokemon(pkmn.name, { gen: 'gen5' }));
    const pkmnSprites = pkmnSpriteData
        .map(pkmn => <img src={pkmn.url} />);

    

    return (
        <ul>
            {pkmnSprites}
        </ul>
    );
}

export default PokemonContainer;
