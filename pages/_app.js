import { appWithTranslation } from "next-i18next";
import React from "react";
import "../styles/globals.css";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createCustomTheme } from "../themes/light-theme";
import createEmotionCache from "../utils/create-emotion-cache";
import { SettingsConsumer, SettingsProvider } from "../context/SettingsContext";
import { RTL } from "../components/RTL";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <CacheProvider value={emotionCache}>
        <SettingsProvider>
          <SettingsConsumer>
            {({ settings }) => {
              return (
                <ThemeProvider
                  theme={createCustomTheme({
                    direction: settings.direction,
                    responsiveFontSizes: settings.responsiveFontSizes,
                  })}
                >
                  <RTL direction={settings.direction}>
                    <CssBaseline />
                    <Head>
                      <meta
                        name="viewport"
                        content="initial-scale=1, width=device-width"
                      />
                      <link rel="icon" href="/favicon.ico" />
                    </Head>
                    {getLayout(<Component {...pageProps} />)}
                  </RTL>
                </ThemeProvider>
              );
            }}
          </SettingsConsumer>
        </SettingsProvider>
      </CacheProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
