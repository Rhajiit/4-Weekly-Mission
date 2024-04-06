import Link from "next/link";
import Image from "next/image";
import * as S from "./HeadNav.style";

import HeadNavProfile from "./profile/Profile";

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
        <HeadNavProfile />
      </S.NavWrapper>
    </S.Nav>
  );
}
