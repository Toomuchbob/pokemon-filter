import { Dex, TypeName } from '@pkmn/dex';
import { FunctionComponent } from 'react';
import { Sprites } from '@pkmn/img';
import { isEqual } from 'lodash';

interface IPokemonContainerProps {
    sort?: string;
    field: TypeName[];
}

const PokemonContainer: FunctionComponent<IPokemonContainerProps> = ({ sort, field }) => {

    // TODO: add functionality for searching by generation
    // TODO: needs abstraction for added functionality
    const pkmnList = Dex.mod('gen9').species.all()
        .filter(pkmn => pkmn.isNonstandard === null)
        .filter(pkmn => {
            if (field.at(1)) {
                return isEqual(pkmn.types, field);
            }

            if (field.at(0)) {
                return pkmn.types.includes(field.at(0) as TypeName);
            } else {
                return false;
            }
        });

    const pkmnSpriteData = pkmnList
        .map(pkmn => Sprites.getPokemon(pkmn.name, { gen: 'gen5' }));
    const pkmnSprites = pkmnSpriteData
        .map((pkmn, index) => <img src={pkmn.url} key={index} />);

    return (
        <ul>
            {pkmnSprites}
        </ul>
    );
}

export default PokemonContainer;
