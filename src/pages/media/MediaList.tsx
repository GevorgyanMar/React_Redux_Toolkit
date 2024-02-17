import React, { useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";

const MediaList = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectChange = (optionId: number) => {
    setSelectedOption(optionId);
  };
  return (
    <div>
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onSelectChange={handleSelectChange}
      />
    </div>
  );
};

export default MediaList;
