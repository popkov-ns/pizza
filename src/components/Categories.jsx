import React from 'react';

function Categories({ items }) {
    const [activeElement, setActiveElement] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveElement(index);
    }

    return (
        <div className="categories">
            <ul>
                <li 
                    className={activeElement === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}>
                    Все
                </li>
                {items && items.map((name, index) => <li
                    className={activeElement === index ? 'active' : ''}
                    onClick={() => onSelectItem(index)} 
                    key={name}>{name}</li>)}
            </ul>
        </div>
    )
}

export default Categories;