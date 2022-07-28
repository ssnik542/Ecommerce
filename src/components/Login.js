import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faChevronCircleRight
} from "@fortawesome/free-solid-svg-icons";
function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  //const passwordConfirmRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
  }
  const box = {
    background: `url("https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149005675.jpg?w=996&t=st=1659023482~exp=1659024082~hmac=fa879d829aff0c76c7c4c32ffa88a7f5dcca23e93cc10c4329c9330dfd82b6b8")`,
    width: "400px",
    height: "300px",
    borderRadius: "6px",
    margin: "0 auto 0 auto",
    padding: "10px 10px 70px 10px",
    border: "#c2dbf0 1px solid",
    boxShadow: "10px 10px #c2dbf0",
    marginTop: "10%"
  };
  const email = {
    background: "#ecf0f1",
    border: "#ccc 1px solid",
    borderBottom: "#ccc 2px solid",
    padding: "8px",
    width: "300px",
    color: "#333",
    marginTop: "10px",
    fontSize: "1em",
    borderRadius: "4px",
    marginLeft: "30px"
  };
  const pass = {
    borderRadius: "4px",
    background: "#ecf0f1",
    border: "#ccc 1px solid",
    padding: "8px",
    width: "300px",
    fontSize: "1em",
    marginLeft: "30px",
    marginTop: "30px",
    marginBottom: "20px"
  };
  const sh = {
    fontSize: "1.5em",
    color: "#525252",
    marginLeft: "38%"
  };
  return (
    <>
      <div style={box}>
        <h1 style={sh}>Shopee 🥑</h1>
        <div class="screen">
          <div class="screen__content">
            {error && <Alert variant="danger">{error}</Alert>}
            <form class="login" onSubmit={handleSubmit}>
              <div class="login__field">
                <i class="login__icon">
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <input
                  type="email"
                  style={email}
                  placeholder="Email"
                  ref={emailRef}
                  required
                />
              </div>
              <div class="login__field">
                <i class="login__icon">
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <input
                  type="password"
                  style={pass}
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
              </div>
              {!loading && (
                <button class="button login__submit" disabled={loading}>
                  <span class="button__text">Log In Now</span>
                  <i class="button__icon">
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                  </i>
                </button>
              )}
              {loading && (
                <button className="button login__submit" disabled>
                  <span className="button__text">Loading...</span>
                  <i className="button__icon">
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                  </i>
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="w-100 text-center mt-3">
        <Link to="/forgot-password">Forgot Password ?</Link>
      </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}

export default Login;
