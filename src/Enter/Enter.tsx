import React, { FC, useState } from "react";
import Login from "../pages/login/Login";
import RegisterForm from "../pages/registerForm/RegisterForm";
import Button from "../components/button/Button";

const Enter: FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="Enter-block">
      {showLogin ? (
        <Login />
      ) : (
        <RegisterForm toggleForm={() => setShowLogin(!showLogin)} />
      )}
      <Button
        onClick={() => setShowLogin(!showLogin)}
        label={showLogin ? "Show Register" : "Show Login"}
      />
    </div>
  );
};

export default Enter;
