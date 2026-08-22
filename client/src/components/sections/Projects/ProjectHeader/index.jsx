import {
  Header,
  HeaderTop,
  Eyebrow,
  Title,
  Description,
  ViewAllButton,
} from "./styles";

const ProjectHeader = () => {
  return (
    <Header>

      <HeaderTop>

        <div>
          <Eyebrow>
            <span />
            SELECTED WORK
          </Eyebrow>

          <Title>
            Projects
          </Title>

          <Description>
            Things I've built, explored, and
            shipped with purpose.
          </Description>
        </div>

        <ViewAllButton
          type="button"
        >
          View All Projects
          <span>→</span>
        </ViewAllButton>

      </HeaderTop>

    </Header>
  );
};

export default ProjectHeader;