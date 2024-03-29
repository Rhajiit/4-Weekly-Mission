import { useEffect, useState } from "react";
import { useCurrentUser } from "@/src/context/UserContext";
import Link from "next/link";
import Image from "next/image";
import * as S from "./Profile.style";

export default function HeadNavProfile() {
  const userData = useCurrentUser();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountEmail, setAccountEmail] = useState("");
  const [profileImg, setProfileImg] = useState(
    "/assets/icons/svg/nav-profile-default.svg"
  );

  useEffect(() => {
    if (!!userData) {
      setIsLoggedIn(true);
      setAccountEmail(userData.email);
      setProfileImg(userData.image_source);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return (
    <>
      {isLoggedIn && (
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

      {!isLoggedIn && (
        <Link href={"/login"}>
          <S.NavLoginButton>로그인</S.NavLoginButton>
        </Link>
      )}
    </>
  );
}
