import styled from "styled-components";

export const Card = styled.button`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 0;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 16px;

  background: rgba(255, 255, 255, 0.025);

  color: inherit;

  font-family: inherit;

  text-align: left;

  cursor: pointer;

  box-sizing: border-box;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);

    border-color: rgba(168, 85, 247, 0.35);

    box-shadow:
      0 14px 35px rgba(0, 0, 0, 0.22);
  }

  &:focus-visible {
    outline: 2px solid #a855f7;

    outline-offset: 3px;
  }

  @media (max-width: 767px) {
    &:hover {
      transform: none;

      box-shadow: none;
    }
  }
`;


/* =========================
   IMAGE
========================= */

export const ImageWrapper = styled.div`
  position: relative;

  width: 100%;

  aspect-ratio: 16 / 8;

  overflow: hidden;

  background: #111322;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  transition:
    transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.035);
  }

  @media (max-width: 767px) {
    ${Card}:hover & {
      transform: none;
    }
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;

  inset: 0;

  pointer-events: none;

  background:
    linear-gradient(
      180deg,
      rgba(5, 7, 15, 0.02) 30%,
      rgba(5, 7, 15, 0.7) 100%
    );
`;


/* =========================
   STATUS
========================= */

export const Status = styled.span`
  position: absolute;

  top: 10px;
  right: 10px;

  max-width: calc(100% - 20px);

  padding: 5px 8px;

  border: 1px solid rgba(255, 255, 255, 0.12);

  border-radius: 999px;

  background: rgba(8, 10, 20, 0.72);

  backdrop-filter: blur(10px);

  color: #cfcfd8;

  font-size: 0.58rem;

  font-weight: 600;

  white-space: nowrap;
`;


/* =========================
   CONTENT
========================= */

export const Content = styled.div`
  padding: 13px 14px 14px;

  box-sizing: border-box;
`;

export const Category = styled.span`
  display: block;

  margin-bottom: 4px;

  color: #a78bfa;

  font-size: 0.58rem;

  font-weight: 700;

  letter-spacing: 0.8px;

  line-height: 1.2;

  text-transform: uppercase;
`;

export const Title = styled.h2`
  margin: 0 0 4px;

  color: #f5f5f7;

  font-size: 1rem;

  line-height: 1.2;

  font-weight: 700;

  letter-spacing: -0.2px;
`;

export const Description = styled.p`
  display: -webkit-box;

  -webkit-box-orient: vertical;

  -webkit-line-clamp: 2;

  overflow: hidden;

  min-height: 32px;

  margin: 0;

  color: #777987;

  font-size: 0.67rem;

  line-height: 1.5;
`;


/* =========================
   TECHNOLOGIES
========================= */

export const Technologies = styled.div`
  display: flex;

  align-items: center;

  gap: 5px;

  width: 100%;

  margin-top: 10px;

  overflow: hidden;
`;

export const Technology = styled.span`
  display: inline-flex;

  align-items: center;

  gap: 4px;

  flex-shrink: 0;

  max-width: 100%;

  padding: 4px 6px;

  border: 1px solid rgba(255, 255, 255, 0.07);

  border-radius: 6px;

  background: rgba(255, 255, 255, 0.025);

  color: #999aa8;

  font-size: 0.56rem;

  font-weight: 600;

  box-sizing: border-box;
`;

export const TechnologyIcon = styled.span`
  display: grid;

  place-items: center;

  flex-shrink: 0;

  color: #a78bfa;

  font-size: 0.65rem;
`;

export const TechnologyName = styled.span`
  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;
`;


/* =========================
   FOOTER
========================= */

export const CardFooter = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-top: 11px;

  padding-top: 9px;

  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

export const ViewProject = styled.span`
  display: inline-flex;

  align-items: center;

  gap: 5px;

  color: #c4a5ff;

  font-size: 0.64rem;

  font-weight: 600;

  span {
    display: inline-block;

    transition:
      transform 0.2s ease;
  }

  ${Card}:hover & span {
    transform:
      translate(2px, -2px);
  }
`;