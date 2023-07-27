import React from "react";
import Button from "../../UI/Button/Button";
import RedirectInfo from "../../UI/RedirectInfo/RedirectInfo";
import { Tooltip } from "@mui/material";

function RegisterFooter({ handleRegister, isFormValid }) {
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
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Already have an acc ? "
        redirectText="Login here"
        additionalStyles={{ marginTop: "5px" }}
        redirectTo="/login"
      />
    </>
  );
}

export default RegisterFooter;
