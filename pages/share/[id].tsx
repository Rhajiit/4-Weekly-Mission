import { Context } from "vm";
import Share from ".";

// Function
import refineLinkData from "@/src/utils/refine-link-data/refineLinkData";
import { acceptDataFromApi } from "@/src/utils/api";

// Types
import UserDataType from "@/src/types/UserDataType";
import { UserLinkDataType } from "@/src/types/UserLinkDataType";

export async function getServerSideProps(context: Context) {
  const { id } = context.params;
  const data = await acceptDataFromApi(`folders/${id}`);

  const isNotFolder = data === undefined;

  if (!isNotFolder) {
    const userId = data[0]["user_id"];
    const shareUserData = await acceptDataFromApi(`users/${userId}`);
    const shareFolderLinkData = await acceptDataFromApi(`folders/${id}/links`);

    return {
      props: {
        shareUserData: shareUserData[0],
        shareFolderLinkData: refineLinkData(shareFolderLinkData),
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
