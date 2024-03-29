import FolderListDataType from "./FolderListDataType";

export interface LinkCardFunctionObjectType {
  buttonName: string;
  type: string;
  data:
    | ModalDataRemoveLink
    | ModalDataRemoveSubFolder
    | ModalDataShareSubFolder;
  modalHandle: (modalType: string, modalData: any) => void;
  modalButtonAction: () => void;
}

export interface LinkFolderFunctionObjectType
  extends LinkCardFunctionObjectType {
  imgUrl: string;
  imgAlt: string;
}

// ModalFunction
export interface ModalDataAddLinkToSubFolder {
  handleSubmit: (
    type: string,
    modalData: [string, FolderListDataType[]]
  ) => void;
  subFolderList: FolderListDataType[];
}

export type ModalDataRemoveLink = string;

export type ModalDataRemoveSubFolder = string;

export type ModalDataShareSubFolder = [string, string];
