import * as S from "./SharePageProfile.style";
import UserDataType from "@/src/types/UserDataType";

/**
 * @description SharePage에서 해당 폴더의 이름과 그 주인을 보여주는 컴포넌트 입니다.
 * @returns
 */
const ShareFolderProfile = function ({
  shareUserData,
  folderName,
}: {
  shareUserData: UserDataType;
  folderName: string;
}) {
  const folderImg = shareUserData.image_source;
  const folderAccountName = shareUserData.name;

  return (
    <S.SharePageProfileSection>
      <S.SharePageProfileImg src={folderImg} alt="" />
      <S.SharePageFolderOwnerName className="lb-body1-regular">{`${folderAccountName}`}</S.SharePageFolderOwnerName>
      <S.SharePageFolderName className="lb-h1-semibold">{`${folderName}`}</S.SharePageFolderName>
    </S.SharePageProfileSection>
  );
};

export default ShareFolderProfile;
