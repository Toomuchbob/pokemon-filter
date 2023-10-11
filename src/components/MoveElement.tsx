import { Move, Type } from '@pkmn/dex';
import { FunctionComponent, useEffect } from 'react';
import './MoveElement.css';
import TypeImage from './TypeImage';

interface IMoveElementProps {
  move: Move;
}

const MoveElement: FunctionComponent<IMoveElementProps> = ({ move }) => {

return (
  <div className='move-element'>
    <div className='move-property'>{move.name}</div>
    <TypeImage typeName={move.type} />
    <div className='move-property'>{move.category}</div>
    <div className='move-property'>{move.basePower}</div>
    <div className='move-property'>{move.accuracy}</div>
    <div className='move-property'>{move.pp}</div>
    <div className='move-property'>{move.shortDesc}</div>
  </div>
);
}

export default MoveElement;
