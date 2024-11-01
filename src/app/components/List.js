// src/app/components/List.js

export default function List({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                Array.isArray(item) ? (
                    <ul key={index}>
                        {item.map((subItem, subIndex) => (
                            <li key={subIndex}>{subItem}</li>
                        ))}
                    </ul>
                ) : (
                    <li key={index}>{item}</li>
                )
            ))}
        </ul>
    );
}