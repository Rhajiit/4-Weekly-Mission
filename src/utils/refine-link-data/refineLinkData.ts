import { UserLinkRawDataType } from "@/src/types/UserLinkDataType";

/**
 * @description fetch를 통해 받아온 linkCard데이터를 한가지 형식으로 통일시키는 함수입니다.
 * @param  rawLinkData 변환하고자 하는 데이터입니다.
 * @returns
 */
export default function refineLinkData(rawLinkData: UserLinkRawDataType[]) {
  const refinedData = rawLinkData.map((item) => {
    return {
      id: item.id,
      createdAt: item.createdAt || item.created_at || "",
      updatedAt: item.updated_at || item.updatedAt || "",
      url: item.url,
      title: item.title,
      description: item.description || "",
      imageSource: item.imageSource || item.image_source || "",
      folder_id: item.folder_id || -1,
    };
  });

  return refinedData;
}
