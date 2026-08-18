import styled from "styled-components";

export const Tabs = styled.div`
  width: 100%;

  display: flex;

  justify-content: center;
  align-items: center;

  gap: 10px;

  flex-wrap: wrap;
`;

export const TabButton = styled.button`
  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding: 9px 16px;

  border: 1px solid
    ${({ $active }) =>
      $active
        ? "rgba(168, 85, 247, 0.65)"
        : "rgba(255, 255, 255, 0.1)"};

  border-radius: 999px;

  background:
    ${({ $active }) =>
      $active
        ? "rgba(124, 58, 237, 0.16)"
        : "rgba(255, 255, 255, 0.025)"};

  color:
    ${({ $active }) =>
      $active ? "#e9d5ff" : "#a1a1aa"};

  cursor: pointer;

  font-family: inherit;

  font-size: 0.78rem;

  font-weight: 600;

  box-shadow:
    ${({ $active }) =>
      $active
        ? "0 0 24px rgba(124, 58, 237, 0.12)"
        : "none"};

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    border-color: rgba(168, 85, 247, 0.45);

    color: #e9d5ff;
  }

  &:focus-visible {
    outline: 2px solid #a855f7;

    outline-offset: 3px;
  }

  @media (max-width: 640px) {
    padding: 8px 13px;

    font-size: 0.72rem;
  }
`;

export const TabIcon = styled.span`
  width: 18px;
  height: 18px;

  display: grid;

  place-items: center;

  color:
    ${({ $active }) =>
      $active ? "#c084fc" : "#8b8b98"};

  font-size: 0.95rem;
`;

export const TabName = styled.span`
  white-space: nowrap;
`;