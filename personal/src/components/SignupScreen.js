import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { Store } from "../assets/context/AuthContext";

export default function SignupScreen() {
  const navigate = useNavigate();

  const [email, setEmail] = useState(" ");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { dispatch: ctxDispatch } = useContext(Store);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Password do not match");
      return;
    }
    try {
      const { data } = await Axios.post("/api/auth/register", {
        email,
        password,
        username,
        confirmPassword,
      });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/welcome");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container
      className="small-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // This will make the container take up the full viewport height
      }}
    >
      <Form onSubmit={submitHandler}>
        <h1 className="my-3">Sign Up</h1>
        <Form.Group className="my-3" controlId="name">
          <Form.Label>name</Form.Label>
          <Form.Control onChange={(e) => setUserName(e.target.value)} />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="confirmpassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign Up</Button>
        </div>
        {/* <div className="mb-3">
          Already have an account <Link to={`/login`}>Login</Link>
        </div> */}
      </Form>
    </Container>
  );
}
