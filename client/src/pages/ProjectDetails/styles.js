import styled from "styled-components";

export const Page = styled.main`
  width: 100%;

  min-height: calc(100vh - 74px);

  box-sizing: border-box;

  overflow-x: hidden;

  background:
    radial-gradient(
      circle at 75% 20%,
      rgba(124, 58, 237, 0.08),
      transparent 30%
    ),
    #090b16;
`;

export const Container = styled.div`
  width: min(1240px, calc(100% - 48px));

  min-height: calc(100vh - 74px);

  margin: 0 auto;

  padding: 18px 0 24px;

  box-sizing: border-box;

  @media (max-width: 1100px) {
    width: calc(100% - 40px);

    padding-top: 16px;
  }

  @media (max-width: 767px) {
    width: calc(100% - 24px);

    min-height: auto;

    padding-top: 14px;
    padding-bottom: 32px;
  }
`;


/* =========================
   BACK BUTTON
========================= */

export const BackButton = styled(Link)`
  display: inline-flex;

  align-items: center;

  gap: 6px;

  margin-bottom: 14px;

  color: #a78bfa;

  font-size: 0.7rem;

  font-weight: 600;

  text-decoration: none;

  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: #c4a5ff;

    transform: translateX(-3px);
  }

  &:focus-visible {
    outline: 2px solid #a855f7;

    outline-offset: 4px;

    border-radius: 4px;
  }
`;


/* =========================
   MAIN LAYOUT
========================= */

export const Layout = styled.div`
  width: 100%;

  display: grid;

  grid-template-columns:
    minmax(0, 1.15fr)
    minmax(360px, 0.85fr);

  gap: 24px;

  align-items: stretch;

  box-sizing: border-box;

  @media (max-width: 1100px) {
    grid-template-columns:
      minmax(0, 1.05fr)
      minmax(300px, 0.95fr);

    gap: 18px;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr;

    gap: 14px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;

    gap: 18px;
  }
`;


/* =========================
   PROJECT VISUAL
========================= */

export const Visual = styled.div`
  position: relative;

  width: 100%;

  aspect-ratio: 16 / 10;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 18px;

  background: #111322;

  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.22);

  box-sizing: border-box;

  @media (max-width: 767px) {
    aspect-ratio: 16 / 10;

    border-radius: 15px;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;

  height: 100%;

  display: block;

  object-fit: cover;

  transition:
    transform 0.5s ease;

  ${Visual}:hover & {
    transform: scale(1.025);
  }

  @media (max-width: 767px) {
    ${Visual}:hover & {
      transform: none;
    }
  }
`;


/* =========================
   RIGHT CONTENT
========================= */

export const Content = styled.div`
  min-width: 0;

  display: flex;

  flex-direction: column;

  justify-content: center;

  padding: 4px 4px 4px 2px;

  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 0;
  }
`;


/* =========================
   META
========================= */

export const MetaRow = styled.div`
  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 7px;

  margin-bottom: 8px;
`;

export const Category = styled.span`
  color: #a78bfa;

  font-size: 0.6rem;

  font-weight: 700;

  letter-spacing: 1px;

  text-transform: uppercase;
`;

export const Status = styled.span`
  display: inline-flex;

  align-items: center;

  padding: 4px 7px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.03);

  color: #898b9a;

  font-size: 0.55rem;

  font-weight: 600;

  white-space: nowrap;
`;


/* =========================
   TITLE
========================= */

export const Title = styled.h1`
  margin: 0 0 10px;

  color: #f5f5f7;

  font-size: clamp(
    2rem,
    4vw,
    3.25rem
  );

  line-height: 0.98;

  letter-spacing: -1.8px;

  font-weight: 750;

  @media (max-width: 767px) {
    font-size: 2.1rem;

    letter-spacing: -1px;
  }
`;


/* =========================
   DESCRIPTION
========================= */

export const Description = styled.p`
  max-width: 540px;

  margin: 0;

  color: #9294a3;

  font-size: 0.78rem;

  line-height: 1.6;
`;


/* =========================
   SECTIONS
========================= */

export const Section = styled.section`
  margin-top: 16px;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 8px;

  color: #e8e8ed;

  font-size: 0.7rem;

  line-height: 1.2;

  font-weight: 700;
`;


/* =========================
   FEATURES
========================= */

export const FeatureList = styled.ul`
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 6px 14px;

  margin: 0;

  padding: 0;

  list-style: none;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureItem = styled.li`
  display: flex;

  align-items: flex-start;

  gap: 7px;

  min-width: 0;

  color: #999aa8;

  font-size: 0.65rem;

  line-height: 1.4;

  span:first-child {
    flex-shrink: 0;

    margin-top: 2px;

    color: #a78bfa;

    font-size: 0.55rem;
  }
`;


/* =========================
   TECHNOLOGIES
========================= */

export const TechList = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 6px;
`;

export const TechItem = styled.div`
  display: inline-flex;

  align-items: center;

  gap: 5px;

  padding: 6px 8px;

  border: 1px solid rgba(255, 255, 255, 0.07);

  border-radius: 7px;

  background: rgba(255, 255, 255, 0.025);

  color: #a5a6b2;

  font-size: 0.6rem;

  font-weight: 600;

  white-space: nowrap;
`;

export const TechIcon = styled.span`
  display: grid;

  place-items: center;

  color: #bca0ff;

  font-size: 0.7rem;
`;

export const TechName = styled.span`
  white-space: nowrap;
`;


/* =========================
   ACTIONS
========================= */

export const Actions = styled.div`
  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 7px;

  margin-top: 18px;
`;

export const ActionButton = styled.a`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 6px;

  padding: 8px 13px;

  border: 1px solid
    ${({ $primary }) =>
      $primary
        ? "rgba(168, 85, 247, 0.38)"
        : "rgba(255, 255, 255, 0.1)"};

  border-radius: 8px;

  background:
    ${({ $primary }) =>
      $primary
        ? "rgba(124, 58, 237, 0.1)"
        : "rgba(255, 255, 255, 0.025)"};

  color:
    ${({ $primary }) =>
      $primary
        ? "#c4a5ff"
        : "#a5a6b2"};

  font-size: 0.63rem;

  font-weight: 600;

  text-decoration: none;

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    background:
      ${({ $primary }) =>
        $primary
          ? "rgba(124, 58, 237, 0.17)"
          : "rgba(255, 255, 255, 0.05)"};

    border-color:
      ${({ $primary }) =>
        $primary
          ? "rgba(168, 85, 247, 0.55)"
          : "rgba(255, 255, 255, 0.16)"};
  }

  &:focus-visible {
    outline: 2px solid #a855f7;

    outline-offset: 3px;
  }
`;


/* =========================
   NOT FOUND
========================= */

export const NotFoundTitle = styled.h1`
  margin: 20px 0 8px;

  color: #f5f5f7;

  font-size: 2rem;
`;

export const NotFoundText = styled.p`
  margin: 0;

  color: #9294a3;

  font-size: 0.8rem;
`;