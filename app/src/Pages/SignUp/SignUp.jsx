import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
function SignUp() {
  return (
    <div className="auth-wrapper">
      <main className="auth">
        <AuthForm isUser={false} url={"http://localhost:3000/user/signup"} />
      </main>
    </div>
  );
}

export default SignUp;
