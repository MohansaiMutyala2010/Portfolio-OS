import navigation from "../../../data/navigation";
import portfolio_logo from "../../../assets/logos/portfolio_logo.png";
import {
  NavbarContainer,
  NavWrapper,
  Logo,LogoImage,
  NavLinks,
  NavItem,
  Actions,
  ThemeButton,
  ResumeButton,
} from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavWrapper>
        <Logo>
          <LogoImage src={portfolio_logo} alt="Portfolio OS Logo" />
        </Logo>

        <NavLinks>
         {navigation.map((item) => (
    <NavItem key={item.id}>
      {item.label}
    </NavItem>
  ))}
        </NavLinks>

        <Actions>
          <ThemeButton>🌙</ThemeButton>
          <ResumeButton>Download Resume</ResumeButton>
        </Actions>
      </NavWrapper>
    </NavbarContainer>
  );
};

export default Navbar;