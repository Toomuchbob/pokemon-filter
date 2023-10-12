import { MoveCategory, TypeName } from '@pkmn/dex';
import { FunctionComponent } from 'react';

interface IMoveImageProps {
    type?: TypeName;
    category?: MoveCategory
}

const MoveImage: FunctionComponent<IMoveImageProps> = ({ type, category }) => {

    return (
        <>
            {type
                ? <img src={`https://play.pokemonshowdown.com/sprites/types/${type}.png`} alt={type} height="14" width="32" />
                : <img src={`https://play.pokemonshowdown.com/sprites/categories/${category}.png`} alt={category} height="14" width="32" />
            }
        </>
    );
}

export default MoveImage;