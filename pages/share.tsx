import * as S from "@/styles/pages/share.style";

// Components
import HeadNav from "@/src/components/layout/HeadNav";
import ShareFolderProfile from "@/src/containers/share-page/profile/SharePageProfile";
import LinkSearchBar from "@/src/components/link-card/link-search-form/LinkSearchBar";
import LinkCardCollection from "@/src/components/link-card/link-card-collection/LinkCardCollection";
import SharePageContainer from "@/src/containers/share-page/SharePage";

export default function Share() {
  const { cardFilter, items, setCardFilter } = SharePageContainer();

  return (
    <>
      <HeadNav />
      <ShareFolderProfile />
      <S.SharePageMain>
        <LinkSearchBar cardFilter={cardFilter} setCardFilter={setCardFilter} />
        <LinkCardCollection items={items} />
      </S.SharePageMain>
    </>
  );
}
