import React, { FC, useEffect } from "react";
import UserList from "./UserList";
import "./style.scss";
import { useAppDispatch } from "../../toolkit/store";
import { fetchUsers } from "../../toolkit/userSlices/controller";
const User: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <UserList />
    </div>
  );
};

export default User;
