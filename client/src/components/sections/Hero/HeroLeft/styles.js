import styled from "styled-components";

/* Main Hero Left */
export const HeroLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 650px;
   padding: 120px 40px;
`;

/* Greeting */
export const Greeting = styled.p`
  margin: 0 0 18px;

  font-size: 1rem;
  font-weight: 600;

  color: #a78bfa;

  letter-spacing: 0.5px;
`;

/* Main Heading */
export const Heading = styled.h1`
  margin: 0;

  font-size: clamp(3rem, 6vw, 4.8rem);

  line-height: 1.05;

  font-weight: 800;

  color: #ffffff;

  letter-spacing: -2px;

  span {
    display: block;

    background: linear-gradient(
      90deg,
      #8b5cf6,
      #4f46e5
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

/* Description */
export const Description = styled.p`
  max-width: 580px;

  margin: 26px 0 0;

  font-size: 1.1rem;

  line-height: 1.8;

  color: #a1a1aa;
`;

/* CTA Container */
export const CTAContainer = styled.div`
  display: flex;

  align-items: center;

  gap: 16px;

  margin-top: 34px;

  flex-wrap: wrap;
`;

/* Primary Button */
export const PrimaryButton = styled.button`
  padding: 15px 26px;

  border: none;

  border-radius: 14px;

  background: linear-gradient(
    90deg,
    #4f46e5,
    #8b5cf6
  );

  color: #ffffff;

  font-size: 0.95rem;

  font-weight: 600;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);

    box-shadow:
      0 12px 30px rgba(79, 70, 229, 0.35);
  }
`;

/* Secondary Button */
export const SecondaryButton = styled.button`
  padding: 14px 26px;

  border: 1px solid rgba(255, 255, 255, 0.15);

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.03);

  color: #ffffff;

  font-size: 0.95rem;

  font-weight: 600;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);

    border-color: rgba(139, 92, 246, 0.5);

    transform: translateY(-3px);
  }
`;

/* Social Links */
export const SocialLinks = styled.div`
  display: flex;

  align-items: center;

  gap: 22px;

  margin-top: 32px;
`;

/* Individual Social Link */
export const SocialLink = styled.a`
  color: #a1a1aa;

  font-size: 0.9rem;

  font-weight: 500;

  text-decoration: none;

  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;

    transform: translateY(-2px);
  }
`;

