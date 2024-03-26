import { useEffect, useState } from "react";
import * as S from "./HeadNav.style";
import Link from "next/link";
import Image from "next/image";
import { useCurrentUser } from "@/src/context/UserContext";

const ProfileData = function () {
  const userData = useCurrentUser();
  const loginStatus = !!userData;

  const [accountEmail, setAccountEmail] = useState("");
  const [profileImg, setProfileImg] = useState(
    "/assets/icons/svg/nav-profile-default.svg"
  );

  useEffect(() => {
    if (loginStatus) {
      setAccountEmail(userData.email);
      setProfileImg(userData.image_source);
    }
  }, []);

  return (
    <>
      {loginStatus && (
        <S.NavProfileSection>
          <Image
            width={28}
            height={28}
            src={profileImg}
            alt="loggedInProfileImg"
          />
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
