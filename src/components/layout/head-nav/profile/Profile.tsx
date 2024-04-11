import { useEffect, useState } from "react";
import { useCurrentUser, useSetCurrentUser } from "@/src/context/UserContext";
import Link from "next/link";
import Image from "next/image";
import * as S from "./Profile.style";
import { acceptDataFromApi } from "@/src/utils/api";
import { USER } from "@/src/constant/TEMPORARY_USER_CONSTANT";

export default function HeadNavProfile() {
  const userData = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountEmail, setAccountEmail] = useState("");
  const [profileImg, setProfileImg] = useState(
    "/assets/icons/svg/nav-profile-default.svg",
  );

  const accountVerification = async (user: string) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken !== null) {
      const receivedData = await acceptDataFromApi(user, {
        method: "GET",
        headers: { Authorization: accessToken },
      });
      if (!receivedData) return;
      const { data } = receivedData;
      setCurrentUser(...data);
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
    const hasAccessToken = Boolean(localStorage.getItem("accessToken"));
    if (hasAccessToken) {
      accountVerification(USER);
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
        </S.NavProfileSection>
      ) : (
        <Link href={"/signin"}>
          <S.NavLoginButton>로그인</S.NavLoginButton>
        </Link>
      )}
    </>
  );
}
