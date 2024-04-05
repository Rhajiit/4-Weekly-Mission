import Link from "next/link";
import Image from "next/image";
import KebabMenu from "@/src/components/kebab/KebabMenu";
import timePassedFromCreate from "@/src/utils/timePassedFromCreate";
import * as S from "./LinkCard.style";

//Types
import { UserLinkDataType } from "@/src/types/UserLinkDataType";
import { LinkCardFunctionObjectType } from "@/src/types/ModalFunctionDataTypes";
interface LinkCardDataPropType {
  contents: UserLinkDataType;
  favorite: boolean;
  kebab?: LinkCardFunctionObjectType[];
}

/**
 *
 * @param { FolderCardData } contents 카드에 대한 전반적인 내용이 담긴 컴포넌트입니다.
 * @param { boolean } favorites 현재 카드의 즐겨찾기 여부를 표시하는 컴포넌트입니다.
 * @param { FolderKebabActionArray } kebab 케밥 메뉴에 대한 동작들이 포함된 컴포넌트입니다.
 * @returns 링크 카드의 세부 사항을 표현하는 컴포넌트입니다.
 */
export default function LinkCard({
  contents,
  favorite,
  kebab,
}: LinkCardDataPropType) {
  const { id, createdAt, description, imageSource, url } = contents;
  if (kebab) kebab.map((item) => (item.data!.target = url));

  const cardImage = imageSource;
  const timeConversion = new Date(createdAt); // sampleApi와 userApi의 양식이 달라 호환시키기 위함
  const passedTime = timePassedFromCreate(timeConversion);
  const editedTime = `${timeConversion.getFullYear()}. ${
    timeConversion.getMonth() + 1
  }. ${timeConversion.getDate()}`;

  return (
    <S.CardBoxOriginPosition key={id}>
      <S.CardWrapper>
        <Link href={url} target="_blank">
          <S.CardImageDiv $image={cardImage} />

          <S.TextSection>
            <S.TextPassedTime className="lb-caption">
              {passedTime}
            </S.TextPassedTime>
            <S.TextLinkDescription className="lb-body1-regular">
              {description}
            </S.TextLinkDescription>
            <S.TextLinkCreatedDate className="lb-body2-regular">
              {editedTime}
            </S.TextLinkCreatedDate>
          </S.TextSection>
        </Link>
      </S.CardWrapper>
      {kebab && <KebabMenu items={kebab} data={url} />}
      {favorite && (
        <S.FavorStarButton type="button">
          <Image
            width={34}
            height={34}
            src="/assets/icons/svg/favorite-star-blank.svg"
            alt="FavoriteButton"
          />
        </S.FavorStarButton>
      )}
    </S.CardBoxOriginPosition>
  );
}
