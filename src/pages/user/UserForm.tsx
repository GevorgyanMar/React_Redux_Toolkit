import React, { FormEvent, useState } from "react";
import Modal from "../../components/modal/Modal";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

type userFormProps = {
  handleSubmit: (values: userType) => void;
  initialValue: userType;
  btnText?: string;
};

export type userType = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

const UserForm: React.FC<userFormProps> = ({
  initialValue,
  handleSubmit,
  btnText = "Add",
}) => {
  const [inputValue, setInputValue] = useState<userType>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(inputValue);
  };

  return (
    <Modal className="user-form-wrap">
      <form onSubmit={handleFormSubmit}>
        <Input
          className="form-filed"
          placeholder="Enter your Name..."
          name="name"
          value={inputValue.name}
          onChange={() => handleChange}
        />

        <Input
          className="form-filed"
          type="email"
          placeholder="Enter your email..."
          name="email"
          value={inputValue.email}
          onChange={() => handleChange}
        />

        <Input
          className="form-filed"
          type="tel"
          placeholder="Enter your phone..."
          name="phone"
          value={inputValue.phone}
          onChange={() => handleChange}
        />

        <Button onClick={() => handleFormSubmit} label={`${btnText} User `} />
      </form>
    </Modal>
  );
};

export default UserForm;
