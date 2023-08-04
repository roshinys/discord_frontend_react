import React from "react";
import styles from "./PendingInvitationList.module.css";
import PendingInvitationListItem from "./PendingInvitationListItem";

const DUMMY_INVITATION = [
  { id: 1, senderId: { username: "roshin", mail: "roshin@gmail.com" } },
  { id: 2, senderId: { username: "daivik", mail: "daivik@gmail.com" } },
];

function PendingInvitationList() {
  return (
    <div className={styles.mainContainer}>
      {DUMMY_INVITATION.map((inv) => {
        return (
          <PendingInvitationListItem
            key={inv.id}
            id={inv.id}
            username={inv.senderId.username}
            mail={inv.senderId.mail}
          />
        );
      })}
    </div>
  );
}

export default PendingInvitationList;
