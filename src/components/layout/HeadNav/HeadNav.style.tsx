import styled from "styled-components";

export const Nav = styled.nav<{ $isSticky: boolean }>`
  background-color: var(--lb-background);
  position: ${({ $isSticky }) => ($isSticky ? "sticky" : "relative")};
  margin: 0;
  top: 0;
  z-index: 1;

  @media (max-width: 1199px) {
    margin: 0;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  padding: 2rem 20rem;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  @media (max-width: 1199px) {
    width: 100%;
    padding: 2rem 3.2rem;
    margin: 0 auto;
    max-width: 86.4rem;

    img {
      width: 8.86rem;
    }
  }
`;
