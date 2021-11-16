import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const {
    signInWithGoogle,
    setUser,
    loginWithEmailAndPassword,
    setIsLoading,
    error,
    setError,
    saveUser,
  } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/home";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleGetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginWithEmailAndPassword = (e) => {
    e.preventDefault();

    loginWithEmailAndPassword(email, password)
      .then((res) => {
        setIsLoading(true);
        setUser(res.user);
        history.push(url);
        // ...
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        setIsLoading(true);
        const user = res.user;
        console.log(user);
        saveUser(user.email, user.displayName, "PUT");
        history.push(url);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div>
      <Container className="py-5 mt-5">
        <small className="text-danger">{error}</small>
        <Form
          className="w-75 mx-auto"
          onSubmit={handleLoginWithEmailAndPassword}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleGetEmail}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handleGetPassword}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <div className="w-75 pt-3 mx-auto">
          <h3>
            Are you new user..?? <Link to="/register">Regiter</Link>{" "}
          </h3>

          <button onClick={handleGoogleSignIn} className="mt-2 login_btn">
            <i className="fab fa-google-plus-g me-1"></i>
            GoogleLogin
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
