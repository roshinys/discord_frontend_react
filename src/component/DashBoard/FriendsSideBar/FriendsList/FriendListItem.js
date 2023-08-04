import React from "react";
import { Button, Typography } from "@mui/material";
import styles from "./FriendListItem.module.css";
import Avatar from "../../../UI/Avatar/Avatar";
import OnlineIndicator from "./OnlineIndicator";

function FriendListItem({ id, username, isOnline }) {
  return (
    <Button className={styles.friendListButton}>
      <Avatar username={username} />
      <Typography className={styles.username} variant="subtitle1" align="left">
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
}

export default FriendListItem;
