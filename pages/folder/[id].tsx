import Folder from ".";
import { Context } from "vm";

export async function getServerSideProps(context: Context) {
  const { id } = context.params;

  return {
    props: { id },
  };
}

export default function FolderId({ id }: { id: string }) {
  const folderId = Number(id);
  return <Folder folderId={folderId} />;
}
