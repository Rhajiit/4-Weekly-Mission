import React, { createContext, useContext, useState } from "react";
import UserDataType from "../types/UserDataType";

/**
 * @description 현재 유저에 관한 웹페이지의 전역 정보를 저장하기 위한 context와 그 Hooks입니다.
 */
const UserContext = createContext({});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<null | UserDataType>(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

/**
 * @description context에 저장된 유저의 정보를 불러오는 데 사용하는 context Hook입니다.
 * @returns
 */
export function useCurrentUser() {
  const context: any = useContext(UserContext);

  if (!context) {
    throw new Error("context 에러");
  }
  const { currentUser } = context;
  return currentUser;
}

/**
 * @description context에 새롭게 유저 정보를 저장할 때 사용되는 context Hook입니다.
 * @returns
 */
export function useSetCurrentUser() {
  const context: any = useContext(UserContext);

  if (!context) {
    throw new Error("context 에러");
  }
  const { setCurrentUser } = context;
  return setCurrentUser;
}
