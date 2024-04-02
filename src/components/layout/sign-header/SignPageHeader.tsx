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
    <header>
      <Link href={"/"}>
        <Image
          width={100}
          height={50}
          src={"/assets/images/svg/logo.svg"}
          alt="ToHomePage"
        />
      </Link>
      <p>
        {text}
        <Link href={linkTo}>
          <span>{linkText}</span>
        </Link>
      </p>
    </header>
  );
}
