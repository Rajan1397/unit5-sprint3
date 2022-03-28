import React from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function Register() {
  const { login, logout, setToken } = React.useContext(AuthContext);

  const [formDetails, setFormDetails] = React.useState({
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
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

    fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
      method: "POST",
      body: JSON.stringify(formDetails),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        setToken(res.token);
        res.token ? login() : logout();
      });
    // once login successful programmatically redirect to the homepage
  };
  const { name, email, password, username, mobile } = formDetails;

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        onChange={handleChange}
        value={name}
      />

      <br />
      <input
        type="text"
        name="email"
        placeholder="Enter email"
        onChange={handleChange}
        value={email}
      />
      <br />
      <input
        type="text"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
        value={password}
      />
      <br />
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
        name="mobile"
        placeholder="Enter mobile no"
        onChange={handleChange}
        value={mobile}
      />
      <br />
      <button onClick={handleSubmit}>Register here</button>
    </>
  );
}
