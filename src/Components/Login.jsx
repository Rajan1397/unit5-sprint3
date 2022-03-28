import React from "react";
import { AuthContext } from "../Contexts/AuthContext";

export const Login = () => {
  const { login, logout, setToken } = React.useContext(AuthContext);

  const [formDetails, setFormDetails] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(formDetails);

    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "POST",
      body: JSON.stringify(formDetails),
      headers: { "content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        setToken(res.token);
        res.token ? login() : logout();
      });
    // once login successful programmatically redirect to the homepage
  };
  const { username, password } = formDetails;

  return (
    <>
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        onChange={handleChange}
        value={username}
      />

      <br />
      <input
        type="text"
        name="password"
        placeholder="Enter password to login"
        onChange={handleChange}
        value={password}
      />
      <br />
      <button onClick={handleSubmit}>Login</button>
    </>
  );
};
