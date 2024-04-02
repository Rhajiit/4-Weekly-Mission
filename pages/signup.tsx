import SignInput from "@/src/components/sign-input/SignInput";
import SignUpPageContainer from "@/src/containers/signup-page/signUpPage";
import * as S from "@/styles/pages/sign-page.style";

export default function SignUp() {
  const {
    emailError,
    passwordError,
    passCheckError,
    emailRef,
    passwordRef,
    passCheckRef,
    blurEvent,
  } = SignUpPageContainer();

  return (
    <>
      <S.SignPageWrapper>
        <S.SignFormWrapper>
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
          <SignInput
            inputRef={passCheckRef}
            inputType="passCheck"
            errorMessage={passCheckError}
            blurEvent={() => blurEvent("passCheck", passCheckRef)}
          />
        </S.SignFormWrapper>
      </S.SignPageWrapper>
    </>
  );
}
