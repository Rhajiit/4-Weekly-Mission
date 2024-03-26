import { useEffect, useRef, useState } from "react";
import useFetch from "@/src/hooks/useFetch";
import { acceptDataFromApi } from "@/src/utils/api";

// Types
import UserLinkDataType from "@/src/types/UserLinkDataType";
import {
  LinkCardFunctionObjectType,
  LinkFolderFunctionObjectType,
} from "@/src/types/ModalFunctionDataTypes";
import FolderListDataType from "@/src/types/FolderListDataType";
type handleCurrentFolderChangeType = (id: number, name: string) => void;

/**
 * @param userId 상위 페이지로부터 전달 받을 userId 정보
 * @description 폴더 페이지 컴포넌트
 * @reminder handleModalOpen의 타입에 일관성이 없어 any타입을 지정해 두었음. 나중에 수정 필요.
 * @returns
 */
export default function FolderPageContainer({ userId = 1 }) {
  const [isCurrentFolderAll, setIsCurrentFolderAll] = useState(true);
  const [currentFolderName, setCurrentFolderName] = useState("전체");
  const [subFolderList, setSubFolderList] = useState<FolderListDataType[]>([]);
  const [isEmptyResponse, setIsEmptyResponse] = useState(true);
  const [isLoading, error, acceptDataFromApiAsync] =
    useFetch(acceptDataFromApi);
  const [currentFolderQuery, setCurrentFolderQuery] = useState(
    `users/${userId}/links`
  );
  const [currentFolderId, setCurrentFolderId] = useState(0);
  const [originItems, setOriginItems] = useState<UserLinkDataType[]>([]);
  const [items, setItems] = useState<UserLinkDataType[]>([]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [currentModalType, setCurrentModalType] = useState("removeLink");
  const [modalData, setModalData] = useState("");
  const [cardFilter, setCardFilter] = useState<string>("");
  const [isLinkAddBarHidden, setIsLinkAddBarHidden] = useState<boolean>(false);
  const [isFooterVisible, setIsFooterVisible] = useState<boolean>(false);
  const [isLinkAddBarVisible, setIsLinkAddBarVisible] =
    useState<boolean>(false);

  const addLinkBarObserveRef = useRef<HTMLDivElement>(null);
  const footerObserveRef = useRef<HTMLDivElement>(null);

  const handleModalOpen = (modalType: string, modalData: any) => {
    // ModalData의 형식 통일 필요
    setModalData("");
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
    data.map((items: UserLinkDataType) => {
      items.description = items.description ? items.description : "";
      items.title = items.title ? items.title : "";
    });

    setOriginItems(data);
    setItems(data);
  };

  const handleCurrentFolderChange: handleCurrentFolderChangeType = (
    id,
    name
  ) => {
    setCurrentFolderName(name);
    setCurrentFolderQuery(
      `users/${userId}/links${id !== 0 ? `?folderId=${id}` : ""}`
    );
    setCurrentFolderId(id);

    if (id === 0) {
      setIsCurrentFolderAll(true);
      return;
    }

    setIsCurrentFolderAll(false);
  };

  const acceptSubFolderList = async (requestQuery: string) => {
    const { data } = await acceptDataFromApi(requestQuery);
    setSubFolderList(data);
  };

  useEffect(() => {
    acceptSubFolderList(`users/${userId}/folders`);
    handleShareLoad(`users/${userId}/links`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  useEffect(() => {
    handleShareLoad(currentFolderQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFolderQuery]);

  useEffect(() => {
    if (cardFilter === "") {
      setItems(originItems);
      return;
    }
    setItems(
      originItems.filter(
        (item: UserLinkDataType) =>
          item.title.toLowerCase().includes(cardFilter.toLowerCase()) ||
          item.description.toLowerCase().includes(cardFilter.toLowerCase()) ||
          item.url.toLowerCase().includes(cardFilter.toLowerCase())
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardFilter]);

  // useEffect를 이용하여 IntersectionObserver을 등록
  useEffect(() => {
    const addLinkBarObserver = new IntersectionObserver((entries: any) => {
      entries.map((entry: any) => {
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
      data: [],
      modalHandle: handleModalOpen,
      modalButtonAction: handleKebabAction,
    },
    {
      buttonName: "폴더에 추가",
      type: "addLinkToFolder",
      data: [subFolderList],
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
      data: [currentFolderName, currentFolderId],
      modalHandle: handleModalOpen,
      modalButtonAction: handleKebabAction,
    },
    {
      buttonName: "이름 변경",
      imgUrl: "/assets/icons/svg/pen.svg",
      imgAlt: "RenameButton",
      type: "nameChange",
      data: [],
      modalHandle: handleModalOpen,
      modalButtonAction: handleKebabAction,
    },
    {
      buttonName: "삭제",
      imgUrl: "/assets/icons/svg/trash-can.svg",
      imgAlt: "DeleteButton",
      type: "removeFolder",
      data: currentFolderName,
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
    setIsCurrentFolderAll,
    cardFilter,
    setCardFilter,
    isEmptyResponse,
    setIsEmptyResponse,
    isLoading,
    items,
    kebabActions,
    footerObserveRef,
    subFolderAction,
  };
}
