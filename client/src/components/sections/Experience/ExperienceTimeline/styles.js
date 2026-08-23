import styled from "styled-components";

export const Timeline = styled.div`
  position: relative;

  width: 100%;
`;

export const TimelineLine = styled.span`
  position: absolute;

  top: 20px;
  bottom: 20px;

  left: 74px;

  width: 1px;

  background:
    linear-gradient(
      180deg,
      rgba(168, 85, 247, 0.8),
      rgba(168, 85, 247, 0.15)
    );

  @media (max-width: 850px) {
    left: 55px;
  }

  @media (max-width: 767px) {
    left: 45px;
  }
`;

export const TimelineItem = styled.div`
  position: relative;

  display: grid;

  grid-template-columns:
    58px
    32px
    minmax(0, 1fr);

  gap: 0;

  align-items: start;

  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 850px) {
    grid-template-columns:
      45px
      22px
      minmax(0, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns:
      35px
      20px
      minmax(0, 1fr);
  }
`;

export const Year = styled.div`
  padding-top: 8px;

  text-align: right;

  span {
    display: inline-block;

    padding: 5px 7px;

    border-radius: 6px;

    background:
      rgba(124, 58, 237, 0.45);

    color: #e3d9ff;

    font-size: 0.58rem;

    font-weight: 700;
  }

  small {
    display: block;

    margin-top: 4px;

    color: #77798a;

    font-size: 0.52rem;
  }
`;

export const Dot = styled.span`
  position: relative;

  z-index: 2;

  width: 14px;
  height: 14px;

  margin: 9px auto 0;

  border: 3px solid #0b0d19;

  border-radius: 50%;

  background: #9b5cff;

  box-shadow:
    0 0 0 3px
      rgba(168, 85, 247, 0.16),
    0 0 16px
      rgba(168, 85, 247, 0.65);

  box-sizing: border-box;

  @media (max-width: 767px) {
    width: 11px;
    height: 11px;

    margin-top: 10px;
  }
`;