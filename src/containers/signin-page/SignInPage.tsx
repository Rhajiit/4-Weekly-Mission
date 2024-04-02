import { INPUT_PLACEHOLDER } from "@/src/constant/SIGN_INPUT_TYPE_TRANSLATOR";
import { RefObject, useRef, useState } from "react";

export default function SignInPageContainer() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passCheckError, setPassCheckError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passCheckRef = useRef<HTMLInputElement>(null);

  const blurEvent = (type: string, ref: RefObject<HTMLInputElement>) => {
    const errorInputType = INPUT_PLACEHOLDER[type];
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
    setFunction("");

    if (ref.current!.value === "") {
      const connector = type === "password" ? "를" : "을";
      setFunction(`${errorInputType}${connector} 입력해주세요.`);
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
  };
}
