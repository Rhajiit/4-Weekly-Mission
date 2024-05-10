import { LinkCardFunctionDataType } from "@/src/types/ModalFunctionDataTypes";
import * as S from "../modalLoader.style";
import { FormEvent, useRef } from "react";
import { acceptDataFromApi } from "@/src/utils/api";
import { useRouter } from "next/router";

/**
 * @description 현재 선택된 모달의 이름을 바꿀 때 사용할 모달입니다.
 * @returns
 */
export default function ModalChangeSubFolderName({
  modalData,
}: {
  modalData: LinkCardFunctionDataType;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current!.value === "") return;

    await acceptDataFromApi(`folders/${modalData.targetId}`, {
      method: "PUT",
      body: JSON.stringify({ name: inputRef.current!.value }),
    });

    router.reload();
  };

  return (
    <>
      <S.ModalTitle>
        폴더 이름 변경
        <br />
        <S.ModalCaption>{modalData.target}</S.ModalCaption>
      </S.ModalTitle>
      <form action="submit" onSubmit={(e) => handleSubmit(e)}>
        <S.ModalInput ref={inputRef} placeholder="내용 입력" type="text" />
        <S.ModalButton>변경하기</S.ModalButton>
      </form>
    </>
  );
}
