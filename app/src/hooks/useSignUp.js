import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";

export const useAuthForm = (isUser, url) => {
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

    console.log(isErrors);
    setFormError(isErrors);
    return isErrors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    handleFormValidation();

    try {
      const response = await axios({
        method: "post",
        url: url,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: formData.email,
          password: formData.password,
        },
      });

      const userResponse = response.data;

      localStorage.setItem("user", JSON.stringify(userResponse));
      console.log(response.data);
      dispatch({ type: "LOGIN", payload: userResponse });
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formError]);

  return {
    formData,
    formError,
    error,
    isLoading,
    handleForm,
    handleFormSubmit,
  };
};
