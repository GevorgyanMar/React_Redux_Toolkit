import React, { FC } from "react";
import UserForm, { userType } from "./UserForm";
import { useAppDispatch } from "../../toolkit/store";
import { updateUser } from "../../toolkit/userSlices/controller";

interface EditUserProps {
  closeForm: (arg: any) => void;
  initialValue: userType;
}

const EditUser: FC<EditUserProps> = ({ closeForm, initialValue }) => {
  const dispatch = useAppDispatch();
  const handleSubmit = (values: any) => {
    dispatch(updateUser(values));
    //closeForm(false);
  };

  return (
    <UserForm
      btnText="Edit"
      initialValue={initialValue}
      handleSubmit={handleSubmit}
    />
  );
};

export default EditUser;
