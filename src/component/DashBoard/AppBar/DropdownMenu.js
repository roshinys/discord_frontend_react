import { MoreVert } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/slice/auth-slice";

function DropdownMenu() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (e) => {
    setAnchorEl(e.target);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div>
      <IconButton onClick={handleMenuOpen} style={{ color: "white" }}>
        <MoreVert />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default DropdownMenu;
