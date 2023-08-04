import React from "react";
import styles from "./InvitationDecisionButtons.module.css";
import { Check, Clear } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

function InvitationDecisionButtons({
  acceptInvitationHandler,
  rejectInvitationHandler,
  disabled,
}) {
  return (
    <Box className={styles.box}>
      <IconButton
        style={{ color: "white" }}
        disabled={disabled}
        onClick={acceptInvitationHandler}
      >
        <Check />
      </IconButton>
      <IconButton
        style={{ color: "white" }}
        disabled={disabled}
        onClick={rejectInvitationHandler}
      >
        <Clear />
      </IconButton>
    </Box>
  );
}

export default InvitationDecisionButtons;
