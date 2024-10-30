// src/app/components//ImageCard.js

import Image from "next/image";

export default function ImageCard({src, alt, link, className = "", width = 500, height = 300}){
    return (
        <div className = {`img-container ${className}`}>
            <a href={link} target="_blank" rel="noopener noreferer">
                <Image src={src} alt={alt} layout="responsive" width={width} height={height} className="img-fluid rounded"/>
            </a>
        </div>
    );
}