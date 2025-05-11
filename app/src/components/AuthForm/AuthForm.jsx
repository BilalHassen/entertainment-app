import React, { useEffect, useState } from "react";
import "./AuthForm.scss";
import { useAuthForm } from "../../hooks/useAuthForm";
import { Link, useLocation } from "react-router-dom";

function AuthForm({ url }) {
  const [isUser, setUser] = useState(undefined);

  const {
    formData,
    formError,
    error,
    isLoading,
    handleForm,
    handleFormSubmit,
  } = useAuthForm(isUser, url);

  const location = useLocation();

  useEffect(() => {
    setUser(location.pathname !== "/signup");
  }, [location.pathname]);

  return (
    <form className="authForm" onSubmit={handleFormSubmit}>
      <h1 className="authForm__title">{isUser ? "Login" : "Sign Up"}</h1>
      {error && (
  <h1 className="authForm__existing-user-err" role="alert" aria-live="assertive">
    {error}
  </h1>
)}

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
        <p className={formError.email ? "authForm__error" : "no-err"}>
          {formError.email}
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
        <p className={formError.password ? "authForm__error" : "no-err"}>
          {formError.password}
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
          <p
            className={formError.repeatPassword ? "authForm__error" : "no-err"}
          >
            {formError.repeatPassword}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <div className="authForm__button-wrapper">
      <button className="authForm__button" type="submit" disabled={isLoading}>
  {isLoading ? "Loading..." : isUser ? "Login" : "Create an account"}
</button>

        {!isUser ? (
          <p className="authForm__text">
            Already have an account?{" "}
            <Link to="/signin">
              <span className="red">Login</span>
            </Link>
          </p>
        ) : (
          <p className="authForm__text">
            Don't have an account?{" "}
            <Link to="/signup">
              <span className="red">Signup</span>
            </Link>
          </p>
        )}
      </div>
    </form>
  );
}

export default AuthForm;
