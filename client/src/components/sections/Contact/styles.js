import styled from "styled-components";

export const ContactSection = styled.section`
  width: 100%;

  min-height: calc(100vh - 80px);

  box-sizing: border-box;

  overflow-x: hidden;

  background:
    radial-gradient(
      circle at 15% 80%,
      rgba(124, 58, 237, 0.12),
      transparent 28%
    ),
    radial-gradient(
      circle at 85% 25%,
      rgba(168, 85, 247, 0.08),
      transparent 28%
    ),
    #070914;

  color: #ffffff;
`;

export const ContactContainer = styled.div`
  width: min(1400px, calc(100% - 80px));

  min-height: calc(100vh - 80px);

  margin: 0 auto;

  padding: 38px 0 18px;

  box-sizing: border-box;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  @media (max-width: 1100px) {
    width: calc(100% - 48px);

    padding-top: 28px;
  }

  @media (max-width: 768px) {
    width: calc(100% - 28px);

    padding: 24px 0 30px;

    min-height: auto;
  }
`;

export const ContactGrid = styled.div`
  display: grid;

  grid-template-columns:
    minmax(320px, 0.75fr)
    minmax(500px, 1.25fr);

  gap: 48px;

  align-items: center;

  flex: 1;

  @media (max-width: 1100px) {
    grid-template-columns:
      minmax(280px, 0.7fr)
      minmax(420px, 1.3fr);

    gap: 30px;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;

    gap: 28px;

    align-items: stretch;
  }
`;

export const LeftColumn = styled.div`
  min-width: 0;

  display: flex;

  flex-direction: column;

  justify-content: center;
`;

export const RightColumn = styled.div`
  min-width: 0;

  width: 100%;
`;