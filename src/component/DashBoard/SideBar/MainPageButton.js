import React from "react";
import { Button } from "@mui/material";
import { Groups } from "@mui/icons-material";
import styles from "./MainPageButton.module.css";

function MainPageButton() {
  return (
    <Button className={styles.mainPageButton}>
      <Groups />
    </Button>
  );
}

export default MainPageButton;
