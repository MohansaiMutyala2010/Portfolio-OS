import styled from "styled-components";

export const SkillsPage = styled.main`
  width: 100%;
  min-height: calc(100vh - 90px);

  overflow-x: hidden;

  background:
    radial-gradient(
      circle at 78% 12%,
      rgba(139, 92, 246, 0.12),
      transparent 27%
    ),
    radial-gradient(
      circle at 10% 60%,
      rgba(99, 102, 241, 0.06),
      transparent 28%
    ),
    #0b0c16;

  color: #ffffff;

  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
`;

export const SkillsContainer = styled.div`
  width: min(1440px, calc(100% - 48px));

  margin: 0 auto;

  padding: 64px 0 60px;

  @media (max-width: 1200px) {
    width: min(1100px, calc(100% - 40px));
  }

  @media (max-width: 900px) {
    width: min(720px, calc(100% - 32px));
    padding-top: 48px;
  }

  @media (max-width: 640px) {
    width: calc(100% - 24px);
    padding: 36px 0 42px;
  }
`;

export const SectionHeader = styled.div`
  max-width: 700px;

  margin-bottom: 28px;
`;

export const SectionEyebrow = styled.p`
  margin: 0 0 10px;

  color: #a78bfa;

  font-size: 0.72rem;

  font-weight: 700;

  letter-spacing: 1.5px;
`;

export const SectionTitle = styled.h2`
  margin: 0;

  color: #ffffff;

  font-size: clamp(1.8rem, 3vw, 2.5rem);

  line-height: 1.1;

  letter-spacing: -1px;
`;

export const SectionDescription = styled.p`
  max-width: 650px;

  margin: 12px 0 0;

  color: #858694;

  font-size: 0.92rem;

  line-height: 1.7;
`;

export const SkillsGrid = styled.div`
  display: grid;

  grid-template-columns:
    repeat(5, minmax(0, 1fr));

  gap: 14px;

  @media (max-width: 1200px) {
    grid-template-columns:
      repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 900px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;

    gap: 12px;
  }
`;