export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/folder/0",
    },
    props: {},
  };
}

export default function FolderRedirect() {
  return <></>;
}
