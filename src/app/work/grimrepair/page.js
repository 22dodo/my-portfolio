// src/app/work/grimrepair/page.js
import Section from "@/app/components/Section";
import Grid from "@/app/components/Grid";
import CustomButton from "@/app/components/CustomButton";
import ImageCard from "@/app/components/ImageCard";
import List from "@/app/components/List";

export default function GrimRepair() {
  return (
    <>
      <Section>
        <h1>Grim Repair</h1>
        <Grid className="row-cols-lg-2 row-cols-sm-1">
          <div className="col">
            <h3>Overview</h3>
            <p>Grim Repair is designed to simplify the process of repairing electronic devices and offer an end-to-end repair service including pickup, tracking, and delivery.</p>
            <p>This project was part of the uni capstone course I did previously with a group of 5 people with the objective to provide solutions for global pandemic situation.</p>
          </div>
          <div className="col">
            <h3>Role</h3>
            <p>User Research, Prototyping & Usability Testing, Pitching, Wireframing.</p>
            <h3>Duration</h3>
            <p>August - November 2021 (12 weeks).</p>
          </div>
        </Grid>
        <CustomButton href="https://bit.ly/3NTfGlX" text="Prototype Demo" />
      </Section>

      <Section className="d-flex justify-content-center">
        <ImageCard src="/assets/images/grimrepair/GrimRepairMockup.png" alt="Grim Repair Mockup" width={1200} height={600} />
      </Section>

      <Section title="Background">
        <p>From the events of the recent pandemic, my team and I proposed an idea with the aim of improving the experience in repairing electronic devices. The focus was to minimise physical contact between the end user and the vendor.</p>
        <p>The team consisted of 5 designers, where I was given the responsibility for the UI/UX design, research, and the final presentation. This project had a duration of 3 months - from developing the idea to constructing the hi-fidelity prototype.</p> 
        <p>Here are our key accomplishments:</p>
        <List
          items={[
            "Won a design award.",
            "Most key problems were identified.",
            "Project was delivered on time.",
          ]}
        />
      </Section>

      <Section title="The Problem" className="gr-bg-col">
      <p>Upon the initial development, my team and I conducted a brainstorming and interview session to reveal several pain points that was experienced by the target audience:</p>
        <List
          items={[
            "Unfair pricing offered by repair vendors.",
            "Overspending due to the lack of understanding in technology.",
            "Inaccessible location for several groups of individuals.",
            "Slow turnaround in repair processes.",
          ]}
        />
      </Section>

      <Section title="Design Process">
        <p>My team incorporated the Lean UX methodology that emphasised three critical aspects (phases); Think, Make, and Check.</p>
        <ImageCard src="/assets/images/grimrepair/leanUXFramework.png" alt="Lean UX Framework" width={1200} height={600} />
      </Section>

      <Section title="Key Features (MVP)" className="gr-bg-col">
      <p>Before development, several assumptions using the Lean UX methodology was raised. We believed that this application will offer same day repair services and delivery from registered drivers to the customer’s desired location.</p>
      <p>Here are the following key features:</p>
        <List
          items={[
            "Driver Pickup/Delivery.",
            "Vendor price/turnaround comparison.",
            "Real-time Tracking.",
          ]}
        />
        <p>Few initial design mock-ups were created:</p>
        <ImageCard src="/assets/images/grimrepair/lofiandmidfi.png" alt="Design Mock-ups" width={1200} height={600} />
        <p>After conducting an interview and usability testing with 10 individuals, their inputs were gathered. My team conducted an affinity diagram to map out what we had done well and what needed to improve. We started coding an interview and grouped
          them under the 'driver' and 'customer' categories. By using the bottom-up approach, we grouped the code into categories and sub-categories that focuses on the app’s features. In the final iteration, a bottom-up approach was used to further
          refine the categories in clear and meaningful themes.</p>
      </Section>

      <Section title="Design">
        <p>After few iterations, a final hi-fidelity mock-up prototype was made with a minimalistic UI. The green colour was opted to provide nature-esque impression.</p>
        <h5>Welcome Screen & Registration</h5>
        <Grid className="row-cols-lg-2 row-cols-sm-1 w-75 m-auto">
          <ImageCard src="/assets/images/grimrepair/login.png" alt="Login Screen" />
          <ImageCard src="/assets/images/grimrepair/signup.png" alt="Signup Screen" />
        </Grid>
        {/* Repeat this pattern for other design elements */}
      </Section>

      {/* Continue similar patterns for "Development" and "Key Takeaways" sections */}
    </>
  );
}
