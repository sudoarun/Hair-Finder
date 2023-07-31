import React, { useState } from "react";
import "./Loginpage.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { UserSignIn, UserSignUp } from "../../Auth/UserAuth";
import { message } from "antd";

function LoginPage({ name, setIsLoggedIn }) {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const navigate = useNavigate();
  const [signUser, setSignUser] = useState({
    username: "",
    email: "",
    password: "",
    number: "",
  });
  const [messageApi, context] = message.useMessage();
  const sendMessage = (varient, messageText) => {
    messageApi.open({
      type: varient,
      content: messageText,
    });
  };

  const [user, setUser] = useState({
    email: "user@user.in",
    password: "user@user.in",
  });
  // Onchange for Sign in User
  const onloadSignin = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((user) => {
      return { ...user, [name]: value };
    });
  };
  // ON Change for Sign Up user
  const onloadSignUp = (e) => {
    const sign = e.target.name;
    const value = e.target.value;
    setSignUser((data) => {
      return { ...data, [sign]: value };
    });
  };
  // One Submit of Sign In
  const handlesignIn = async (e) => {
    e.preventDefault();
    await UserSignIn(user, setIsLoggedIn, sendMessage, navigate);
    setUser({
      email: "",
      password: "",
    });
  };

  // on Submit for Sign up User
  const handleSignUp = async (e) => {
    e.preventDefault();
    await UserSignUp(signUser, setIsLoggedIn, sendMessage, navigate);
    setSignUser({
      email: "",
      username: "",
      password: "",
      number: "",
    });
  };

  const handleSignUpClick = () => {
    setIsSignUpMode(true); //login page btn menu
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };
  // console.log(id.length);
  return (
    <div className={`loginContainer ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        {context}
        {/* Signin Page */}
        <div className="signin-signup">
          <form action="#" className="sign-in-form loginForm">
            <h2 className="title">Sign in</h2>

            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                name="email"
                value={user.email}
                onChange={onloadSignin}
                type="email"
                placeholder="Email ID"
              />
            </div>

            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="password"
                value={user.password}
                name="password"
                onChange={onloadSignin}
                placeholder="Password"
              />
            </div>

            <button className="btn" onClick={handlesignIn}>
              Sign In
            </button>

            <p className="social-text loginp"> or Sign in with </p>

            <div className="social-media">
              <a href="#!" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className="my-auto mx-auto" />
              </a>

              <a href="#!" className="social-icon">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="my-auto mx-auto"
                />
              </a>
            </div>
          </form>

          <form action="#" className="sign-up-form loginForm">
            {/* Sign Up Page */}

            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                name="username"
                value={signUser.username}
                onChange={onloadSignUp}
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="email"
                name="email"
                value={signUser.email}
                onChange={onloadSignUp}
                placeholder="Email"
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />

              <input
                className="LoginInput"
                type="phone"
                name="number"
                value={signUser.number}
                onChange={onloadSignUp}
                placeholder="Phone number"
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                name="password"
                value={signUser.password}
                onChange={onloadSignUp}
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="btn" onClick={handleSignUp}>
              Sign Up
            </button>
            <p className="social-text loginp">Or Sign up with</p>
            <div className="social-media">
              <a href="#!" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className="my-auto mx-auto" />
              </a>

              <a href="#!" className="social-icon">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="my-auto mx-auto"
                />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="loginh3">
              New {name ? <span>{name}</span> : <span>user</span>} ?
            </h3>

            <p className="loginp">
              Hairfinder, your one stop solution for Grooming
            </p>

            <button
              className="btn transparent text-white"
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
          </div>

          <img src={logo} className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3 className="loginh3">Already Registered ?</h3>

            <p className="loginp">
              Hairfinder, your one stop solution for Grooming
            </p>

            <button
              onClick={handleSignInClick}
              className="btn transparent text-white"
              id="sign-in-btn"
            >
              Sign in
            </button>
          </div>

          <img src={logo} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

// export
