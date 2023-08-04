import React, { useEffect } from "react";
import styles from "./DashBoard.module.css";
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { connectWithSocketServer } from "../../realtimeCommunication/socketConnection";
import { useSelector } from "react-redux";

function DashBoard() {
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    connectWithSocketServer(token);
  }, [token]);
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
