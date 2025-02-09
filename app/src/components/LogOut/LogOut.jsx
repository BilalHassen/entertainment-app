import React, { useState } from "react";
import { useLogOut } from "../../hooks/useLogOut";
import "./LogOut.scss";
import { useNavigate } from "react-router-dom";

export default function LogOut({ closeModal }) {
  // get the logout function from the useLogOut hook
  const { logout } = useLogOut();

  const navigate = useNavigate();

  // add a eventhandler to toggle the logout functionality
  const handleLogOut = () => {
    logout();
    closeModal();
    navigate("/signin");
  };

  return (
    <div className="logout">
      <h1 className="logout__title">Logout</h1>
      <p className="logout__info">Are you sure you want to logout</p>

      <div className="logout__buttons">
        <button className="logout__btn" onClick={handleLogOut}>
          Sign out
        </button>
        <button onClick={closeModal} className="logout__cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  );
}
