import LinkCard from "../LinkCard";
import * as S from "./LinkCardListLayout.style";

//Types
import { UserLinkDataType } from "@/src/types/UserLinkDataType";
import { LinkCardFunctionObjectType } from "@/src/types/ModalFunctionDataTypes";

interface LinkCardListLayoutPropType {
  items: UserLinkDataType[];
  favorite?: boolean;
  kebab?: LinkCardFunctionObjectType[];
  isEmptyResponse: boolean;
  isLoading?: boolean;
}

/**
 *
 * @param { FolderCardData } items 카드에 대한 전반적인 내용이 담긴 요소입니다.
 * @param { boolean } favorite 현재 카드의 즐겨찾기 여부를 표시하는 요소입니다.
 * @param { FolderKebabActionArray } kebab 케밥 메뉴에 대한 동작들이 포함된 컴포넌트입니다.
 * @returns 링크 카드의 그리드 배열을 구현하는 단순 ui 배치형 컴포넌트입니다.
 */
export default function LinkCardListLayout({
  items,
  favorite = false,
  kebab,
  isEmptyResponse,
  isLoading,
}: LinkCardListLayoutPropType) {
  return (
    <>
      {(isEmptyResponse || isLoading) && (
        <S.EmptySpace className="lb-body1-regular">
          {isLoading ? "불러오는 중입니다..." : "저장된 링크가 없습니다."}
        </S.EmptySpace>
      )}
      <S.CardGridLayout>
        {items.map((item) => (
          <LinkCard
            key={item.id}
            contents={item}
            favorite={favorite}
            kebab={kebab}
          />
        ))}
      </S.CardGridLayout>
    </>
  );
}
