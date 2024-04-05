import HeadNav from "@/src/components/layout/HeadNav/HeadNav";
import Input from "@/src/components/sign-input/SignInput";
import { useRef, useState } from "react";

export default function InputPage() {
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
      <HeadNav />
      <Input
        inputRef={inputRef}
        inputType="password"
        errorMessage={errorMessage}
        blurEvent={blurEvent}
      />
    </>
  );
}
