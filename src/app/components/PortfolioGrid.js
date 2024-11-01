// src/app/components/PortfolioGrid.js
"use client"; 
import Link from 'next/link';
import styles from './PortfolioGrid.module.css';
import Image from 'next/image';
import { useTypewriter } from '../hooks/useTypewriter';

export default function PortfolioGrid() {
  const typewriterText = useTypewriter(['Developer📱', 'Photographer📸'], 150);

  const projects = [
    { href: '/work/grimrepair', src: '/assets/images/home/GrimRepair.png', alt: 'Grim Repair', text: 'Grim Repair' },
    { href: '/work/triviayay', src: '/assets/images/home/Triviayay.png', alt: 'Triviayay', text: 'Triviayay' },
    { href: '/work/luze', src: '/assets/images/home/Luze.png', alt: 'Luze', text: 'Luze' },
    { href: '#', src: '/assets/images/home/seaalpha.png', alt: 'Coming soon', text: 'Coming soon...' },
  ];

  return (
    <div className={styles.container}>
      <h1 className="py-5 mx-auto d-block">
        Hello! I’m Geraldo, a <span className={styles.typewriter}>{typewriterText}</span> based in Sydney, AU.
      </h1>
      <div className="d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
          {projects.map((project, index) => (
            <Link href={project.href} key={index} className="col mb-4">
              <div className={styles.imgContainer}>
                {/* Using regular img tag temporarily to avoid Image component issues */}

                <Image
                  src={project.src}
                  alt={project.alt}
                  layout="responsive"
                  width={500}
                  height={300}
                  className="rounded img-fluid"
                />
                {/* <img src={project.src} alt={project.alt} className="rounded img-fluid" /> */}
                <div className={styles.overlay}>
                  <div className={styles.text}>{project.text}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
