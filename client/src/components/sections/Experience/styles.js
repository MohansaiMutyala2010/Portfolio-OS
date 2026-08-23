import styled from "styled-components";

export const ExperienceSection = styled.section`
  width: 100%;

  min-height: calc(100vh - 72px);

  overflow-x: hidden;

  box-sizing: border-box;

  background:
    radial-gradient(
      circle at 50% 15%,
      rgba(124, 58, 237, 0.1),
      transparent 30%
    ),
    #070914;
`;

export const ExperienceContainer = styled.div`
  width: min(1320px, calc(100% - 56px));

  margin: 0 auto;

  padding: 28px 0 22px;

  box-sizing: border-box;

  @media (max-width: 1100px) {
    width: calc(100% - 40px);

    padding-top: 22px;
  }

  @media (max-width: 767px) {
    width: calc(100% - 24px);

    padding: 20px 0 36px;
  }
`;

export const MainLayout = styled.div`
  display: grid;

  grid-template-columns:
    260px
    minmax(0, 1fr);

  gap: 28px;

  align-items: start;

  margin-top: 26px;

  @media (max-width: 1100px) {
    grid-template-columns:
      220px
      minmax(0, 1fr);

    gap: 20px;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;

    gap: 20px;
  }
`;

export const Sidebar = styled.aside`
  width: 100%;
`;

export const TimelineArea = styled.div`
  min-width: 0;

  width: 100%;
`;