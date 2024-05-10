import { useState } from "react";
import * as S from "../modalLoader.style";
import * as SS from "./AddLinkToSubFolder.style";

// Type
import Image from "next/image";
import { LinkCardFunctionDataType } from "@/src/types/ModalFunctionDataTypes";
import { acceptDataFromApi } from "@/src/utils/api";
import { useRouter } from "next/router";

/**
 *
 * @param {subFolderList, target} modalData target : 현재 선택된 링크, subFolderList : 현재 유저의 subFolderList
 * @returns 현재 선택된 링크와 폴더 리스트를 데이터로 받아 선택한 폴더에 추가하는 기능을 가질 모달입니다.
 */
export default function ModalAddLinkToSubFolder({
  modalData,
}: {
  modalData: LinkCardFunctionDataType;
}) {
  const { target, subfolderList } = modalData;
  const [selectedFolder, setSelectedFolder] = useState<number>();
  const router = useRouter();

  const handleLinkAdd = async () => {
    await acceptDataFromApi("links", {
      method: "POST",
      body: JSON.stringify({ url: target, folderId: selectedFolder }),
    });

    router.reload();
  };

  return (
    <>
      <S.ModalTitle>
        폴더에 추가 <br />
        <S.ModalCaption>{target}</S.ModalCaption>
      </S.ModalTitle>
      <S.ShareButtonLayout>
        {subfolderList!
          .filter((item) => item.favorite !== true)
          .map((item) => (
            <SS.SubFolderDesireToAddLinkButton
              onClick={() => setSelectedFolder(item.id)}
              $state={item.id === selectedFolder}
              key={item.id}
            >
              <h2 className="lb-body1-regular">
                {item.name}
                <span className="lb-body2-regular">{`${
                  item.link_count || 0
                }개 링크`}</span>
              </h2>
              {item.id === selectedFolder && (
                <Image
                  width={14}
                  height={14}
                  src="/assets/icons/svg/check.svg"
                  alt="CheckedFolder"
                />
              )}
            </SS.SubFolderDesireToAddLinkButton>
          ))}
      </S.ShareButtonLayout>
      <S.ModalButton onClick={() => handleLinkAdd()}>추가하기</S.ModalButton>
    </>
  );
}
