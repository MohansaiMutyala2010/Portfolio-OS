import { contactForm, contactFooter } from "../data";

import {
  FooterArea,
  ResponseCard,
  ResponseIcon,
  ResponseContent,
  ResponseTitle,
  ResponseDescription,
  Envelope,
  Copyright,
} from "./styles";

const ContactFooter = () => {
  const Icon = contactForm.response.icon;

  return (
    <FooterArea>

      <ResponseCard>

        <ResponseIcon>
          <Icon />
        </ResponseIcon>

        <ResponseContent>
          <ResponseTitle>
            {contactForm.response.title}
          </ResponseTitle>

          <ResponseDescription>
            {contactForm.response.description}
          </ResponseDescription>
        </ResponseContent>

        <Envelope>
          ✉
        </Envelope>

      </ResponseCard>

      <Copyright>
        © {contactFooter.year}{" "}
        {contactFooter.name}. All rights reserved.{" "}
        <span>♥</span>
      </Copyright>

    </FooterArea>
  );
};

export default ContactFooter;