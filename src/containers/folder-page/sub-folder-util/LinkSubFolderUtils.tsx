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
    <div className="flex gap-[1.2rem]">
      {subFolderUtils.map((item) => (
        <S.Button
          className="lb-body2-semibold"
          key={item.buttonName}
          type="button"
          onClick={() => item.modalHandle(item.type, item.data)}
        >
          <div className=" relative h-[18px] w-[18px]">
            <Image fill src={item.imgUrl} alt={item.imgAlt} />
          </div>
          {item.buttonName}
        </S.Button>
      ))}
    </div>
  );
}
