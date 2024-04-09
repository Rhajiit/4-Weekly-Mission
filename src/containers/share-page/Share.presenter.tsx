import * as S from "@/styles/pages/share.style";

// Components
import HeadNav from "@/src/components/layout/head-nav/HeadNav";
import ShareFolderProfile from "@/src/containers/share-page/profile/SharePageProfile";
import LinkSearchBar from "@/src/components/link-card/link-card-search-form/LinkSearchBar";
import LinkCardListLayout from "@/src/components/link-card/link-card-layout/LinkCardListLayout";
import Share from "@/pages/share";
import Footer from "@/src/components/layout/footer/Footer";
import { LinkCardFunctionObjectType } from "@/src/types/ModalFunctionDataTypes";
import { UserLinkDataType } from "@/src/types/UserLinkDataType";

interface PropsType {
  cardFilterSearchValue: string;
  setCardFilterSearchValue: (searchValue: string) => void;
  items: UserLinkDataType[];
  isEmptyResponse: boolean;
}

export default function ShareUi({ props }: { props: PropsType }) {
  const {
    cardFilterSearchValue,
    setCardFilterSearchValue,
    items,
    isEmptyResponse,
  } = props;

  return (
    <>
      <HeadNav />
      <ShareFolderProfile />
      <S.MainWrapper>
        <S.SharePageSection>
          <LinkSearchBar
            cardFilterSearchValue={cardFilterSearchValue}
            setCardFilterSearchValue={setCardFilterSearchValue}
          />
          <LinkCardListLayout items={items} isEmptyResponse={isEmptyResponse} />
        </S.SharePageSection>
      </S.MainWrapper>
      <Footer />
    </>
  );
}
