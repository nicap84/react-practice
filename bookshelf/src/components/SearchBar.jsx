import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Search term: ", searchTerm);
    onSearch(searchTerm);
    setSearchTerm("");
  }

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        className="form-control me-1"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for books"
      />
    </form>
  );
}

export default SearchBar;
