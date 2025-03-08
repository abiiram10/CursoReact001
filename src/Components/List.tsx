import { useState } from "react";

export interface iList {
    data: Array<string>;
    onSelect?: (data: string) => void;
}

function List({ data, onSelect }: iList) {
    const [index, setIndex] = useState(0);
    const handleClick = (i: number, data: string) => {
        setIndex(i);
        onSelect?.(data);
    }

    return (<ul className="list-group">
        {
            data.map((elemento, i) => (
                <li onClick={() => { handleClick(i, elemento); }}
                    key={elemento}
                    className={`list-group-item ${index == i ? 'active' : ''} `}>{elemento}
                </li>
            ))
        }
    </ul>);
}

export default List;