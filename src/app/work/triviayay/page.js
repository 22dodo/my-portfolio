// src/app/work/triviayay/page.js
import Section from "@/app/components/Section";
import Grid from "@/app/components/Grid";
import CustomButton from "@/app/components/CustomButton";
import ImageCard from "@/app/components/ImageCard";
import List from "@/app/components/List";

export default function Triviayay() {
    return (
        <>
            <Section>
                <h1>Triviayay</h1>
                <Grid className="row-cols-lg-2 row-cols-sm-1">
                    <div className="col">
                        <h3>Overview</h3>
                        <p>Triviayay is an arcade-style trivia game that relies on the use of an arduino uno and an RFID system as its underlying technology.</p>
                        <p>This project was part of physical prototyping interaction course during my 2020 Spring session. It was done with a group 7 people; 4 researchers, 2 product designers and 1 programmer - which I volunteered to conduct.</p>
                    </div>
                    <div className="col">
                        <h3>Role</h3>
                        <p>Front-end & Back-end Development, Visual Design, Hardware Research, Prototyping.</p>
                        <h3>Duration</h3>
                        <p>February - May 2021 (12 Weeks).</p>
                    </div>
                </Grid>
                <CustomButton href="https://youtu.be/gzr0g7v8kSM" text="Product Demo" />
            </Section>

            <Section className="d-flex justify-content-center">
                <ImageCard className="img-fluid mx-auto d-block rounded py-3" src="/assets/images/triviayay/trivia_prototype.png" alt="Triviayay Prototype" />
            </Section>

            <Section title="Aims">
                <p>The design of this game was targeted towards young and the adult demographic. Its aim was to create a new learning experience by enhancing the user engagement by abandoning the general method of reading paper-based textbooks.</p>
                <p>Specific aims include:</p>
                <List
                    items={[
                        "To assess whether the design enhances enjoyment for the player.",
                        "To assess whether the design encourages learning."
                    ]}
                />
            </Section>

            <Section className="body-triviayay-color" title="Materials">
                <p>Materials incorporated in the system</p>
                <List
                    items={[
                        "Laptop",
                        "RFID reader",
                        "4 RFID tags",
                        "Arduino Uno",
                        "Buttons",
                        "LED",
                        "Buzzer",
                        "Pin headers",
                    ]}
                />
            </Section>

            <Section title="Initial Development & Design">
                <p>In the early stages, Arduino IDE and Processing IDE were chosen for this project as both software offers easy integration with one another.</p>
                <ImageCard src="/assets/images/triviayay/systemdiagram.png" className="img-fluid mx-auto d-block rounded py-3" alt="System Diagram" />

                <h5>Triviayay 1.0</h5>
                <Grid className="row-cols-lg-8 row-cols-sm-1 py-3">
                    <Grid className="col-lg-2 col-sm-0"></Grid> {/* Placeholder for center alignment */}
                    <Grid className="col-lg-8 col-sm-12">
                        <ImageCard src="/assets/images/triviayay/triviayay1.png" className="img-fluid mx-auto d-block m-auto w-75" alt="Triviayay 1.0" />
                    </Grid>
                    <Grid className="col-lg-2 col-sm-0"></Grid> {/* Placeholder for center alignment */}
                </Grid>

                <h5>Enclosure</h5>
                <Grid className="row-cols-lg-3 row-cols-sm-1 py-3">
                    <Grid className="col-lg-4 col-sm-12">
                        <ImageCard src="/assets/images/triviayay/3dmodel.png" className="img-fluid mx-auto d-block m-auto" alt="3D Model" />
                    </Grid>
                    <Grid className="col-lg-4 col-sm-12">
                        <ImageCard src="/assets/images/triviayay/cardboard1.png" className="img-fluid mx-auto d-block m-auto" alt="Cardboard Prototype 1" />
                    </Grid>
                    <Grid className="col-lg-4 col-sm-12">
                        <ImageCard src="/assets/images/triviayay/cardboard2.png" className="img-fluid mx-auto d-block m-auto" alt="Cardboard Prototype 2" />
                    </Grid>
                </Grid>
            </Section>

            <Section className="body-triviayay-color" title="Design">
                <p>For the design, my group settled on a colorful scheme to give a playful and fun atmosphere.</p>

                {/* Home Screen Section */}
                <h5>Home Screen</h5>
                <p>This is the start page that contains an introduction for the player.</p>
                <ImageCard src="/assets/images/triviayay/triviaD1.png" className="img-fluid mx-auto d-block m-auto" alt="Home Screen" />

                {/* Gameplay Section */}
                <h5>Gameplay</h5>
                <p>
                    Upon starting the game, questions will be loaded from an external API connected to an online trivia question database. The player will have 10 seconds to answer the question by tapping the RFID cards on the respective answer. Each time the player proceeds to the next question, the connection to the API is refreshed, and a new set of randomized questions is loaded.
                </p>
                <ImageCard src="/assets/images/triviayay/triviaD2.gif" className="img-fluid mx-auto d-block m-auto" alt="Gameplay" />

                {/* Final Enclosure Design Section */}
                <h5>Final Enclosure Design</h5>
                <p>This was designed using Tinkercad with inspiration from retro-styled arcade game machines.</p>

                {/* Grid Layout for Enclosure Images */}
                <Grid className="row-cols-lg-2 row-cols-sm-1 m-auto">
                    <div className="col">
                        <ImageCard src="/assets/images/triviayay/triviaD3.png" className="img-fluid mx-auto d-block" alt="Enclosure Design 1" />
                    </div>
                    <div className="col">
                        <ImageCard src="/assets/images/triviayay/triviaD4.png" className="img-fluid mx-auto d-block" alt="Enclosure Design 2" />
                    </div>
                </Grid>
            </Section>

            {/* Product Demonstration Section */}
            <Section id="scroll-target" title="Product Demonstration">
                <p>This video illustrates how the prototype functions and explains its uses when a user interacts with it.</p>
                <div className="ratio ratio-16x9">
                    <iframe
                        src="https://www.youtube.com/embed/gzr0g7v8kSM"
                        title="YouTube video"
                        allowFullScreen
                    ></iframe>
                </div>
            </Section>

            {/* Feedbacks Section */}
            <Section className="body-triviayay-color" title="Feedbacks">
                <p>During the prototype testing, a total of 6 individuals took part in the test. Several interesting key findings were:</p>
                <List items={[
                    "Having a limited set of questions would be preferable rather than the infinite amount of questions being generated with no ‘game over’.",
                    "Provide an option to set difficulties as some players found that the questions given were somewhat difficult."
                ]} />
            </Section>

        </>
    );
}