import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { loginUser } from "../../toolkit/authSlice/controller";
import { selectError } from "../../toolkit/authSlice/authSelector";
import { useAppDispatch } from "../../toolkit/store";
import { Auth } from "../../toolkit/authSlice/type";

const Login: FC = () => {
  const error = useSelector(selectError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please enter both email and password.");
      return;
    }
    const userData = {
      username,
      password,
    } as Auth;

    try {
      await dispatch(loginUser(userData));
      navigate("./Home");
    } catch (error) {
      alert("Something wrong");
    }
  };
  return (
    <div className="login-form">
      <div className="login-form-content">
        <h2>Login</h2>
        <div>
          <label>Email:</label>
          <Input name="username" value={username} onChange={setUsername} />
        </div>
        <div>
          <label>Password:</label>
          <Input
            name="password"
            type="password"
            value={password}
            onChange={setPassword}
          />
        </div>

        <Button onClick={handleLogin} label="Login" />
      </div>
    </div>
  );
};

export default Login;
