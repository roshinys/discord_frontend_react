import React from "react";
import styles from "./FriendsSideBar.module.css";
import AddFriendButton from "./AddFriendButton";

function FriendsSideBar() {
  return (
    <div className={styles.mainContainer}>
      <AddFriendButton />
    </div>
  );
}

export default FriendsSideBar;
