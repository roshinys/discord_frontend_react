import React from "react";
import styles from "./Button.module.css";

function Button({ label, additionalStyles, disabled, onClick }) {
  return (
    <button
      className={styles.customButton}
      style={additionalStyles ? additionalStyles : {}}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
