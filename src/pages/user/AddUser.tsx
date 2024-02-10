import React, { FC } from "react";
import TodoForm from "./UserForm";
import { useAppDispatch } from "../../toolkit/store";
import { addUser } from "../../toolkit/userSlices/controller";

const AddUser: FC<{ closeForm: (arg: boolean) => void }> = ({ closeForm }) => {
  const dispatch = useAppDispatch();
  const initialValue = {
    id: Math.floor(Math.random()),
    name: "",
    email: "",
    phone: "",
  };

  const handleSubmit = (values: any) => {
    dispatch(addUser(values));
    // closeForm(false);
  };

  return <TodoForm initialValue={initialValue} handleSubmit={handleSubmit} />;
};

export default AddUser;
