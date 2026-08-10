import styled, { keyframes } from "styled-components";


const glowPulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }

  50% {
    transform: scale(1.08);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0.7;
  }
`;

const floatCard = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0);
  }
`;


const floatSmall = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-6px);
  }

  100% {
    transform: translateY(0);
  }
`;

export const HeroRightContainer = styled.div`
  position: relative;

  width: 500px;
  height: 520px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GlowCircle = styled.div`
  position: absolute;

  width: 420px;
  height: 420px;

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.45),
    transparent 70%
  );

  filter: blur(25px);

  z-index: 0;

  animation: ${glowPulse} 5s ease-in-out infinite;
`;

export const ProfileCard = styled.div`
  position: relative;

  width: 280px;

  padding: 30px;

  border-radius: 28px;

  background: rgba(255,255,255,0.05);

  backdrop-filter: blur(20px);

  border: 1px solid rgba(255,255,255,0.08);

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 2;

  animation: ${floatCard} 4s ease-in-out infinite;
`;

export const ProfileImage = styled.img`
  width: 180px;
  height: 180px;

  border-radius: 50%;

  object-fit: cover;

  border: 5px solid rgba(255,255,255,0.12);
`;

export const ProfileName = styled.h2`
  margin-top: 20px;

  color: white;

  font-size: 1.6rem;
`;

export const ProfileRole = styled.p`
  margin-top: 8px;

  color: #a1a1aa;
`;

export const ExperienceCard = styled.div`
  position: absolute;

  top: 70px;
  left: -10px;

  padding: 18px 24px;

  border-radius: 18px;

  background: rgba(255,255,255,0.06);

  backdrop-filter: blur(16px);

  border: 1px solid rgba(255,255,255,0.08);

  z-index: 3;

  h2{
    color:white;
    margin:0;
  }

  p{
    margin:6px 0 0;
    color:#a1a1aa;
    font-size:.9rem;
  }

  animation: ${floatSmall} 4.5s ease-in-out infinite;
`;

export const ProjectsCard = styled.div`
  position:absolute;

  bottom:90px;
  right:-20px;

  padding:18px 24px;

  border-radius:18px;

  background:rgba(255,255,255,.06);

  backdrop-filter:blur(16px);

  border:1px solid rgba(255,255,255,.08);

  z-index:3;

  h2{
    margin:0;
    color:white;
  }

  p{
    margin:6px 0 0;
    color:#a1a1aa;
    font-size:.9rem;
  }

  animation: ${floatSmall} 5s ease-in-out infinite;
`;

export const TechCard = styled.div`
  position:absolute;

  top:30px;
  right:20px;

  padding:14px 20px;

  border-radius:16px;

  background:rgba(79,70,229,.2);

  color:white;

  backdrop-filter:blur(16px);

  z-index:3;

  transition: all 0.3s ease;

&:hover {
  transform: translateY(-4px);
  background: rgba(79, 70, 229, 0.3);
  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.2);
}
`;

export const CodeCard = styled.div`
  position:absolute;

  bottom:20px;
  left:30px;

  padding:16px 22px;

  border-radius:16px;

  background:#111827;

  color:#8b5cf6;

  font-family:monospace;

  z-index:3;

  transition: all 0.3s ease;

&:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.2);
}
`;