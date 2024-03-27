import styled from "styled-components";

export const SharePageSection = styled.section`
  max-width: 106rem;
  margin: 0 auto;
  @media (max-width: 1124px) {
    max-width: 768px;
    padding: 0 3.2rem;
  }

  @media (max-width: 767px) {
    max-width: 38.9rem;
    padding: 2rem 3.2rem;
    margin-bottom: 2rem;
  }
`;

export const MainWrapper = styled.main`
  width: 100%;
  background-color: var(--lb-white);
  padding: 4rem 0 6rem;
`;
