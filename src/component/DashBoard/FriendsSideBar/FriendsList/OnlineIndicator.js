import { FiberManualRecord } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import styles from "./OnlineIndicator.module.css";

function OnlineIndicator() {
  return (
    <Box className={styles.onlineIndicator}>
      <FiberManualRecord />
    </Box>
  );
}

export default OnlineIndicator;
