import Image from "next/image";
import Link from "next/link";

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
    <header className=" text-center">
      <Link href={"/"}>
        <Image
          priority
          className="inline-block"
          width={210}
          height={38}
          src={"/assets/images/svg/logo.svg"}
          alt="ToHomePage"
        />
      </Link>
      <p className="lb-body1-regular mt-[1.6rem]">
        {text + " "}
        <Link href={linkTo}>
          <span className="text-blue-600 underline">{linkText}</span>
        </Link>
      </p>
    </header>
  );
}
