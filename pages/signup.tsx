import * as S from "@/styles/pages/sign-page.style";

// Components
import SignUpPageContainer from "@/src/containers/signup-page/SignUpPage";
import SignPageHeader from "@/src/components/layout/sign-page/header/SignPageHeader";
import SignInput from "@/src/components/sign-input/SignInput";
import SocialSign from "@/src/components/layout/sign-page/social/SocialSign";

export default function SignUp() {
  const { emailError, passwordError, emailRef, passwordRef, blurEvent } =
    SignUpPageContainer();

  return (
    <>
      <S.SignPageWrapper>
        <SignPageHeader
          text="회원이 아니신가요?"
          linkText="회원 가입하기"
          linkTo="/signin"
        />
        <S.SignFormWrapper id="sign">
          <SignInput
            inputRef={emailRef}
            inputType="email"
            errorMessage={emailError}
            blurEvent={() => blurEvent("email", emailRef)}
          />
          <SignInput
            inputRef={passwordRef}
            inputType="password"
            errorMessage={passwordError}
            blurEvent={() => blurEvent("password", passwordRef)}
          />
        </S.SignFormWrapper>
        <S.SignSubmitButton onSubmit={() => console.log("asdf")} form="sign">
          로그인
        </S.SignSubmitButton>
        <SocialSign />
      </S.SignPageWrapper>
    </>
  );
}
