import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.js";

const LoginScreen = () => {
  //------------------------------ Style CSS -----------------------------------------//
  const Loginscreenstyle = {
    minHeight: "100%",
    backgroundImage: `url("./Images/wallpaper2.png")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    width: "100vw",
    height: "84vh",
  };

  const loginformstyle = {
    width: "25%",
    background: "#23263F",
    padding: "3%",
    float: "left",
    margin: "3%",
    borderRadius: "20px",
  };

  const metmamaskBtnStyle = {
    color: "#000000",
    fontSize: "1.5em",
  };

  const registerlinkstyle = {
    textDecoration: "none",
  };

  //------------------------------ useStates Hooks -----------------------------------------//

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAccountConnected, setIsAccountConnected] = useState(true);

  //------------------------------ Functions -----------------------------------------//
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit form");
    // match inputs credentials
    // Navigate to dashboard
  };

  //------------------------------ Render Content -----------------------------------------//
  return (
    <>
      <Navbar />
      <div className="LoginPageWallpaper" style={Loginscreenstyle}>
        <form onSubmit={submitHandler}>
          <div className="container text-light" style={loginformstyle}>
            <div className="text-center">
              <h3>Login</h3>
            </div>
            <div>
              <p>
                Don't have an account ?
                <Link style={registerlinkstyle} to="/register">
                  {" "}
                  Register Here
                </Link>
              </p>
            </div>
            <div className="mb-3">
              <label htmlFor="studentEmail" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="studentEmail"
                placeholder="e.g. xyz@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="studentPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="studentPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </div>
            <div className="mb-3">
              <div className="d-grid gap-2">
                <label htmlFor="metamaskbtn" className="form-label">
                  Metamask Wallet{" "}
                  {isAccountConnected ? (
                    <i
                      style={{ color: "green" }}
                      className="fa-solid fa-circle-check"
                    ></i>
                  ) : (
                    <i
                      style={{ color: "red" }}
                      className="fa-solid fa-circle-xmark"
                    ></i>
                  )}
                </label>
                <button
                  className={`btn ${
                    isAccountConnected ? "btn-success" : "btn-danger"
                  }  btn-lg fw-bold`}
                  type="button"
                  id="metamaskbtn"
                  style={metmamaskBtnStyle}
                >
                  <img
                    src="./Images/metamask.png"
                    alt=""
                    width="80"
                    height="40"
                  />
                  METAMASK
                </button>
                <button
                  className="btn btn-warning btn-lg mt-4"
                  type="submit"
                  disabled={!isAccountConnected}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
