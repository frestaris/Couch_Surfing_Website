import "./SearchBar.css";

function SearchBar({ scrolled }) {
  return (
    <div className={`search-bar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter destination"
          className="search-input"
        />
      </div>
      <div className="separator"></div>
      <div className="input-group">
        <input type="date" className="search-input" />
      </div>
      <button
        type="submit"
        aria-label="Search"
        className="search-submit-button"
      >
        <span className="label">Search</span>
      </button>
    </div>
  );
}

export default SearchBar;
