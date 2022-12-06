import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import { Inter, Manrope } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import "../styles/globals.scss";

export const manrope = Manrope({
  weight: ["400", "700", "300", "500", "200", "600", "800"],
  style: ["normal"],
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

export const inter = Inter({
  weight: ["400", "700", "300", "100", "900", "500", "600", "800", "200"],
  style: ["normal"],
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${manrope.style.fontFamily}${inter.style.fontFamily};
        }
      `}</style>
      <Head>
        <link rel="shortcut icon" href="../favicon.ico" />
      </Head>
      <MantineProvider
        withCSSVariables
        withGlobalStyles
        theme={{
          ...mantineTheme,
        }}
      >
        <NotificationsProvider containerWidth={300} position="top-right">
          <ModalsProvider modalProps={{ zIndex: 201 }}>
            <div className={inter.className} style={{ visibility: mounted ? "visible" : "hidden" }}>
              <Component {...pageProps} />
            </div>
          </ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}

const mantineTheme = {
  fontFamily: inter.style.fontFamily,

  fontSizes: {
    xs: 10,
    sm: 12,
    md: 12,
    lg: 16,
    xl: 24,
  },

  headings: {
    sizes: {
      h1: { fontSize: 40 },
      h2: { fontSize: 24 },
      h3: { fontSize: 16 },
      h4: { fontSize: 14 },
    },
    fontFamily: inter.style.fontFamily,
  },
  radius: {
    lg: 0,
    xl: 0,
    md: 0,
    sm: 0,
    xs: 0,
  },
};
