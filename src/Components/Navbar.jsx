import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const AllLinks = styled(Link)`
  margin: 20px;
`;

export default function Navbar() {
  return (
    <>
      <AllLinks to="/">Home</AllLinks>
      <AllLinks to="/Register">Register</AllLinks>
      <AllLinks to="/Login">Login</AllLinks>
      <AllLinks to="/products">Products</AllLinks>
    </>
  );
}
