import styled from "styled-components";

export const Intro = styled.header`
  position: relative;

  text-align: center;

  max-width: 760px;

  margin: 0 auto;
`;

export const Eyebrow = styled.div`
  display: inline-flex;

  align-items: center;

  gap: 10px;

  margin-bottom: 10px;

  color: #a78bfa;

  font-size: 0.62rem;

  font-weight: 700;

  letter-spacing: 1.4px;
`;

export const EyebrowDot = styled.span`
  width: 5px;
  height: 5px;

  border-radius: 50%;

  background: #a855f7;

  box-shadow:
    0 0 10px rgba(168, 85, 247, 0.8);
`;

export const Title = styled.h1`
  margin: 0;

  color: #f4f4f7;

  font-size: clamp(
    2rem,
    4vw,
    3rem
  );

  line-height: 1;

  letter-spacing: -1.5px;

  font-weight: 750;
`;

export const Highlight = styled.span`
  color: #a78bfa;
`;

export const Description = styled.p`
  max-width: 620px;

  margin: 12px auto 0;

  color: #8d8f9f;

  font-size: 0.76rem;

  line-height: 1.55;
`;

export const StatementCard = styled.div`
  display: none;

  position: absolute;

  right: calc(100% + 34px);

  top: 50px;

  width: 250px;

  padding: 24px 20px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 16px;

  background:
    linear-gradient(
      145deg,
      rgba(17, 21, 40, 0.95),
      rgba(9, 11, 25, 0.95)
    );

  box-sizing: border-box;

  @media (min-width: 1250px) {
    display: flex;

    flex-direction: column;

    align-items: center;
  }
`;

export const StatementIcon = styled.div`
  width: 48px;
  height: 48px;

  display: grid;

  place-items: center;

  margin-bottom: 18px;

  border: 1px solid rgba(168, 85, 247, 0.35);

  border-radius: 50%;

  background: rgba(124, 58, 237, 0.1);

  color: #a78bfa;

  font-size: 1.1rem;

  box-shadow:
    0 0 24px rgba(124, 58, 237, 0.15);
`;

export const StatementTitle = styled.h2`
  margin: 0;

  color: #f1f1f5;

  font-size: 1rem;

  line-height: 1.35;

  text-align: center;

  span {
    color: #a78bfa;
  }
`;

export const StatementHighlight = styled.span`
  width: 45px;

  height: 2px;

  margin: 18px 0;

  background: #a855f7;
`;

export const StatementDescription = styled.p`
  margin: 0;

  color: #888a99;

  font-size: 0.68rem;

  line-height: 1.6;

  text-align: center;
`;