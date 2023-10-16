import { Dex, TypeName } from '@pkmn/dex';
import { FunctionComponent } from 'react';
import { Sprites } from '@pkmn/img';
import { isEqual, uniqueId } from 'lodash';

interface IPokemonContainerProps {
    sort?: string;
    field: TypeName[];
}

const PokemonContainer: FunctionComponent<IPokemonContainerProps> = ({ sort, field }) => {

    // TODO: add functionality for searching by generation
    // TODO: needs abstraction for added functionality
    const pkmnList = Dex.mod('gen9').species.all()
        .filter(pkmn => pkmn.isNonstandard === null)
        // this is currently only searching duel-types, need a good way to show single and dual types
        .filter(pkmn => isEqual(pkmn.types, field)
            || isEqual(pkmn.types, field.reverse())
        );

    const pkmnSpriteData = pkmnList
        .map(pkmn => Sprites.getPokemon(pkmn.name, { gen: 'gen5' }));
    const pkmnSprites = pkmnSpriteData
        .map((pkmn, index) => <img src={pkmn.url} key={index}/>);



    return (
        <ul>
            {pkmnSprites}
        </ul>
    );
}

export default PokemonContainer;
