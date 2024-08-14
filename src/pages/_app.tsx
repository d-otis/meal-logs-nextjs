import type { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../pages/components/Navigation";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const getUserColorMode = (): "dark" | "light" =>
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    const setMode = (mode: string) =>
      document.documentElement.setAttribute("data-bs-theme", mode);

    setMode(getUserColorMode());

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        const changedMode = getUserColorMode();
        setMode(changedMode);
      });

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {
          const changedMode = getUserColorMode();
          setMode(changedMode);
        });
    };
  });
  return (
    <>
      <Head>
        <title>Daily Meal Logs</title>
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
