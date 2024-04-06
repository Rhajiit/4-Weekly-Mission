import {
  INPUT_NAME,
  SIGN_INPUT_ERROR_MESSAGES,
} from "@/src/constant/SIGN_INPUT_TEXTS";
import signBlurError from "@/src/utils/sign-blur-error-message/signBlurError";
import axios from "axios";
import router from "next/router";
import { FormEvent, RefObject, useRef, useState } from "react";

export default function useSignInPage() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const blurEvent = (type: string, ref: RefObject<HTMLInputElement>) => {
    const errorInputType = INPUT_NAME[type];
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

  const submitEvent = async (e: FormEvent) => {
    e.preventDefault();
    const emailInput = emailRef.current!.value;
    const passwordInput = passwordRef.current!.value;

    try {
      const { data }: { data: { accessToken: string; refreshToken: string } } =
        await axios.post("https://bootcamp-api.codeit.kr/api/sign-in", {
          email: emailInput,
          password: passwordInput,
        });
      localStorage.setItem("accessToken", data.accessToken);
      router.push("/folder");
    } catch {
      signBlurError(emailInput, "email", setEmailError);
      signBlurError(passwordInput, "password-login", setPasswordError);
      setEmailError(SIGN_INPUT_ERROR_MESSAGES.NOT_CORRECT_EMAIL);
      setPasswordError(SIGN_INPUT_ERROR_MESSAGES.NOT_CORRECT_PASSWORD);
    }
  };

  return {
    emailError,
    passwordError,
    emailRef,
    passwordRef,
    blurEvent,
    submitEvent,
  };
}
