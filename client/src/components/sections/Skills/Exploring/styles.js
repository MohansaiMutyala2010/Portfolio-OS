import styled from "styled-components";

export const Section = styled.section`
  display: grid;

  grid-template-columns:
    minmax(240px, 0.7fr)
    minmax(0, 1.8fr);

  align-items: center;

  gap: 35px;

  margin-top: 18px;

  padding: 24px 26px;

  border: 1px solid rgba(139, 92, 246, 0.18);

  border-radius: 18px;

  background:
    linear-gradient(
      100deg,
      rgba(139, 92, 246, 0.07),
      rgba(255, 255, 255, 0.015)
    );

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;

    gap: 18px;
  }

  @media (max-width: 640px) {
    padding: 20px 16px;

    margin-top: 12px;
  }
`;

export const Content = styled.div`
  min-width: 0;
`;

export const Title = styled.h2`
  display: flex;

  align-items: center;

  gap: 8px;

  margin: 0;

  color: #d8b4fe;

  font-size: 1rem;

  span {
    color: #c084fc;
  }
`;

export const Description = styled.p`
  max-width: 330px;

  margin: 8px 0 0;

  color: #858694;

  font-size: 0.74rem;

  line-height: 1.6;

  @media (max-width: 1200px) {
    max-width: 600px;
  }
`;

export const SkillList = styled.div`
  display: grid;

  grid-template-columns:
    repeat(5, minmax(0, 1fr));

  gap: 10px;

  @media (max-width: 900px) {
    grid-template-columns:
      repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap: 8px;
  }

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillItem = styled.div`
  min-width: 0;

  min-height: 54px;

  display: flex;

  align-items: center;

  gap: 8px;

  padding: 9px 10px;

  border: 1px solid rgba(255, 255, 255, 0.07);

  border-radius: 10px;

  background: rgba(255, 255, 255, 0.025);

  color: #c9c9d2;

  font-size: 0.7rem;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    border-color: rgba(168, 85, 247, 0.3);

    background: rgba(168, 85, 247, 0.05);
  }

  > span:last-child {
    min-width: 0;

    overflow: hidden;

    text-overflow: ellipsis;

    white-space: nowrap;
  }

  @media (max-width: 640px) {
    min-height: 48px;

    padding: 8px;

    font-size: 0.67rem;
  }
`;

export const IconWrapper = styled.span`
  width: 28px;

  height: 28px;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  border-radius: 7px;

  background: rgba(139, 92, 246, 0.08);

  color: #c084fc;

  font-size: 0.85rem;
`;