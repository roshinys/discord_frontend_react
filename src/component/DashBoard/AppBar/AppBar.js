import React from "react";
import styles from "./AppBar.module.css";
import DropdownMenu from "./DropdownMenu";

function AppBar() {
  return (
    <div className={styles.mainContainer}>
      <DropdownMenu />
    </div>
  );
}

export default AppBar;
