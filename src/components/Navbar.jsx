import { useState } from "react";
import SearchBar from "./SearchBar";
import "./Navbar.css";
import {
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaRegClock,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar({ showSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">BYHOURS</div>
        <div
          className={`search-wrapper navbar-search ${
            showSearch ? "visible" : "hidden"
          }`}
        >
          <SearchBar scrolled={showSearch} />
        </div>
        {/* Hamburger Icon */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Nav links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <FaMapMarkerAlt /> Destinations
          </li>
          <li>
            <FaRegClock /> How does it work?
          </li>
          <li>
            <FaQuestionCircle /> Help
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
