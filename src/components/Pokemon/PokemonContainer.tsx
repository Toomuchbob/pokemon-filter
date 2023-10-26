import { Dex, Species, TypeName } from '@pkmn/dex';
import { FunctionComponent, useEffect, useState } from 'react';
import { Sprites } from '@pkmn/img';
import { isEqual } from 'lodash';
import { Generations } from '@pkmn/data';

interface IPokemonContainerProps {
    sort?: string;
    type?: TypeName[];
    moveList: string[];
}

const PokemonContainer: FunctionComponent<IPokemonContainerProps> = ({ sort, type, moveList }) => {

    const [data, setData] = useState<any[]>([]);

    // TODO: add functionality for searching by generation

    const filterPokemon = async (sort?: string) => {
        let verifiedMons: Species[];

        switch (sort) {
            case 'Ability':
                return [];
            case 'Level':
                return [];
            case 'Move':

            //TODO: Cleanup and refactor code
                const gens = new Generations(Dex);
                const foo = Dex.mod('gen9').species.all()
                    .filter(pkmn => pkmn.isNonstandard === null);
                let checkedMons: Species[] = [];
                for (let i = 0; i < foo.length; i++) {
                    let checkedMoves: boolean[] = [];
                    for (let j = 0; j < moveList.length; j++) {
                        if (!Dex.mod('gen9').moves.get(moveList[j]).exists) {
                            continue;
                        }
                        const bar = await gens.get(9).learnsets.canLearn(foo[i].name, moveList[j]);
                        checkedMoves.push(bar);
                    };
                    if (checkedMoves.every(move => move === true)) {
                        checkedMons.push(foo[i]);
                    };
                };
                return checkedMons;
            case 'Stat':
                return [];
            case 'Type':
                return Dex.mod('gen9').species.all()
                    .filter(pkmn => pkmn.isNonstandard === null)
                    .filter(pkmn => {
                        if (type?.at(1)) {
                            return isEqual(pkmn.types, type) || isEqual(pkmn.types.reverse(), type)
                        }

                        if (type?.at(0)) {
                            return pkmn.types.includes(type.at(0) as TypeName);
                        } else {
                            return false;
                        }
                    });
            default:
                return [];
        }
    }

    let pkmnSprites: any;

    // const pkmnSpriteData = filterPokemon(sort)
    //     .map(pkmn => Sprites.getPokemon(pkmn.name, { gen: 'gen5' }));
    // pkmnSprites = pkmnSpriteData
    //     .map((pkmn, i) => <img src={pkmn.url} key={i} alt='' />);

    useEffect(() => {
        console.log('fetching list...')
        const fetchData = async () => {
            const newData = await filterPokemon(sort).then(res => res.map((pkmn: Species, i) => <li key={i}>{pkmn.name}</li>));
            setData(newData);
        };

        fetchData();
    }, [moveList]);

    return (
        // TODO: Return Pokemon component that shows details of each pokemon
        <ul>
            {data}
        </ul>
    );
}

export default PokemonContainer;
