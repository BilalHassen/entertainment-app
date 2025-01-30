import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
function SignUp() {
  return (
    <div className="auth-wrapper">
      <main className="auth">
        <AuthForm isUser={true} />
      </main>
    </div>
  );
}

export default SignUp;
