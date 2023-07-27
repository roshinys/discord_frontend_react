import React from "react";
import InputLabel from "../../UI/InputLabel/InputLabel";

function RegisterInput(props) {
  const { username, setUsername, email, setEmail, password, setPassword } =
    props;
  return (
    <>
      <InputLabel
        value={username}
        setValue={setUsername}
        type="username"
        label="Username"
        placeholder="Your Username"
      />
      <InputLabel
        value={email}
        setValue={setEmail}
        type="email"
        label="E-Mail"
        placeholder="Enter a email address"
      />
      <InputLabel
        value={password}
        setValue={setPassword}
        type="password"
        label="Password"
        placeholder="Enter Password"
      />
    </>
  );
}

export default RegisterInput;
