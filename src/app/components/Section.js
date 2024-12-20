// src/app/components/Section.js

export default function Section({ title, children, className}) {
    return (
        <section className = {`px-3 py-3 ${className}`}>
            <div className = "container">
                {title && <h3>{title}</h3>}
                {children}
            </div>
        </section>
    );
}