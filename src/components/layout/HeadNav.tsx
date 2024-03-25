import { useEffect, useState } from "react";
import * as S from "./HeadNav.style";
import Link from "next/link";
import Image from "next/image";

const ProfileData = function () {
  const [loginStatus, setLoginStatus] = useState(false);
  const [accountEmail, setAccountEmail] = useState("");
  const [profileImg, setProfileIMg] = useState(
    "/assets/cons/png/nav-profile-default.png"
  );

  const USER = "users/1";
  // const accountVerification = async (user: string) => {
  //   const receivedData = await acceptDataFromApi(user);
  //   if (!receivedData) return;
  //   const {
  //     data: [{ email, image_source }],
  //   } = receivedData;

  //   setAccountEmail(email);
  //   if (image_source) {
  //     setProfileIMg(image_source);
  //   }
  //   setLoginStatus(true);
  // };

  // useEffect(() => {
  //   accountVerification(USER);
  // }, [loginStatus]);

  return (
    <>
      {loginStatus && (
        <S.NavProfileSection>
          <Image src={profileImg} alt="loggedInProfileImg" />
          {accountEmail}
        </S.NavProfileSection>
      )}

      {!loginStatus && (
        <Link href={"/login"}>
          <S.NavLoginButton>로그인</S.NavLoginButton>
        </Link>
      )}
    </>
  );
};

export default function HeadNav({ isSticky = true }) {
  return (
    <S.Nav $isSticky={isSticky}>
      <S.NavWrapper>
        <Link href="/">
          <Image
            width={133}
            height={24}
            src="/assets/images/svg/logo.svg"
            alt="Linkbrary Logo"
          />
        </Link>
        <ProfileData />
      </S.NavWrapper>
    </S.Nav>
  );
}
