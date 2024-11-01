// src/app/components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg py-4 px-5" style={{ backgroundColor: 'white' }}>
      <div className="container-fluid">
        <Link href="/" className="navbar-brand fs-2">
          Geraldo Gosal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link href="/" className="nav-link" aria-current="page">
              Work
            </Link>
            <Link href="/" className="nav-link" aria-current="page">
              Gallery
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link
              href="https://drive.google.com/file/d/1uQ9el5KfgQ4rmRRid4MRqEOTHALmm5P3/view?usp=sharing"
              className="nav-link"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
