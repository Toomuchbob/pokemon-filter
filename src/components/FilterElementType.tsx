import { Dex, TypeName } from '@pkmn/dex';
import { FunctionComponent, useState, useEffect, useRef } from 'react';
import MoveImage from './Move/MoveImage';
import './styles/FilterElementType.css';

interface IFilterElementTypeProps {
    handleType: (value: TypeName) => void;
    type: TypeName[];
}

const FilterElementType: FunctionComponent<IFilterElementTypeProps> = ({ handleType, type }) => {
    const [displayPicker, setDisplayPicker] = useState<boolean>(false);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (type.length > 1) {
            setDisplayPicker(!displayPicker);
        }
    }, [type]);

    useEffect(() => {
        function handleClickOutside(this: Document, event: MouseEvent): any {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setDisplayPicker(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { value, classList } = event.currentTarget;
        handleType(value as TypeName);

        //TODO: persist class when selector is closed
        classList.toggle('type-button-pressed');
    };

    const handleChooseType = () => {
        // TODO: handle choosing two of same type
        setDisplayPicker(!displayPicker);
    }

    const typeList = Dex.types.all()
        .map((type, index) =>
            <button className='type-button' value={type.name} onClick={onClick} key={index}>
                <MoveImage type={type.name} />
            </button>
        );

    const selectedTypes = type.map((type, index) => <MoveImage type={type} key={index} />);

    return (
        <div className='filter-element-type' ref={ref}>
            <button onClick={handleChooseType}>
                {selectedTypes.length > 0 ? selectedTypes : 'Choose Type'}
            </button>
            {displayPicker ? <div className='type-picker'>{typeList}</div> : null}
        </div>
    );
}

export default FilterElementType;
