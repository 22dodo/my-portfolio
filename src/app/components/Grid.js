// src/app/components/Grid.js

export default function Grid({children, className}) {
    return <div className = {`row ${className}`}>{children}</div>
}