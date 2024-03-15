import FolderLinkAddBar from "src/components/FolderLinkAddBar";
import "pages/Folder.css";
import LinkSubFolder from "src/components/LinkSubFolder";
import HeadNav from "src/components/HeadNav";
import styled from "styled-components";

const StyledHeadNav = styled(HeadNav)`
  position: relative;
`;

export default function Folder() {
  return (
    <>
      <StyledHeadNav />
      <div>
        <FolderLinkAddBar />
        <main>
          <LinkSubFolder />
        </main>
      </div>
    </>
  );
}
