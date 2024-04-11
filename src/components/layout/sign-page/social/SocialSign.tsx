import Image from "next/image";
import Link from "next/link";

export default function SocialSign() {
  return (
    <div className="lb-body2-regular mt-[0.2rem] flex w-full items-center justify-between rounded-lg border-[1px] border-solid border-[var(--lb-gray20)] bg-[var(--lb-gray10)] px-[2.4rem] py-[1.2rem] text-[var(--lb-gray100)]">
      다른 방식으로 가입하기
      <div className="flex gap-[1.6rem]">
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
      </div>
    </div>
  );
}
