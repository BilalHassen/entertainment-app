import React, { useEffect } from "react";
import "./AuthForm.scss";
import { useState } from "react";
import { use } from "react";
import axios from "axios";

function AuthForm({ isUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState({});

  const handleForm = (e) => {
    // updating the form state
    const { name } = e.target;

    // maintain the previos state value
    // so other values in the object wont get lost
    // when updating certain parts
    setFormData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const handleFormValidation = (e) => {
    // object to hold error values
    const isErrors = {};

    const { email, password, repeatPassword } = formData;

    if (!email.trim()) {
      isErrors["email"] = "email is required";
    }

    if (!password.trim()) {
      isErrors["password"] = "password is required";
    } else if (password.length < 8) {
      isErrors["password"] = "password must be longer than 8 characters";
    }

    if (!isUser && repeatPassword.trim() !== password.trim()) {
      isErrors["repeatPassword"] = "passwords must match";
    }

    if (!isUser && !repeatPassword.trim()) {
      isErrors["repeatPassword"] = "passwords must match";
    }

    console.log(isErrors);
    setError(isErrors);
    return isErrors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    handleFormValidation();
  };

  useEffect(() => {
    console.log(formData);
  }, [error]);

  return (
    <form className="authForm" onSubmit={handleFormSubmit}>
      <h1 className="authForm__title">{isUser ? "Login" : "Sign Up"}</h1>

      {/* Email Field */}

      <div className="authForm__email-box">
        <input
          className="authForm__email"
          type="email"
          id="email"
          name="email"
          aria-label="Email"
          placeholder="Email"
          // set the state as the value so the element
          // will reflect the updated state value
          // two way binding
          value={formData.email}
          // detects change on element and also sets the value
          // of the element to the state value
          onChange={handleForm}
        />
        <p className={error.email ? "authForm__error" : "no-err"}>
          {error.email}
        </p>
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
        />
        <p className={error.password ? "authForm__error" : "no-err"}>
          {error.password}
        </p>
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
            value={formData.repeatPassword}
            onChange={handleForm}
          />
          <p className={error.repeatPassword ? "authForm__error" : "no-err"}>
            {error.repeatPassword}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <div className="authForm__button-wrapper">
        <button className="authForm__button" type="submit">
          Create an account
        </button>
        <p className="authForm__text">
          Already have an account? <span className="red">Login</span>
        </p>
      </div>
    </form>
  );
}

export default AuthForm;
