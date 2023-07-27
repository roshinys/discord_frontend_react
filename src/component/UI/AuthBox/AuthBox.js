import React from "react";
import Box from "@mui/material/Box";
import styles from "./AuthBox.module.css";

function AuthBox(props) {
  return (
    <div className={styles.boxWrapper}>
      <Box className={styles.box}>{props.children}</Box>
    </div>
  );
}

export default AuthBox;
