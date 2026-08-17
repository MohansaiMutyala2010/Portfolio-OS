import styled from "styled-components";

export const Card = styled.div`
  min-width: 0;

  display: flex;

  align-items: center;

  gap: 10px;

  min-height: 48px;

  padding: 7px 8px;

  border-radius: 10px;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.06);

    transform: translateX(3px);
  }

  &:hover > span:last-child {
    opacity: 1;

    transform: translateX(0);
  }
`;

export const IconWrapper = styled.div`
  width: 31px;

  height: 31px;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  border: 1px solid rgba(255, 255, 255, 0.07);

  border-radius: 8px;

  background: rgba(255, 255, 255, 0.025);

  color: #d4d4dc;

  font-size: 0.95rem;
`;

export const SkillIcon = styled.span`
  font-size: 0.58rem;

  font-weight: 700;

  letter-spacing: -0.2px;

  color: #c084fc;
`;

export const SkillName = styled.span`
  min-width: 0;

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;

  color: #c9c9d2;

  font-size: 0.78rem;

  font-weight: 500;
`;

export const Arrow = styled.span`
  margin-left: auto;

  flex-shrink: 0;

  color: #a78bfa;

  font-size: 0.85rem;

  opacity: 0;

  transform: translateX(-4px);

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
`;