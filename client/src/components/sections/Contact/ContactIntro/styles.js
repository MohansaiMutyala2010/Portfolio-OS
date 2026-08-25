import styled from "styled-components";

export const Intro = styled.div`
  max-width: 480px;

  margin-bottom: 24px;
`;

export const Eyebrow = styled.div`
  display: flex;

  align-items: center;

  gap: 10px;

  margin-bottom: 16px;

  color: #b67cff;

  font-size: 0.72rem;

  font-weight: 700;

  letter-spacing: 1.4px;
`;

export const EyebrowDot = styled.span`
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #a855f7;

  box-shadow:
    0 0 12px rgba(168, 85, 247, 0.9);
`;

export const Title = styled.h1`
  margin: 0;

  color: #f7f7fa;

  font-size: clamp(
    2.8rem,
    5vw,
    4.4rem
  );

  line-height: 0.95;

  letter-spacing: -2.5px;

  font-weight: 800;
`;

export const Highlight = styled.span`
  color: #a78bfa;
`;

export const Emoji = styled.span`
  display: inline-block;

  margin-left: 12px;

  font-size: 0.65em;

  transform: rotate(-8deg);
`;

export const Description = styled.p`
  max-width: 440px;

  margin: 20px 0 0;

  color: #a2a4b3;

  font-size: 0.86rem;

  line-height: 1.7;
`;