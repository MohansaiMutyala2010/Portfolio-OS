import { contactIntro } from "../data";

import {
  Intro,
  Eyebrow,
  EyebrowDot,
  Title,
  Highlight,
  Emoji,
  Description,
} from "./styles";

const ContactIntro = () => {
  return (
    <Intro>

      <Eyebrow>
        <EyebrowDot />
        {contactIntro.eyebrow}
      </Eyebrow>

      <Title>
        {contactIntro.title}

        <br />

        <Highlight>
          {contactIntro.highlight}
        </Highlight>

        <Emoji>
          {contactIntro.emoji}
        </Emoji>
      </Title>

      <Description>
        {contactIntro.description}
      </Description>

    </Intro>
  );
};

export default ContactIntro;