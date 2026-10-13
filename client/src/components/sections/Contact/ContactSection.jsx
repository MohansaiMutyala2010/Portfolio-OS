import ContactIntro from "./ContactIntro";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactFooter from "./ContactFooter";

import {
  ContactSectionWrapper,
  ContactContainer,
  ContactGrid,
  LeftColumn,
  RightColumn,
} from "./styles";

const ContactSection = () => {
  return (
    <ContactSectionWrapper>
      <ContactContainer>

        <ContactGrid>

          <LeftColumn>
            <ContactIntro />
            <ContactInfo />
          </LeftColumn>

          <RightColumn>
            <ContactForm />
          </RightColumn>

        </ContactGrid>

        <ContactFooter />

      </ContactContainer>
    </ContactSectionWrapper>
  );
};

export default ContactSection;