import { HTMLAttributes, RefObject, useEffect } from "react";
import router from "next/router";
import * as S from "@/styles/pages/folder.style";

// Components
import FolderLinkAddForm from "@/src/containers/folder-page/folder-link-add-form/FolderLinkAddForm";
import LinkSubFolderUtils from "@/src/containers/folder-page/sub-folder-util/LinkSubFolderUtils";
import LinkCardListLayout from "@/src/components/link-card/link-card-layout/LinkCardListLayout";
import LinkSearchBar from "@/src/components/link-card/link-card-search-form/LinkSearchBar";
import ModalLoader from "@/src/components/modal/modalLoader";
import HeadNav from "@/src/components/layout/head-nav/HeadNav";
import LinkSubFolderList from "@/src/containers/folder-page/sub-folder-list/LinkSubFolderList";
import Footer from "@/src/components/layout/footer/Footer";
import {
  LinkCardFunctionDataType,
  LinkCardFunctionObjectType,
  LinkFolderFunctionObjectType,
} from "@/src/types/ModalFunctionDataTypes";
import FolderListDataType from "@/src/types/FolderListDataType";
import { UserLinkDataType } from "@/src/types/UserLinkDataType";
import { getCookie } from "cookies-next";

interface PropsType {
  isModalOpened: boolean;
  currentModalType: string;
  modalData?: LinkCardFunctionDataType;
  setIsModalOpened: (state: boolean) => void;
  handleModalOpen: (
    modalType: string,
    modalData: LinkCardFunctionDataType,
  ) => void;
  subFolderList: FolderListDataType[];
  isLinkAddBarHidden: boolean;
  addLinkBarObserveRef: RefObject<HTMLDivElement>;
  handleCurrentFolderChange: (id: number, name: string) => void;
  currentFolderName: string;
  isCurrentFolderAll: boolean;
  cardFilterSearchValue: string;
  setCardFilterSearchValue: (filterValue: string) => void;
  isEmptyResponse: boolean;
  isLoading: boolean;
  items: UserLinkDataType[];
  kebabActions: LinkCardFunctionObjectType[];
  footerObserveRef: RefObject<HTMLDivElement>;
  subFolderAction: LinkFolderFunctionObjectType[];
  folderId: number;
}

export default function FolderUI({ props }: { props: PropsType }) {
  const {
    isModalOpened,
    currentModalType,
    modalData,
    setIsModalOpened,
    handleModalOpen,
    subFolderList,
    isLinkAddBarHidden,
    addLinkBarObserveRef,
    handleCurrentFolderChange,
    currentFolderName,
    isCurrentFolderAll,
    cardFilterSearchValue,
    setCardFilterSearchValue,
    isEmptyResponse,
    isLoading,
    items,
    kebabActions,
    footerObserveRef,
    subFolderAction,
    folderId,
  } = props;

  useEffect(() => {
    if (!getCookie("accessToken")) {
      router.push("/signin");
    }
  });

  return (
    <>
      {isModalOpened && (
        <ModalLoader
          modalType={currentModalType}
          modalData={modalData}
          setIsOpened={setIsModalOpened}
        />
      )}
      <HeadNav isSticky={false} />
      <FolderLinkAddForm
        handleSubmit={handleModalOpen}
        subFolderList={subFolderList}
        isHidden={isLinkAddBarHidden}
      />
      <S.LinkAddBarEndPoint
        $linkAddBarMargin={isLinkAddBarHidden}
        ref={addLinkBarObserveRef}
      />
      <S.MainWrapper>
        <S.FolderPageSection>
          <S.SubFolderUtil>
            <LinkSubFolderList
              subFolderData={subFolderList}
              handleCurrentFolderChange={handleCurrentFolderChange}
              currentFolderId={folderId}
            />
            <S.AddFolderButton
              className="add-sub-folder"
              onClick={() => handleModalOpen("addSubFolder", {})}
            >
              폴더 추가 <S.AddImage />
            </S.AddFolderButton>
          </S.SubFolderUtil>
          <S.SubFolderUtil>
            <S.CurrentSubFolder className="lb-h3-semibold">
              {currentFolderName}
            </S.CurrentSubFolder>
            {!isCurrentFolderAll && (
              <LinkSubFolderUtils subFolderUtils={subFolderAction} />
            )}
          </S.SubFolderUtil>
          <LinkSearchBar
            cardFilterSearchValue={cardFilterSearchValue}
            setCardFilterSearchValue={setCardFilterSearchValue}
          />
          {
            <>
              <LinkCardListLayout
                items={items}
                favorite={true}
                kebab={kebabActions}
                isEmptyResponse={isEmptyResponse}
                isLoading={isLoading}
              />
            </>
          }
        </S.FolderPageSection>
      </S.MainWrapper>
      <S.FooterStartPoint ref={footerObserveRef} />
      <Footer />
    </>
  );
}
