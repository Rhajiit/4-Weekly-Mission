import { SIGN_INPUT_ERROR_MESSAGES } from "@/src/constant/SIGN_INPUT_TEXTS";

const mailFormat: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const formatCheck = (email: string) => {
  return email.match(mailFormat);
};

export default function emailBlur(signInput: string) {
  if (signInput === "") return SIGN_INPUT_ERROR_MESSAGES.BLANK_EMAIL;
  if (!formatCheck(signInput))
    return SIGN_INPUT_ERROR_MESSAGES.NOT_VALID_FORMAT_EMAIL;

  return "";
}
