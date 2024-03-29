import { UserLinkRawDataType } from "@/src/types/UserLinkDataType";

export default function refineLinkData(rawLinkData: UserLinkRawDataType) {
  const refinedData = {
    id: rawLinkData.id,
    createdAt: rawLinkData.createdAt || rawLinkData.created_at || "",
    updatedAt: rawLinkData.updated_at || rawLinkData.updatedAt || "",
    url: rawLinkData.url,
    title: rawLinkData.title,
    description: rawLinkData.description || "",
    imageSource: rawLinkData.imageSource || rawLinkData.image_source || "",
    folder_id: rawLinkData.folder_id,
  };

  return refinedData;
}
