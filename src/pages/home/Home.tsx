import React, { FC } from "react";
import Chat from "../../components/chat/Chat";
import Menu from "../../components/menu/Menu";
import { logoutUser } from "../../toolkit/authSlice/authReducer";
import Button from "../../components/button/Button";
import { useAppDispatch } from "../../toolkit/store";
import { useNavigate } from "react-router-dom";

type Pros = {
  children: React.ReactNode;
};
//<Pros>
const Home: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div>
      <Chat />
      <Button onClick={logOut} label="Log out" />
    </div>
  );
};

export default Home;
