// components/Footer.js

import Script from "next/script";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <>
      {/* Bootstrap JS for client-side functionality */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />

      <footer className="text-center text-white">
        <div className="container pt-4">
          {/* Social Media Section */}
          <section className="mb-4">
            <Link href="mailto:your-email@example.com">
              <i className="fa-regular fa-envelope btn btn-link btn-floating btn-lg text-dark m-1" role="button" data-mdb-ripple-color="dark"></i>
            </Link>
            <Link href="https://www.instagram.com/your-instagram/">
              <i className="fab fa-instagram btn btn-link btn-floating btn-lg text-dark m-1" role="button" data-mdb-ripple-color="dark"></i>
            </Link>
            <Link href="https://www.linkedin.com/in/your-linkedin/">
              <i className="fab fa-linkedin btn btn-link btn-floating btn-lg text-dark m-1" role="button" data-mdb-ripple-color="dark"></i>
            </Link>
            <Link href="https://github.com/your-github">
              <i className="fab fa-github btn btn-link btn-floating btn-lg text-dark m-1" role="button" data-mdb-ripple-color="dark"></i>
            </Link>
          </section>
        </div>

        <div className="text-center text-dark p-3">
          © {new Date().getFullYear()} Copyright
        </div>
      </footer>
    </>
  );
}
