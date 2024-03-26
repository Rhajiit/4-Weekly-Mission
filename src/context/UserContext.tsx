import React, { createContext, useContext, useState } from "react";
import UserDataType from "../types/UserDataType";

const UserContext = createContext({});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<null | UserDataType>(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useCurrentUser() {
  const context: any = useContext(UserContext);

  if (context === undefined) {
    throw new Error("context 에러");
  }
  const { currentUser } = context;
  return currentUser;
}

export function useSetCurrentUser() {
  const context: any = useContext(UserContext);

  if (context === undefined) {
    throw new Error("context 에러");
  }

  const { setCurrentUser } = context;
  return setCurrentUser;
}
