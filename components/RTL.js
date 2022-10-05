import React, { useEffect } from "react";
import PropTypes from "prop-types";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { useSettings } from "../hooks/useSettings";
import { useRouter } from "next/router";

const styleCache = () =>
  createCache({
    key: "rtl",
    prepend: true,
    stylisPlugins: [stylisRTLPlugin],
  });

export const RTL = (props) => {
  const { children, direction } = props;
  const settings = useSettings();
  const { locale } = useRouter();

  useEffect(() => {
    if (locale === "ar") {
      settings.saveSettings({ ...settings.settings, direction: "rtl" });
    } else {
      settings.saveSettings({ ...settings.settings, direction: "ltr" });
    }
  }, [locale]);

  useEffect(() => {
    document.dir = direction;
  }, [direction]);

  if (direction === "rtl") {
    return <CacheProvider value={styleCache()}>{children}</CacheProvider>;
  }

  return <>{children}</>;
};

RTL.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(["ltr", "rtl"]),
};
