import React, { FC, useState } from "react";
import { useAppDispatch } from "../../toolkit/store";
import { registerUser } from "../../toolkit/authSlice/controller";
import { Auth } from "../../toolkit/authSlice/type";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

interface RegisterFormProps {
  toggleForm: () => void;
}

const RegisterForm: FC<RegisterFormProps> = ({ toggleForm }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !password) {
      setErrorMessage("Please enter both username and password");
      return;
    }
    const userData = {
      username,
      password,
    };

    try {
      await dispatch(registerUser(userData as Auth));
      toggleForm();
    } catch (error) {
      console.error("Error occurred while registering:", error);
    }
  };

  return (
    <div className="login-form">
      <div className="login-form-content">
        <h2>Register</h2>

        <div className="">
          <label>Username:</label>
          <Input name="username" value={username} onChange={setUsername} />
        </div>

        <div className="">
          <label>Password:</label>
          <Input
            name="password"
            type="password"
            value={password}
            onChange={setPassword}
          />
        </div>
        <Button label="Register" onClick={handleRegister} />
      </div>
    </div>
  );
};

export default RegisterForm;
