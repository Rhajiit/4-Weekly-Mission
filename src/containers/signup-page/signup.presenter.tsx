import router from "next/router";
import * as S from "@/styles/pages/sign-page.style";

// Components
import SignPageHeader from "@/src/components/layout/sign-page/header/SignPageHeader";
import SignInput from "@/src/components/sign-input/SignInput";
import SocialSign from "@/src/components/layout/sign-page/social/SocialSign";
import { FormEvent, RefObject, useEffect } from "react";

interface PropsType {
  emailError: string;
  passwordError: string;
  passCheckError: string;
  emailRef: RefObject<HTMLInputElement>;
  passwordRef: RefObject<HTMLInputElement>;
  passCheckRef: RefObject<HTMLInputElement>;
  blurEvent: (errMsg: string, inputRef: RefObject<HTMLInputElement>) => void;
  submitEvent: (e: FormEvent) => void;
}

export default function SignUpPresenter({ props }: { props: PropsType }) {
  const {
    emailError,
    passwordError,
    passCheckError,
    emailRef,
    passwordRef,
    passCheckRef,
    blurEvent,
    submitEvent,
  } = props;

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.push("/folder");
    }
  });

  return (
    <>
      <S.SignPageWrapper>
        <SignPageHeader
          text="이미 회원이신가요?"
          linkText="로그인 하기"
          linkTo="/signin"
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
            inputType="password-sign-up"
            errorMessage={passwordError}
            blurEvent={() => blurEvent("password-sign-up", passwordRef)}
          />
          <SignInput
            inputRef={passCheckRef}
            inputType="password-check"
            errorMessage={passCheckError}
            blurEvent={() => blurEvent("password-check", passCheckRef)}
          />
        </S.SignFormWrapper>
        <S.SignSubmitButton form="sign">회원가입</S.SignSubmitButton>
        <SocialSign />
      </S.SignPageWrapper>
    </>
  );
}
