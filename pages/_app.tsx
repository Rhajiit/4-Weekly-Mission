import type { AppProps } from "next/app";

import "@/styles/reset.css";
import "@/styles/globals.css";
import "@/styles/font-sizes.css";
import Footer from "@/src/components/layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {" "}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
