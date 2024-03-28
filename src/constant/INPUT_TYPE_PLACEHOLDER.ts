interface placeholderTypeText {
  [key: string]: string;
}

const INPUT_TYPE_PLACEHOLDER: placeholderTypeText = {
  text: "내용",
  password: "비밀번호",
  id: "아이디",
} as const;

export default INPUT_TYPE_PLACEHOLDER;
