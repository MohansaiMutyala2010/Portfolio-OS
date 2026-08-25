import styled from "styled-components";

export const FormCard = styled.div`
  width: 100%;

  padding: 30px 32px;

  border: 1px solid
    rgba(168, 85, 247, 0.28);

  border-radius: 16px;

  background:
    linear-gradient(
      145deg,
      rgba(18, 22, 40, 0.96),
      rgba(9, 12, 25, 0.96)
    );

  box-shadow:
    0 20px 60px
    rgba(0, 0, 0, 0.2);

  box-sizing: border-box;

  @media (max-width: 1100px) {
    padding: 24px;
  }

  @media (max-width: 768px) {
    padding: 20px;

    border-radius: 14px;
  }
`;

export const FormHeader = styled.div`
  display: flex;

  align-items: center;

  gap: 16px;

  margin-bottom: 24px;
`;

export const FormIcon = styled.div`
  width: 48px;
  height: 48px;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  border: 1px solid
    rgba(168, 85, 247, 0.45);

  border-radius: 50%;

  background:
    rgba(124, 58, 237, 0.08);

  color: #b57cff;

  font-size: 1.05rem;

  box-shadow:
    0 0 24px
    rgba(124, 58, 237, 0.12);
`;

export const FormHeading = styled.div`
  min-width: 0;
`;

export const FormTitle = styled.h2`
  margin: 0;

  color: #f2f2f5;

  font-size: 1.25rem;

  font-weight: 700;
`;

export const FormDescription = styled.p`
  margin: 5px 0 0;

  color: #8f92a2;

  font-size: 0.68rem;
`;

export const Form = styled.form`
  display: flex;

  flex-direction: column;

  gap: 14px;
`;

export const FieldsRow = styled.div`
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 14px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;

  flex-direction: column;

  gap: 7px;
`;

export const Label = styled.label`
  color: #aaaebb;

  font-size: 0.63rem;

  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;

  min-height: 50px;

  padding: 0 15px;

  border: 1px solid
    rgba(255, 255, 255, 0.07);

  border-radius: 10px;

  outline: none;

  background:
    rgba(255, 255, 255, 0.035);

  color: #eeeeF2;

  font-family: inherit;

  font-size: 0.7rem;

  box-sizing: border-box;

  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #686b7b;
  }

  &:focus {
    border-color:
      rgba(168, 85, 247, 0.5);

    background:
      rgba(124, 58, 237, 0.04);

    box-shadow:
      0 0 0 3px
      rgba(124, 58, 237, 0.08);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;

  min-height: 145px;

  padding: 14px 15px;

  resize: vertical;

  border: 1px solid
    rgba(255, 255, 255, 0.07);

  border-radius: 10px;

  outline: none;

  background:
    rgba(255, 255, 255, 0.035);

  color: #eeeeF2;

  font-family: inherit;

  font-size: 0.7rem;

  line-height: 1.5;

  box-sizing: border-box;

  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #686b7b;
  }

  &:focus {
    border-color:
      rgba(168, 85, 247, 0.5);

    background:
      rgba(124, 58, 237, 0.04);

    box-shadow:
      0 0 0 3px
      rgba(124, 58, 237, 0.08);
  }
`;

export const SubmitRow = styled.div`
  display: flex;

  justify-content: flex-end;

  margin-top: 2px;
`;

export const SubmitButton = styled.button`
  min-width: 230px;

  min-height: 50px;

  padding: 0 22px;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  border: none;

  border-radius: 10px;

  background:
    linear-gradient(
      90deg,
      #4f46e5,
      #a855f7
    );

  color: white;

  font-family: inherit;

  font-size: 0.72rem;

  font-weight: 700;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    box-shadow:
      0 12px 28px
      rgba(124, 58, 237, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ResponseCard = styled.div`
  display: flex;

  align-items: center;

  gap: 12px;

  padding: 12px;

  border: 1px solid
    rgba(168, 85, 247, 0.2);

  border-radius: 10px;

  background:
    rgba(124, 58, 237, 0.05);
`;

export const ResponseIcon = styled.div`
  width: 36px;
  height: 36px;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  border-radius: 50%;

  background:
    rgba(124, 58, 237, 0.12);

  color: #b57cff;

  font-size: 0.8rem;
`;

export const ResponseContent = styled.div`
  min-width: 0;
`;

export const ResponseTitle = styled.strong`
  display: block;

  color: #e9e9ef;

  font-size: 0.68rem;
`;

export const ResponseDescription = styled.p`
  margin: 3px 0 0;

  color: #888b9b;

  font-size: 0.58rem;

  line-height: 1.45;
`;