import React, { useState } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import styles from "./PendingInvitationListItem.module.css";
import Avatar from "../../../UI/Avatar/Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";

function PendingInvitationListItem({
  id,
  username,
  mail,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) {
  const [buttondisabled, setButtonDisabled] = useState(false);

  const handleAcceptFriendInvitation = () => {
    acceptFriendInvitation({ id });
    setButtonDisabled(true);
  };

  const handleRejectFriendInvitation = () => {
    rejectFriendInvitation({ id });
    setButtonDisabled(true);
  };

  return (
    <Tooltip title={mail}>
      <div className={styles.div}>
        <Box className={styles.box}>
          <Avatar username={username} />
          <Typography className={styles.username} variant="subtitle1">
            {username}
          </Typography>
          <InvitationDecisionButtons
            disabled={buttondisabled}
            acceptInvitationHandler={handleAcceptFriendInvitation}
            rejectInvitationHandler={handleRejectFriendInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
}

export default PendingInvitationListItem;
