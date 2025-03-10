import axios from "axios";
import router, { useRouter } from "next/router";
import { FormEvent, RefObject, useEffect, useRef, useState } from "react";
import { SIGN_INPUT_ERROR_MESSAGES } from "@/src/constant/SIGN_INPUT_TEXTS";

// Components
import SignInPresenter from "@/src/containers/signin-page/signin.presenter";
import signBlurError from "@/src/utils/sign-blur-error-message/signBlurError";
import { getCookie, setCookie } from "cookies-next";

/**
 * @description signupPage의 전반적인 로직이 담겨있습니다.
 * @returns
 */
export default function SignIn() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const blurEvent = (type: string, ref: RefObject<HTMLInputElement>) => {
    const userInput = ref.current!.value;
    let setFunction;

    switch (type) {
      case "email":
        setFunction = setEmailError;
        break;

      case "password-login":
        setFunction = setPasswordError;
        break;

      default:
        console.error("input의 타입 지정이 올바르지 않음");
        return;
    }
    signBlurError(userInput, type, setFunction);
  };

  useEffect(() => {
    if (getCookie("accessToken")) {
      router.push("/folder");
    }
  });

  const submitEvent = async (e: FormEvent) => {
    e.preventDefault();
    const emailInput = emailRef.current!.value;
    const passwordInput = passwordRef.current!.value;

    try {
      const { data }: { data: { accessToken: string; refreshToken: string } } =
        await axios.post(
          "https://bootcamp-api.codeit.kr/api/linkbrary/v1/auth/sign-in",
          {
            email: emailInput,
            password: passwordInput,
          },
        );
      setCookie("accessToken", data.accessToken);
      setCookie("refreshToken", data.refreshToken);

      router.push("/folder");
    } catch {
      signBlurError(emailInput, "email", setEmailError);
      signBlurError(passwordInput, "password-login", setPasswordError);
      setEmailError(SIGN_INPUT_ERROR_MESSAGES.NOT_CORRECT_EMAIL);
      setPasswordError(SIGN_INPUT_ERROR_MESSAGES.NOT_CORRECT_PASSWORD);
    }
  };

  const props = {
    emailError,
    passwordError,
    emailRef,
    passwordRef,
    blurEvent,
    submitEvent,
  };

  return <SignInPresenter props={props} />;
}
