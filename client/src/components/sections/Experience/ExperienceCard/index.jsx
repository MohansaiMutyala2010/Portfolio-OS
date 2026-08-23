import {
  Card,
  CardTop,
  HeadingGroup,
  Title,
  Meta,
  MetaItem,
  Period,
  IconBox,
  Description,
  Technologies,
  Technology,
  TechnologyIcon,
  TechnologyName,
} from "./styles";

const ExperienceCard = ({
  experience,
}) => {
  const ExperienceIcon =
    experience.icon;

  return (
    <Card>

      <CardTop>

        <HeadingGroup>

          <Title>
            {experience.title}
          </Title>

          <Meta>

            <MetaItem $highlight>
              {experience.organization}
            </MetaItem>

            <MetaItem>
              {experience.type}
            </MetaItem>

          </Meta>

        </HeadingGroup>

        <Period>
          {experience.period}
        </Period>

        <IconBox>
          <ExperienceIcon />
        </IconBox>

      </CardTop>

      <Description>
        {experience.description}
      </Description>

      {experience.technologies?.length > 0 && (
        <Technologies>

          {experience.technologies.map(
            (technology) => {
              const Icon =
                technology.icon;

              return (
                <Technology
                  key={technology.name}
                >
                  <TechnologyIcon>
                    <Icon />
                  </TechnologyIcon>

                  <TechnologyName>
                    {technology.name}
                  </TechnologyName>
                </Technology>
              );
            }
          )}

        </Technologies>
      )}

    </Card>
  );
};

export default ExperienceCard;