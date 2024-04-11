import styled from "styled-components";

export const InputSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const InputTitleLabel = styled.label`
  color: var(--lb-black);
  margin-bottom: 0.6rem;
`;

export const InputSelectLabel = styled.label<{ $isError: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.8rem 1.5rem;
  gap: 0.3rem;
  background-color: var(--lb-white);
  cursor: text;

  border: ${({ $isError }) =>
    $isError ? "0.1rem solid var(--lb-red)" : "0.1rem solid var(--lb-gray20)"};
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
