import type { AppProps } from "next/app";

import "@/styles/reset.css";
import "@/styles/globals.css";
import "@/styles/font-sizes.css";
import "@/styles/landing-page.css";
import { UserProvider } from "@/src/context/UserContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}
