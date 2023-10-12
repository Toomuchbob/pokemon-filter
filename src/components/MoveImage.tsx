import { MoveCategory, TypeName } from '@pkmn/dex';
import { FunctionComponent } from 'react';

interface IMoveImageProps {
    typeOrCategory: TypeName | MoveCategory;
}

const MoveImage: FunctionComponent<IMoveImageProps> = ({ typeOrCategory }) => {

    const isCategory = (value: TypeName | MoveCategory): string => {
        switch (value) {
            case 'Physical':
                return 'categories';
            case 'Special':
                return 'categories';
            case 'Status':
                return 'categories';
            default:
                return 'types';
        }
    };

    return (
        <img src={`https://play.pokemonshowdown.com/sprites/${isCategory(typeOrCategory)}/${typeOrCategory}.png`} alt={typeOrCategory} height="14" width="32" />
    );
}

export default MoveImage;
