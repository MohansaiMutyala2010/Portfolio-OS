import styled from "styled-components";

export const Hero = styled.section`
  width: 100%;

  min-height: 300px;

  display: grid;

  grid-template-columns: 0.95fr 1.05fr;

  align-items: center;

  gap: 20px;

  padding: 12px 20px 18px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 0.85fr;

    min-height: 280px;

    gap: 10px;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;

    text-align: center;

    min-height: auto;

    padding: 16px 8px 10px;
  }
`;

export const HeroContent = styled.div`
  max-width: 590px;

  @media (max-width: 760px) {
    max-width: 100%;

    margin: 0 auto;
  }
`;

export const Eyebrow = styled.div`
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 9px;

  padding: 7px 13px;

  border: 1px solid rgba(168, 85, 247, 0.3);

  border-radius: 999px;

  color: #d8b4fe;

  font-size: 0.68rem;
  font-weight: 700;

  letter-spacing: 1.2px;

  @media (max-width: 760px) {
    margin: 0 auto;
  }

  span {
    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: #a855f7;
  }
`;

export const Title = styled.h1`
  margin: 16px 0 12px;

  color: #ffffff;

  font-size: clamp(2.1rem, 2.6vw, 2.8rem);

  line-height: 1.08;

  letter-spacing: -1px;

  font-weight: 750;

  @media (max-width: 760px) {
    margin-top: 14px;

    font-size: clamp(1.9rem, 8vw, 2.4rem);
  }
`;

export const Description = styled.p`
  max-width: 560px;

  margin: 0;

  color: #9698aa;

  font-size: 0.9rem;

  line-height: 1.7;

  @media (max-width: 760px) {
    margin: 0 auto;

    font-size: 0.84rem;
  }
`;

export const Stats = styled.div`
  display: flex;

  align-items: center;

  gap: 28px;

  margin-top: 20px;

  @media (max-width: 760px) {
    justify-content: center;

    gap: 24px;

    margin-top: 18px;
  }
`;

export const Stat = styled.div`
  display: flex;

  flex-direction: column;

  gap: 2px;
`;

export const StatNumber = styled.strong`
  color: #d4d4dc;

  font-size: 1.1rem;

  line-height: 1.1;

  font-weight: 700;

  letter-spacing: -0.3px;
`;

export const StatLabel = styled.span`
  color: #71717f;

  font-size: 0.6rem;

  line-height: 1.3;

  font-weight: 500;

  letter-spacing: 0.2px;
`;