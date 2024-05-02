import Head from "next/head";
import Link from "next/link";
import * as S from "@/styles/pages/index.style";

// Components
import HeadNav from "@/src/components/layout/head-nav/HeadNav";
import Footer from "@/src/components/layout/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* <!-- 페이스북, 카카오톡, 인스타 공유--> */}
        <meta property="og:title" content="Linkbrary" />
        <meta property="og:image" content="Images/PreviewImage.png" />
        <meta property="og:url" content="Rhajiit.git" />
        <meta
          property="og:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
        {/* <!-- 트위터 공유--> */}
        <meta name="twitter:title" content="Linkbrary" />
        <meta name="twitter:image" content="Images/PreviewImage.png" />
        <meta name="twitter:url" content="Rhajiit.git" />
        <meta
          name="twitter:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeadNav />
        {/* 여기서부터 레거시 코드입니다.*/}

        <S.Header className="items-center">
          <h1>
            <span className="purplePinkGradation">세상의 모든 정보</span>를
            <br />
            쉽게 저장하고 관리해 보세요
          </h1>
          <Link href={"/folder"}>
            <h2 className="lb-h2-semibold">FolderPage로 이동</h2>
          </Link>
          <Link href={"/share"}>
            <h2 className="lb-h2-semibold">SharePage로 이동</h2>
          </Link>

          <Link href={"/signup"}>
            <h2 className="default-btn w-[40rem]">링크 추가해보기</h2>
          </Link>
        </S.Header>

        <S.SectionWrapper>
          <article>
            <h2>
              <span className="redBlueGradation">원하는 링크</span>를 저장하세요
            </h2>
            <p>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
              싶은 모든 것을 한 공간에 저장하세요.
            </p>
          </article>
          <article>
            <h2>
              링크를 폴더로
              <span className="orangeBlueGradation">관리</span>하세요
            </h2>
            <p>나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.</p>
          </article>
          <article>
            <h2>
              저장한 링크를
              <span className="blueWhiteGradation">공유</span>해 보세요
            </h2>
            <p>
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
              쉽고 빠르게 링크를 공유해 보세요.
            </p>
          </article>
          <article>
            <h2>
              저장한 링크를
              <span className="bluePinkGradation">검색</span>해 보세요
            </h2>
            <p>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
          </article>
        </S.SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
