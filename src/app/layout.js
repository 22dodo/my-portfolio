// src/app/layout.js
import './globals.css'; // Custom global styles, if any
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import Header from './components/Header';
import Footer from './components/Footer';
import Script from 'next/script'; // Import Next.js Script component

export const metadata = {
  title: 'Geraldo Gosal',
  description: 'Portfolio website of Geraldo Gosal, a Developer based in Sydney, AU.',
  icons: {
    icon: '/favicon.ico', // Placeholder, change to your favicon path
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        
        {/* Bootstrap JavaScript bundle with Next.js Script component */}
        <Script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
  crossOrigin="anonymous"
  strategy="lazyOnload"
/>
      </body>
    </html>
  );
}
