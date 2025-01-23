import React, { useEffect } from "react";
import "./AuthForm.scss";
import { useState } from "react";

function AuthForm({ isUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleForm = (e) => {
    const { name } = e.target;
    if (isUser) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: e.target.value,
      }));
    } else {
      setLoginFormData((prevData) => ({
        ...prevData,
        [name]: e.target.value,
      }));
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <form className="authForm">
      <h1 className="authForm__title">{isUser ? "Login" : "Sign up"}</h1>

      {/* Email Field */}
      <div className="authForm__email-box">
        <input
          className="authForm__email"
          type="email"
          id="email"
          name="email"
          aria-label="Email"
          placeholder="Email"
          value={formData.email}
          required
          onChange={handleForm}
        />
      </div>

      {/* Password Field */}
      <div className="authForm__password-box">
        <input
          className="authForm__password"
          type="password"
          name="password"
          id="password"
          aria-label="Password"
          placeholder="Password"
          value={formData.password}
          onChange={handleForm}
          required
        />
      </div>

      {/* Repeat Password Field */}
      {!isUser && (
        <div className="authForm__repassword-box">
          <input
            className="authForm__repassword"
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            aria-label="Repeat Password"
            placeholder="Repeat Password"
            value={loginFormData.repeatPassword}
            onChange={handleForm}
            required
          />
        </div>
      )}

      {/* Submit Button */}
      <button className="authForm__button" type="submit">
        Register
      </button>
    </form>
  );
}

export default AuthForm;
