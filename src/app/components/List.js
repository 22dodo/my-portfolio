// src/app/components/List.js

export default function List({ items }) {
    return (
        <ul>
            {items.map((item, index)=> (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}