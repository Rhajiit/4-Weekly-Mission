interface textConstantObjectType {
  [key: string]: string;
}

export const INPUT_PLACEHOLDER: textConstantObjectType = {
  "password-sign-up": "영문, 숫자를 조합해 8자 이상 입력해 주세요.",
  "password-login": "비밀번호를 입력해 주세요.",
  email: "이메일을 입력해 주세요.",
  "password-check": "비밀번호와 일치하는 값을 입력해 주세요.",
} as const;

export const INPUT_TYPE: textConstantObjectType = {
  "password-sign-up": "password",
  "password-login": "password",
  "password-check": "password",
  id: "id",
  email: "email",
} as const;

export const INPUT_NAME: textConstantObjectType = {
  email: "이메일",
  "password-check": "비밀번호 확인",
  "password-sign-up": "비밀번호",
  "password-login": "비밀번호",
} as const;

export const SIGN_INPUT_ERROR_MESSAGES = {
  BLANK_EMAIL: "이메일을 입력해 주세요.",
  BLANK_PASSWORD: "비밀번호를 입력해 주세요.",
  NOT_VALID_FORMAT_EMAIL: "올바른 이메일 주소가 아닙니다.",
  NOT_VALID_FORMAT_PASSWORD:
    "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  NOT_MATCH_PASS_CHECK: "비밀번호가 일치하지 않아요.",
  NOT_CORRECT_EMAIL: "이메일을 확인해주세요.",
  NOT_CORRECT_PASSWORD: "비밀번호를 확인해주세요.",
  DUPLICATE_EMAIL: "이미 사용 중인 이메일입니다.",
} as const;
