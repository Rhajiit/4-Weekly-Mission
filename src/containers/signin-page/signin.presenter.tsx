import router from "next/router";

// Components
import SignPageHeader from "@/src/components/layout/sign-page/header/SignPageHeader";
import SignInput from "@/src/components/sign-input/SignInput";
import SocialSign from "@/src/components/layout/sign-page/social/SocialSign";
import { FormEvent, RefObject, useEffect } from "react";

interface PropsType {
  emailError: string;
  passwordError: string;
  emailRef: RefObject<HTMLInputElement>;
  passwordRef: RefObject<HTMLInputElement>;
  blurEvent: (errMsg: string, inputRef: RefObject<HTMLInputElement>) => void;
  submitEvent: (e: FormEvent) => void;
}

export default function SignInPresenter({ props }: { props: PropsType }) {
  const {
    emailError,
    passwordError,
    emailRef,
    passwordRef,
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
      <section className="mx-auto mt-[12rem] flex w-full max-w-[46.4rem] flex-col gap-[3rem] px-[3.2rem] md:mt-[20rem] xl:mt-[23.8rem]">
        <SignPageHeader
          text="회원이 아니신가요?"
          linkText="회원 가입하기"
          linkTo="/signup"
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
            inputType="password-login"
            errorMessage={passwordError}
            blurEvent={() => blurEvent("password-login", passwordRef)}
          />
        </form>
        <button className="default-btn" form="sign">
          로그인
        </button>
        <SocialSign />
      </section>
    </>
  );
}
