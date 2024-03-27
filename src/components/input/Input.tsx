import Image from "next/image";
import * as S from "@/src/components/input/Input.style";
import { RefObject, useState } from "react";
import INPUT_TYPE_PLACEHOLDER from "@/src/constant/INPUT_TYPE_PLACEHOLDER";

export default function Input({
  inputRef,
  inputType = "password",
  errorMessage,
  blurEvent,
}: {
  inputRef: RefObject<HTMLInputElement>;
  inputType: string;
  errorMessage: string;
  blurEvent: () => void;
}) {
  const [currentInputType, setCurrentInputType] = useState(inputType);
  const isTypePassword =
    inputType === "password" || inputType === "passwordCheck";

  return (
    <S.InputSectionWrapper>
      <S.InputSelectLabel $errorMessage="">
        <S.Input
          type={currentInputType}
          placeholder={`${INPUT_TYPE_PLACEHOLDER[inputType]}을 입력해주세요.`}
          onBlur={blurEvent}
          ref={inputRef}
        />
        {isTypePassword && (
          <S.HiddenButton
            type="button"
            onClick={() =>
              setCurrentInputType((prev) =>
                prev !== inputType ? inputType : "text"
              )
            }
          >
            <Image
              fill
              src={`/assets/icons/svg/eye-${
                currentInputType === "password" ? "off" : "on"
              }.svg`}
              alt="togglePasswordHidden"
            />
          </S.HiddenButton>
        )}
      </S.InputSelectLabel>

      <S.ErrorMessage className="lb-body2-regular">
        {errorMessage}
      </S.ErrorMessage>
    </S.InputSectionWrapper>
  );
}
