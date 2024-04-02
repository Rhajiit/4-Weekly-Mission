import SignPageHeader from "@/src/components/layout/sign-page/header/SignPageHeader";
import SignInput from "@/src/components/sign-input/SignInput";
import SignInPageContainer from "@/src/containers/signin-page/SignInPage";

import * as S from "@/styles/pages/sign-page.style";

export default function SignUp() {
  const {
    emailError,
    passwordError,
    passCheckError,
    emailRef,
    passwordRef,
    passCheckRef,
    blurEvent,
  } = SignInPageContainer();

  return (
    <>
      <S.SignPageWrapper>
        <SignPageHeader
          text="이미 회원이신가요?"
          linkText="로그인 하기"
          linkTo="/signup"
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
          <SignInput
            inputRef={passCheckRef}
            inputType="passCheck"
            errorMessage={passCheckError}
            blurEvent={() => blurEvent("passCheck", passCheckRef)}
          />
        </S.SignFormWrapper>
        <S.SignSubmitButton form="sign">회원가입</S.SignSubmitButton>
      </S.SignPageWrapper>
    </>
  );
}
