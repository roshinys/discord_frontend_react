import React, { useEffect, useState } from "react";
import AuthBox from "../../UI/AuthBox/AuthBox";
import LoginHeader from "./LoginHeader";
import LoginInput from "./LoginInput";
import LoginFooter from "./LoginFooter";

function Login() {
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
      console.log(email, password);
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
