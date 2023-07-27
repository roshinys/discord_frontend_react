import React, { useEffect, useState } from "react";
import AuthBox from "../../UI/AuthBox/AuthBox";
import LoginHeader from "./LoginHeader";
import LoginInput from "./LoginInput";
import LoginFooter from "./LoginFooter";
import { loginUser } from "../../../store/slice/auth-actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { alertActions } from "../../../store/slice/alert-slice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsFormValid(email.includes("@") && password.length >= 6);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [email, password]);

  const handleLogin = () => {
    if (isFormValid) {
      const user = { email, password };
      dispatch(loginUser(user, navigate));
    } else {
      dispatch(
        alertActions.setAlert({ content: "Enter valid email and password" })
      );
    }
  };

  return (
    <AuthBox>
      <LoginHeader />
      <LoginInput
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginFooter handleLogin={handleLogin} isFormValid={isFormValid} />
    </AuthBox>
  );
}

export default Login;
