// src/app/gallery/page.js
import MasonryLayout from "../components/MasonryLayout";
import Section from "../components/Section";

export default function GalleryPage(){
  return (
    <>
    <Section className="text-center">
        <h1>Gallery</h1>
        <h5
          style={{
            margin: "0 auto",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            textAlign: "center",
            maxWidth: "600px", // Optional: limits the width to keep text centered on large screens
          }}
        >a collective photos taken past few years.</h5>
    </Section>
    <div style={{ padding: "60px" }}>
        <MasonryLayout/>
    </div>
    </>
  );
};
