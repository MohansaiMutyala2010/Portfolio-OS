import styled from "styled-components";

export const Panel = styled.section`
  width: min(900px, 100%);

  margin: 14px auto 0;

  padding: 18px 22px;

  border: 1px solid rgba(168, 85, 247, 0.2);

  border-radius: 20px;

  background:
    linear-gradient(
      135deg,
      rgba(124, 58, 237, 0.07),
      rgba(255, 255, 255, 0.025)
    );

  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.18);

  animation: panelIn 0.25s ease both;

  @keyframes panelIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 640px) {
    padding: 16px;

    border-radius: 17px;
  }
`;

export const PanelHeader = styled.div`
  margin-bottom: 16px;
`;

export const PanelHeading = styled.div`
  display: flex;

  align-items: center;

  gap: 13px;
`;

export const CategoryIcon = styled.div`
  width: 42px;
  height: 42px;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  border: 1px solid rgba(168, 85, 247, 0.25);

  border-radius: 12px;

  background: rgba(124, 58, 237, 0.1);

  color: #c084fc;

  font-size: 1.1rem;
`;

export const CategoryInfo = styled.div`
  min-width: 0;
`;

export const CategoryTitle = styled.h2`
  margin: 0;

  color: #f5f5f7;

  font-size: 1rem;

  font-weight: 700;
`;

export const CategoryDescription = styled.p`
  margin: 4px 0 0;

  color: #777987;

  font-size: 0.72rem;

  line-height: 1.5;
`;

export const SkillsGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(4, fit-content(260px));

  justify-content: start;

  gap: 10px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, fit-content(260px));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillItem = styled.div`
  min-height: 58px;


  display: flex;

  align-items: center;

  gap: 12px;

  padding: 10px 14px;

  border: 1px solid rgba(255, 255, 255, 0.07);

  border-radius: 11px;

  background: rgba(255, 255, 255, 0.025);

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    border-color: rgba(168, 85, 247, 0.3);

    background: rgba(124, 58, 237, 0.07);
  }
`;

export const SkillIcon = styled.span`
  width: 28px;
  height: 28px;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  color: #bca0ff;

  font-size: 1rem;
`;

export const SkillName = styled.span`
  color: #c7c7d0;

  font-size: 0.72rem;

  font-weight: 600;
`;