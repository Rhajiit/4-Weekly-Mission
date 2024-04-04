import router from "next/router";
import * as S from "@/styles/pages/sign-page.style";

// Components
import SignUpPageContainer from "@/src/containers/signin-page/SignInPage";
import SignPageHeader from "@/src/components/layout/sign-page/header/SignPageHeader";
import SignInput from "@/src/components/sign-input/SignInput";
import SocialSign from "@/src/components/layout/sign-page/social/SocialSign";
import { useEffect } from "react";

export default function SignUp() {
  const {
    emailError,
    passwordError,
    emailRef,
    passwordRef,
    blurEvent,
    submitEvent,
  } = SignUpPageContainer();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.push("/folder");
    }
  });

  return (
    <>
      <S.SignPageWrapper>
        <SignPageHeader
          text="회원이 아니신가요?"
          linkText="회원 가입하기"
          linkTo="/signup"
        />
        <S.SignFormWrapper id="sign" onSubmit={(e) => submitEvent(e)}>
          <SignInput
            inputRef={emailRef}
            inputType="email"
            errorMessage={emailError}
            blurEvent={() => blurEvent("email", emailRef)}
          />
          <SignInput
            inputRef={passwordRef}
            inputType="password-login"
            errorMessage={passwordError}
            blurEvent={() => blurEvent("password-login", passwordRef)}
          />
        </S.SignFormWrapper>
        <S.SignSubmitButton form="sign">로그인</S.SignSubmitButton>
        <SocialSign />
      </S.SignPageWrapper>
    </>
  );
}
