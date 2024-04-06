import styled from "styled-components";
import { PrimaryButton } from "../primary-button/PrimaryButton";

export const NavLoginButton = styled(PrimaryButton)`
  width: 12.8rem;

  @media (max-width: 767px) {
    width: 8rem;
    font-size: 1.4rem;
    padding: 1rem 1.6rem;
  }
`;

export const NavProfileSection = styled.section`
  color: var(--lb-gray100);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.4rem;
  font-weight: 400;

  & img {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
  }

  @media (max-width: 767px) {
    font-size: 0;

    & img {
      width: auto;
    }
  }
`;
