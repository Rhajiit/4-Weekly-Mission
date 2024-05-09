import { useEffect, useState } from "react";
import ShareUi from "@/src/containers/share-page/Share.presenter";

// Function
import { acceptDataFromApi } from "@/src/utils/api";

// Types
import refineLinkData from "@/src/utils/refine-link-data/refineLinkData";
import { UserLinkDataType } from "@/src/types/UserLinkDataType";
import UserDataType from "@/src/types/UserDataType";

export async function getServerSideProps() {
  const shareUserRawData = await acceptDataFromApi("sample/users/2");
  const shareUserData = {
    id: shareUserRawData[0].id,
    name: shareUserRawData[0].name,
    image_source: shareUserRawData[0]["image_source"],
    email: shareUserRawData[0].email,
    auth_id: 1,
  };

  const shareFolderRawData = await acceptDataFromApi("sample/folders/1");
  const shareFolderLinkRawData = await acceptDataFromApi("sample/links");
  const shareFolderData = refineLinkData(shareFolderLinkRawData);
  const folderName = shareFolderRawData[0].name;

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
