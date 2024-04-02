import { PrimaryButton } from "@/src/components/layout/PrimaryButton/PrimaryButton";
import styled from "styled-components";

export const SignPageWrapper = styled.section`
  min-width: 40rem;
  display: flex;
  flex-direction: column;
  width: 4rem;
  gap: 3rem;
  margin: 23.8rem auto 0;
`;

export const SignFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const SignSubmitButton = styled(PrimaryButton)`
  width: 100%;
`;
