import styled from "styled-components";

export const InfoList = styled.div`
  display: flex;

  flex-direction: column;

  gap: 10px;

  max-width: 470px;
`;

export const InfoCard = styled.div`
  min-height: 64px;

  display: flex;

  align-items: center;

  gap: 13px;

  padding: 10px 12px;

  border: 1px solid
    rgba(255, 255, 255, 0.07);

  border-radius: 12px;

  background:
    rgba(255, 255, 255, 0.025);

  box-sizing: border-box;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateX(3px);

    border-color:
      rgba(168, 85, 247, 0.32);

    background:
      rgba(124, 58, 237, 0.05);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: none;
    }
  }
`;

export const InfoIcon = styled.div`
  width: 38px;
  height: 38px;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  border: 1px solid
    rgba(168, 85, 247, 0.3);

  border-radius: 50%;

  background:
    rgba(124, 58, 237, 0.08);

  color: #b57cff;

  font-size: 0.85rem;
`;

export const InfoContent = styled.div`
  min-width: 0;

  flex: 1;
`;

export const InfoLabel = styled.span`
  display: block;

  color: #eeeeF3;

  font-size: 0.76rem;

  font-weight: 600;
`;

export const InfoValue = styled.span`
  display: block;

  margin-top: 3px;

  overflow: hidden;

  color: #9295a6;

  font-size: 0.64rem;

  text-overflow: ellipsis;

  white-space: nowrap;
`;

export const CopyButton = styled.button`
  width: 36px;
  height: 36px;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  border: 1px solid
    rgba(255, 255, 255, 0.08);

  border-radius: 9px;

  background:
    rgba(255, 255, 255, 0.025);

  color: #d2d3da;

  font-size: 0.9rem;

  cursor: pointer;

  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color:
      rgba(168, 85, 247, 0.4);

    background:
      rgba(124, 58, 237, 0.1);

    color: #b57cff;
  }
`;

export const SocialTitle = styled.h2`
  margin: 18px 0 9px;

  color: #e8e8ed;

  font-size: 0.76rem;

  font-weight: 500;
`;

export const SocialList = styled.div`
  display: flex;

  gap: 9px;
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;

  display: grid;

  place-items: center;

  border: 1px solid
    rgba(255, 255, 255, 0.08);

  border-radius: 10px;

  background:
    rgba(255, 255, 255, 0.025);

  color: #aeb0bc;

  font-size: 0.85rem;

  text-decoration: none;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    border-color:
      rgba(168, 85, 247, 0.4);

    color: #b57cff;
  }
`;