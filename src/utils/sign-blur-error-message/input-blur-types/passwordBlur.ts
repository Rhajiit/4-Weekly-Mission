import { SIGN_INPUT_ERROR_MESSAGES } from "@/src/constant/SIGN_INPUT_TEXTS";

const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const passFormatCheck = (password: string) => {
  return password.match(passwordFormat);
};

export default function passwordBlur(signInput: string, inputType: string) {
  if (signInput === "") return SIGN_INPUT_ERROR_MESSAGES.BLANK_PASSWORD;
  if (inputType === "password" && !passFormatCheck(signInput))
    return SIGN_INPUT_ERROR_MESSAGES.NOT_VALID_FORMAT_PASSWORD;
  return "";
}
