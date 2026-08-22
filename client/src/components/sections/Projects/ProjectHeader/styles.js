import styled from "styled-components";

export const Header = styled.header`
  width: 100%;

  margin-bottom: 20px;
`;

export const HeaderTop = styled.div`
  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 24px;

  @media (max-width: 640px) {
    align-items: flex-start;

    flex-direction: column;

    gap: 16px;
  }
`;

export const Eyebrow = styled.div`
  display: flex;

  align-items: center;

  gap: 8px;

  color: #b58cff;

  font-size: 0.66rem;

  font-weight: 700;

  letter-spacing: 1.3px;

  span {
    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: #a855f7;

    box-shadow:
      0 0 10px rgba(168, 85, 247, 0.8);
  }
`;

export const Title = styled.h1`
  margin: 8px 0 5px;

  color: #ffffff;

  font-size: clamp(2rem, 3vw, 3rem);

  line-height: 1;

  letter-spacing: -1.5px;

  font-weight: 750;
`;

export const Description = styled.p`
  max-width: 480px;

  margin: 0;

  color: #858795;

  font-size: 0.82rem;

  line-height: 1.55;
`;

export const ViewAllButton = styled.button`
  flex-shrink: 0;

  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding: 9px 14px;

  border: 1px solid rgba(168, 85, 247, 0.28);

  border-radius: 999px;

  background: rgba(124, 58, 237, 0.07);

  color: #c4a5ff;

  font-family: inherit;

  font-size: 0.7rem;

  font-weight: 600;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    background: rgba(124, 58, 237, 0.13);

    border-color: rgba(168, 85, 247, 0.5);
  }

  &:focus-visible {
    outline: 2px solid #a855f7;

    outline-offset: 3px;
  }

  span {
    font-size: 0.9rem;

    transition: transform 0.2s ease;
  }

  &:hover span {
    transform: translateX(3px);
  }
`;