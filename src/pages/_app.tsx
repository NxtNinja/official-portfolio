import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  Comfortaa,
  Josefin_Slab,
  Questrial,
  Rokkitt,
  Sen,
  Zilla_Slab,
} from "next/font/google";
import { NextUIProvider } from "@nextui-org/system";

const comfortaa = Sen({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className={comfortaa.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </NextUIProvider>
  );
}
