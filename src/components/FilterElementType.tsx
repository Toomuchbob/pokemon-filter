import { Dex, TypeName } from '@pkmn/dex';
import { FunctionComponent, useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import MoveImage from './Move/MoveImage';
import './styles/FilterElementType.css';
import { isEqual } from 'lodash';

interface IFilterElementTypeProps {
    type: TypeName[];
    setType: Dispatch<SetStateAction<TypeName[]>>;
}

const FilterElementType: FunctionComponent<IFilterElementTypeProps> = ({ type, setType }) => {
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
        const typeValue = value as TypeName;

        setType(prevValue => {
            if (prevValue.indexOf(typeValue) != -1 || isEqual(prevValue, [typeValue])) {
                setDisplayPicker(!displayPicker);
                return prevValue;
            };
            
            if (prevValue.length > 1) {
                return [typeValue];
            } else {
                return [...prevValue, typeValue];
            };
        });

        classList.toggle('type-button-pressed');
    };

    const handleChooseType = () => {
        setType([]);
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
