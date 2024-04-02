import SignInput from "@/src/components/sign-input/SignInput";
import * as S from "@/styles/pages/sign.style";
import { useRef, useState } from "react";

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const blurEvent = () => {
    if (inputRef.current!.value === "") {
      setErrorMessage("빈칸입니다!");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <>
      <SignInput
        inputRef={inputRef}
        inputType="password"
        errorMessage={errorMessage}
        blurEvent={blurEvent}
      />
    </>
  );
}
