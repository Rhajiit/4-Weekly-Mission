import styled from "styled-components";

// 일반적인 버튼의 기본 스타일입니다.
export const PrimaryButton = styled.button`
  display: flex;
  color: var(--lb-light-gray);

  font-size: 1.8rem;
  font-weight: 600;

  padding: 16px 20px;
  border: none;
  border-radius: 8px;
  background: var(--gra-primary-to-sky-blue);
  justify-content: center;
  align-items: center;
  line-height: 100%;
`;
