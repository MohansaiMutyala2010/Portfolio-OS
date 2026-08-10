import {
  HeroBottomContainer,
  BottomLabel,
  TechList,
  TechItem,
} from "./styles";

const HeroBottom = () => {
  return (
    <HeroBottomContainer>

      <BottomLabel>
        Currently building with
      </BottomLabel>

      <TechList>
        <TechItem>React</TechItem>
        <TechItem>Node.js</TechItem>
        <TechItem>PostgreSQL</TechItem>
        <TechItem>AWS</TechItem>
        <TechItem>Git</TechItem>
      </TechList>

    </HeroBottomContainer>
  );
};

export default HeroBottom;