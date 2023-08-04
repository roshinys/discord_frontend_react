import React from "react";
import Button from "../../UI/Button/Button";

const addditionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
  border: "none",
  borderRadius: "10px",
};

function AddFriendButton() {
  const handleOpenFriendDialog = () => {};
  return (
    <>
      <Button
        additionalStyles={addditionalStyles}
        label="Add Friend"
        onClick={handleOpenFriendDialog}
      />
    </>
  );
}

export default AddFriendButton;
