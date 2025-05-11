import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";

function SignUp() {
  return (
    <div className="auth-wrapper">
      <main className="auth">
        <AuthForm url={"http://localhost:3000/user/signup"} />
      </main>
    </div>
  );
}

export default SignUp;
