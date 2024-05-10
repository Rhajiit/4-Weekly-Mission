import { useEffect, useState } from "react";
import { useCurrentUser, useSetCurrentUser } from "@/src/context/UserContext";
import Link from "next/link";
import Image from "next/image";
import * as S from "./Profile.style";
import { acceptDataFromApi } from "@/src/utils/api";
import router from "next/router";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

export default function HeadNavProfile() {
  const userData = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountEmail, setAccountEmail] = useState("");
  const [profileImg, setProfileImg] = useState(
    "/assets/icons/svg/nav-profile-default.svg",
  );

  const accountVerification = async () => {
    const accessToken = getCookie("accessToken");
    if (accessToken !== null) {
      const receivedData = await acceptDataFromApi("users");
      if (!receivedData) return;
      const data = receivedData[0];
      setCurrentUser(data);
    }
  };

  useEffect(() => {
    if (userData) {
      setIsLoggedIn(true);
      setAccountEmail(userData.email);
      setProfileImg(userData.image_source);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  useEffect(() => {
    const hasAccessToken = Boolean(getCookie("accessToken"));
    if (hasAccessToken) {
      accountVerification();
    }
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <S.NavProfileSection>
          <Image
            width={28}
            height={28}
            src={profileImg}
            alt="loggedInProfileImg"
          />
          {accountEmail}
          <div className="h-[2.8rem] w-1 bg-primary" />
          <button
            type="button"
            onClick={() => {
              deleteCookie("accessToken");
              deleteCookie("refreshToken");
              router.reload();
            }}
            className="size-5 h-[2.8rem] w-20 p-0 "
          >
            로그아웃
          </button>
        </S.NavProfileSection>
      ) : (
        <Link href={"/signin"}>
          <S.NavLoginButton>로그인</S.NavLoginButton>
        </Link>
      )}
    </>
  );
}
