import {
  contactDetails,
  socialLinks,
} from "../data";

import {
  InfoList,
  InfoCard,
  InfoIcon,
  InfoContent,
  InfoLabel,
  InfoValue,
  CopyButton,
  SocialTitle,
  SocialList,
  SocialLink,
} from "./styles";

const ContactInfo = () => {
  const handleCopy = async (value) => {
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Clipboard may be unavailable in some browsers.
    }
  };

  return (
    <>
      <InfoList>

        {contactDetails.map((item) => {
          const Icon = item.icon;

          return (
            <InfoCard key={item.id}>

              <InfoIcon>
                <Icon />
              </InfoIcon>

              <InfoContent>
                <InfoLabel>
                  {item.label}
                </InfoLabel>

                <InfoValue>
                  {item.value}
                </InfoValue>
              </InfoContent>

              {item.copyValue && (
                <CopyButton
                  type="button"
                  aria-label={`Copy ${item.label}`}
                  onClick={() =>
                    handleCopy(item.copyValue)
                  }
                >
                  ⧉
                </CopyButton>
              )}

            </InfoCard>
          );
        })}

      </InfoList>

      <SocialTitle>
        Connect with me
      </SocialTitle>

      <SocialList>
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <SocialLink
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              <Icon />
            </SocialLink>
          );
        })}
      </SocialList>
    </>
  );
};

export default ContactInfo;