import { RefObject, useEffect, useState } from "react";
import Image from "next/image";
import {
  INPUT_TYPE,
  INPUT_PLACEHOLDER,
  INPUT_NAME,
} from "@/src/constant/SIGN_INPUT_TEXTS";

/**
 * @description 로그인 등에서 사용할 입력 컴포넌트입니다.
 * @param {RefObject} inputRef 이 입력의 연결할 ref값을 지정합니다. submit이벤트 동작 시 값을 불러올 때에 사용할 것입니다.
 * @param {string} inputType 이 입력의 유형을 설정합니다. 이 유형은 HTML의 유형이 아니더라도, 이미 지정된 상수값과 비교하여 적절한 type을 불러올 것입니다.
 * @param {string} errorMessage 이 input 컴포넌트에서 useState등을 이용하여 에러 메시지가 변동되었을 때 표시할 내용을 받는 인자입니다.
 * @param {BlurFunction} blurEvent 이 input컴포넌트에서 blur가 일어났을 때, 작동할 function을 받는 인자입니다.
 * @returns
 */
export default function SignInput({
  inputRef,
  inputType,
  errorMessage,
  blurEvent,
}: {
  inputRef: RefObject<HTMLInputElement>;
  inputType: string;
  errorMessage: string;
  blurEvent: () => void;
}) {
  const [currentInputType, setCurrentInputType] = useState(
    INPUT_TYPE[inputType],
  );
  const [isError, setIsError] = useState(false);
  const isTypePassword = INPUT_TYPE[inputType] === "password";

  useEffect(() => {
    if (errorMessage) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [errorMessage]);

  return (
    <div className="flex flex-col gap-[0.6rem]">
      <label
        htmlFor={inputType}
        className="lb-body2-regular mb-[0.6rem] text-black"
      >
        {INPUT_NAME[inputType]}
      </label>
      <label
        className={`flex w-[100%] cursor-text items-center gap-[0.3rem] rounded-[0.8rem] border-[0.1rem] 
        border-solid ${isError ? "border-red" : "border-gray20"} 
        bg-white px-[1.5rem] py-[1.8rem] focus-within:border-primary`}
        htmlFor={inputType}
      >
        <input
          className="lb-body1-regular w-[100%] border-none focus-visible:outline-none"
          id={inputType}
          type={currentInputType}
          placeholder={`${INPUT_PLACEHOLDER[inputType]}`}
          onBlur={() => blurEvent()}
          ref={inputRef}
        />
        {isTypePassword && (
          <button
            className="relative flex h-[1.6rem] w-[1.6rem] justify-center border-none"
            type="button"
            onClick={() =>
              setCurrentInputType((prev) =>
                prev !== "password" ? "password" : "text",
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
          </button>
        )}
      </label>

      <a className="lb-body2-regular text-red">{errorMessage}</a>
    </div>
  );
}
