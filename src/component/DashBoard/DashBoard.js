import React from "react";
import styles from "./DashBoard.module.css";
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";

function DashBoard() {
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </div>
  );
}

export default DashBoard;
