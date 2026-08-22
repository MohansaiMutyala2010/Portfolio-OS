import styled from "styled-components";

export const ProjectsPage = styled.main`
  width: 100%;

  min-height: calc(100vh - 74px);

  box-sizing: border-box;

  background:
    radial-gradient(
      circle at 80% 15%,
      rgba(124, 58, 237, 0.08),
      transparent 30%
    ),
    #090b16;

  overflow-x: hidden;
`;

export const ProjectsContainer = styled.div`
  width: min(1240px, calc(100% - 48px));

  min-height: calc(100vh - 74px);

  margin: 0 auto;

  padding: 24px 0 28px;

  box-sizing: border-box;

  @media (max-width: 1100px) {
    width: min(100% - 40px, 1000px);

    padding-top: 20px;
    padding-bottom: 22px;
  }

  @media (max-width: 767px) {
    width: calc(100% - 24px);

    min-height: auto;

    padding-top: 18px;
    padding-bottom: 32px;
  }
`;