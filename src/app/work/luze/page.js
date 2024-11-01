// src/app/work/luze/page.js
import Section from "@/app/components/Section";
import Grid from "@/app/components/Grid";
import CustomButton from "@/app/components/CustomButton";
import ImageCard from "@/app/components/ImageCard";
import List from "@/app/components/List";


export default function luze() {
    return (
        <>
            <Section>
                <h1>Luze</h1>
                <Grid className="row-cols-lg-2 row-col-sm-1">
                    <div className="col">
                        <h3>Overview</h3>
                        <p>Luze is a personalised time management tool designed for the user to map out and structure their daily activities. It has the ability to provide visual insights (charts) in a weekly routine to keep track of your productivity progress.</p>
                        <p>This was part one of the final open project for my IOS development class. The project ran for 4 weeks with a group of 4 people.</p>
                    </div>

                    <div className="col">
                        <h3>Role</h3>
                        <p>Visual Design, Front-end Development, Interaction, Pitching.</p>
                        <h3>Duration</h3>
                        <p>April - May 2021 (4 weeks).</p>
                    </div>
                </Grid>
            </Section>

            <Section className="d-flex justify-content-center">
                <ImageCard className="img-fluid mx-auto d-block rounded py-3" src="/assets/images/luze/luzeMockup.png" alt="Luze Mockup" />
            </Section>

            <Section title="The Problem">
                <p>The idea behind the project stems from a common problem we have in society, which was time management. From this, we proposed an idea to solve such problems. We focused on 3 things within the application:</p>
                <List
                    items={[
                        "Prevention for omitting tasks",
                        [
                            "Record important schedules",
                            "A function to check whether the task is completed or not"
                        ],
                        "Efficient time management",
                        [
                            "Add & update tasks",
                            "Obtain an overview of the scheduled daily tasks in timely order"
                        ],
                        "Balanced lifestyle",
                        "Overview of daily routine",
                        "Reflect on the managed time after analysis"
                    ]}
                />
            </Section>

            <Section title="Persona" className="body-luze-color">
                <p>A persona was created to narrow down the target audience and to maintain cohesiveness between all team members.</p>
                <ImageCard className="img-fluid mx-auto d-block m-auto" src="/assets/images/luze/persona.png" alt="Luze Persona" width={1200} height={600} />
            </Section>

            <Section title="Framework">
                <p>The application was built with three main components that would run natively in XCode. The swift language was used to handle the back-end development, UIKits and Storyboard for the front-end development and GitHub served as a platform for our
                    team to collaborate.</p>
                <ImageCard className="img-fluid mx-auto d-block m-auto" src="/assets/images/luze/frameworkLuze.png" alt="Luze Framework" width={1200} height={600} />
                <h5>Development</h5>
                <ImageCard className="img-fluid mx-auto d-block m-auto" src="/assets/images/luze/githubcommits.png" alt="Luze Github" width={1200} height={600} />
                <ImageCard className="img-fluid mx-auto d-block m-auto" src="/assets/images/luze/luzeDev.png" alt="Luze Development" width={1200} height={600} />
                <ImageCard className="img-fluid mx-auto d-block m-auto" src="/assets/images/luze/luzeDev2.png" alt="Luze Development" width={1200} height={600} />
            </Section>

            <Section title="Final Product" className="body-luze-color">
                <p>Here is a preview of the final presentation of the application.</p>
                <ImageCard className="img-fluid mx-auto d-block m-auto" src="/assets/images/luze/luzeMockup2.png" alt="Luze Mockup v2" width={1200} height={600} />
            </Section>

            <Section title="Challenges">
                <ol>
                    <li>Time limitations</li>
                    <ul>
                        <li>Due to the strict time limit of 4 weeks, my team and I could not implement several features that we have discussed about beforehand. In the end, the app ran with few missing non-functional features and menus which could’ve been appended
                            if more time was allocated. However, I learnt that time management; especially is developing a product is crucial.</li>
                    </ul>
                    <li>Conflict with GitHub</li>
                    <ul>
                        <li>As this was a group based project, we decided to host our code in GitHub as the main platform for collaboration. However, a few of the team members and I were still unfamiliar with GitHub and we would often have conflict between branches.
                            This caused a substantial delay in our progress.</li>
                    </ul>
                    <li>UI</li>
                    <ul>
                        <li>During the final development, we had trouble setting up an appropriate UI aspect ratio and layout. This stemmed from being unable to automatically scale the screen for different device models and size.</li>
                    </ul>
                </ol>
            </Section>

        </>
    );
}