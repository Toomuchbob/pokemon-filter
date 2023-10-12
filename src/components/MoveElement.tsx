import { Move } from '@pkmn/dex';
import { FunctionComponent } from 'react';
import './MoveElement.css';
import TypeImage from './MoveImage';

interface IMoveElementProps {
  move: Move;
}

const MoveElement: FunctionComponent<IMoveElementProps> = ({ move }) => {

  const getNumberFromMoveProperty = (value: number | true): string => {
    if (typeof value === "number" && value > 0) {
      return value.toString();
    }
    return '-';
  }

  return (
    <div className='move-element'>
      <div className='move-property'>{move.name}</div>
      <div className='image'>
        <TypeImage type={move.type} />
      </div>
      <div className='image'>
        <TypeImage category={move.category} />
      </div>
      <div className='move-property'>
        <div className='mini'>Power</div>
        {getNumberFromMoveProperty(move.basePower)}
      </div>
      <div className='move-property'>
        <div className='mini'>Accuracy</div>
        {getNumberFromMoveProperty(move.accuracy)}
      </div>
      <div className='move-property'>
        <div className='mini'>PP</div>
        {move.pp}
      </div>
      <div className='move-property description'>{move.shortDesc}</div>
    </div>
  );
}

export default MoveElement;
