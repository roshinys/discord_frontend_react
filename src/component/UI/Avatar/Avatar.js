import React from "react";
import styles from "./Avatar.module.css";

function Avatar({ username }) {
  return <div className={styles.avatarPreview}>{username.substring(0, 2)}</div>;
}

export default Avatar;
