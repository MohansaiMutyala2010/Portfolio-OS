import styled from "styled-components";

export const HeroRightContainer = styled.div`
  position: relative;

  width: 500px;
  height: 600px;

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
`;