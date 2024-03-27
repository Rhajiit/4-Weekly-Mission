import styled from "styled-components";

export const InputSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const InputSelectLabel = styled.label<{ $errorMessage: string }>`
  cursor: text;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.8rem 1.5rem;
  gap: 0.3rem;

  border: ${({ $errorMessage }) =>
    !!$errorMessage
      ? "0.1rem solid var(--lb-red)"
      : "0.1rem solid var(--lb-gray20)"};
  border-radius: 0.8rem;

  &:focus-within {
    border: 0.1rem solid var(--lb-primary-color);
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;

  &:focus-visible {
    outline: none;
  }
`;

export const HiddenButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: transparent;
  border: none;
  position: relative;
  width: 1.6rem;
  height: 1.6rem;
`;

export const ErrorMessage = styled.a`
  color: var(--lb-red);
`;
