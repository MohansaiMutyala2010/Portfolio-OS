import ExperienceIntro from "./ExperienceIntro";
import ExperienceStats from "./ExperienceStats";
import ExperienceTimeline from "./ExperienceTimeline";

import { experiences } from "./data";

import {
  ExperienceSection,
  ExperienceContainer,
  MainLayout,
  Sidebar,
  TimelineArea,
} from "./styles";

const Experience = () => {

  return (
    <ExperienceSection>
      <ExperienceContainer>

        <ExperienceIntro />

        <MainLayout>

          <Sidebar>
            <ExperienceStats />
          </Sidebar>

          <TimelineArea>
            <ExperienceTimeline
              experiences={experiences}
            />
          </TimelineArea>

        </MainLayout>

      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;