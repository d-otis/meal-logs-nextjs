import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../pages/components/Navigation";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
