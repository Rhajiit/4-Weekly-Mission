interface textConstantObjectType {
  [key: string]: string;
}

export const INPUT_PLACEHOLDER: textConstantObjectType = {
  password: "영문, 숫자를 조합해 8자 이상 입력해 주세요.",
  passwordLogin: "비밀번호를 입력해 주세요.",
  email: "이메일을 입력해 주세요.",
  passCheck: "비밀번호와 일치하는 값을 입력해 주세요.",
} as const;

export const INPUT_TYPE: textConstantObjectType = {
  password: "password",
  passwordLogin: "password",
  passCheck: "password",
  id: "id",
  email: "email",
} as const;

export const INPUT_NAME: textConstantObjectType = {
  email: "이메일",
  passCheck: "비밀번호 확인",
  password: "비밀번호",
  passwordLogin: "비밀번호",
} as const;
