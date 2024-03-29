import * as S from "../modalLoader.style";

// Type
import { LinkCardFunctionDataType } from "@/src/types/ModalFunctionDataTypes";

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
  return (
    <>
      <S.ModalTitle>
        링크 삭제 <br />
        <S.ModalCaption>{modalData.target}</S.ModalCaption>
      </S.ModalTitle>
      <S.ModalButton $errored={true}>삭제하기</S.ModalButton>
    </>
  );
}
