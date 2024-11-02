// src/app/about/page.js
import Image from 'next/image';
import Header from '../components/Header'; // Adjust path if your header is in a different folder
import Footer from '../components/Footer'; // Adjust path if your footer is in a different folder

export default function About() {
  return (
    <>
      <div className="">
        <div className="container py-5 px-5">
          <div className="row row-cols-1 row-cols-lg-2 row-cols-sm-1 w-75 m-auto">
            <div className="col">
              <Image
                src="/assets/images/gallery/about.jpg" // Path based on `public` folder
                alt="About me image"
                width={500} // Adjust width and height based on your image dimensions
                height={500}
                className="img-fluid mx-auto d-block"
              />
            </div>
            <div className="col">
              <h1 className="pt-3">About me!</h1>
              <p>Hey, I&apos;m Geraldo, an Interaction Design grad from the University of Technology Sydney. I&apos;m all about making tech simple and user-friendly, 
                especially in the UI/UX space. Whether it&apos;s coursework or projects, my goal is creating designs that people find easy to use and, well, just plain like.</p>
              <p>Outside of the design hustle, you&apos;ll find me chilling with music and snapping photos. Music and photography let me unwind and bring a creative spin to life. It&apos;s my way of balancing the structured design world with something a bit more free-spirited.</p>
              <p>Now, when I&apos;m not in the digital world, I&apos;m diving into the hardware side of things. I love tinkering with gadgets in my free time, figuring out how they tick. 
                It&apos;s not just a hobby; it&apos;s my way of staying on top of tech trends and keeping things fresh. My profile? It&apos;s a mix of design smarts from school, creativity from my downtime, and a hands-on love for tech - all rolled into one neat package.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="px-5 py-5">
        <div className="d-flex row row-cols-lg-4 row-cols-sm-1 row-cols-1">
          {["image26.jpg", "profile2.jpg", "profile3.jpg", "profile4.jpg"].map((img, index) => (
            <div key={index} className="col">
              <Image
                src={`/assets/images/gallery/${img}`} // Adjust path based on `public` folder
                alt={`Photograph ${index + 1}`}
                width={500} // Adjust dimensions as needed
                height={500}
                className="img-fluid mx-auto d-block"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
