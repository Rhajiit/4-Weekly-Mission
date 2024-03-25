import type { AppProps } from "next/app";

import "@/styles/reset.css";
import "@/styles/globals.css";
import "@/styles/font-sizes.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
