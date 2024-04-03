import signBlurError from "@/src/utils/sign-blur-error-message/signBlurError";
import { RefObject, useRef, useState } from "react";

export default function SignInPageContainer() {
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

  return {
    emailError,
    passwordError,
    passCheckError,
    emailRef,
    passwordRef,
    passCheckRef,
    blurEvent,
  };
}
