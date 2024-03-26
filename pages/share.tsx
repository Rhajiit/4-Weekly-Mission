import * as S from "@/styles/pages/share.style";

// Components
import HeadNav from "@/src/components/layout/HeadNav/HeadNav";
import ShareFolderProfile from "@/src/containers/share-page/profile/SharePageProfile";
import LinkSearchBar from "@/src/components/link-card/link-card-search-form/LinkSearchBar";
import LinkCardListLayout from "@/src/components/link-card/link-card-layout/LinkCardListLayout";
import SharePageContainer from "@/src/containers/share-page/SharePage";

export default function Share() {
  const { cardFilter, items, setCardFilter } = SharePageContainer();

  return (
    <>
      <HeadNav />
      <ShareFolderProfile />
      <S.SharePageMain>
        <LinkSearchBar cardFilter={cardFilter} setCardFilter={setCardFilter} />
        <LinkCardListLayout items={items} />
      </S.SharePageMain>
    </>
  );
}
