import styled from "styled-components";

export const Hero = styled.section`
  min-height: 390px;

  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    minmax(380px, 0.8fr);

  align-items: center;

  gap: 40px;

  margin-bottom: 70px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    gap: 15px;

    margin-bottom: 55px;
  }
`;

export const HeroContent = styled.div`
  min-width: 0;

  @media (max-width: 900px) {
    text-align: center;

    display: flex;

    flex-direction: column;

    align-items: center;
  }
`;

export const Eyebrow = styled.div`
  display: inline-flex;

  align-items: center;

  gap: 9px;

  padding: 8px 13px;

  border: 1px solid rgba(168, 85, 247, 0.2);

  border-radius: 999px;

  background: rgba(168, 85, 247, 0.04);

  color: #c4b5fd;

  font-size: 0.7rem;

  font-weight: 700;

  letter-spacing: 1.3px;

  span {
    width: 6px;

    height: 6px;

    border-radius: 50%;

    background: #a855f7;

    box-shadow:
      0 0 12px rgba(168, 85, 247, 0.8);
  }
`;

export const Title = styled.h1`
  margin: 24px 0 0;

  max-width: 760px;

  color: #ffffff;

  font-size: clamp(3.2rem, 5vw, 5.4rem);

  line-height: 0.98;

  letter-spacing: -3px;

  font-weight: 800;

  @media (max-width: 640px) {
    margin-top: 18px;

    font-size: clamp(2.7rem, 12vw, 3.7rem);

    letter-spacing: -2px;
  }
`;

export const Highlight = styled.span`
  background:
    linear-gradient(
      90deg,
      #8b5cf6,
      #c084fc,
      #ec4899
    );

  -webkit-background-clip: text;

  background-clip: text;

  color: transparent;
`;

export const Description = styled.p`
  max-width: 650px;

  margin: 26px 0 0;

  color: #9b9cab;

  font-size: 1rem;

  line-height: 1.75;

  @media (max-width: 640px) {
    margin-top: 18px;

    font-size: 0.88rem;
  }
`;

export const Stats = styled.div`
  display: flex;

  align-items: center;

  gap: 34px;

  margin-top: 30px;

  @media (max-width: 640px) {
    width: 100%;

    justify-content: space-between;

    gap: 12px;

    margin-top: 24px;
  }
`;

export const Stat = styled.div`
  display: flex;

  flex-direction: column;

  gap: 3px;
`;

export const StatNumber = styled.strong`
  color: #ffffff;

  font-size: 1.5rem;

  font-weight: 800;

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

export const StatLabel = styled.span`
  color: #77788a;

  font-size: 0.72rem;

  @media (max-width: 640px) {
    font-size: 0.62rem;
  }
`;

export const Visual = styled.div`
  position: relative;

  width: 100%;

  height: 390px;

  display: flex;

  align-items: center;

  justify-content: center;

  @media (max-width: 900px) {
    height: 300px;
  }

  @media (max-width: 640px) {
    height: 245px;
  }

  @media (max-width: 380px) {
    height: 220px;
  }
`;

export const Glow = styled.div`
  position: absolute;

  width: 270px;

  height: 270px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(139, 92, 246, 0.42),
      rgba(236, 72, 153, 0.12) 45%,
      transparent 72%
    );

  filter: blur(25px);

  @media (max-width: 640px) {
    width: 200px;

    height: 200px;
  }
`;

export const CoreOrb = styled.div`
  position: relative;

  width: 205px;

  height: 205px;

  display: grid;

  place-items: center;

  border-radius: 50%;

  border: 1px solid rgba(192, 132, 252, 0.4);

  background:
    radial-gradient(
      circle at 35% 30%,
      rgba(255, 255, 255, 0.18),
      transparent 12%
    ),
    radial-gradient(
      circle,
      rgba(139, 92, 246, 0.35),
      rgba(15, 12, 35, 0.95) 68%
    );

  box-shadow:
    0 0 55px rgba(139, 92, 246, 0.25),
    inset 0 0 45px rgba(168, 85, 247, 0.18);

  z-index: 2;

  span {
    color: #c084fc;

    font-family: monospace;

    font-size: 2rem;

    text-shadow:
      0 0 20px rgba(192, 132, 252, 0.5);
  }

  &::before {
    content: "";

    position: absolute;

    inset: 16px;

    border-radius: 50%;

    border: 1px dashed rgba(216, 180, 254, 0.22);
  }

  &::after {
    content: "";

    position: absolute;

    inset: 38px;

    border-radius: 50%;

    border: 1px solid rgba(236, 72, 153, 0.15);
  }

  @media (max-width: 640px) {
    width: 145px;

    height: 145px;

    span {
      font-size: 1.4rem;
    }
  }
`;

export const Orbit = styled.div`
  position: absolute;

  width: 380px;

  height: 190px;

  border: 1px solid rgba(139, 92, 246, 0.3);

  border-radius: 50%;

  transform: rotate(-12deg);

  @media (max-width: 640px) {
    width: 275px;

    height: 140px;
  }

  @media (max-width: 380px) {
    width: 235px;

    height: 120px;
  }
`;

export const OrbitItem = styled.span`
  position: absolute;

  padding: 9px 13px;

  border: 1px solid rgba(168, 85, 247, 0.3);

  border-radius: 999px;

  background: rgba(11, 12, 22, 0.85);

  backdrop-filter: blur(12px);

  color: #d8b4fe;

  font-size: 0.72rem;

  font-weight: 600;

  white-space: nowrap;

  ${({ $position }) =>
    $position === "top" &&
    `
      top: -16px;
      left: 50%;
      transform: translateX(-50%);
    `}

  ${({ $position }) =>
    $position === "right" &&
    `
      top: 50%;
      right: -25px;
      transform: translateY(-50%);
    `}

  ${({ $position }) =>
    $position === "bottom" &&
    `
      bottom: -16px;
      left: 50%;
      transform: translateX(-50%);
    `}

  @media (max-width: 640px) {
    padding: 7px 10px;

    font-size: 0.62rem;
  }
`;