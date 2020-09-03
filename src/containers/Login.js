import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./Login.css";
import { onLoginSubmit } from "../actions/simpleAction";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginStore = useSelector((state) => {
    debugger;
  });

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  return (
    <div className="Login">
      <form
        onSubmit={(e) => {
          dispatch(onLoginSubmit(e));
        }}
      >
        <FormGroup controlId="email" bsSize="large">
          <label>Email</label>
          <FormControl
            name="email"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <label>Password</label>
          <FormControl
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
