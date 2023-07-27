import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./RedirectInfo.module.css";

function RedirectInfo({ text, additionalStyles, redirectText, redirectTo }) {
  return (
    <Typography
      className={styles.redirectInfo}
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <Link to={redirectTo}>{redirectText}</Link>
    </Typography>
  );
}

export default RedirectInfo;
