import Link from "next/link";
import Image from "next/image";
import FOOTER_SOCIAL_LIST from "@/src/constant/FOOTER_SOCIAL_LIST";

/**
 *
 * @returns Footer 컴포넌트입니다.
 */
export default function Footer() {
  return (
    <footer
      className="relative -z-[1] grid h-[16rem] w-full grid-cols-2 items-baseline 
    justify-between gap-y-[6rem] bg-[var(--lb-black)] p-[3.2rem] md:flex md:px-[10.4rem] md:pb-[6.4rem]"
    >
      <p className="font-acme row-start-2 text-left text-[1.6rem] font-normal text-[#676767]">
        ©codeIt - 2023
      </p>
      <address className="font-acme flex gap-[3rem] text-[1.6rem] font-normal">
        <Link className="text-[#cfcfcf] no-underline" href="/privacy.html">
          Privacy Policy
        </Link>
        <Link className="text-[#cfcfcf] no-underline" href="faq.html">
          FAQ
        </Link>
      </address>
      <section className=" flex items-center justify-end gap-[1.2rem]">
        {FOOTER_SOCIAL_LIST.map((item) => (
          <Link key={item.imgAlt} href={item.imgUrl}>
            <Image width={20} height={20} src={item.imgSrc} alt={item.imgAlt} />
          </Link>
        ))}
      </section>
    </footer>
  );
}
