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

  return (
    <>
      <section className="mx-auto mt-[12rem] flex w-full max-w-[46.4rem] flex-col gap-[3rem] px-[3.2rem] md:mt-[20rem] xl:mt-[23.8rem]">
        <SignPageHeader
          text="이미 회원이신가요?"
          linkText="로그인 하기"
          linkTo="/signin"
        />
        <form
          className="flex flex-col gap-[2.4rem]"
          id="sign"
          onSubmit={(e) => submitEvent(e)}
        >
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
        </form>
        <button className="default-btn" form="sign">
          회원가입
        </button>
        <SocialSign />
      </section>
    </>
  );
}
