import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  background: rgba(15, 36, 199, 0.85);
  backdrop-filter: blur(12px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
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

export const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
`;

export const LogoImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
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
`;