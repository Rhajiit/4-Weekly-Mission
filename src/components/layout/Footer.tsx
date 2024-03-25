import Link from "next/link";
import Image from "next/image";
import * as S from "./Footer.style";
import FooterSocialList from "@/src/constant/footer-social-section";

/**
 *
 * @returns Footer 컴포넌트입니다.
 */
export default function Footer() {
  return (
    <S.Footer>
      <p className="corporate-information">©codeIt - 2023</p>
      <address className="footer-privacy">
        <Link href="/privacy.html">Privacy Policy</Link>
        <Link href="faq.html">FAQ</Link>
      </address>
      <S.FooterSocialListSection>
        {FooterSocialList.map((item) => (
          <Link key={item.imgAlt} href={item.imgUrl}>
            <Image width={20} height={20} src={item.imgSrc} alt={item.imgAlt} />
          </Link>
        ))}
      </S.FooterSocialListSection>
    </S.Footer>
  );
}
