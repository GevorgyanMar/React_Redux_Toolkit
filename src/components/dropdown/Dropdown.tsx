import React from "react";
import "./style.scss";

type DropdownProps = {
  options: [];
  selectedOption: string | null;
  onSelectChange: (optionId: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onSelectChange,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
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
        {options.map((option: any) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
