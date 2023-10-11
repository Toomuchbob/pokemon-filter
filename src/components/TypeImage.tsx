import { TypeName } from '@pkmn/dex';
import { FunctionComponent, } from 'react';

interface ITypeImageProps {
    typeName: TypeName;
}

const TypeImage: FunctionComponent<ITypeImageProps> = ({ typeName }) => {

    return (
        <img src={`https://play.pokemonshowdown.com/sprites/types/${typeName}.png`} alt={typeName} height="14" width="32" className="pixelated" />
    );
}

export default TypeImage;
