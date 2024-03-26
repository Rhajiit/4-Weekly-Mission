import Link from "next/link";
import Image from "next/image";
import * as S from "./Footer.style";
import FOOTER_SOCIAL_LIST from "@/src/constant/FOOTER_SOCIAL_LIST";

/**
 *
 * @returns Footer 컴포넌트입니다.
 */
export default function Footer() {
  return (
    <S.Footer>
      <p>©codeIt - 2023</p>
      <address>
        <Link href="/privacy.html">Privacy Policy</Link>
        <Link href="faq.html">FAQ</Link>
      </address>
      <S.FooterSocialListSection>
        {FOOTER_SOCIAL_LIST.map((item) => (
          <Link key={item.imgAlt} href={item.imgUrl}>
            <Image width={20} height={20} src={item.imgSrc} alt={item.imgAlt} />
          </Link>
        ))}
      </S.FooterSocialListSection>
    </S.Footer>
  );
}
