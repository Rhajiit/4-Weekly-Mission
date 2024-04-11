import styled from "styled-components";

export const Button = styled.button`
  border: none;
  color: var(--lb-gray60);

  display: flex;
  align-items: center;
  text-align: center;
  gap: 4px;
  background-color: var(--lb-white);

  @media (max-width: 767px) {
    padding: 0;
  }
`;
