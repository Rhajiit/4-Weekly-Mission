import FolderPageContainer from "@/src/containers/folder-page/FolderPage";
import * as S from "@/styles/pages/folder.style";

// Components
import FolderLinkAddForm from "@/src/containers/folder-page/folder-link-add-form/FolderLinkAddForm";
import LinkSubFolderUtils from "@/src/containers/folder-page/sub-folder-util/LinkSubFolderUtils";
import LinkCardListLayout from "@/src/components/link-card/link-card-layout/LinkCardListLayout";
import LinkSearchBar from "@/src/components/link-card/link-card-search-form/LinkSearchBar";
import ModalLoader from "@/src/components/modal/modalLoader";
import HeadNav from "@/src/components/layout/HeadNav/HeadNav";
import LinkSubFolderList from "@/src/containers/folder-page/sub-folder-list/LinkSubFolderList";

export default function Folder() {
  const id = 1;
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
    cardFilter,
    setCardFilter,
    isEmptyResponse,
    isLoading,
    items,
    kebabActions,
    footerObserveRef,
    subFolderAction,
  } = FolderPageContainer(id);

  return (
    <>
      {isModalOpened && (
        <ModalLoader
          modalType={currentModalType}
          modalData={modalData}
          setIsOpened={() => {
            setIsModalOpened(false);
          }}
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
            cardFilter={cardFilter}
            setCardFilter={setCardFilter}
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
    </>
  );
}
