// src/app/gallery/page.js
import MasonryLayout from "../components/MasonryLayout";
import Section from "../components/Section";

export default function GalleryPage(){
  return (
    <>
    <Section className="text-center">
        <h1>Gallery</h1>
        <h5>a collective photos taken past few years.</h5>
    </Section>
    <div style={{ padding: "60px" }}>
        <MasonryLayout/>
    </div>
    </>
  );
};
