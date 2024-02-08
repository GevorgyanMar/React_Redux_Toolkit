import React, { useState } from "react";

interface InputProps {
  onInputChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onInputChange(newValue);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter value..."
      />
    </div>
  );
};

export default Input;
