import styled, { keyframes } from "styled-components";

const bottomReveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroBottomContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;

  animation: ${bottomReveal} 0.8s ease forwards;
  animation-delay: 0.8s;
  opacity: 0;
`;

export const BottomLabel = styled.p`
  margin: 0 0 18px;

  color: #71717a;

  font-size: 0.85rem;
  font-weight: 500;

  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const TechList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 14px;

  flex-wrap: wrap;
`;

export const TechItem = styled.span`
  padding: 10px 18px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 12px;

  background: rgba(255, 255, 255, 0.03);

  color: #a1a1aa;

  font-size: 0.85rem;
  font-weight: 500;

  backdrop-filter: blur(10px);

  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;

    border-color: rgba(139, 92, 246, 0.4);

    background: rgba(139, 92, 246, 0.08);

    transform: translateY(-2px);
  }
`;

