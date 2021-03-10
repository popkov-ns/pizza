import React from 'react';

function Categories({ items }) {
    const [activeElement, setActiveElement] = React.useState(null);

    return (
        <div className="categories">
            <ul>
                <li 
                    className={activeElement === null ? 'active' : ''}
                    onClick={() => setActiveElement(null)}>
                    Все
                </li>
                {items && items.map((name, index) => <li
                    className={activeElement === index ? 'active' : ''}
                    onClick={() => setActiveElement(index)} 
                    key={name}>{name}</li>)}
            </ul>
        </div>
    )
}

export default Categories;