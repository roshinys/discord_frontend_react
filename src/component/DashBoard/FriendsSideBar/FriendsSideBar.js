import React from "react";
import styles from "./FriendsSideBar.module.css";
import AddFriendButton from "./AddFriendButton";
import FriendsTitle from "./FriendsTitle";
import FriendsList from "./FriendsList/FriendsList";
import PendingInvitationList from "./PendingInvitationList/PendingInvitationList";

function FriendsSideBar() {
  return (
    <div className={styles.mainContainer}>
      <AddFriendButton />
      <FriendsTitle title="Private Messages" />
      <FriendsList />
      <FriendsTitle title="Invitation" />
      <PendingInvitationList />
    </div>
  );
}

export default FriendsSideBar;
