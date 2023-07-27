import React from "react";
import { Typography } from "@mui/material";
import styles from "../Login/LoginHeader.module.css";

function RegisterHeader() {
  return (
    <>
      <Typography variant="h5" className={styles.loginHeader}>
        Sign Up
      </Typography>
      <Typography className={styles.loginMessage}>Good to see you</Typography>
    </>
  );
}

export default RegisterHeader;
