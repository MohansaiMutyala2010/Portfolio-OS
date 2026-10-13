import styled from "styled-components";

export const HeroSection = styled.section`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;

  min-height: 0;
  padding: 12px clamp(20px, 3vw, 40px) 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  /* Smaller gap between the main hero and technology section */
  gap: 8px;

  @media (max-width: 768px) {
    padding: 12px 20px 20px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px 16px 16px;
    gap: 8px;
  }
`;

export const MainHero = styled.section`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;

  column-gap: clamp(24px, 3vw, 48px);
  row-gap: 20px;

  margin: 0;
  padding: 8px clamp(16px, 3vw, 40px) 0;

  min-height: 0;

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    justify-items: center;

    row-gap: 20px;
    padding: 8px 12px 0;
  }

  @media (max-width: 480px) {
    padding: 4px 4px 0;
    row-gap: 16px;
  }
`;
