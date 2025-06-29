import SearchBar from "./SearchBar";
import "./Navbar.css";

function Navbar({ showSearch }) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">BYHOURS</div>
        <ul className="nav-links">
          <li>How it works</li>
          <li>Partners</li>
          <li>Help</li>
        </ul>
        <div
          className={`search-wrapper navbar-search ${
            showSearch ? "visible" : "hidden"
          }`}
        >
          <SearchBar scrolled={showSearch} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
