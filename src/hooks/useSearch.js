import { useState } from "react";

const useSearch = () => {
  const [searchInput, setSearchInput] = useState("");

  // function to filter shows based on search input
  const handleSearch = ({ target }) => {
    setSearchInput(target.value);
  };

  return { searchInput, handleSearch };
};

export default useSearch;
