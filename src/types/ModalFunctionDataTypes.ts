import FolderListDataType from "./FolderListDataType";

export interface LinkCardFunctionObjectType {
  buttonName: string;
  type: string;
  modalHandle: (modalType: string, modalData: any) => void;
  modalButtonAction: () => void;
  data?: LinkCardFunctionDataType;
}

export interface LinkCardFunctionDataType {
  target?: string;
  targetId?: number;
  subfolderList?: FolderListDataType[];
}

export interface LinkFolderFunctionObjectType
  extends LinkCardFunctionObjectType {
  imgUrl: string;
  imgAlt: string;
}

// ModalFunction
export interface ModalDataAddLinkToSubFolder {
  handleSubmit: (type: string, modalData: LinkCardFunctionDataType) => void;
  subFolderList: FolderListDataType[];
}
