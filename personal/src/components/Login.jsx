import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Store } from "../assets/context/AuthContext";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const {  dispatch: ctxDispatch } = useContext(Store);

  const submitHandler = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post("/api/auth/login", {
      email,
      password,
    });
    ctxDispatch({ type: "LOGIN", payload: data }); // Use "LOGIN" here
    localStorage.setItem("userInfo", JSON.stringify(data));
    navigate("/welcome");
  } catch (err) {
    console.log(err);
  }
};

  return (
    <Container className="small-container">
      
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        {/* <div className="mb-3">
          New customer?{" "}
          <Link to={`/signup`}>Create your acount</Link>
        </div> */}
      </Form>
    </Container>
  );
}

export default Login
