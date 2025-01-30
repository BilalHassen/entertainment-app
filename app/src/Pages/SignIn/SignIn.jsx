import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";

function SignIn() {
  return (
    <div className="auth-wrapper">
      <main className="auth">
        <AuthForm isUser={false} />
      </main>
    </div>
  );
}
export default SignIn;
