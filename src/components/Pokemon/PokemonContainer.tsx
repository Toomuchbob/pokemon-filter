import { Dex } from '@pkmn/dex';
import { FunctionComponent } from 'react';
import { Sprites } from '@pkmn/img';

const PokemonContainer: FunctionComponent = () => {

    // TODO: add functionality for searching by generation
    const pkmnNameList = Dex.mod('gen9').species.all()
    .filter(pkmn => pkmn.isNonstandard === null)
    .map(pkmn => pkmn.name);

    const pkmnSpriteData = pkmnNameList.map(pkmn => Sprites.getPokemon(pkmn, {gen: 'gen5'}));
    const pkmnSprites = pkmnSpriteData.map(pkmn => <img src={pkmn.url} />)

    return (
        <ul>
            {pkmnSprites}
        </ul>
    );
}

export default PokemonContainer;
