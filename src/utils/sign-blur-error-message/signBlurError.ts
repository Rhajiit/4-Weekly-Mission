import { Dispatch, SetStateAction } from "react";
import emailBlur from "./input-blur-types/emailBlur";
import passwordBlur from "./input-blur-types/passwordBlur";
import passCheckBlur from "./input-blur-types/passCheckBlur";

export default function signBlurError(
  userInput: string,
  inputType: string,
  setState: Dispatch<SetStateAction<string>>,
  compareInput?: string
) {
  let errorMessage = "";

  switch (inputType) {
    case "email":
      errorMessage = emailBlur(userInput);
      break;

    case "password-login":
    case "password-sign-up":
      errorMessage = passwordBlur(userInput, inputType);
      break;

    case "password-check":
      errorMessage = passCheckBlur(userInput, compareInput!);
      break;
  }

  setState(errorMessage);
}
