import { FormEvent, RefObject, useRef } from "react";
import * as S from "../modalLoader.style";
import { acceptDataFromApi } from "@/src/utils/api";
import { useRouter } from "next/router";

/**
 *
 * @returns 새로운 폴더를 추가하고자 할 때 input과 동시에 띄워줄 모달입니다.
 */
export default function ModalAddSubFolder() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleAddSubFolder = async (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current!.value === "") return;

    await acceptDataFromApi("folders", {
      method: "POST",
      body: JSON.stringify({ name: inputRef.current!.value }),
    });

    router.reload();
  };

  return (
    <>
      <S.ModalTitle>폴더 추가</S.ModalTitle>
      <form action="submit" onSubmit={(e: FormEvent) => handleAddSubFolder(e)}>
        <S.ModalInput ref={inputRef} placeholder="내용 입력" type="text" />
        <S.ModalButton>추가하기</S.ModalButton>
      </form>
    </>
  );
}
