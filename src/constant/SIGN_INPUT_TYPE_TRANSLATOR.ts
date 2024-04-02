interface placeholderTypeText {
  [key: string]: string;
}

export const INPUT_PLACEHOLDER: placeholderTypeText = {
  text: "내용",
  password: "비밀번호",
  id: "아이디",
  email: "이메일",
  passCheck: "비밀번호 확인",
} as const;

export const INPUT_TYPE: placeholderTypeText = {
  password: "password",
  passCheck: "password",
  id: "id",
  email: "email",
} as const;
