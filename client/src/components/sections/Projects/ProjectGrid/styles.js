import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;

  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 14px;

  @media (max-width: 1023px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap: 12px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;

    gap: 14px;
  }
`;