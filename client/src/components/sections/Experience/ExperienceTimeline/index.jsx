import ExperienceCard from "../ExperienceCard";

import {
  Timeline,
  TimelineLine,
  TimelineItem,
  Year,
  Dot,
} from "./styles";

const ExperienceTimeline = ({
  experiences,
}) => {
  return (
    <Timeline>

      <TimelineLine />

      {experiences.map((experience) => (
        <TimelineItem key={experience.id}>

          <Year>
            <span>
              {experience.year}
            </span>

            <small>
              {experience.year ===
              experiences[0]?.year
                ? "Present"
                : ""}
            </small>
          </Year>

          <Dot />

          <ExperienceCard
            experience={experience}
          />

        </TimelineItem>
      ))}

    </Timeline>
  );
};

export default ExperienceTimeline;