import styled from "styled-components";

export const FooterArea = styled.div`
  margin-top: 20px;
`;

export const ResponseCard = styled.div`
  min-height: 72px;

  display: flex;

  align-items: center;

  gap: 14px;

  padding: 12px 18px;

  border: 1px solid
    rgba(168, 85, 247, 0.18);

  border-radius: 13px;

  background:
    rgba(124, 58, 237, 0.035);

  box-sizing: border-box;
`;

export const ResponseIcon = styled.div`
  width: 38px;
  height: 38px;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  border: 1px solid
    rgba(168, 85, 247, 0.28);

  border-radius: 50%;

  color: #b57cff;

  background:
    rgba(124, 58, 237, 0.08);

  font-size: 0.8rem;
`;

export const ResponseContent = styled.div`
  min-width: 0;

  flex: 1;
`;

export const ResponseTitle = styled.strong`
  display: block;

  color: #eeeeF2;

  font-size: 0.75rem;
`;

export const ResponseDescription = styled.p`
  margin: 4px 0 0;

  color: #858898;

  font-size: 0.6rem;
`;

export const Envelope = styled.div`
  color: #a855f7;

  font-size: 2.5rem;

  opacity: 0.8;

  transform: rotate(-8deg);

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Copyright = styled.p`
  margin: 10px 0 0;

  text-align: center;

  color: #666979;

  font-size: 0.58rem;

  span {
    color: #a855f7;
  }
`;