import { experienceIntro } from "../data";

import {
  Intro,
  Eyebrow,
  EyebrowDot,
  Title,
  Highlight,
  Description,
  StatementCard,
  StatementIcon,
  StatementTitle,
  StatementDescription,
  StatementHighlight,
} from "./styles";

const ExperienceIntro = () => {
  const StatementIconComponent =
    experienceIntro.statement.icon;

  return (
    <Intro>

      <Eyebrow>
        <EyebrowDot />
        {experienceIntro.eyebrow}
        <EyebrowDot />
      </Eyebrow>

      <Title>
        Experience &{" "}
        <Highlight>Growth</Highlight>
      </Title>

      <Description>
        {experienceIntro.description}
      </Description>

      <StatementCard>

        <StatementIcon>
          <StatementIconComponent />
        </StatementIcon>

        <StatementTitle>
          {experienceIntro.statement.title}
        </StatementTitle>

        <StatementHighlight />

        <StatementDescription>
          {experienceIntro.statement.description}
        </StatementDescription>

      </StatementCard>

    </Intro>
  );
};

export default ExperienceIntro;