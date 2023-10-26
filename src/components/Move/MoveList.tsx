import { MouseEvent, FunctionComponent } from 'react';
import { Dex } from '@pkmn/dex';
import MoveElement from './MoveElement';

interface IMoveListProps {
	value?: string;
	onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const MoveList: FunctionComponent<IMoveListProps> = ({ value, onClick }) => {

	const inputValue = value ? value : '';

	const moveList = Dex.mod('gen9').moves.all()
		.filter(move => move.name.includes(inputValue))
		.map((move, i) => <MoveElement move={move} key={i} onClick={onClick} />);

	return (
		<div className='moveList'>
			{moveList}
		</div>
	);
}

export default MoveList;
