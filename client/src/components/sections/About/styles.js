import styled from "styled-components";

export const AboutSection = styled.section`
  width: 100%;

  padding: 70px 40px 60px;

  background: #0b0b14;

  @media (max-width: 1024px) {
    padding: 60px 30px 50px;
  }

  @media (max-width: 768px) {
    padding: 50px 20px 40px;
  }
`;

export const AboutHeader = styled.div`
  text-align: center;

  max-width: 800px;

  margin: 0 auto 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const SectionLabel = styled.p`
  display: inline-block;

  margin: 0 0 18px;

  padding: 8px 18px;

  border: 1px solid rgba(139, 92, 246, 0.4);

  border-radius: 30px;

  color: #c4b5fd;

  font-size: 0.8rem;

  font-weight: 600;

  letter-spacing: 1.5px;

  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin: 0;

  color: #ffffff;

  font-size: clamp(2.5rem, 5vw, 4rem);

  line-height: 1.1;

  font-weight: 800;

  span {
    background: linear-gradient(
      90deg,
      #8b5cf6,
      #4f46e5
    );

    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SectionDescription = styled.p`
  max-width: 650px;

  margin: 20px auto 0;

  color: #a1a1aa;

  font-size: 1.05rem;

  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 0.95rem;

    line-height: 1.6;
  }
`;

export const AboutMain = styled.div`
  width: 100%;

  max-width: 1400px;

  margin: 0 auto;

  display: grid;

  grid-template-columns: 1.4fr 1fr;

  gap: 30px;

  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;

    gap: 25px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }
`;