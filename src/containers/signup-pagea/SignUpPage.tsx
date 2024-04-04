import signBlurError from "@/src/utils/sign-blur-error-message/signBlurError";
import { FormEvent, RefObject, useRef, useState } from "react";
import router from "next/router";
import axios from "axios";
import { SIGN_INPUT_ERROR_MESSAGES } from "@/src/constant/SIGN_INPUT_TEXTS";

export default function SignUpPageContainer() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passCheckError, setPassCheckError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passCheckRef = useRef<HTMLInputElement>(null);

  const blurEvent = (type: string, ref: RefObject<HTMLInputElement>) => {
    const userInput = ref.current!.value;
    const comparePassword =
      type === "passCheck" ? passwordRef.current!.value : undefined;
    let setFunction;

    switch (type) {
      case "email":
        setFunction = setEmailError;
        break;

      case "password":
        setFunction = setPasswordError;
        break;

      case "passCheck":
        setFunction = setPassCheckError;
        break;

      default:
        console.error("input의 타입 지정이 올바르지 않음");
        return;
    }
    signBlurError(userInput, type, setFunction, comparePassword);
  };

  const submitEvent = async (e: FormEvent) => {
    e.preventDefault();
    const emailInput = emailRef.current!.value;
    const passwordInput = passwordRef.current!.value;
    const passCheckInput = passCheckRef.current!.value;

    try {
      console.log(emailInput);
      await axios.post("https://bootcamp-api.codeit.kr/api/check-email", {
        email: emailInput,
      });

      // const { data }: { data: { accessToken: string; refreshToken: string } } =
      //   await axios.post("https://bootcamp-api.codeit.kr/api/sign-in", {
      //     email: emailInput,
      //     password: passwordInput,
      //   });
      // localStorage.setItem("accessToken", data.accessToken);
      // router.push("/folder");
    } catch (e: any) {
      setEmailError(SIGN_INPUT_ERROR_MESSAGES.NOT_CORRECT_EMAIL);
      setPasswordError(SIGN_INPUT_ERROR_MESSAGES.NOT_CORRECT_PASSWORD);
      signBlurError(emailInput, "email", setEmailError);
      signBlurError(passwordInput, "passwordLogin", setPasswordError);
      signBlurError(passCheckInput, "passwordLogin", setPasswordError);
      if (e.status === 409) {
        setEmailError(e.message);
      }
    }
  };

  return {
    emailError,
    passwordError,
    passCheckError,
    emailRef,
    passwordRef,
    passCheckRef,
    blurEvent,
    submitEvent,
  };
}
