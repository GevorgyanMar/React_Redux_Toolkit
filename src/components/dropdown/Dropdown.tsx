import React from "react";
import "./style.scss";

type Option = {
  id: number;
  name: string;
};

type DropdownProps = {
  options: Option[];
  selectedOption: number | null;
  onSelectChange: (optionId: number) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onSelectChange,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    onSelectChange(value);
  };

  return (
    <div className="dropdown-container">
      <select
        id="dropdown"
        value={selectedOption || ""}
        onChange={handleSelectChange}
        className="dropdown-select"
      >
        <option value="">Select...</option>
        {options?.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
