import { SIGN_INPUT_ERROR_MESSAGES } from "@/src/constant/SIGN_INPUT_TEXTS";

export default function passCheckBlur(signInput: string, compareInput: string) {
  if (signInput === "" || signInput !== compareInput)
    return SIGN_INPUT_ERROR_MESSAGES.NOT_MATCH_PASS_CHECK;
  return "";
}
