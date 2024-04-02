import SignPageHeader from "@/src/components/layout/sign-page/header/SignPageHeader";
import SignInput from "@/src/components/sign-input/SignInput";
import SignUpPageContainer from "@/src/containers/signup-page/SignUpPage";
import * as S from "@/styles/pages/sign-page.style";

export default function SignUp() {
  const { emailError, passwordError, emailRef, passwordRef, blurEvent } =
    SignUpPageContainer();

  return (
    <>
      <S.SignPageWrapper>
        <SignPageHeader
          text="회원이 아니신가요?"
          linkText="회원 가입하기"
          linkTo="/signin"
        />
        <S.SignFormWrapper id="sign">
          <SignInput
            inputRef={emailRef}
            inputType="email"
            errorMessage={emailError}
            blurEvent={() => blurEvent("email", emailRef)}
          />
          <SignInput
            inputRef={passwordRef}
            inputType="password"
            errorMessage={passwordError}
            blurEvent={() => blurEvent("password", passwordRef)}
          />
        </S.SignFormWrapper>
        <S.SignSubmitButton onSubmit={() => console.log("asdf")} form="sign">
          로그인
        </S.SignSubmitButton>
      </S.SignPageWrapper>
    </>
  );
}
