import React, { FormEvent, FC, ChangeEvent } from "react";

type SearchBarProps = {
  onSearch: (city: string) => void;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: FC<SearchBarProps> = ({ city, setCity, onSearch }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(city);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Enter city name"
        aria-label="City Name"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
