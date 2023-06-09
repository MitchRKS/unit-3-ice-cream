import React, { useState } from "react";
import styles from "./AuthPage.module.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>
          {showLogin
            ? "Already a member? LOG IN"
            : "New to our website? SIGN UP"}
        </h3>
        {showLogin ? (
          <LoginForm setUser={setUser} />
          
        ) : (
          <SignUpForm setUser={setUser} />
        )}
      </div>
      {/* {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )} */}
    </main>
  );
}
