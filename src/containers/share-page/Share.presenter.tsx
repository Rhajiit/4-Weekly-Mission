// Components
import HeadNav from "@/src/components/layout/head-nav/HeadNav";
import ShareFolderProfile from "@/src/containers/share-page/profile/SharePageProfile";
import LinkSearchBar from "@/src/components/link-card/link-card-search-form/LinkSearchBar";
import LinkCardListLayout from "@/src/components/link-card/link-card-layout/LinkCardListLayout";
import Footer from "@/src/components/layout/footer/Footer";

// Types
import { UserLinkDataType } from "@/src/types/UserLinkDataType";
import UserDataType from "@/src/types/UserDataType";

interface PropsType {
  cardFilterSearchValue: string;
  setCardFilterSearchValue: (searchValue: string) => void;
  shareUserData: UserDataType;
  items: UserLinkDataType[];
  folderName: string;
  isEmptyResponse: boolean;
}

export default function ShareUi({ props }: { props: PropsType }) {
  const {
    cardFilterSearchValue,
    setCardFilterSearchValue,
    items,
    shareUserData,
    isEmptyResponse,
    folderName,
  } = props;

  return (
    <>
      <HeadNav />
      <ShareFolderProfile
        shareUserData={shareUserData}
        folderName={folderName}
      />
      <main className="w-full bg-white pb-[6rem] pt-[4rem]">
        <section className="mx-auto mb-[2rem] w-full max-w-[38.9rem] px-[3.2rem] py-[2rem] md:max-w-[69.8rem] md:px-0 xl:max-w-[106rem]">
          <LinkSearchBar
            cardFilterSearchValue={cardFilterSearchValue}
            setCardFilterSearchValue={setCardFilterSearchValue}
          />
          <LinkCardListLayout items={items} isEmptyResponse={isEmptyResponse} />
        </section>
      </main>
      <Footer />
    </>
  );
}
