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
        <ImageCard className="img-fluid mx-auto d-block rounded py-3" src="/assets/images/grimrepair/GrimRepairMockup.png" alt="Grim Repair Mockup"/>
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

      <Section title="The Problem" className="body-alt-color">
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

      <Section title="Key Features (MVP)" className="body-alt-color">
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
        <p>After conducting an interview and usability testing with 10 individuals, their inputs were gathered. My team conducted an affinity diagram to map out what we had done well and what needed to improve. We started coding an interview and grouped
        them under the 'driver' and 'customer' categories. By using the bottom-up approach, we grouped the code into categories and sub-categories that focuses on the app’s features. In the final iteration, a bottom-up approach was used to further
        refine the categories in clear and meaningful themes.</p>
        <Grid className="row row-cols-lg-2 row-cols-sm-1">
          <Grid className="col">
            <ImageCard className="img-fluid mx-auto d-block" src="/assets/images/grimrepair/driver.png" alt="Research Data" link="https://miro.com/app/board/o9J_lu0eDfE=/?invite_link_id=221725230630"/>
          </Grid>
          <Grid className="col">
            <ImageCard className="img-fluid mx-auto d-block" src="/assets/images/grimrepair/customer.png" alt="Research Data" link="https://miro.com/app/board/o9J_lu0eDfE=/?invite_link_id=221725230630"/>
          </Grid>
          <ImageCard className="img-fluid mx-auto d-block" src="/assets/images/grimrepair/heuristic_design.png" alt="Heuristic Design" link="https://docs.google.com/spreadsheets/d/1T6SRLQjHtiteKbZxtRjiq6fjwtIlfixQRjgw9WT42DA/edit?usp=sharing"/>
        </Grid>
      </Section>

      <Section title="Design">
        <p>After few iterations, a final hi-fidelity mock-up prototype was made with a minimalistic UI. The green colour was opted to provide nature-esque impression.</p>
        <h5>Welcome Screen & Registration</h5>
        <Grid className="row-cols-lg-2 row-cols-sm-1 w-75 m-auto">
          <ImageCard src="/assets/images/grimrepair/login.png" alt="Login Screen" />
          <ImageCard src="/assets/images/grimrepair/signup.png" alt="Signup Screen" />
        </Grid>
        <h5>Home Screen</h5>
        <Grid className="row-cols-lg-2 row-cols-sm-1 w-75 m-auto">
          <ImageCard src="/assets/images/grimrepair/home.png" alt="Home Screen" />
          <ImageCard src="/assets/images/grimrepair/homedriver.png" alt="Home Screen alt" />
        </Grid>
        <h5>List of Devices</h5>
        <Grid className="justify-content-md-center">
          <Grid className="col col-lg-3 col-sm-0"/>
          <Grid className="col col-lg-6 col-sm-12">
            <ImageCard className="img-fluid mx-auto d-block m-auto w-75" src="/assets/images/grimrepair/listOfDevices.png" alt="List of Devices Screen"/>
          </Grid>
          <Grid className="col col-lg-3 col-sm-0"/>
        </Grid>
        <h5>Order List & Live Tracking</h5>
        <Grid className="row-cols-lg-2 row-cols-sm-1 w-75 m-auto">
          <ImageCard src="/assets/images/grimrepair/orderhistory.png" alt="Order List Screen" />
          <ImageCard src="/assets/images/grimrepair/track.png" alt="Tracking Screen" />
        </Grid>
        <h5>Messages</h5>
        <Grid className="justify-content-md-center">
          <Grid className="col col-lg-3 col-sm-0"/>
          <Grid className="col col-lg-6 col-sm-12">
            <ImageCard className="img-fluid mx-auto d-block m-auto w-75" src="/assets/images/grimrepair/messages.png" alt="List of Devices Screen"/>
          </Grid>
          <Grid className="col col-lg-3 col-sm-0"/>
        </Grid>
        <h5>Earnings</h5>
        <Grid className="row-cols-lg-2 row-cols-sm-1 w-75 m-auto">
          <ImageCard src="/assets/images/grimrepair/earnings.png" alt="Earnings Screen" />
          <ImageCard src="/assets/images/grimrepair/earningdetails.png" alt="Earnings Detail Screen" />
        </Grid>
      </Section>

      <Section title="Development">
        <p>3 applications were used for this prototype development. Balsamic, to sketch out the low-fidelity prototype. These sketches were then transformed with Adobe XD to provide a more contrasting and vibrant look. Lastly, we integrated Protopie to
        implement micro interaction to achieve hi-fidelity.</p>
        <ImageCard src="/assets/images/grimrepair/framework.png" alt="Framework" width={1200} height={600} />
      </Section>

      <Section title="Key Takeways">
        <p>This project was a valuable learning experience since it allowed me to incorporate all the skills I have attained throughout the years since studying UI/UX. During development, we had several issues that delayed our progress. As a team, we
        formulated 23 external features which we found to be excessive, when only 3 was needed for the MVP (most viable product). At the end, we were concerned about the time limitation and opted to keep the lofi and mid fi mockup to be kept minimal. I
        learnt that the functionality and overall user experience was critical in designing an app.</p>
      </Section>
    </>
  );
}
