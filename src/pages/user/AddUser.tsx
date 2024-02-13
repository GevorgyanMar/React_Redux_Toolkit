import React, { FC } from "react";
import TodoForm from "./UserForm";
import { useAppDispatch } from "../../toolkit/store";
import { addUser } from "../../toolkit/userSlices/controller";

const AddUser: FC<{ onClose: VoidFunction }> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const initialValue = {
    id: Math.floor(Math.random()),
    name: "",
    email: "",
    phone: "",
  };

  const handleSubmit = (values: any) => {
    dispatch(addUser(values));
    onClose();
  };

  return <TodoForm initialValue={initialValue} handleSubmit={handleSubmit} />;
};

export default AddUser;
