import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import Styles from "./Authpage.module.scss";

export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="authSection">
      <h1>Login / Sign Up</h1>
      <div class="unameInp">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          value=""
          placeholder="username"
        ></input>
      </div>
      <div class="pwdInp">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          value=""
          placeholder="password"
        ></input>
      </div>
      <div>
        <button>Submit</button>
        <button>Sign me up!</button>
      </div>
    </div>
  );
}
