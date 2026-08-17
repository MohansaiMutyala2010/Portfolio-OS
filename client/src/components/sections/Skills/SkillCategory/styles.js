import styled from "styled-components";

export const Category = styled.article`
  min-width: 0;

  display: flex;

  flex-direction: column;

  padding: 22px 18px 20px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 18px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.045),
      rgba(255, 255, 255, 0.012)
    );

  backdrop-filter: blur(14px);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-5px);

    border-color: rgba(168, 85, 247, 0.32);

    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.25),
      0 0 30px rgba(139, 92, 246, 0.06);
  }
`;

export const CategoryHeader = styled.div`
  display: flex;

  align-items: center;

  gap: 11px;
`;

export const CategoryIcon = styled.div`
  width: 34px;

  height: 34px;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  border: 1px solid rgba(168, 85, 247, 0.18);

  border-radius: 9px;

  background: rgba(139, 92, 246, 0.08);

  color: #c084fc;

  font-size: 1rem;
`;

export const CategoryTitle = styled.h3`
  margin: 0;

  color: #f5f5f7;

  font-size: 1rem;

  font-weight: 700;
`;

export const CategoryDescription = styled.p`
  margin: 14px 0 20px;

  color: #858694;

  font-size: 0.73rem;

  line-height: 1.6;
`;

export const SkillList = styled.div`
  display: flex;

  flex-direction: column;

  gap: 4px;
`;