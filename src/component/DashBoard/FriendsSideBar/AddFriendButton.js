import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import AddFriendDialog from "./AddFriendDialog";

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
  const [isDialopOpen, setIsDialogOpen] = useState(false);

  const handleOpenFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Button
        additionalStyles={addditionalStyles}
        label="Add Friend"
        onClick={handleOpenFriendDialog}
      />
      <AddFriendDialog
        isDialopOpen={isDialopOpen}
        closeDialogHandler={handleCloseFriendDialog}
      />
    </>
  );
}

export default AddFriendButton;
