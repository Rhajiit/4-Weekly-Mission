import { INPUT_NAME } from "@/src/constant/SIGN_INPUT_TEXTS";
import { RefObject, useRef, useState } from "react";

export default function SignUpPageContainer() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const blurEvent = (type: string, ref: RefObject<HTMLInputElement>) => {
    const errorInputType = INPUT_NAME[type];
    let setFunction;

    switch (type) {
      case "email":
        setFunction = setEmailError;
        break;

      case "password":
        setFunction = setPasswordError;
        break;

      default:
        console.error("input의 타입 지정이 올바르지 않음");
        return;
    }
    setFunction("");

    if (ref.current!.value === "") {
      const connector = type === "password" ? "를" : "을";
      setFunction(`${errorInputType}${connector} 입력해주세요.`);
    }
  };

  return {
    emailError,
    passwordError,
    emailRef,
    passwordRef,
    blurEvent,
  };
}
