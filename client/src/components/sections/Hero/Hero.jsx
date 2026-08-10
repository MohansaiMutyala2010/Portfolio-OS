import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import HeroBottom from "./HeroBottom"

import { HeroSection ,MainHero} from "./styles";

const Hero = () => {
  return (
    <HeroSection>
      <MainHero>
      <HeroLeft />
      <HeroRight />
      </MainHero>
      <HeroBottom/>
    </HeroSection>
  );
};

export default Hero;