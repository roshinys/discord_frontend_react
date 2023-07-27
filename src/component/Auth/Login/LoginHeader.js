import React from "react";
import { Typography } from "@mui/material";
import styles from "./LoginHeader.module.css";

function LoginHeader() {
  return (
    <>
      <Typography variant="h5" className={styles.loginHeader}>
        Sign In
      </Typography>
      <Typography className={styles.loginMessage}>Welcome Back</Typography>
    </>
  );
}

export default LoginHeader;
