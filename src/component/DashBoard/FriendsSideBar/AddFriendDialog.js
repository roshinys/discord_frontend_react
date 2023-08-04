import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import InputLabel from "../../UI/InputLabel/InputLabel";

function AddFriendDialog({
  isDialopOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState("");

  const handleSendInvitation = () => {
    //send friend request to server
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(mail.includes("@"));
  }, [mail]);

  return (
    <div>
      <Dialog open={isDialopOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite A Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter Email of a friend you would like to send invitation
            </Typography>
          </DialogContentText>
          <InputLabel
            label="Mail"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter email"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddFriendDialog;
