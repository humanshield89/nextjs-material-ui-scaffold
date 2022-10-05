import styles from "../../styles/Home.module.css";
import React from "react";
import PropTypes from "prop-types";
import MainLayout from "./index";

const Footer = ({ t }) => {
  return (
    <footer className={styles.footer}>
      <a href="https://dailycode.dev" target="_blank" rel="noopener noreferrer">
        {t("footerCreatedBy") + " "}
        <strong style={{ margin: 6 }}>{" dailycode.dev"}</strong>
      </a>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};
