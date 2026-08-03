import styled from "styled-components";

/* =========================
   NAVBAR
========================= */

export const NavbarContainer = styled.nav`
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 1000;

  background: rgba(10, 12, 30, 0.88);

  backdrop-filter: blur(16px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;


/* =========================
   NAVBAR WRAPPER
========================= */

export const NavWrapper = styled.div`
  max-width: 1400px;

  height: 80px;

  margin: 0 auto;

  padding: 0 40px;

  display: flex;

  align-items: center;

  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;


/* =========================
   LOGO
========================= */

export const Logo = styled.div`
  display: flex;

  align-items: center;

  cursor: pointer;
`;


export const LogoImage = styled.img`
  width: 52px;

  height: 52px;

  object-fit: cover;

  border-radius: 50%;

  border: 2px solid rgba(255, 255, 255, 0.12);

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.08);

    border-color: #7c5cff;

    box-shadow:
      0 0 18px rgba(124, 92, 255, 0.4);
  }
`;


/* =========================
   DESKTOP NAVIGATION
========================= */

export const NavLinks = styled.ul`
  display: flex;

  align-items: center;

  gap: 35px;

  list-style: none;

  margin: 0;

  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;


export const NavItem = styled.li`
  position: relative;

  color: #d1d5db;

  font-size: 1rem;

  font-weight: 500;

  cursor: pointer;

  transition: color 0.3s ease;


  &:hover {
    color: #ffffff;
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

    background: linear-gradient(
      90deg,
      #4f46e5,
      #8b5cf6
    );

    transition: width 0.3s ease;
  }


  &:hover::after {
    width: 80%;
  }
`;


/* =========================
   DESKTOP ACTIONS
========================= */

export const Actions = styled.div`
  display: flex;

  align-items: center;

  gap: 12px;
`;


/* =========================
   THEME BUTTON
========================= */

export const ThemeButton = styled.button`
  width: 48px;

  height: 48px;

  display: flex;

  align-items: center;

  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.1);

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.03);

  color: white;

  font-size: 1.1rem;

  cursor: pointer;

  transition: all 0.3s ease;


  &:hover {
    background: rgba(124, 92, 255, 0.12);

    border-color: rgba(124, 92, 255, 0.5);

    transform: translateY(-2px);

    box-shadow:
      0 8px 20px rgba(124, 92, 255, 0.25);
  }
`;


/* =========================
   RESUME BUTTON
========================= */

export const ResumeButton = styled.button`
  padding: 14px 24px;

  border: none;

  border-radius: 14px;

  background: linear-gradient(
    90deg,
    #4f46e5,
    #8b5cf6
  );

  color: white;

  font-size: 0.95rem;

  font-weight: 600;

  cursor: pointer;

  transition: all 0.3s ease;


  &:hover {
    transform: translateY(-3px);

    box-shadow:
      0 12px 30px rgba(79, 70, 229, 0.4);
  }

    /* Mobile */
  @media (max-width: 768px) {
    display: none;
  }
`;


/* =========================
   HAMBURGER BUTTON
========================= */

export const MenuButton = styled.button`
  display: none;

  width: 48px;

  height: 48px;

  border: 1px solid rgba(255, 255, 255, 0.1);

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.03);

  color: white;

  font-size: 1.4rem;

  cursor: pointer;

  transition: all 0.3s ease;


  &:hover {
    background: rgba(124, 92, 255, 0.12);

    border-color: rgba(124, 92, 255, 0.5);

    transform: scale(1.05);
  }


  @media (max-width: 768px) {
    display: flex;

    align-items: center;

    justify-content: center;
  }
`;


/* =========================
   MOBILE MENU
========================= */

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 6px;

    padding: 20px 24px 24px;

    background: rgba(10, 12, 30, 0.96);
    backdrop-filter: blur(18px);

    border-top: 1px solid rgba(255, 255, 255, 0.06);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    animation: menuSlideDown 0.3s ease;

    @keyframes menuSlideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;


/* =========================
   MOBILE NAVIGATION ITEM
========================= */

export const MobileNavItem = styled.div`
  padding: 14px 12px;

  border-radius: 10px;

  color: #d1d5db;

  font-size: 1rem;

  font-weight: 500;

  cursor: pointer;

  transition: all 0.25s ease;


  &:hover {
    color: white;

    background: rgba(124, 92, 255, 0.1);

    padding-left: 18px;
  }
`;


/* =========================
   MOBILE RESUME BUTTON
========================= */

export const MobileResumeButton = styled.button`
  margin-top: 12px;

  width: 100%;

  padding: 14px;

  border: none;

  border-radius: 12px;

  background: linear-gradient(
    90deg,
    #4f46e5,
    #8b5cf6
  );

  color: white;

  font-size: 0.95rem;

  font-weight: 600;

  cursor: pointer;

  transition: all 0.3s ease;


  &:hover {
    transform: translateY(-2px);

    box-shadow:
      0 10px 25px rgba(79, 70, 229, 0.35);
  }
`;