import React from "react";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import Footer from "./Footer";
import { Trans, useTranslation } from "react-i18next";

const MainLayout = ({ children }) => {
  const { t } = useTranslation("common");

  return (
    <Container maxWidth={"lg"}>
      {children}
      <Footer t={t} />
    </Container>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
