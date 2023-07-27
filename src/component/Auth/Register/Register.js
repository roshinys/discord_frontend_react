import React, { useState, useEffect } from "react";
import AuthBox from "../../UI/AuthBox/AuthBox";
import RegisterInput from "./RegisterInput";
import RegisterHeader from "./RegisterHeader";
import RegisterFooter from "./RegisterFooter";
import { registerUser } from "../../../store/slice/auth-actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { alertActions } from "../../../store/slice/alert-slice";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsFormValid(
        email.includes("@") && password.length >= 6 && username.length > 3
      );
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [email, password, username]);

  const handleRegister = () => {
    if (isFormValid) {
      const user = { username, email, password };
      dispatch(registerUser(user, navigate));
    } else {
      dispatch(
        alertActions.setAlert({ content: "Enter valid email and password" })
      );
    }
  };

  return (
    <AuthBox>
      <RegisterHeader />
      <RegisterInput
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />
      <RegisterFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
}

export default Register;
