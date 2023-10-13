import { FunctionComponent } from 'react';
import { Dex } from '@pkmn/dex';
import MoveElement from './MoveElement';

interface IMoveListProps {
  value?: string;
}

const MoveList: FunctionComponent<IMoveListProps> = ({ value }) => {

  // this needs to be abstracted
  const moveList = Dex.moves.all().map((move) => {
    const inputValue = value ? value : '';
    if (move.name.includes(inputValue)) {
      return <MoveElement move={move} />
    };
  });

  return (
    <div className='moveList'>
      {moveList}
    </div>
  );
}

export default MoveList;
