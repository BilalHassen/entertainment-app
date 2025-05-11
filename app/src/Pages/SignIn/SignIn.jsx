import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";

function SignIn() {
  return (
    <div className="auth-wrapper">
      <main className="auth">
        <AuthForm url={"http://localhost:3000/user/signin"} />
      </main>
    </div>
  );
}
export default SignIn;
