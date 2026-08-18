import styled from "styled-components";

export const OrbitContainer = styled.div`
  position: relative;

  width: min(500px, 100%);

  height: 300px;

  margin: 0 auto;

  display: grid;

  place-items: center;

  overflow: visible;

  @media (max-width: 760px) {
    width: min(380px, 100%);

    height: 230px;

    margin-top: 4px;
  }
`;

export const Glow = styled.div`
  position: absolute;

  width: 220px;
  height: 220px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(168, 85, 247, 0.35),
      rgba(168, 85, 247, 0.08) 45%,
      transparent 72%
    );

  filter: blur(12px);
`;

export const Sphere = styled.div`
  position: relative;

  width: 150px;
  height: 150px;

  border-radius: 50%;

  display: grid;

  place-items: center;

  background:
    radial-gradient(
      circle at 35% 30%,
      rgba(255, 255, 255, 0.35),
      transparent 12%
    ),
    radial-gradient(
      circle at 50% 45%,
      #7139bb,
      #31166c 48%,
      #10091e 78%
    );

  border: 1px solid rgba(192, 132, 252, 0.55);

  box-shadow:
    0 0 25px rgba(168, 85, 247, 0.55),
    0 0 70px rgba(168, 85, 247, 0.25),
    inset 0 0 30px rgba(255, 255, 255, 0.08);

  z-index: 3;

  animation: floatSphere 5s ease-in-out infinite;

  @keyframes floatSphere {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 760px) {
    width: 120px;
    height: 120px;
  }
`;

export const SphereInner = styled.div`
  width: 82%;

  height: 82%;

  border-radius: 50%;

  display: grid;

  place-items: center;

  background:
    repeating-radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.1) 0 1px,
      transparent 1px 7px
    );

  opacity: 0.7;
`;

export const Code = styled.span`
  color: #d8b4fe;

  font-size: 2rem;

  font-weight: 700;

  text-shadow:
    0 0 15px rgba(216, 180, 254, 0.8);
`;

export const Ring = styled.div`
  position: absolute;

  width: 430px;
  height: 130px;

  border: 1px solid rgba(168, 85, 247, 0.45);

  border-radius: 50%;

  transform: rotate(-12deg);

  z-index: 2;

  @media (max-width: 760px) {
    width: 330px;
    height: 100px;
  }
`;

export const RingTwo = styled.div`
  position: absolute;

  width: 430px;
  height: 155px;

  border: 1px solid rgba(217, 70, 239, 0.22);

  border-radius: 50%;

  transform: rotate(15deg);

  z-index: 1;

  @media (max-width: 760px) {
    width: 330px;
    height: 120px;
  }
`;

export const RingThree = styled.div`
  position: absolute;

  width: 260px;
  height: 260px;

  border: 1px dashed rgba(168, 85, 247, 0.18);

  border-radius: 50%;

  transform: rotate(35deg);

  z-index: 1;

  @media (max-width: 760px) {
    width: 210px;
    height: 210px;
  }
`;

export const Badge = styled.div`
  position: absolute;

  z-index: 5;

  display: flex;

  align-items: center;

  gap: 7px;

  padding: 8px 13px;

  border: 1px solid rgba(168, 85, 247, 0.35);

  border-radius: 10px;

  background: rgba(10, 12, 25, 0.78);

  backdrop-filter: blur(12px);

  color: #d8b4fe;

  font-size: 0.68rem;

  font-weight: 600;

  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.25);

  span {
    font-size: 0.9rem;
  }
`;

export const BuildBadge = styled(Badge)`
  top: 28px;
  left: 65px;

  @media (max-width: 760px) {
    top: 10px;
    left: 15px;
  }
`;

export const OptimizeBadge = styled(Badge)`
  top: 58px;
  right: 15px;

  color: #93c5fd;

  border-color: rgba(59, 130, 246, 0.35);

  @media (max-width: 760px) {
    top: 25px;
    right: 0;
  }
`;

export const DeployBadge = styled(Badge)`
  bottom: 15px;
  left: 50%;

  transform: translateX(-50%);

  color: #fcd34d;

  border-color: rgba(245, 158, 11, 0.35);

  @media (max-width: 760px) {
    bottom: 0;
  }
`;

export const Particle = styled.span`
  position: absolute;

  width: 5px;
  height: 5px;

  border-radius: 50%;

  background: #c084fc;

  box-shadow:
    0 0 12px rgba(192, 132, 252, 0.9);

  ${({ $position }) => {
    if ($position === "top") {
      return `
        top: 25px;
        right: 125px;
      `;
    }

    if ($position === "right") {
      return `
        right: 60px;
        bottom: 85px;
      `;
    }

    if ($position === "bottom") {
      return `
        bottom: 30px;
        left: 105px;
      `;
    }

    return `
      left: 55px;
      top: 145px;
    `;
  }}
`;