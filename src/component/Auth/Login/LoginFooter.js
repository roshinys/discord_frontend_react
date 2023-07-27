import React from "react";
import Button from "../../UI/Button/Button";
import RedirectInfo from "../../UI/RedirectInfo/RedirectInfo";
import { Tooltip } from "@mui/material";

function LoginFooter({ handleLogin, isFormValid }) {
  return (
    <>
      <Tooltip
        title={
          !isFormValid
            ? "Email should contain 6 characters and password should be of length 6"
            : "Press to login"
        }
        arrow
      >
        <div>
          <Button
            label="Login"
            additionalStyles={{ marginTop: "30px" }}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Don't have an acc ? "
        redirectText="Register here"
        additionalStyles={{ marginTop: "5px" }}
        redirectTo="/register"
      />
    </>
  );
}

export default LoginFooter;
