import * as S from "@/styles/pages/share.style";

// Components
import HeadNav from "@/src/components/layout/head-nav/HeadNav";
import ShareFolderProfile from "@/src/containers/share-page/profile/SharePageProfile";
import LinkSearchBar from "@/src/components/link-card/link-card-search-form/LinkSearchBar";
import LinkCardListLayout from "@/src/components/link-card/link-card-layout/LinkCardListLayout";
import useSharePage from "@/src/containers/share-page/useSharePage";
import Footer from "@/src/components/layout/footer/Footer";

export default function Share() {
  const { cardFilter, items, isEmptyResponse, setCardFilter } = useSharePage();

  return (
    <>
      <HeadNav />
      <ShareFolderProfile />
      <S.MainWrapper>
        <S.SharePageSection>
          <LinkSearchBar
            cardFilter={cardFilter}
            setCardFilter={setCardFilter}
          />
          <LinkCardListLayout items={items} isEmptyResponse={isEmptyResponse} />
        </S.SharePageSection>
      </S.MainWrapper>
      <Footer />
    </>
  );
}
