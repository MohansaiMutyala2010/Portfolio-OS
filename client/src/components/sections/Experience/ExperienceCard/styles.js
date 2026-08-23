import styled from "styled-components";

export const Card = styled.article`
  min-width: 0;

  padding: 15px 16px;

  border: 1px solid
    rgba(255, 255, 255, 0.08);

  border-radius: 14px;

  background:
    linear-gradient(
      145deg,
      rgba(19, 23, 43, 0.92),
      rgba(10, 13, 27, 0.92)
    );

  box-sizing: border-box;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    border-color:
      rgba(168, 85, 247, 0.38);

    box-shadow:
      0 12px 30px
      rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 767px) {
    padding: 13px;

    &:hover {
      transform: none;

      box-shadow: none;
    }
  }
`;

export const CardTop = styled.div`
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    auto
    46px;

  gap: 12px;

  align-items: start;

  @media (max-width: 767px) {
    grid-template-columns:
      minmax(0, 1fr)
      38px;

    gap: 9px;
  }
`;

export const HeadingGroup = styled.div`
  min-width: 0;
`;

export const Title = styled.h2`
  margin: 0;

  color: #f1f1f5;

  font-size: 0.94rem;

  line-height: 1.25;

  font-weight: 700;
`;

export const Meta = styled.div`
  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 7px;

  margin-top: 5px;
`;

export const MetaItem = styled.span`
  color:
    ${({ $highlight }) =>
      $highlight
        ? "#a78bfa"
        : "#77798a"};

  font-size: 0.6rem;

  font-weight:
    ${({ $highlight }) =>
      $highlight ? 600 : 500};

  &:not(:last-child)::after {
    content: "•";

    margin-left: 7px;

    color: #4d4f5d;
  }
`;

export const Period = styled.time`
  padding-top: 3px;

  color: #9a9baa;

  font-size: 0.58rem;

  white-space: nowrap;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const IconBox = styled.div`
  width: 46px;
  height: 46px;

  display: grid;

  place-items: center;

  border: 1px solid
    rgba(168, 85, 247, 0.35);

  border-radius: 11px;

  background:
    rgba(124, 58, 237, 0.06);

  color: #a78bfa;

  font-size: 0.95rem;

  box-sizing: border-box;

  @media (max-width: 767px) {
    width: 38px;
    height: 38px;

    font-size: 0.8rem;
  }
`;

export const Description = styled.p`
  max-width: 800px;

  margin: 10px 0 0;

  color: #9092a2;

  font-size: 0.65rem;

  line-height: 1.55;
`;

export const Technologies = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 5px;

  margin-top: 10px;
`;

export const Technology = styled.span`
  display: inline-flex;

  align-items: center;

  gap: 5px;

  padding: 5px 7px;

  border: 1px solid
    rgba(255, 255, 255, 0.06);

  border-radius: 7px;

  background:
    rgba(255, 255, 255, 0.025);

  color: #999baa;

  font-size: 0.55rem;

  font-weight: 600;

  white-space: nowrap;
`;

export const TechnologyIcon = styled.span`
  display: grid;

  place-items: center;

  color: #a78bfa;

  font-size: 0.62rem;
`;

export const TechnologyName = styled.span`
  white-space: nowrap;
`;