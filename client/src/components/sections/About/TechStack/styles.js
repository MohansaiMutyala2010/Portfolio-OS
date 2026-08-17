import styled from "styled-components";

import { Link } from "react-router-dom";

export const TechSection = styled.div`
  width: 100%;

  max-width: 1400px;

  margin: 30px auto 0;

  padding: 25px 35px 30px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 28px;

  background: rgba(255, 255, 255, 0.02);

  backdrop-filter: blur(18px);

  @media (max-width: 768px) {
    padding: 22px 18px 25px;

    border-radius: 22px;
  }
`;

export const TechHeader = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 30px;

  @media (max-width: 480px) {
    align-items: flex-start;

    gap: 15px;

    margin-bottom: 25px;
  }
`;

export const TechTitle = styled.h3`
  margin: 0;

  color: #ffffff;

  font-size: 1.4rem;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const ViewSkillsButton = styled(Link)`
  padding: 10px 18px;

  border: 1px solid rgba(139, 92, 246, 0.35);

  border-radius: 20px;

  background: transparent;

  color: #a78bfa;

  text-decoration: none;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.1);

    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 8px 12px;

    font-size: 0.75rem;

    white-space: nowrap;
  }
`;

export const TechList = styled.div`
  display: grid;

  grid-template-columns: repeat(5, 1fr);

  column-gap: 15px;

  row-gap: 25px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);

    column-gap: 10px;

    row-gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);

    column-gap: 12px;

    row-gap: 18px;
  }
`;

export const TechItem = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 10px;

  padding: 15px 8px;

  border-radius: 16px;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);

    background: rgba(139, 92, 246, 0.06);
  }

  @media (max-width: 480px) {
    padding: 12px 6px;
  }
`;

export const TechIcon = styled.div`
  width: 56px;

  height: 56px;

  display: flex;

  align-items: center;

  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.03);

  font-size: 1.5rem;

  @media (max-width: 480px) {
    width: 48px;

    height: 48px;

    font-size: 1.3rem;
  }
`;

export const TechName = styled.span`
  color: #a1a1aa;

  font-size: 0.8rem;

  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;