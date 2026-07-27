import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  background: rgba(10, 12, 24, 0.82);
  backdrop-filter: blur(12px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:0 10px 40px rgba(0,0,0,0.35);
`;

export const NavWrapper = styled.div`
  max-width: 1400px;
  height: 80px;

  margin: 0 auto;
  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
 display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 52px;
  height: 52px;

  object-fit: cover;

  border-radius: 50%;

  border: 2px solid rgba(255, 255, 255, 0.12);

  transition: all 0.3s ease;

  cursor: pointer;

  &:hover {
    transform: scale(1.08);
    border-color: #7c5cff;
    box-shadow: 0 0 18px rgba(124, 92, 255, 0.4);
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 35px;

  list-style: none;
`;

export const NavItem = styled.li`
  color: #d1d5db;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #7c5cff;
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -8px;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    border-radius: 10px;
    background: linear-gradient(90deg, #4f46e5, #8b5cf6);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 80%;
  }

`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

`;

export const ThemeButton = styled.button`
  width: 48px;
  height: 48px;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;

  background: transparent;
  color: white;
  cursor: pointer;

  &:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(124,92,255,.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(124,92,255,.25);
}

transition: all .3s ease;
`;

export const ResumeButton = styled.button`
  padding: 14px 24px;

  border: none;
  border-radius: 14px;

  background: linear-gradient(90deg, #4f46e5, #8b5cf6);

  color: white;
  font-size: 0.95rem;
  font-weight: 600;

  cursor: pointer;

  &:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(79,70,229,.4);
}
`;