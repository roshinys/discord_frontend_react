import React from "react";
import styles from "./SideBar.module.css";
import MainPageButton from "./MainPageButton";

function SideBar() {
  return (
    <div className={styles.mainContainer}>
      <MainPageButton />
    </div>
  );
}

export default SideBar;
