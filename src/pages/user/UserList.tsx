import React, { FC, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import Table from "../../components/table/Table";
import { userDataSelector } from "../../toolkit/userSlices/userSelector";
import { deleteUser } from "../../toolkit/userSlices/controller";
import { useAppDispatch } from "../../toolkit/store";
import Button from "../../components/button/Button";
import "./style.scss";

const UserList: FC = () => {
  const dispatch = useAppDispatch();
  const [showAddUserForm, setAddShowUserForm] = useState(false);
  const [showEditUserForm, setShowEditUserForm] = useState();
  const users = useSelector(userDataSelector);

  const columns = [
    { key: "id", header: "ID" },
    { key: "name", header: "name" },
    { key: "phone", header: "phone" },
    { key: "email", header: "email" },
    { key: "edit", header: "Edit" },
    { key: "delete", header: "Delete" },
  ];

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };

  const renderEditButton = (row: any) => (
    <button onClick={() => setShowEditUserForm(row)}>Edit</button>
  );

  const renderDeleteButton = (id: number) => (
    <button onClick={() => handleDelete(id)}>Delete</button>
  );

  const renderData = (data: any[]) => {
    return data.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      edit: renderEditButton(user),
      delete: renderDeleteButton(user.id),
    }));
  };

  return (
    <div className="user-block">
      <Button onClick={() => setAddShowUserForm(true)} label="Create user" />

      <Table columns={columns} data={renderData(users)} />

      {showAddUserForm ? (
        <AddUser onClose={() => setAddShowUserForm(false)} />
      ) : null}
      {showEditUserForm ? (
        <EditUser
          //onClose={() => setShowEditUserForm()}
          initialValue={showEditUserForm}
        />
      ) : null}
    </div>
  );
};

export default UserList;
