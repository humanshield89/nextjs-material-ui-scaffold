import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSettings } from "../hooks/useSettings";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import MainLayout from "../layouts/MainLayout";
import Page from "../components/Page";

export default function Home(props) {
  const { locale, locales, defaultLocale } = props.context;
  const router = useRouter();

  const activeSX = {
    borderBottom: "2px solid black",
  };

  const theme = useTheme();
  const settings = useSettings();
  const { t } = useTranslation(["common", "home"]);

  useEffect(() => {
    if (locale === "ar") {
      settings.saveSettings({ ...settings.settings, direction: "rtl" });
    } else {
      settings.saveSettings({ ...settings.settings, direction: "ltr" });
    }
  }, [locale]);

  const handleLocaleChange = (event) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  return (
    <Page className={styles.container} title={"Home"}>
      <main className={styles.main}>
        <ButtonGroup
          variant="text"
          aria-label="language select"
          sx={{ marginBottom: 3 }}
        >
          <Button
            value={"ar"}
            onClick={handleLocaleChange}
            aria-label="Switch to Arabic"
            disabled={locale === "ar"}
            sx={locale === "ar" ? activeSX : undefined}
          >
            Ar
          </Button>
          <Button
            value={"en"}
            aria-label="Switch to English"
            disabled={locale === "en"}
            onClick={handleLocaleChange}
            sx={locale === "en" ? activeSX : undefined}
          >
            En
          </Button>
          <Button
            value={"fr"}
            aria-label="Switch to Frensh"
            disabled={locale === "fr"}
            onClick={handleLocaleChange}
            sx={locale === "fr" ? activeSX : undefined}
          >
            Fr
          </Button>
        </ButtonGroup>

        <h1 className={styles.title}>
          {t("home:welcomeTo")}
          <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          {t("home:getStarted")}
          <code className={styles.code}>pages/index.jsx</code>
        </p>
      </main>
    </Page>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: {
      context,
      ...(await serverSideTranslations(context.locale, ["common", "home"])),
    },
  };
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;
