import { Species, TypeName } from '@pkmn/dex';
import { FunctionComponent } from 'react';
import { Sprites } from '@pkmn/img';
import '../styles/PokemonElement.css';

interface IPokemonElementProps {
    pkmn: Species;
}

const PokemonElement: FunctionComponent<IPokemonElementProps> = ({ pkmn }) => {
    const sprite = Sprites.getPokemon(pkmn.name, { gen: 'gen5' });

    return (
        <div className='pokemon-element'>
            <img src={sprite.url} alt='' />
        </div>
    );
}

export default PokemonElement;
