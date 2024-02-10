import React, { FormEvent, useState } from "react";
import Modal from "../../components/modal/Modal";

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
    <Modal>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter your Name..."
            name="name"
            value={inputValue.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your email..."
            name="email"
            value={inputValue.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Enter your phone..."
            name="phone"
            value={inputValue.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{btnText} User</button>
      </form>
    </Modal>
  );
};

export default UserForm;
