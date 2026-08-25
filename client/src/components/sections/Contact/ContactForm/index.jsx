import { useState } from "react";

import { contactForm } from "../data";

import {
  FormCard,
  FormHeader,
  FormIcon,
  FormHeading,
  FormTitle,
  FormDescription,
  Form,
  FieldsRow,
  Field,
  Label,
  Input,
  Textarea,
  SubmitRow,
  SubmitButton,
  ResponseCard,
  ResponseIcon,
  ResponseContent,
  ResponseTitle,
  ResponseDescription,
} from "./styles";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] =
    useState(initialForm);

  const [isSubmitted, setIsSubmitted] =
    useState(false);

  const handleChange = (event) => {
    const { name, value } =
      event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      Backend/API integration can be added here later.
    */

    setIsSubmitted(true);

    setFormData(initialForm);
  };

  const FormIconComponent =
    contactForm.icon;

  const ResponseIconComponent =
    contactForm.response.icon;

  return (
    <>
      <FormCard>

        <FormHeader>

          <FormIcon>
            <FormIconComponent />
          </FormIcon>

          <FormHeading>
            <FormTitle>
              {contactForm.title}
            </FormTitle>

            <FormDescription>
              {contactForm.description}
            </FormDescription>
          </FormHeading>

        </FormHeader>

        <Form onSubmit={handleSubmit}>

          <FieldsRow>

            <Field>
              <Label htmlFor="name">
                Your Name
              </Label>

              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Field>

            <Field>
              <Label htmlFor="email">
                Your Email
              </Label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Field>

          </FieldsRow>

          <Field>
            <Label htmlFor="subject">
              Subject
            </Label>

            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="What would you like to discuss?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </Field>

          <Field>
            <Label htmlFor="message">
              Your Message
            </Label>

            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Field>

          <SubmitRow>
            <SubmitButton type="submit">
              <span>➤</span>

              {contactForm.buttonText}
            </SubmitButton>
          </SubmitRow>

          {isSubmitted && (
            <ResponseCard>

              <ResponseIcon>
                <ResponseIconComponent />
              </ResponseIcon>

              <ResponseContent>
                <ResponseTitle>
                  Message ready to send!
                </ResponseTitle>

                <ResponseDescription>
                  Connect this form to your backend/API
                  when you're ready for real submissions.
                </ResponseDescription>
              </ResponseContent>

            </ResponseCard>
          )}

        </Form>

      </FormCard>
    </>
  );
};

export default ContactForm;