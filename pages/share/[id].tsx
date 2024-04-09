import { Context } from "vm";
import Share from ".";
import { acceptDataFromApi } from "@/src/utils/api";

export async function getServerSideProps(context: Context) {
  const { id } = context.params;
  const { data } = await acceptDataFromApi(`folders/${id}`);
  console.log(data[0]);

  const isNotFolder = data.length === 0;

  if (!isNotFolder) {
    const userId = data[0]["user_id"];
    const shareUserData = await acceptDataFromApi(`users/${userId}`);
    const shareFolderData = await acceptDataFromApi(
      `users/${userId}/links?folderId=${id}`,
    );

    return {
      props: {
        shareUserData,
        shareFolderData,
      },
    };
  }

  return {
    props: {
      shareUserData: null,
      shareFolderData: null,
    },
  };
}

export default function ShareId({ shareUserData, shareFolderData }: any) {
  return <Share />;
}
