import React from "react";
import styles from "./InputLabel.module.css";

function InputLabel(props) {
  const { value, setValue, label, type, placeholder } = props;

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles.inputWrapper}>
      <label>{label}</label>
      <input
        value={value}
        onChange={handleValueChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputLabel;
