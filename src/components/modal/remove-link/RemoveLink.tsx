import { useRouter } from "next/router";
import * as S from "../modalLoader.style";

// Type
import { LinkCardFunctionDataType } from "@/src/types/ModalFunctionDataTypes";
import { acceptDataFromApi } from "@/src/utils/api";

/**
 *
 * @param {string} modalLink 현재 선택된 링크를 string으로 받아 삭제하는 기능을 가진 모달입니다.
 * @returns
 */
export default function ModalRemoveLink({
  modalData,
}: {
  modalData: LinkCardFunctionDataType;
}) {
  const router = useRouter();

  console.log(modalData);

  const handleLinkRemove = async () => {
    await acceptDataFromApi(`links/${modalData.targetId}`, {
      method: "DELETE",
    });

    router.reload();
  };
  return (
    <>
      <S.ModalTitle>
        링크 삭제 <br />
        <S.ModalCaption>{modalData.target}</S.ModalCaption>
      </S.ModalTitle>
      <S.ModalButton onClick={() => handleLinkRemove()} $errored={true}>
        삭제하기
      </S.ModalButton>
    </>
  );
}
