export interface UserLinkRawDataType {
  id: number;
  created_at?: string;
  createdAt?: string;
  updated_at?: string;
  url: string;
  title: string;
  description: string;
  image_source?: string;
  imageSource?: string;
  folder_id?: number;
}

export interface UserLinkDataType {
  id: number;
  createdAt: string;
  updatedAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
  folder_id: number;
}
