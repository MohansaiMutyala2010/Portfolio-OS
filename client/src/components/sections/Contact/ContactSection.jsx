import ContactIntro from "./ContactIntro";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactFooter from "./ContactFooter";

import {
  ContactSection,
  ContactContainer,
  ContactGrid,
  LeftColumn,
  RightColumn,
} from "./styles";

const ContactSection = () => {
  return (
    <ContactSection>
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
    </ContactSection>
  );
};

export default ContactSection;