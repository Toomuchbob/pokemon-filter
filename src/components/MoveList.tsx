import { FunctionComponent } from 'react';
import { Dex } from '@pkmn/dex';
import MoveElement from './MoveElement';
import { clone, cloneDeep } from 'lodash';

interface IMoveListProps {
	value?: string;
}

const MoveList: FunctionComponent<IMoveListProps> = ({ value }) => {

	const inputValue = value ? value : '';

	const moveList = Dex.moves.all()
		.filter(move => move.name.includes(inputValue))
		.map(move => <MoveElement move={move} />);

	return (
		<div className='moveList'>
			{moveList}
		</div>
	);
}

export default MoveList;
