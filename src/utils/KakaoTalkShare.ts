/**
 * @description 호출받을 경우, 현재 페이지에 대한 카카오톡 공유를 수행할 함수입니다.
 * @returns
 */

export default function kakaoTalkShare() {
  if (typeof window !== undefined) {
    // 배포한 자신의 사이트
    const { Kakao }: any = window as any;
    // init 해주기 전에 clean up 을 해준다.
    Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);

    const kakaoShare = (url: string, query = "") => {
      Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "코드잇 스프린트!",
          description: "테스트중",
          imageUrl: "assets/images/sampleImage.png",
          link: {
            mobileWebUrl: url + query,
          },
        },
        buttons: [
          {
            title: "나도 테스트 하러가기",
            link: {
              mobileWebUrl: url + query,
            },
          },
        ],
      });
    };

    return kakaoShare;
  }

  return () => {};
}
