import {
  OrbitContainer,
  Glow,
  Sphere,
  SphereInner,
  Code,
  Ring,
  RingTwo,
  RingThree,
  Badge,
  BuildBadge,
  OptimizeBadge,
  DeployBadge,
  Particle,
} from "./styles";

const OrbitVisual = () => {
  return (
    <OrbitContainer>

      <Glow />

      <Ring />
      <RingTwo />
      <RingThree />

      <Sphere>
        <SphereInner>
          <Code>
            {"</>"}
          </Code>
        </SphereInner>
      </Sphere>

      <BuildBadge>
        <span>⌘</span>
        Build
      </BuildBadge>

      <OptimizeBadge>
        <span>ϟ</span>
        Optimize
      </OptimizeBadge>

      <DeployBadge>
        <span>☁</span>
        Deploy
      </DeployBadge>

      <Particle $position="top" />
      <Particle $position="right" />
      <Particle $position="bottom" />
      <Particle $position="left" />

    </OrbitContainer>
  );
};

export default OrbitVisual;