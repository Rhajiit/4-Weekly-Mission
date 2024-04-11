import { Context } from "vm";
import Share from ".";
import { acceptDataFromApi } from "@/src/utils/api";
import UserDataType from "@/src/types/UserDataType";
import { UserLinkDataType } from "@/src/types/UserLinkDataType";
import refineLinkData from "@/src/utils/refine-link-data/refineLinkData";

export async function getServerSideProps(context: Context) {
  const { id } = context.params;
  const { data } = await acceptDataFromApi(`folders/${id}`);

  const isNotFolder = data.length === 0;

  if (!isNotFolder) {
    const userId = data[0]["user_id"];
    const shareUserData = await acceptDataFromApi(`users/${userId}`);
    const shareFolderLinkData = await acceptDataFromApi(
      `users/${userId}/links?folderId=${id}`,
    );

    return {
      props: {
        shareUserData: shareUserData["data"][0],
        shareFolderLinkData: refineLinkData(shareFolderLinkData.data),
        folderName: data[0]["name"],
      },
    };
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}

export default function ShareId({
  shareUserData,
  shareFolderLinkData,
  folderName,
}: {
  shareUserData: UserDataType;
  shareFolderLinkData: UserLinkDataType[];
  folderName: string;
}) {
  return (
    <Share
      shareUserData={shareUserData}
      shareFolderData={shareFolderLinkData}
      folderName={folderName}
    />
  );
}
