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
