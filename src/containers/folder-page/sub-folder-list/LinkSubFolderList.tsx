import { useEffect, useState } from "react";
import * as S from "./LinkSubFolderList.style";

//Types
import FolderListDataType from "@/src/types/FolderListDataType";
interface SubFolderListProp {
  subFolderData: FolderListDataType[];
  handleCurrentFolderChange: handleCurrentFolderChangeType;
  currentFolderId: number;
}
type handleCurrentFolderChangeType = (id: number, name: string) => void;

/**
 * @description fetch로 받아온 subFolderData 배열에서 폴더 이름을 map으로 뽑아내어 선택 가능한 버튼으로 배치하는 컴포넌트
 * @param subFolderData 현재 사용자의 subFolder관련 데이터가 들어있는 배열
 * @param handleCurrentFolderChange 폴더 선택에 따라 해당 폴더의 고유번호로 query를 갱신하고, 새롭게 fetch를 받아올 수 있게 하는 함수.
 * @returns
 */
export default function LinkSubFolderList({
  subFolderData,
  handleCurrentFolderChange,
  currentFolderId,
}: SubFolderListProp) {
  const [subFolderList, setSubFolderList] = useState<FolderListDataType[]>([]);
  const [selectedBtn, setSelectedBtn] = useState(currentFolderId);

  const handleBtnStyleChange = async (id: number, name: string) => {
    setSelectedBtn(id);
    await handleCurrentFolderChange(id, name);
  };

  useEffect(() => {
    setSubFolderList(subFolderData);
    const currentSubFolderArray = subFolderList.filter(
      (item) => item.id === currentFolderId,
    );
    const currentSubFolder =
      currentSubFolderArray.length !== 0
        ? currentSubFolderArray[0]
        : { id: 0, name: "전체" };

    handleBtnStyleChange(currentSubFolder.id, currentSubFolder.name);
  }, [subFolderData]);

  return (
    <S.SubFolderBtnList>
      <S.SubFolderBtn
        key={0}
        $state={selectedBtn === 0}
        onClick={() => handleBtnStyleChange(0, "전체")}
      >
        전체
      </S.SubFolderBtn>
      {subFolderList.map((item) => (
        <S.SubFolderBtn
          key={item.id}
          $state={selectedBtn === item.id}
          onClick={() => handleBtnStyleChange(item.id, item.name)}
        >
          {item.name}
        </S.SubFolderBtn>
      ))}
    </S.SubFolderBtnList>
  );
}
