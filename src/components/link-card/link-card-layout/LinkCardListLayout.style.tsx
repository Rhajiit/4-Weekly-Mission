import styled from "styled-components";

export const CardGridLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 2.5rem 2rem;

  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptySpace = styled.div`
  color: var(--lb-black);
  padding: 4.1rem 0 3.5rem;
  margin: 0 auto;
  height: calc(100vh - 73.8rem);
  text-align: center;

  @media (max-width: 1124px) {
    height: calc(100vh - 78.2rem);
  }

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;
