import SearchBar from "./searchBar";

function NavBar({ onSearch }) {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          BookShlef
        </a>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default NavBar;
