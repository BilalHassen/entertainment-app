import React from "react";
import { useState } from "react";
import AuthForm from "@components/AuthForm/AuthForm";

function Auth() {
  const [isUser, setIsUser] = useState(true);
  return (
    <main className="auth">
      <AuthForm isUser={isUser} />
    </main>
  );
}

export default Auth;
