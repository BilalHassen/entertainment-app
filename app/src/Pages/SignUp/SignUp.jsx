import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../hooks/useAuthContext";
function SignUp() {
  const { user } = useAuthContext();

  return (
    <div className="auth-wrapper">
      <main className="auth">
        <AuthForm isUser={false} url={"http://localhost:3000/user/signup"} />
      </main>
    </div>
  );
}

export default SignUp;
