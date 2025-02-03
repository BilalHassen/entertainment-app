import React, { useState } from "react";
import "./LogOut.scss";

export default function LogOut({ closeModal }) {
  return (
    <div className="logout">
      <h1 className="logout__title">Logout</h1>
      <p className="logout__info">Are you sure you want to logout</p>

      <div className="logout__buttons">
        <button className="logout__btn">Sign out</button>
        <button onClick={closeModal} className="logout__cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  );
}
