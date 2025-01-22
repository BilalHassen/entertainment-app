import React from "react";
import "./AuthForm.scss";

function AuthForm({ isUser }) {
  return (
    <form className="authform">
      <h1 className="authform__title">{isUser ? "Login" : " Sign up"}</h1>
      {/* Email Field */}
      <div>
        <label className="authform__email-label" htmlFor="email">
          Email
        </label>
        <input
          className="authform__email"
          type="email"
          id="email"
          value=""
          required
        />
      </div>

      {/* Password Field */}
      <div>
        <label className="authform__passowrd-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="authform__password"
          value=""
          required
        />
      </div>

      {/* Repeat Password Field */}
      <div>
        <label className="authform__repassowrd-label" htmlFor="repeatPassword">
          Repeat Password
        </label>
        <input
          className="authform__repassowrd"
          type="password"
          id="repeatPassword"
          value=""
          required
        />
      </div>

      {/* Submit Button */}
      <button className="authform__button" type="submit">
        Register
      </button>
    </form>
  );
}

export default AuthForm;
