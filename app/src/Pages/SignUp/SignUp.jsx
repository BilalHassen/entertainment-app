import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../hooks/useAuthContext";
function SignUp() {
  const { user } = useAuthContext();
  console.log(user);

  return (
    <div className="auth-wrapper">
      <main className="auth">
        <AuthForm url={"http://localhost:3000/user/signup"} />
      </main>
    </div>
  );
}

export default SignUp;
