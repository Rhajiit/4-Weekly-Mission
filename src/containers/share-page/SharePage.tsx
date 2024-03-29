import { useEffect, useState } from "react";
import { acceptDataFromApi } from "@/src/utils/api";

// Types
import { UserLinkRawDataType } from "@/src/types/UserLinkDataType";

/**
 *
 * @description /share 페이지를 구현하는 컴포넌트.
 * @returns
 */
export default function SharePageContainer() {
  const [originItems, setOriginItems] = useState<UserLinkRawDataType[]>([]);
  const [items, setItems] = useState<UserLinkRawDataType[]>([]);
  const [cardFilter, setCardFilter] = useState<string>("");

  const handleShareLoad = async () => {
    const {
      folder: { links },
    } = await acceptDataFromApi("sample/folder");
    setOriginItems(links);
    setItems(links);
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
        (item: UserLinkRawDataType) =>
          item.title.includes(cardFilter) ||
          item.description.includes(cardFilter) ||
          item.url.includes(cardFilter)
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardFilter]);

  return { cardFilter, items, setCardFilter };
}
