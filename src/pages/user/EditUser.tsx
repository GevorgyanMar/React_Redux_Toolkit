import React, { FC } from "react";
import UserForm, { userType } from "./UserForm";
import { useAppDispatch } from "../../toolkit/store";
import { updateUser } from "../../toolkit/userSlices/controller";

interface EditUserProps {
  //  onClose: VoidFunction;
  initialValue: userType;
}

const EditUser: FC<EditUserProps> = ({ initialValue }) => {
  const dispatch = useAppDispatch();
  const handleSubmit = (values: any) => {
    dispatch(updateUser(values));
    // onClose()
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
