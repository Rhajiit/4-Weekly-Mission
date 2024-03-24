import Link from "next/link";
import Image from "next/image";
import * as S from "./Footer.style";

interface FooterSocialListType {
  imgUrl: string;
  imgAlt: string;
  imgSrc: string;
}

const FooterSocialList: FooterSocialListType[] = [
  {
    imgUrl: "https://www.facebook.com/",
    imgAlt: "to_Facebook",
    imgSrc: "footer_facebook.png",
  },
  {
    imgUrl: "https://twitter.com/",
    imgAlt: "to_X",
    imgSrc: "footer_X.png",
  },
  {
    imgUrl: "https://www.youtube.com/",
    imgAlt: "to_Youtube",
    imgSrc: "footer_youtube.png",
  },
  {
    imgUrl: "https://www.instagram.com",
    imgAlt: "to_Instagram",
    imgSrc: "footer_instagram.png",
  },
];

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
            <Image src={item.imgSrc} alt={item.imgAlt} />
          </Link>
        ))}
      </S.FooterSocialListSection>
    </S.Footer>
  );
}
