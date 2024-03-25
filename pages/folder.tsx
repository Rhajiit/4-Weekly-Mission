import FolderPageContainer from "@/src/containers/folder-page/FolderPage";
import * as S from "@/styles/pages/folder.style";

// Components
import FolderLinkAddBar from "@/src/containers/folder-page/folder-link-add-form/FolderLinkAddBar";
import {
  HandleCurrentSubFolder,
  SubFoldersList,
} from "@/src/containers/folder-page/sub-folder-button-list-presenter/LinkSubFolder";
import LinkCardCollection from "@/src/components/link-card/link-card-collection/LinkCardCollection";
import LinkSearchBar from "@/src/components/link-card/link-search-form/LinkSearchBar";
import ModalLoader from "@/src/components/modal/modalLoader";
import HeadNav from "@/src/components/layout/HeadNav";

export default function Folder({ userId = 1 }) {
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
    setIsCurrentFolderAll,
    cardFilter,
    setCardFilter,
    isEmptyResponse,
    setIsEmptyResponse,
    isLoading,
    items,
    kebabActions,
    footerObserveRef,
    subFolderAction,
  } = FolderPageContainer({ userId: userId });

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
      <FolderLinkAddBar
        handleSubmit={handleModalOpen}
        subFolderList={subFolderList}
        isHidden={isLinkAddBarHidden}
      />
      <S.LinkAddBarEndPoint
        $linkAddBarMargin={isLinkAddBarHidden}
        ref={addLinkBarObserveRef}
      />
      <S.FolderPageMain>
        <S.SubFolderUtil>
          <SubFoldersList
            subFolderData={subFolderList}
            handleCurrentFolderChange={handleCurrentFolderChange}
          />
          <S.AddFolderButton
            className="add-sub-folder"
            onClick={() => handleModalOpen("addSubFolder", "")}
          >
            폴더 추가 <S.AddImage />
          </S.AddFolderButton>
        </S.SubFolderUtil>
        <S.SubFolderUtil>
          <S.CurrentSubFolder className="lb-h3-semibold">
            {currentFolderName}
          </S.CurrentSubFolder>
          {!isCurrentFolderAll && (
            <HandleCurrentSubFolder subFolderUtils={subFolderAction} />
          )}
        </S.SubFolderUtil>
        <LinkSearchBar cardFilter={cardFilter} setCardFilter={setCardFilter} />
        {isEmptyResponse || isLoading ? (
          <S.EmptySpace className="lb-body1-regular">
            {isLoading ? "불러오는 중입니다..." : "저장된 링크가 없습니다."}
          </S.EmptySpace>
        ) : (
          <>
            <LinkCardCollection
              items={items}
              favorite={true}
              kebab={kebabActions}
            />
          </>
        )}
      </S.FolderPageMain>
      <S.FooterStartPoint ref={footerObserveRef} />
    </>
  );
}
