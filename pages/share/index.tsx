import { useEffect, useState } from "react";
import { acceptDataFromApi } from "@/src/utils/api";

// Types
import refineLinkData from "@/src/utils/refine-link-data/refineLinkData";
import { UserLinkDataType } from "@/src/types/UserLinkDataType";
import ShareUi from "@/src/containers/share-page/Share.presenter";
import UserDataType from "@/src/types/UserDataType";

export async function getServerSideProps() {
  const shareUserRawData = await acceptDataFromApi("sample/user");
  const shareUserData = {
    id: 1,
    created_at: "",
    name: shareUserRawData.name,
    image_source: shareUserRawData.profileImageSource,
    email: shareUserRawData.email,
    auth_id: 1,
  };

  const shareFolderRawData = await acceptDataFromApi("sample/folder");
  const shareFolderData = refineLinkData(shareFolderRawData.folder.links);
  const folderName = shareFolderRawData.folder.name;

  return {
    props: {
      shareUserData,
      shareFolderData,
      folderName,
    },
  };
}

/**
 *
 * @description /share 페이지를 구현하는 컴포넌트.
 * @returns
 */
export default function Share({
  shareUserData,
  shareFolderData,
  folderName,
}: {
  shareUserData: UserDataType;
  shareFolderData: UserLinkDataType[];
  folderName: string;
}) {
  const [items, setItems] = useState<UserLinkDataType[]>(shareFolderData);
  const [cardFilterSearchValue, setCardFilterSearchValue] =
    useState<string>("");
  const [isEmptyResponse, setIsEmptyResponse] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      setIsEmptyResponse(true);
    } else {
      setIsEmptyResponse(false);
    }
  }, [items]);

  useEffect(() => {
    if (cardFilterSearchValue === "") {
      setItems(shareFolderData);
      return;
    }
    setItems(
      shareFolderData.filter(
        (item: UserLinkDataType) =>
          item.title.includes(cardFilterSearchValue) ||
          item.description.includes(cardFilterSearchValue) ||
          item.url.includes(cardFilterSearchValue),
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardFilterSearchValue]);

  const props = {
    items,
    cardFilterSearchValue,
    setCardFilterSearchValue,
    shareUserData,
    isEmptyResponse,
    folderName,
  };

  return <ShareUi props={props} />;
}
