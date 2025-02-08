import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { use } from "react";
function SignIn() {
  const { user } = useAuthContext();

  return (
    <div className="auth-wrapper">
      <main className="auth">
        <AuthForm isUser={true} url={"http://localhost:3000/user/signin"} />
      </main>
    </div>
  );
}
export default SignIn;
