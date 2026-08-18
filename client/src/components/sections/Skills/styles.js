import styled from "styled-components";

export const SkillsPage = styled.main`
  width: 100%;
  min-height: calc(100vh - 74px);

  background:
    radial-gradient(
      circle at 75% 25%,
      rgba(124, 58, 237, 0.08),
      transparent 32%
    ),
    #090b16;

  overflow-x: hidden;
`;

export const SkillsContainer = styled.div`
  width: min(1320px, calc(100% - 48px));

  margin: 0 auto;

  padding: 28px 0 32px;

  @media (max-width: 900px) {
    width: min(100% - 32px, 760px);

    padding-top: 24px;
  }

  @media (max-width: 640px) {
    width: calc(100% - 24px);

    padding-top: 18px;
    padding-bottom: 24px;
  }
`;

export const SkillsContent = styled.section`
  width: 100%;

  margin-top: 18px;
`;