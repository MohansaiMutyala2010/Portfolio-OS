import styled from "styled-components";

export const IntroCard = styled.div`
  padding: 40px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 28px;

  background: rgba(255, 255, 255, 0.02);

  backdrop-filter: blur(18px);

  @media (max-width: 768px) {
    padding: 25px 20px;

    border-radius: 22px;
  }
`;

export const IntroHeader = styled.div`
  display: flex;

  align-items: center;

  gap: 14px;

  margin-bottom: 24px;
`;

export const IntroIcon = styled.div`
  width: 42px;

  height: 42px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 12px;

  background: rgba(139, 92, 246, 0.15);

  border: 1px solid rgba(139, 92, 246, 0.25);

  font-size: 1.2rem;
`;

export const IntroTitle = styled.h3`
  margin: 0;

  color: #ffffff;

  font-size: 1.5rem;
`;

export const IntroText = styled.p`
  margin: 0 0 20px;

  color: #d4d4d8;

  font-size: 1rem;

  line-height: 1.8;

  @media (max-width: 480px) {
    font-size: 0.95rem;

    line-height: 1.7;
  }
`;

export const Signature = styled.div`
  margin: 25px 0 35px;

  color: #a78bfa;

  font-size: 2rem;

  font-family: cursive;

  font-style: italic;

  @media (max-width: 480px) {
    margin: 20px 0 25px;

    font-size: 1.7rem;
  }
`;

export const Highlights = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 12px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const HighlightCard = styled.div`
  padding: 18px;

  border: 1px solid rgba(255, 255, 255, 0.07);

  border-radius: 18px;

  background: rgba(255, 255, 255, 0.025);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);

    border-color: rgba(139, 92, 246, 0.4);

    background: rgba(139, 92, 246, 0.06);
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const HighlightIcon = styled.div`
  margin-bottom: 12px;

  font-size: 1.4rem;
`;

export const HighlightTitle = styled.h4`
  margin: 0 0 8px;

  color: #ffffff;

  font-size: 0.95rem;
`;

export const HighlightText = styled.p`
  margin: 0;

  color: #a1a1aa;

  font-size: 0.8rem;

  line-height: 1.5;
`;