import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  margin: 7rem auto 0;
  flex-direction: column;
  gap: 4rem;
  text-align: center;
  max-width : 120rem;

  h1 {
    font-family: Pretendard;
    font-size: 6.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%;
  }

  &::after {
    content: "";
    background-image: url(/assets/images/png/index/main_Image.png);
    background-size: contain;
    width: 100%;
    height: 500px;
    background-position: center bottom;
    margin: 0;
    background-repeat: no-repeat;
  }

  @media (max-width: 1199px) {
    margin: 4rem auto 0;
    padding : 0 3.2rem;
    max-width: 762px;

    h1 {
      width: 80%;
      margin: auto;
    }

    &::after {
      height: 0;
      padding-top: calc(590 / 1200 * 100%);
    }
  }

  @media (max-width: 767px) {    
    margin : 2.8rem auto 0;
    padding: 0 3.2rem;

  h1 {
    font-size: 3.2rem;
    max-width: 100%;
  }

  main > header div > img {
    width: 100%;
  }
`;

export const SectionWrapper = styled.div`
  background-color: var(--lb-white);
  width: 100%;
  padding-bottom: 120px;
  padding-top: 70px;
`;
