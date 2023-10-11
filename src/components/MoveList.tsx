import { FunctionComponent, useEffect } from 'react';
import { Dex, Move } from '@pkmn/dex';
import MoveElement from './MoveElement';

const MoveList: FunctionComponent = () => {


  const moveElements = Dex.moves.all().map(
    (move) => <MoveElement move={move}/>)

  return (
    <div className='moveList'>
      {moveElements}
    </div>
  );
}

export default MoveList;
