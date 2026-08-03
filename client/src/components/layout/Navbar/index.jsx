import { useState } from "react";
import navigation from "../../../data/navigation";
import portfolio_logo from "../../../assets/logos/portfolio_logo.png";

import {
  NavbarContainer,
  NavWrapper,
  Logo,
  LogoImage,
  NavLinks,
  NavItem,
  Actions,
  ThemeButton,
  ResumeButton,
  MenuButton,
  MobileMenu,
  MobileNavItem,
  MobileResumeButton,
} from "./styles";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <NavbarContainer>
      <NavWrapper>

        {/* Logo */}
        <Logo>
          <LogoImage
            src={portfolio_logo}
            alt="Portfolio OS Logo"
          />
        </Logo>

        {/* Desktop Navigation */}
        <NavLinks>
          {navigation.map((item) => (
            <NavItem
              key={item.id}
              onClick={handleNavClick}
            >
              {item.label}
            </NavItem>
          ))}
        </NavLinks>

        {/* Desktop Actions + Mobile Theme */}
        <Actions>
          <ThemeButton>
            🌙
          </ThemeButton>

          <ResumeButton>
            Download Resume
          </ResumeButton>
           {/* Mobile Menu Button */}
        <MenuButton onClick={handleMenuToggle}>
          {isMenuOpen ? "✕" : "☰"}
        </MenuButton>
        </Actions>

       

      </NavWrapper>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <MobileMenu>

          {navigation.map((item) => (
            <MobileNavItem
              key={item.id}
              onClick={handleNavClick}
            >
              {item.label}
            </MobileNavItem>
          ))}

          <MobileResumeButton>
            Download Resume
          </MobileResumeButton>

        </MobileMenu>
      )}

    </NavbarContainer>
  );
};

export default Navbar;