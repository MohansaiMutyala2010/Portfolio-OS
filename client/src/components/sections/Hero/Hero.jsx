import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

import { HeroSection } from "./styles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroLeft />
      <HeroRight />
    </HeroSection>
  );
};

export default Hero;