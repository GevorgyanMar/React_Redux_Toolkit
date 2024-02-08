import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../toolkit/loginSlices/loginReducer";
import { isLoginSelector } from "../../toolkit/loginSlices/loginSelector";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const isLogin = useSelector(isLoginSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    dispatch(loginUser({ email, password }));
    if (isLogin) {
      navigate("./Home");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
