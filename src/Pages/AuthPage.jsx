import React from "react";

export default function AuthPage() {
  return (
    <div>
      <h1>Login / Sign Up</h1>
      <div className="authSection">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          value=""
          placeholder="username"
        ></input>
      </div>
      <div class="pwdSection">
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
      </div>
    </div>
  );
}
