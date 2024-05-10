import { LinkCardFunctionDataType } from "@/src/types/ModalFunctionDataTypes";
import * as S from "../modalLoader.style";
import { useRouter } from "next/router";
import { acceptDataFromApi } from "@/src/utils/api";

// Type

/**
 *
 * @param {string } modalData 현재 선택된 폴더를 string으로 받아 표시해 줌과 동시에 삭제 기능을 수행하는 모달입니다.
 * @returns
 */
export default function ModalRemoveSubFolder({
  modalData,
}: {
  modalData: LinkCardFunctionDataType;
}) {
  const router = useRouter();
  const handleRemoveFolder = async () => {
    await acceptDataFromApi(`folders/${modalData.targetId}`, {
      method: "DELETE",
    });

    router.reload();
  };

  return (
    <>
      <S.ModalTitle>
        폴더 삭제 <br />
        <S.ModalCaption>{modalData.target}</S.ModalCaption>
      </S.ModalTitle>
      <S.ModalButton onClick={() => handleRemoveFolder()} $errored={true}>
        삭제하기
      </S.ModalButton>
    </>
  );
}
