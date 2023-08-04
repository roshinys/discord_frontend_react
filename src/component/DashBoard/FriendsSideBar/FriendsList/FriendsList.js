import React from "react";
import styles from "./FriendsList.module.css";
import FriendListItem from "./FriendListItem";

const DUMMY_FRIENDS = [
  {
    id: 1,
    username: "daivik",
    isOnline: true,
  },
  {
    id: 2,
    username: "roshin",
    isOnline: true,
  },
  {
    id: 3,
    username: "chief",
    isOnline: false,
  },
  {
    id: 4,
    username: "soldier",
    isOnline: false,
  },
];

function FriendsList() {
  return (
    <div className={styles.mainContainer}>
      {DUMMY_FRIENDS.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            username={friend.username}
            id={friend.id}
            isOnline={friend.isOnline}
          />
        );
      })}
    </div>
  );
}

export default FriendsList;
