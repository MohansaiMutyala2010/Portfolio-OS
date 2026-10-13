
import styled, { keyframes } from "styled-components";

const glowPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.04);
    opacity: 1;
  }
`;

const floatCard = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
`;

const floatSmall = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
`;

/* Main right section */
export const HeroRightContainer = styled.div`
  position: relative;
  isolation: isolate;

  width: 100%;
  max-width: 440px;
  min-width: 0;
  min-height: 400px;
  flex: 0 1 440px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 420px;
    min-height: 380px;
    margin-inline: auto;
  }

  @media (max-width: 768px) {
    min-height: 350px;
  }

  @media (max-width: 480px) {
    max-width: 360px;
    min-height: 320px;
    padding-inline: 8px;
  }

  @media (max-width: 360px) {
    min-height: 290px;
    padding-inline: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;

    *,
    &::before,
    &::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`;

/* Background glow */
export const GlowCircle = styled.div`
  position: absolute;
  z-index: -1;

  width: min(360px, 90%);
  aspect-ratio: 1;
  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.35),
    transparent 70%
  );

  filter: blur(22px);
  pointer-events: none;

  animation: ${glowPulse} 5s ease-in-out infinite;

  @media (max-width: 480px) {
    width: 92%;
    filter: blur(16px);
  }
`;

/* Main profile card */
export const ProfileCard = styled.div`
  position: relative;
  z-index: 2;

  width: min(260px, 68%);
  min-width: 0;
  box-sizing: border-box;

  padding: 24px 18px;
  border-radius: 26px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  animation: ${floatCard} 4s ease-in-out infinite;

  @media (max-width: 768px) {
    width: min(250px, 70%);
    padding: 20px 14px;
  }

  @media (max-width: 480px) {
    width: min(230px, 72%);
    padding: 18px 12px;
    border-radius: 22px;
  }

  @media (max-width: 360px) {
    width: 72%;
    padding: 16px 10px;
  }
`;

export const ProfileImage = styled.img`
  display: block;

  width: min(165px, 100%);
  aspect-ratio: 1;
  height: auto;

  border-radius: 50%;
  object-fit: cover;
  border: 5px solid rgba(255, 255, 255, 0.12);
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: min(150px, 100%);
  }

  @media (max-width: 480px) {
    width: min(135px, 100%);
  }

  @media (max-width: 360px) {
    width: min(115px, 100%);
  }
`;

export const ProfileName = styled.h2`
  max-width: 100%;
  margin: 16px 0 0;

  color: white;
  font-size: clamp(1.15rem, 2vw, 1.5rem);
  line-height: 1.3;
  overflow-wrap: anywhere;
`;

export const ProfileRole = styled.p`
  max-width: 100%;
  margin: 6px 0 0;

  color: #a1a1aa;
  font-size: clamp(0.8rem, 1.4vw, 0.95rem);
  line-height: 1.45;
  overflow-wrap: anywhere;
`;

/* Experience badge */
export const ExperienceCard = styled.div`
  position: absolute;
  z-index: 3;

  top: 44px;
  left: 0;

  max-width: 44%;
  box-sizing: border-box;
  padding: 13px 16px;

  border-radius: 17px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);

  h2 {
    margin: 0;
    color: white;
    font-size: clamp(1rem, 1.8vw, 1.3rem);
    line-height: 1.3;
    text-align: center;
  }

  p {
    margin: 5px 0 0;
    color: #a1a1aa;
    font-size: clamp(0.68rem, 1.15vw, 0.85rem);
    line-height: 1.4;
    text-align: center;
  }

  animation: ${floatSmall} 4.5s ease-in-out infinite;

  @media (max-width: 900px) {
    top: 32px;
    left: 2px;
  }

  @media (max-width: 768px) {
    top: 26px;
    left: 4px;
  }

  @media (max-width: 480px) {
    top: 22px;
    left: 6px;
    max-width: 43%;
    padding: 10px 8px;
    border-radius: 13px;
  }

  @media (max-width: 360px) {
    top: 18px;
    left: 2px;
    padding: 9px 6px;
  }
`;

/* Projects badge */
export const ProjectsCard = styled.div`
  position: absolute;
  z-index: 3;

  right: 0;
  bottom: 58px;

  max-width: 42%;
  box-sizing: border-box;
  padding: 13px 16px;

  border-radius: 17px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);

  h2 {
    margin: 0;
    color: white;
    font-size: clamp(1rem, 1.8vw, 1.3rem);
    line-height: 1.3;
    text-align: center;
  }

  p {
    margin: 5px 0 0;
    color: #a1a1aa;
    font-size: clamp(0.68rem, 1.15vw, 0.85rem);
    line-height: 1.4;
    text-align: center;
  }

  animation: ${floatSmall} 5s ease-in-out infinite;

  @media (max-width: 900px) {
    right: 2px;
    bottom: 44px;
  }

  @media (max-width: 768px) {
    right: 4px;
    bottom: 36px;
  }

  @media (max-width: 480px) {
    right: 6px;
    bottom: 28px;
    max-width: 40%;
    padding: 10px 8px;
    border-radius: 13px;
  }

  @media (max-width: 360px) {
    right: 2px;
    bottom: 22px;
    padding: 9px 6px;
  }
`;

/* Technology badge */
export const TechCard = styled.div`
  position: absolute;
  z-index: 3;

  top: 8px;
  right: 0;

  max-width: 80%;
  box-sizing: border-box;
  padding: 11px 15px;

  border-radius: 15px;
  background: rgba(79, 70, 229, 0.2);
  color: white;

  font-size: clamp(0.72rem, 1.35vw, 0.95rem);
  line-height: 1.4;
  text-align: center;
  overflow-wrap: anywhere;

  backdrop-filter: blur(16px);
  transition: background 0.3s ease;

  &:hover {
    background: rgba(79, 70, 229, 0.3);
  }

  @media (max-width: 768px) {
    top: 4px;
    right: 4px;
  }

  @media (max-width: 480px) {
    top: 2px;
    right: 6px;
    max-width: 76%;
    padding: 9px 10px;
    border-radius: 12px;
  }

  @media (max-width: 360px) {
    right: 2px;
    max-width: 78%;
    padding: 8px;
  }
`;

/* Developer badge */
export const CodeCard = styled.div`
  position: absolute;
  z-index: 3;

  bottom: 4px;
  left: 24px;

  max-width: 65%;
  box-sizing: border-box;
  padding: 13px 18px;

  border-radius: 15px;
  background: #111827;
  color: #8b5cf6;

  font-family: monospace;
  font-size: clamp(0.78rem, 1.35vw, 0.95rem);
  white-space: nowrap;

  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(139, 92, 246, 0.2);
  }

  @media (max-width: 900px) {
    left: 16px;
  }

  @media (max-width: 768px) {
    left: 12px;
    bottom: 2px;
  }

  @media (max-width: 480px) {
    left: 8px;
    bottom: 0;
    padding: 10px 12px;
    border-radius: 12px;
  }

  @media (max-width: 360px) {
    left: 4px;
    padding: 9px 10px;
  }
`;