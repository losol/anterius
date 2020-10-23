import App from "next/app";
import Head from "next/head";
import "../assets/css/style.css";
import { createContext } from "react";
import { getMediaUrl } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { siteSettings } = pageProps;

  return (
    <>
      <Head></Head>
      <GlobalContext.Provider value={siteSettings}>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch siteSettings site settings from Strapi
  const siteSettings = await fetchAPI("/websites?url=https%3A%2F%2Flosol.no");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { siteSettings } };
};

export default MyApp;
