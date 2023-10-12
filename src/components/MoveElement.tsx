import { Move } from '@pkmn/dex';
import { FunctionComponent } from 'react';
import './MoveElement.css';
import TypeImage from './MoveImage';

interface IMoveElementProps {
  move: Move;
}

const MoveElement: FunctionComponent<IMoveElementProps> = ({ move }) => {

return (
  <div className='move-element'>
    <div className='move-property'>{move.name}</div>
    <TypeImage typeOrCategory={move.type} />
    <TypeImage typeOrCategory={move.category} />
    <div className='move-property'>{move.basePower}</div>
    <div className='move-property'>{move.accuracy}</div>
    <div className='move-property'>{move.pp}</div>
    <div className='move-property'>{move.shortDesc}</div>
  </div>
);
}

export default MoveElement;
