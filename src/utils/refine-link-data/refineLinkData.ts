import { UserLinkRawDataType } from "@/src/types/UserLinkDataType";

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
