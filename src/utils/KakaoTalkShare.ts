export default function KakaoTalkShare() {
  if (typeof window !== undefined) {
    // 배포한 자신의 사이트
    const { Kakao }: any = window as any;
    // init 해주기 전에 clean up 을 해준다.
    Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    // 잘 적용되면 true 를 뱉는다.
    // console.log(Kakao.isInitialized());
    const kakaoShare = (url: any, query = "") => {
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
