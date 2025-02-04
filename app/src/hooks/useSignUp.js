import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
export const useAuthForm = (isUser, url) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [formError, setFormError] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  // function to update the state in authContext
  const { dispatch } = useAuthContext();

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

    setFormError(isErrors);
    return isErrors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    handleFormValidation();

    try {
      // send post request
      const response = await axios.post(url, {
        // data for the form with post request

        email: formData.email,
        password: formData.password,
      });

      // store the response from the server
      const userResponse = response.data;
      // set the response jwt from the server in local storage
      localStorage.setItem("user", JSON.stringify(userResponse));
      // call the dispatch function to update the state of the authReducer
      // function
      dispatch({ type: "LOGIN", payload: userResponse });

      navigate("/");

      // catch any errors
    } catch (err) {
      // set the error message to alert user of error
      setError(err.response.data.message);
    }
  };

  return {
    formData,
    formError,
    error,
    isLoading,
    handleForm,
    handleFormSubmit,
  };
};
