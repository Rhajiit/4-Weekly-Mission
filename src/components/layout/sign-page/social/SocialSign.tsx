import Image from "next/image";
import Link from "next/link";
import * as S from "./SocialSign.style";

export default function SocialSign() {
  return (
    <S.SocialBox className="lb-body2-regular">
      다른 방식으로 가입하기
      <S.IconWrapper>
        <Link href={"https://www.google.com"}>
          <Image
            width={42}
            height={42}
            src={"/assets/icons/svg/google.svg"}
            alt=""
          />
        </Link>

        <Link href={"https://www.kakaocorp.com/page"}>
          <Image
            width={42}
            height={42}
            src={"/assets/icons/png/social_kakaotalk.png"}
            alt=""
          />
        </Link>
      </S.IconWrapper>
    </S.SocialBox>
  );
}
