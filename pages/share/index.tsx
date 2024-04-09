import { useEffect, useState } from "react";
import { acceptDataFromApi } from "@/src/utils/api";

// Types
import refineLinkData from "@/src/utils/refine-link-data/refineLinkData";
import { UserLinkDataType } from "@/src/types/UserLinkDataType";
import ShareUi from "@/src/containers/share-page/Share.presenter";

/**
 *
 * @description /share 페이지를 구현하는 컴포넌트.
 * @returns
 */
export default function useSharePage() {
  const [originItems, setOriginItems] = useState<UserLinkDataType[]>([]);
  const [items, setItems] = useState<UserLinkDataType[]>([]);
  const [cardFilter, setCardFilter] = useState<string>("");
  const [isEmptyResponse, setIsEmptyResponse] = useState(false);

  const handleShareLoad = async () => {
    const {
      folder: { links },
    } = await acceptDataFromApi("sample/folder");
    setOriginItems(refineLinkData(links));
    setItems(refineLinkData(links));
    if (links.length === 0) {
      setIsEmptyResponse(true);
    }
  };

  useEffect(() => {
    handleShareLoad();
  }, []);

  useEffect(() => {
    if (cardFilter === "") {
      setItems(originItems);
      return;
    }
    setItems(
      originItems.filter(
        (item: UserLinkDataType) =>
          item.title.includes(cardFilter) ||
          item.description.includes(cardFilter) ||
          item.url.includes(cardFilter),
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardFilter]);

  const props = {
    items,
    cardFilter,
    setCardFilter,
    isEmptyResponse,
  };

  return <ShareUi props={props} />;
}
