// src/app/components/CustomButton.js

import Link from "next/link";

export default function CustomButton({ href, text, type = "dark", size = "lg"}){
    return (
        <Link href={href}>
            <button type="button" className={`btn btn-${type} btn-${size}`}>
                {text}
            </button>
        </Link>
    );
}