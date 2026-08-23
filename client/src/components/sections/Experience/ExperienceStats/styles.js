import styled from "styled-components";

export const Stats = styled.div`
  display: flex;

  flex-direction: column;

  gap: 10px;
`;

export const StatCard = styled.div`
  display: flex;

  align-items: center;

  gap: 12px;

  min-height: 68px;

  padding: 10px 13px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 12px;

  background: rgba(255, 255, 255, 0.025);

  box-sizing: border-box;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    border-color:
      rgba(168, 85, 247, 0.3);
  }
`;

export const StatIcon = styled.div`
  width: 34px;
  height: 34px;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  border: 1px solid
    rgba(168, 85, 247, 0.25);

  border-radius: 9px;

  background:
    rgba(124, 58, 237, 0.08);

  color: #a78bfa;

  font-size: 0.8rem;
`;

export const StatValue = styled.strong`
  display: block;

  color: #f2f2f5;

  font-size: 1.25rem;

  line-height: 1;

  font-weight: 750;
`;

export const StatLabel = styled.span`
  display: block;

  margin-top: 4px;

  color: #858795;

  font-size: 0.6rem;
`;