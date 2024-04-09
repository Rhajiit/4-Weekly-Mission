import { useEffect, useRef, useState } from "react";
import useFetch from "@/src/hooks/useFetch";
import { acceptDataFromApi } from "@/src/utils/api";

// Types
import { UserLinkDataType } from "@/src/types/UserLinkDataType";
import {
  LinkCardFunctionDataType,
  LinkCardFunctionObjectType,
  LinkFolderFunctionObjectType,
} from "@/src/types/ModalFunctionDataTypes";
import FolderListDataType from "@/src/types/FolderListDataType";
import refineLinkData from "@/src/utils/refine-link-data/refineLinkData";
type handleCurrentFolderChangeType = (id: number, name: string) => void;

/**
 * @description 폴더 페이지 컴포넌트
 * @returns
 */
export default function useFolderPage(id: number, folderId: number) {
  const [isCurrentFolderAll, setIsCurrentFolderAll] = useState(folderId === 0);
  const [currentFolderName, setCurrentFolderName] = useState("전체");
  const [subFolderList, setSubFolderList] = useState<FolderListDataType[]>([]);
  const [isEmptyResponse, setIsEmptyResponse] = useState(true);
  const [isLoading, error, acceptDataFromApiAsync] =
    useFetch(acceptDataFromApi);
  const [currentFolderQuery, setCurrentFolderQuery] = useState(
    `users/${id}/links`,
  );
  const [currentFolderId, setCurrentFolderId] = useState(0);
  const [originItems, setOriginItems] = useState<UserLinkDataType[]>([]);
  const [items, setItems] = useState<UserLinkDataType[]>([]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [currentModalType, setCurrentModalType] = useState("removeLink");
  const [modalData, setModalData] = useState<LinkCardFunctionDataType>();
  const [cardFilterSearchValue, setCardFilterSearchValue] =
    useState<string>("");
  const [isLinkAddBarHidden, setIsLinkAddBarHidden] = useState<boolean>(false);
  const [isFooterVisible, setIsFooterVisible] = useState<boolean>(false);
  const [isLinkAddBarVisible, setIsLinkAddBarVisible] =
    useState<boolean>(false);

  const addLinkBarObserveRef = useRef<HTMLDivElement>(null);
  const footerObserveRef = useRef<HTMLDivElement>(null);

  const handleModalOpen = (
    modalType: string,
    modalData: LinkCardFunctionDataType,
  ) => {
    setModalData({});
    setCurrentModalType(modalType);
    if (modalData) {
      setModalData(modalData);
    }
    setIsModalOpened(!isModalOpened);
  };

  const handleShareLoad = async (query: string) => {
    setIsEmptyResponse(false);
    const { data } = await acceptDataFromApiAsync(query);

    if (data.length === 0) {
      setIsEmptyResponse(true);
    }

    setOriginItems(refineLinkData(data));
    setItems(refineLinkData(data));
  };

  const emptyResponseRecognize = (items: UserLinkDataType[]) => {
    if (items.length === 0) {
      setIsEmptyResponse(true);
    } else {
      setIsEmptyResponse(false);
    }
  };

  const handleCurrentFolderChange: handleCurrentFolderChangeType = async (
    id,
    name,
  ) => {
    setIsEmptyResponse(false);
    setCurrentFolderName(name);
    setCurrentFolderQuery(
      `users/${id}/links${id !== 0 ? `?folderId=${id}` : ""}`,
    );
    setCurrentFolderId(id);

    if (id === 0) {
      setIsCurrentFolderAll(true);
      setItems(originItems);
      return;
    }
    setItems(originItems.filter((link) => link.id === id));
    setIsCurrentFolderAll(false);
  };

  useEffect(() => {
    emptyResponseRecognize(items);
  }, [items]);

  const acceptSubFolderList = async (requestQuery: string) => {
    const { data } = await acceptDataFromApi(requestQuery);
    setSubFolderList(data);
    setCurrentFolderId(folderId);
  };

  useEffect(() => {
    acceptSubFolderList(`users/${id}/folders`);
    handleShareLoad(`users/${id}/links`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (cardFilterSearchValue === "") {
      setItems(originItems);
      return;
    }
    setItems(
      originItems.filter(
        (item) =>
          item.title
            .toLowerCase()
            .includes(cardFilterSearchValue.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(cardFilterSearchValue.toLowerCase()) ||
          item.url.toLowerCase().includes(cardFilterSearchValue.toLowerCase()),
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardFilterSearchValue]);

  // useEffect를 이용하여 IntersectionObserver을 등록
  useEffect(() => {
    const addLinkBarObserver = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry.target === addLinkBarObserveRef.current) {
          if (entry.isIntersecting) {
            setIsLinkAddBarVisible(true);
          } else {
            setIsLinkAddBarVisible(false);
          }
          return 0;
        }

        if (entry.target === footerObserveRef.current) {
          if (entry.isIntersecting) {
            setIsFooterVisible(true);
          } else {
            setIsFooterVisible(false);
          }
        }
        return 0;
      });
    });
    addLinkBarObserver.observe(addLinkBarObserveRef.current!);
    addLinkBarObserver.observe(footerObserveRef.current!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFooterVisible || isLinkAddBarVisible) {
      setIsLinkAddBarHidden(false);
    } else {
      setIsLinkAddBarHidden(true);
    }
  }, [isFooterVisible, isLinkAddBarVisible]);

  const handleKebabAction = () => {};

  // 카드의 케밥 메뉴의 이름과 각각의 기능이 담긴 객체
  const kebabActions: LinkCardFunctionObjectType[] = [
    {
      buttonName: "삭제하기",
      type: "removeLink",
      data: { target: "" },
      modalHandle: handleModalOpen,
      modalButtonAction: handleKebabAction,
    },
    {
      buttonName: "폴더에 추가",
      type: "addLinkToFolder",
      data: { subfolderList: subFolderList },
      modalHandle: handleModalOpen,
      modalButtonAction: handleKebabAction,
    },
  ];

  // subFolderUtils에 기능, 버튼 이름, 버튼 이미지 등을 전달할 객체
  const subFolderAction: LinkFolderFunctionObjectType[] = [
    {
      buttonName: "공유",
      imgUrl: "/assets/icons/svg/share.svg",
      imgAlt: "shareButton",
      type: "shareFolder",
      data: { target: currentFolderName, targetId: currentFolderId },
      modalHandle: handleModalOpen,
      modalButtonAction: handleKebabAction,
    },
    {
      buttonName: "이름 변경",
      imgUrl: "/assets/icons/svg/pen.svg",
      imgAlt: "RenameButton",
      type: "nameChange",
      modalHandle: handleModalOpen,
      modalButtonAction: handleKebabAction,
    },
    {
      buttonName: "삭제",
      imgUrl: "/assets/icons/svg/trash-can.svg",
      imgAlt: "DeleteButton",
      type: "removeFolder",
      data: { target: currentFolderName },
      modalHandle: handleModalOpen,
      modalButtonAction: handleKebabAction,
    },
  ];

  return {
    isModalOpened,
    currentModalType,
    modalData,
    setIsModalOpened,
    handleModalOpen,
    subFolderList,
    isLinkAddBarHidden,
    addLinkBarObserveRef,
    handleCurrentFolderChange,
    currentFolderName,
    isCurrentFolderAll,
    cardFilter: cardFilterSearchValue,
    setCardFilter: setCardFilterSearchValue,
    isEmptyResponse,
    setIsEmptyResponse,
    isLoading,
    items,
    kebabActions,
    footerObserveRef,
    subFolderAction,
  };
}
