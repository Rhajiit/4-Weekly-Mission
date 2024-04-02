import Image from "next/image";
import Link from "next/link";
import * as S from "./SignPageHeader.style";

export default function SignPageHeader({
  text,
  linkText,
  linkTo,
}: {
  text: string;
  linkText: string;
  linkTo: string;
}) {
  return (
    <S.SignPageHeadWrapper>
      <Link href={"/"}>
        <Image
          width={210}
          height={38}
          src={"/assets/images/svg/logo.svg"}
          alt="ToHomePage"
        />
      </Link>
      <p className="lb-body1-regular">
        {text}
        <Link href={linkTo}>
          <span> {linkText}</span>
        </Link>
      </p>
    </S.SignPageHeadWrapper>
  );
}
