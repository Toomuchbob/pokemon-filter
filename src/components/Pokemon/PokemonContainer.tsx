import { Dex, Species, TypeName } from '@pkmn/dex';
import { FunctionComponent } from 'react';
import { Sprites } from '@pkmn/img';
import { isEqual } from 'lodash';

interface IPokemonContainerProps {
    sort?: string;
    field: TypeName[] | string[];
}

const PokemonContainer: FunctionComponent<IPokemonContainerProps> = ({ sort, field }) => {

    // TODO: add functionality for searching by generation

    const filterPokemon = (sort?: string) => {
        switch (sort) {
            case 'Ability':
                return [];
            case 'Level':
                return [];
            case 'Move':
                // return Dex.mod('gen9').species.all()
                //     .filter(pkmn => pkmn.isNonstandard === null)
                //     .filter(async pkmn => {
                //         const learnset = await Dex.learnsets.get(pkmn.name);
                //         learnset.learnset?.filter()
                //     });
            case 'Stat':
                return [];
            case 'Type':
                return Dex.mod('gen9').species.all()
                    .filter(pkmn => pkmn.isNonstandard === null)
                    .filter(pkmn => {
                        if (field.at(1)) {
                            return isEqual(pkmn.types, field) || isEqual(pkmn.types.reverse(), field)
                        }

                        if (field.at(0)) {
                            return pkmn.types.includes(field.at(0) as TypeName);
                        } else {
                            return false;
                        }
                    });
            default:
                return [];
        }
    }

    const pkmnSpriteData = filterPokemon(sort)
        .map(pkmn => Sprites.getPokemon(pkmn.name, { gen: 'gen5' }));
    const pkmnSprites = pkmnSpriteData
        .map((pkmn, index) => <img src={pkmn.url} key={index} />);

    return (
        // TODO: Return Pokemon component that shows details of each pokemon
        <ul>
            {pkmnSprites}
        </ul>
    );
}

export default PokemonContainer;
