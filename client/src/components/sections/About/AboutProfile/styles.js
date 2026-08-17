import styled from "styled-components";

export const ProfileCard = styled.div`
  position: relative;

  min-height: 450px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  padding: 30px;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 28px;

  background: rgba(255, 255, 255, 0.025);

  backdrop-filter: blur(20px);

  @media (max-width: 768px) {
    min-height: auto;

    padding: 35px 20px;

    border-radius: 22px;
  }
`;

export const ProfileGlow = styled.div`
  position: absolute;

  width: 350px;

  height: 350px;

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(139, 92, 246, 0.35),
    transparent 70%
  );

  filter: blur(20px);

  z-index: 0;
`;

export const ProfileImage = styled.img`
  position: relative;

  z-index: 1;

  width: 220px;

  height: 220px;

  object-fit: cover;

  border-radius: 50%;

  border: 5px solid rgba(255, 255, 255, 0.12);

  box-shadow:
    0 0 0 8px rgba(139, 92, 246, 0.08),
    0 0 50px rgba(139, 92, 246, 0.25);

  @media (max-width: 480px) {
    width: 180px;

    height: 180px;
  }
`;

export const ProfileName = styled.h3`
  position: relative;

  z-index: 1;

  margin: 25px 0 8px;

  color: #ffffff;

  font-size: 1.8rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ProfileRole = styled.p`
  position: relative;

  z-index: 1;

  margin: 0;

  color: #a1a1aa;

  font-size: 1rem;
`;

export const StatsContainer = styled.div`
  position: relative;

  z-index: 1;

  width: 100%;

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  margin-top: 35px;

  padding: 20px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 20px;

  background: rgba(10, 10, 20, 0.5);

  @media (max-width: 480px) {
    padding: 15px 8px;

    margin-top: 25px;
  }
`;

export const Stat = styled.div`
  text-align: center;

  padding: 0 15px;

  &:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 480px) {
    padding: 0 6px;
  }
`;

export const StatNumber = styled.h4`
  margin: 0 0 6px;

  color: #ffffff;

  font-size: 1.8rem;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const StatLabel = styled.p`
  margin: 0;

  color: #a1a1aa;

  font-size: 0.75rem;

  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 0.65rem;
  }
`;