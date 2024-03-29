import { useEffect, useState } from "react";
import * as S from "./LinkSubFolderUtils.style";

// Type
import { LinkFolderFunctionObjectType } from "@/src/types/ModalFunctionDataTypes";
import Image from "next/image";
interface HandleCurrentSubFolderPropType {
  subFolderUtils: LinkFolderFunctionObjectType[];
}

/**
 * @description 현재 폴더에 관한 동작을 수행하는 버튼들을 구현하는 컴포넌트.
 * @param subFolderUtils 버튼 관련 정보와 폴더 관련 함수가 담긴 객체가 담긴 배열.
 * @returns
 */
export default function LinkSubFolderUtils({
  subFolderUtils,
}: HandleCurrentSubFolderPropType) {
  return (
    <S.SubFolderUtilList>
      {subFolderUtils.map((item) => (
        <S.Button
          className="lb-body2-semibold"
          key={item.buttonName}
          type="button"
          onClick={() => item.modalHandle(item.type, item.data)}
        >
          <Image width={18} height={18} src={item.imgUrl} alt={item.imgAlt} />
          {item.buttonName}
        </S.Button>
      ))}
    </S.SubFolderUtilList>
  );
}
