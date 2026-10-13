
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* Main Hero Left */
export const HeroLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  max-width: 650px;
  box-sizing: border-box;
  padding: 0;

  @media (max-width: 768px) {
    align-items: center;
    max-width: 100%;
    text-align: center;
  }
`;

/* Greeting */
export const Greeting = styled.p`
  margin: 0 0 12px;

  font-size: clamp(0.9rem, 1.2vw, 1rem);
  font-weight: 600;
  line-height: 1.4;
  color: #a78bfa;
  letter-spacing: 0.3px;

  animation: ${fadeUp} 0.5s ease both;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

/* Main Heading */
export const Heading = styled.h1`
  width: 100%;
  margin: 0;

  font-size: clamp(2.8rem, 4.2vw, 3.8rem);
  line-height: 1.05;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: clamp(-2px, -0.1vw, -0.5px);
  overflow-wrap: break-word;

  animation: ${fadeUp} 0.6s ease both;
  animation-delay: 0.08s;

  span {
    display: block;

    background: linear-gradient(
      90deg,
      #8b5cf6,
      #4f46e5
    );

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 7vw, 3.4rem);
    line-height: 1.08;
    letter-spacing: -1.5px;
  }

  @media (max-width: 480px) {
    font-size: clamp(2.25rem, 8.5vw, 2.8rem);
    letter-spacing: -1px;
  }

  @media (max-width: 360px) {
    font-size: 2.1rem;
  }
`;

/* Description */
export const Description = styled.p`
  width: 100%;
  max-width: 540px;
  box-sizing: border-box;

  margin: 18px 0 0;

  font-size: clamp(1rem, 1.25vw, 1.1rem);
  line-height: 1.65;
  color: #a1a1aa;

  overflow-wrap: break-word;

  animation: ${fadeUp} 0.6s ease both;
  animation-delay: 0.16s;

  @media (max-width: 768px) {
    max-width: 560px;
    margin-top: 18px;
    padding-inline: 4px;

    font-size: clamp(0.98rem, 2.5vw, 1.1rem);
    line-height: 1.65;
  }

  @media (max-width: 480px) {
    margin-top: 16px;
    font-size: 0.98rem;
    line-height: 1.65;
  }
`;

/* CTA Container */
export const CTAContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  width: 100%;
  margin-top: 24px;

  animation: ${fadeUp} 0.6s ease both;
  animation-delay: 0.24s;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 22px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    margin-top: 20px;
    gap: 10px;
  }
`;

/* Shared Button Styles */
const buttonStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 50px;
  padding: 12px 22px;
  box-sizing: border-box;
  max-width: 100%;

  border-radius: 13px;

  color: #ffffff;
  font-size: 0.92rem;
  font-weight: 600;
  font-family: inherit;
  line-height: 1.4;
  text-align: center;
  text-decoration: none;

  cursor: pointer;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;

  &:focus-visible {
    outline: 2px solid #a78bfa;
    outline-offset: 4px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 340px;
    min-height: 48px;
    align-self: center;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

/* Primary Button */
export const PrimaryButton = styled.button`
  ${buttonStyles}

  border: 1px solid transparent;

  background: linear-gradient(
    90deg,
    #4f46e5,
    #8b5cf6
  );

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(79, 70, 229, 0.28);
  }
`;

/* Secondary Button */
export const SecondaryButton = styled.button`
  ${buttonStyles}

  border: 1px solid rgba(255, 255, 255, 0.15);

  background: rgba(255, 255, 255, 0.03);

  &:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(139, 92, 246, 0.5);
    transform: translateY(-2px);
  }
`;

/* Social Links */
export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  max-width: 100%;
  margin-top: 22px;

  animation: ${fadeUp} 0.6s ease both;
  animation-delay: 0.32s;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 22px;
    gap: 22px;
  }

  @media (max-width: 380px) {
    gap: 18px;
  }
`;

/* Individual Social Link */
export const SocialLink = styled.a`
  color: #a1a1aa;

  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.5;

  text-decoration: none;
  overflow-wrap: anywhere;

  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }

  &:focus-visible {
    outline: 2px solid #a78bfa;
    outline-offset: 4px;
    border-radius: 3px;
  }
`;
