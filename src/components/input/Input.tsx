import React, { useState } from "react";
import "./style.scss";
interface InputProps {
  onChange: (value: string) => void;
  type?: string;
  value: string | number;
  placeholder?: string;
  name: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  type = "text",
  placeholder = "Enter value...",
  name,
  className,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={`input-container ${className}`}>
      <input
        type={type}
        name={name}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
