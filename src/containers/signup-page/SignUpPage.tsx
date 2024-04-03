import { INPUT_NAME } from "@/src/constant/SIGN_INPUT_TEXTS";
import signBlurError from "@/src/utils/sign-blur-error-message/signBlurError";
import { RefObject, useRef, useState } from "react";

export default function SignUpPageContainer() {
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

      case "passwordLogin":
        setFunction = setPasswordError;
        break;

      default:
        console.error("input의 타입 지정이 올바르지 않음");
        return;
    }
    signBlurError(userInput, type, setFunction);
  };

  return {
    emailError,
    passwordError,
    emailRef,
    passwordRef,
    blurEvent,
  };
}
